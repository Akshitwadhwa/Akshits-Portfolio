export interface ButtonVariant {
  variant: 'red' | 'blue' | 'green' | 'gray';
  icon: string;
  text: string;
  href?: string;
  action?: () => void;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export interface PortfolioConfig {
  name: string;
  description: string;
  buttons: ButtonVariant[];
  particleCount: number;
}