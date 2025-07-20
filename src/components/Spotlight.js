import React, { useEffect, useRef, useState } from 'react';

/**
 * Exact clone of the spotlight effect from brittanychiang.com.
 * Large, soft, blue/cyan radial gradient with strong blur and smooth lerp movement.
 */
const Spotlight = () => {
  const [pos, setPos] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  const target = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  const animationRef = useRef();

  // Update target position on pointer move
  useEffect(() => {
    const handlePointerMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Lerp animation loop
  useEffect(() => {
    const lerp = (a, b, n) => a + (b - a) * n;
    const animate = () => {
      setPos(prev => {
        const x = lerp(prev.x, target.current.x, 0.18);
        const y = lerp(prev.y, target.current.y, 0.18);
        return { x, y };
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const size = 480; // px, matches brittanychiang.com
  const style = {
    transform: `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`,
    width: size,
    height: size,
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 50,
    borderRadius: '9999px',
    background: 'var(--spotlight-color)',
    filter: 'blur(80px)',
    mixBlendMode: 'var(--spotlight-blend-mode, normal)',
    opacity: 0.7,
    willChange: 'transform',
    transition: 'none',
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-50"
      style={style}
    />
  );
};

export default Spotlight; 