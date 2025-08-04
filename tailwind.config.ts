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
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				'display': ['Space Grotesk', 'Playfair Display', 'serif'],
				'body': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				'elegant': ['Playfair Display', 'serif'],
				'modern': ['Space Grotesk', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-vibrant': 'var(--gradient-vibrant)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'colorful': 'var(--shadow-colorful)',
				'rainbow': 'var(--shadow-rainbow)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.7'
					},
					'50%': {
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'colorful-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(210 100% 45% / 0.5)'
					},
					'25%': {
						boxShadow: '0 0 30px hsl(280 100% 65% / 0.6)'
					},
					'50%': {
						boxShadow: '0 0 25px hsl(168 100% 45% / 0.5)'
					},
					'75%': {
						boxShadow: '0 0 35px hsl(45 100% 55% / 0.6)'
					}
				},
				'rainbow-rotate': {
					'0%': {
						filter: 'hue-rotate(0deg)'
					},
					'100%': {
						filter: 'hue-rotate(360deg)'
					}
				},
				'float-colors': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) scale(1.05)',
						filter: 'hue-rotate(90deg)'
					},
					'50%': {
						transform: 'translateY(-5px) scale(1.02)',
						filter: 'hue-rotate(180deg)'
					},
					'75%': {
						transform: 'translateY(-15px) scale(1.03)',
						filter: 'hue-rotate(270deg)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'colorful-pulse': 'colorful-pulse 3s ease-in-out infinite',
				'rainbow-rotate': 'rainbow-rotate 4s linear infinite',
				'float-colors': 'float-colors 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
