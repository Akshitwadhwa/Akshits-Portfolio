import { PortfolioConfig } from '@/types/portfolio';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: "Akshit Wadhwa",
  description: "Bringing stories to life through compelling visuals, gimbal operations, and cinematic storytelling. Specializing in music videos, commercials, and professional photography. I am a developer with a passion for Machine Learning and AI.",
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