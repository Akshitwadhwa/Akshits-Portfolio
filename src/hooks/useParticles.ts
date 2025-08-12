import { useEffect, useRef } from 'react';
import { Particle } from '@/types/portfolio';

export const useParticles = (count: number) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateParticle = (id: number): Particle => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 10,
  });

  const createParticleElement = (particle: Particle): HTMLDivElement => {
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
    return element;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: Particle[] = Array.from({ length: count }, (_, i) => 
      generateParticle(i)
    );

    const elements = particles.map(createParticleElement);
    elements.forEach(element => container.appendChild(element));

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [count]);

  return containerRef;
};