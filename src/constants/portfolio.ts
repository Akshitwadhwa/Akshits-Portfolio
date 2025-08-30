import { PortfolioConfig } from '@/types/portfolio';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: "Akshit Wadhwa",
  description: "DevOps engineer with a passion for Machine Learning and Gen-AI. Building projects that bring a change to everyday life using full stack development",
  particleCount: 50,
  buttons: [
    {
      variant: 'red',
      icon: 'work',
      text: 'View My Work'
    },
    {
      variant: 'green', 
      icon: 'download',
      text: 'Download Resume'
    },
    
    {
      variant: 'gray',
      icon: 'email',
      text: 'Contact Me'
    }
  ]
};

export const ANIMATION_DELAYS = {
  TITLE: '0.2s',
  DESCRIPTION: '0.4s', 
  BUTTONS: '0.6s'
} as const;