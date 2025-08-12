import ParticleBackground from '@/components/ParticleBackground';
import ProfileSection from '@/components/ProfileSection';
import ContentSection from '@/components/ContentSection';
import { PORTFOLIO_CONFIG } from '@/constants/portfolio';

const Index = () => {
  const { name, description, buttons, particleCount } = PORTFOLIO_CONFIG;

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative">
      <ParticleBackground count={particleCount} />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        <ProfileSection name={name} />
        <ContentSection 
          name={name}
          description={description}
          buttons={buttons}
        />
      </div>
    </main>
  );
};

export default Index;
