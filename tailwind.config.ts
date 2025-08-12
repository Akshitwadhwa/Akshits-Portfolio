import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Portfolio Colors
				'portfolio-red': 'hsl(var(--portfolio-red))',
				'portfolio-blue': 'hsl(var(--portfolio-blue))',
				'portfolio-green': 'hsl(var(--portfolio-green))',
				'portfolio-gray': 'hsl(var(--portfolio-gray))',
				'portfolio-white': 'hsl(var(--portfolio-white))',
				
				// Text Colors
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--text-secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': { 
						transform: 'translateX(-100px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%': { 
						transform: 'translateY(0) translateX(0)',
						opacity: '1'
					},
					'50%': { 
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateY(-100vh) translateX(20vw)',
						opacity: '0'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 1s ease-in-out',
				'fade-in-delayed-1': 'fade-in 1s ease-in-out 0.2s both',
				'fade-in-delayed-2': 'fade-in 1s ease-in-out 0.4s both',
				'fade-in-delayed-3': 'fade-in 1s ease-in-out 0.6s both',
				'slide-in-left': 'slide-in-left 1s ease-in-out',
				'slide-in-right': 'slide-in-right 1s ease-in-out',
				'spin-slow': 'spin-slow 10s linear infinite',
				'float': 'float 20s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
