import { useParticles } from '@/hooks/useParticles';

interface ParticleBackgroundProps {
  count?: number;
}

const ParticleBackground = ({ count = 50 }: ParticleBackgroundProps) => {
  const containerRef = useParticles(count);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;