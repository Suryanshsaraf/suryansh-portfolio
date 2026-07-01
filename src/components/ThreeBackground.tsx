import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ y: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030014, 0.015);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 220;
    camera.position.y = 80;
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x030014, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Generate circular particle texture programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Create radial gradient for a soft glowing circle
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(168, 85, 247, 0.8)'); // Purple glow
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.3)');  // Indigo outer
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // Particles Geometry
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const randomScales = new Float32Array(particleCount);

    // Arrange particles in a 3D landscape structure
    const cols = 50;
    const rows = 40;
    const spacingX = 12;
    const spacingZ = 12;
    
    let index = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (index >= particleCount) break;
        
        // Grid position centered
        const x = (i - cols / 2) * spacingX;
        const z = (j - rows / 2) * spacingZ;
        const y = Math.sin(i * 0.15) * Math.cos(j * 0.15) * 15;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        initialPositions[index * 3] = x;
        initialPositions[index * 3 + 1] = y;
        initialPositions[index * 3 + 2] = z;

        randomScales[index] = Math.random() * 0.6 + 0.4;
        index++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: 5,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Points
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Extra floating stars in background
    const starCount = 300;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 400 + 100;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 800;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lighting (Subtle ambient)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse Move Listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.05;
    };

    // Scroll Listener
    const handleScroll = () => {
      scrollRef.current.targetY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const positionsArray = positionsAttr.array as Float32Array;

      // Smooth mouse follow (easing)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Smooth scroll follow
      scrollRef.current.y += (scrollRef.current.targetY - scrollRef.current.y) * 0.08;

      // Animate wave particles
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3;
        const yIdx = i * 3 + 1;
        const zIdx = i * 3 + 2;

        const ix = initialPositions[xIdx];
        const iz = initialPositions[zIdx];

        // Combine wave equations based on time, distance, and coordinates
        let newY = Math.sin(ix * 0.03 + time * 1.2) * Math.cos(iz * 0.03 + time * 0.8) * 16;
        
        // Add second higher frequency wave
        newY += Math.sin(ix * 0.08 - time * 0.6) * 5;

        // Mouse influence: ripple when mouse is active
        const dx = ix - mouseRef.current.x * 2;
        const dz = iz - mouseRef.current.y * 2;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < 80) {
          const force = (1 - dist / 80) * 12;
          newY += Math.sin(dist * 0.1 - time * 4) * force;
        }

        positionsArray[yIdx] = newY;
      }

      positionsAttr.needsUpdate = true;

      // Rotate particle landscape slightly based on mouse
      particles.rotation.y = time * 0.02 + mouseRef.current.x * 0.002;
      particles.rotation.x = mouseRef.current.y * 0.001;

      // Camera parallax scroll
      camera.position.y = 80 - scrollRef.current.y * 0.12;
      camera.position.z = 220 + scrollRef.current.y * 0.08;
      
      // Look slightly down as we scroll
      camera.lookAt(mouseRef.current.x * 0.2, -scrollRef.current.y * 0.05, 0);

      // Rotate background stars
      stars.rotation.y = time * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <div id="canvas-container" ref={containerRef} />;
};

export default ThreeBackground;
