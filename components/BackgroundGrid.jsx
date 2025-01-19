'use client';
import { useState, useEffect } from 'react';

const BackgroundGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse coordinates relative to viewport
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      {/* Glow effect that follows mouse */}
      <div 
        className="pointer-events-none absolute w-[200px] h-[200px] blur-[100px] rounded-full bg-ubuntu/20 transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y - 100}px`
        }}
      />

      {/* Main grid container */}
      <div className="absolute inset-0">
        {/* Grid lines remain the same but with higher base opacity */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(255, 255, 255, 0.15) 49px,
              rgba(255, 255, 255, 0.15) 50px
            )`,
            backgroundSize: '100% 50px'
          }}
        />
        
        {/* Other grid lines remain the same... */}
        {/* Add mix-blend-mode for better glow interaction */}
        <div 
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(255, 255, 255, 0.15) 49px,
              rgba(255, 255, 255, 0.15) 50px
            )`,
            backgroundSize: '50px 100%'
          }}
        />
        
        {/* Ubuntu orange lines with increased opacity around mouse */}
        <div 
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 249px,
              rgba(233, 84, 32, 0.2) 249px,
              rgba(233, 84, 32, 0.2) 250px
            )`,
            backgroundSize: '100% 250px'
          }}
        />
        
        <div 
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 249px,
              rgba(233, 84, 32, 0.2) 249px,
              rgba(233, 84, 32, 0.2) 250px
            )`,
            backgroundSize: '250px 100%'
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundGrid;
