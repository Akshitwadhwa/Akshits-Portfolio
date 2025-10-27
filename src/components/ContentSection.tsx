import { useNavigate } from 'react-router-dom';
import PortfolioButton from './PortfolioButton';
import { ButtonVariant } from '@/types/portfolio';

interface ContentSectionProps {
  name: string;
  description: string;
  buttons: ButtonVariant[];
}

const ContentSection = ({ name, description, buttons }: ContentSectionProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (button: ButtonVariant) => {
    // Handle navigation for "View My Work" button
    if (button.text === 'View My Work') {
      navigate('/work');
    } else if (button.action) {
      button.action();
    }
  };

  return (
    <div className="text-center md:text-left max-w-lg animate-slide-in-right">
      <h1 className="hero-title animate-fade-in-delayed-1">
        {name}
      </h1>
      
      <p className="hero-description animate-fade-in-delayed-2">
        {description}
      </p>

      <div className="flex flex-col space-y-4 animate-fade-in-delayed-3">
        {buttons.map((button, index) => (
          <PortfolioButton
            key={`${button.variant}-${index}`}
            variant={button.variant}
            icon={button.icon}
            href={button.href}
            action={() => handleButtonClick(button)}
          >
            {button.text}
          </PortfolioButton>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;