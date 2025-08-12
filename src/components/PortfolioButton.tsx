import React from 'react';

interface PortfolioButtonProps {
  variant: 'red' | 'blue' | 'green' | 'gray';
  icon: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const PortfolioButton: React.FC<PortfolioButtonProps> = ({
  variant,
  icon,
  children,
  href = "#",
  onClick
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'red':
        return 'btn-portfolio-red';
      case 'blue':
        return 'btn-portfolio-blue';
      case 'green':
        return 'btn-portfolio-green';
      case 'gray':
        return 'btn-portfolio-gray';
      default:
        return 'btn-portfolio-red';
    }
  };

  const Component = href !== "#" ? 'a' : 'button';

  return (
    <Component
      className={getVariantClass()}
      href={href !== "#" ? href : undefined}
      onClick={onClick}
      role={href === "#" ? "button" : undefined}
    >
      <span className="material-icons">{icon}</span>
      {children}
    </Component>
  );
};

export default PortfolioButton;