import React, { useEffect, useRef } from 'react';
import { motion, useSpring, frame } from 'framer-motion';

const ErrorPageGame = ({ containerRef }) => {
  const ballRef = useRef(null);
  const { x, y } = useFollowPointerWithin(containerRef, ballRef);

  return (
    <motion.div
      ref={ballRef}
      className="absolute"
      style={{ ...ballStyle, x, y }}
    />
  );
};

const spring = {
  damping: 3,
  stiffness: 50,
  restDelta: 0.001,
};

function useFollowPointerWithin(containerRef, ballRef) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!containerRef.current || !ballRef.current) return;

    const container = containerRef.current;
    const ball = ballRef.current;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const ballRect = ball.getBoundingClientRect();

      const relativeX = e.clientX - rect.left - ballRect.width / 2;
      const relativeY = e.clientY - rect.top - ballRect.height / 2;

      const maxX = rect.width - ballRect.width;
      const maxY = rect.height - ballRect.height;

      const clampedX = Math.max(0, Math.min(relativeX, maxX));
      const clampedY = Math.max(0, Math.min(relativeY, maxY));

      frame.read(() => {
        x.set(clampedX);
        y.set(clampedY);
      });
    };

    container.addEventListener('pointermove', handlePointerMove);
    return () => container.removeEventListener('pointermove', handlePointerMove);
  }, [containerRef, ballRef]);

  return { x, y };
}

const ballStyle = {
  width: 80,
  height: 80,
  backgroundColor: '#ff0088',
  borderRadius: '50%',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 10, 0.25)', 
  cursor: 'pointer'
};

export default ErrorPageGame;


