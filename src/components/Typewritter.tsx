import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';


const TypewriterEffect: React.FC = () => {
  const typewriterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      // Create a Typewriter instance
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
      });

      typewriter
        .pauseFor(400)
        .typeString('A Web Developer')
        .pauseFor(500)
        .deleteChars(14) // Deletes "A Web Developer"
        .typeString(' Web Designer')
        .pauseFor(500)
        .deleteChars(12) // Deletes "Web Designer"
        .typeString(' Full Stack Developer')
        .pauseFor(1000)
        .deleteChars(23) // Deletes "Full Stack Developer"
        .start();
    }
  }, []);

  return <h2 ref={typewriterRef} className="text-2xl poppins-regular mb-2"></h2>;
};

export default TypewriterEffect;
