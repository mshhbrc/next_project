import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		boxShadow: {
			button: '0px 0px 4px 0px rgba(24, 101, 205, 0.20);',
			banner: '0px 0px 12px 0px rgba(136, 187, 255, 1);',
			faq: '0px 0px 6px 0px rgba(31, 118, 235, 0.22)',
			news: '0px 0px 4px 0px rgba(31, 118, 235, 0.2)',
			'registration-flow': '0px 0px 5px 0px rgba(31, 118, 235, 1)'
		},
		screens: {
			mobile: '640px',
			desktop: '1194px'
		},
		colors: {
			...require('tailwindcss/colors'),
			white: '#FFFFFF',
			basic: {
				white: {
					DEFAULT: '#FFFFFF',
					'60%': '#FFFFFF99',
					'80%': '#FFFFFFCC'
				},
				black: {
					100: '#292929',
					200: {
						DEFAULT: '#000000',
						'40%': '#00000066',
						'70%': '#000000B3',
						'80%': '#000000CC'
					}
				}
			},
			primary: {
				50: '#EDF5FF',
				100: '#5493E9',
				200: {
					DEFAULT: '#1865CD',
					'40%': '#1865CD66'
				},
				300: '#06469D'
			},
			gray: {
				50: '#FCFCFC',
				100: '#E7E7E7',
				200: '#D1D1D1',
				300: '#B0B0B0',
				400: '#808080',
				500: '#6D6D6D',
				600: '#5D5D5D',
				800: '#454545'
			},
			error: {
				100: '#FF2D2D'
			},
			etc: {
				100: '#979AA3',
				200: '#F8F8F8'
			}
		},
		fontSize: {
			h1: [
				'42px',
				{
					fontWeight: '700'
				}
			],
			h2: [
				'32px',
				{
					fontWeight: '600'
				}
			],
			h3: [
				'20px',
				{
					fontWeight: '600'
				}
			],
			h4: [
				'18px',
				{
					fontWeight: '600'
				}
			],
			h5: [
				'16px',
				{
					fontWeight: '600'
				}
			],
			h6: [
				'14px',
				{
					fontWeight: '600'
				}
			],
			'body-large': [
				'16px',
				{
					fontWeight: '400'
				}
			],
			'body-medium': [
				'14px',
				{
					fontWeight: '400'
				}
			],
			'body-small': [
				'12px',
				{
					fontWeight: '400'
				}
			],
			'button-large': [
				'16px',
				{
					fontWeight: '500'
				}
			],
			'button-medium': [
				'14px',
				{
					fontWeight: '500'
				}
			],

			'h1-headline': [
				'20px',
				{
					fontWeight: '600'
				}
			],
			'h2-headline': [
				'18px',
				{
					fontWeight: '600'
				}
			],
			'h3-headline': [
				'16px',
				{
					fontWeight: '600'
				}
			],
			'h4-headline': [
				'14px',
				{
					fontWeight: '600'
				}
			],
			'h5-headline': [
				'12px',
				{
					fontWeight: '600'
				}
			]
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},

			width: {
				'min-desktop': '1194px',
				'min-mobile': '360px',
				'desktop-in-mobile': '438px'
			}
		}
	}
};

export default config;
