'use client';
import { useState, useEffect } from 'react';

const BackgroundGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      {/* Main grid container with enhanced effects */}
      <div className="absolute inset-0">
        {/* Primary grid pattern */}
        <div 
          className="absolute inset-0 opacity-70 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Secondary larger grid pattern */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(233, 84, 32, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(233, 84, 32, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '250px 250px'
          }}
        />

        {/* Radial gradient overlay for depth */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 50% 50%,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 100%
              )
            `
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundGrid;
