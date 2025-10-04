import type { Config } from 'tailwindcss'

const colors = {
	purple: 'var(--purple)',
	blackPurple: 'var(--blackPurple)',
	white: 'var(--white)',
	opacity: 'var(--opacity)',
	hoverPurple: 'var(--hoverPurple)',
	opacityPurple: 'var(--opacityPurple)',
	gray: 'var(--gray)',
	'gray-50': 'var(--gray-50)',
	'gray-100': 'var(--gray-100)',
	'gray-200': 'var(--gray-200)',
	'gray-bg': 'var(--gray-bg)',
	'bg-present-purple': 'var(--bg-present-purple)',
	'red-button': 'var(--red-button)',
	'fucksiya-button': 'var(--fucksiya-button)',
	'ceramic-button': 'var(--ceramic-button)',
	'black-button': 'var(--black-button)',
	'brown-button': 'var(--brown-button)',
	'topaz-button': 'var(--topaz-button)',
	'nickel-button': 'var(--nickel-button)',
	'vincablue-button': 'var(--vincablue-button)',
	'prussianblue-button': 'var(--prussianblue-button)',
	'strawberrybronze-button': 'var(--strawberrybronze-button)',
	'ceramicpink-button': 'var(--ceramicpink-button)',
	'graphit-button': 'var(--graphit-button)',
	'silver-button': 'var(--silver-button)',
	'green-button': 'var(--green-button)',
	'pink-button': 'var(--pink-button)',
	'blue-button': 'var(--blue-button)',
	'orange-button': 'var(--orange-button)',
	'violet-button': 'var(--violet-button)',
	'midnight-button': 'var(--midnight-button)',
	'lightblue-button': 'var(--lightblue-button)',
	'golden-button': 'var(--golden-button)',
	'stars-button': 'var(--stars-button)'
}

const screens = {
	mobile: { max: '767px' },
	// => @media (min-width: 640px and max-width: 767px) { ... }

	tablet: { max: '1023px' },
	// => @media (max-width: 1023px) { ... }
	desktop: { min: '1500px' }
	// => @media (min-width: 1500px) { ... }
}

const config: Config = {
	darkMode: ['class'],
	content: ['./src/components/**/*.{ts,jsx,tsx}', './src/app/**/*.{ts,jsx,tsx}'],
	theme: {
		extend: {
			screens,
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				...colors,
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
export default config
