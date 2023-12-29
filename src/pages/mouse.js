import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const backgroundColor = '#131D37';

const Spotlight = styled.div`
  pointer-events: none;
  position: fixed;
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.03) 50%, 
   rgba(255, 255, 255, 0.01) 70%, rgba(255, 255, 255, 0.001) 100%);
  mix-blend-mode: screen;
  transition: transform 0.1s ease-out, background-color 0.1s ease-out;
  transform-origin: center;
`;


const MouseSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Subtract half the width and height to center the spotlight
      setPosition({ x: e.clientX - 300, y: e.clientY - 200 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Spotlight style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />;
};

export default MouseSpotlight;
