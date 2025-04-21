import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
 
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      if (cursor && dot) {
        cursorX += (mouseX - cursorX) * 0.1; // Smooth follow effect
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', moveCursor);
    animateCursor();

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CustomCursor;