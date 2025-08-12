import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: Particle[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 10,
      });
    }

    // Render particles
    particles.forEach((particle) => {
      const element = document.createElement('div');
      element.className = 'particle';
      element.style.cssText = `
        width: ${particle.size}px;
        height: ${particle.size}px;
        top: ${particle.y}vh;
        left: ${particle.x}vw;
        animation-delay: ${particle.delay}s;
        animation-duration: ${particle.duration}s;
      `;
      container.appendChild(element);
    });

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;