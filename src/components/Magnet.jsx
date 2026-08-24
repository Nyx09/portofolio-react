import React, { useRef, useState, useEffect } from 'react';

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const magnetRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.hypot(distX, distY);
      const threshold = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < threshold) {
        setIsHovered(true);
        setPosition({
          x: distX / strength,
          y: distY / strength,
        });
      } else {
        if (isHovered) {
          setIsHovered(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('blur', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('blur', handleMouseLeaveWindow);
    };
  }, [padding, strength, isHovered]);

  return (
    <div
      ref={magnetRef}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
