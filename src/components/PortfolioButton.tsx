import { ButtonVariant } from '@/types/portfolio';

interface PortfolioButtonProps extends Omit<ButtonVariant, 'text'> {
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CLASSES = {
  red: 'btn-portfolio-red',
  blue: 'btn-portfolio-blue', 
  green: 'btn-portfolio-green',
  gray: 'btn-portfolio-gray',
} as const;

const PortfolioButton = ({ 
  variant, 
  icon, 
  children, 
  href = "#", 
  action,
  className = ""
}: PortfolioButtonProps) => {
  const variantClass = VARIANT_CLASSES[variant];
  const combinedClassName = `${variantClass} ${className}`.trim();
  
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      <span className="material-icons" aria-hidden="true">
        {icon}
      </span>
      {children}
    </>
  );

  if (href && href !== "#") {
    return (
      <a 
        href={href}
        className={combinedClassName}
        onClick={action ? handleClick : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      onClick={handleClick}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

export default PortfolioButton;