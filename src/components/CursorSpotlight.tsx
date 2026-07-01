import React, { useEffect, useRef, useState } from 'react';

const CursorSpotlight: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const { clientX: x, clientY: y } = e;

      // Small cursor dot follows mouse exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Outer ring follows mouse with slight lag
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      }

      // Background spotlight gradient tracks coordinates
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 80%)`;
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Setup hover listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .interactive-card, input, textarea, select'
      );

      interactiveElements.forEach((el) => {
        const handleMouseEnter = () => {
          setHovered(true);
          // Check if there is specific helper text for cursor
          const text = el.getAttribute('data-cursor-text');
          if (text) {
            setHoverText(text);
          }
        };

        const handleMouseLeave = () => {
          setHovered(false);
          setHoverText('');
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Run listeners initially
    addHoverListeners();

    // Use MutationObserver to wire up hover listeners to dynamically added content
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Background Spotlight illuminating dark sections */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 transition-transform duration-75 ease-out"
      />

      {/* Custom Cursor Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/0 transition-all duration-300 ease-out ${
          hovered
            ? 'h-16 w-16 border-cyan-300 bg-cyan-500/10 scale-110 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
            : 'h-8 w-8'
        }`}
      >
        {hovered && hoverText && (
          <span className="text-[9px] font-bold tracking-widest text-cyan-300 uppercase animate-fade-in font-mono">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
};

export default CursorSpotlight;
