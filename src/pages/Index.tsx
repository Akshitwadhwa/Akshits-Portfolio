import ParticleBackground from '@/components/ParticleBackground';
import PortfolioButton from '@/components/PortfolioButton';
import profileImage from '@/assets/akhit-profile.jpg';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <ParticleBackground />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        {/* Profile Image Section */}
        <div className="animate-slide-in-left">
          <div className="profile-container">
            <div className="profile-border-outer"></div>
            <div className="profile-border-inner"></div>
            <img 
              src={profileImage}
              alt="Akhit Wadhwa - Creative Developer and Filmmaker"
              className="profile-image"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left max-w-lg animate-slide-in-right">
          <h1 className="hero-title animate-fade-in-delayed-1">
            Akhit Wadhwa
          </h1>
          
          <p className="hero-description animate-fade-in-delayed-2">
            Bringing stories to life through compelling visuals, gimbal operations, and cinematic storytelling. 
            Specializing in music videos, commercials, and professional photography. I am a developer with a 
            passion for Machine Learning and AI.
          </p>

          <div className="flex flex-col space-y-4 animate-fade-in-delayed-3">
            <PortfolioButton variant="red" icon="work">
              View My Work
            </PortfolioButton>
            
            <PortfolioButton variant="green" icon="download">
              Download Resume
            </PortfolioButton>
            
            <PortfolioButton variant="blue" icon="description">
              Service Agreement
            </PortfolioButton>
            
            <PortfolioButton variant="gray" icon="email">
              Contact Me
            </PortfolioButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
