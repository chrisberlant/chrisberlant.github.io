/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				robotoMono: ['Roboto Mono', 'monospace'],
				montserrat: ['Montserrat', 'sans-serif'],
			},

			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				'fade-in': 'fadeIn 2s ease-in-out',
				'slide-from-left': 'slideFromLeft 1s ease-in-out',
				'slide-from-right': 'slideFromRight 1s ease-in-out',
				'slide-from-top': 'slideFromTop 1s ease-in-out',
				'slide-from-bottom': 'slideFromBottom 1s ease-in-out',
				'meteor-effect': 'meteor 5s linear infinite',
				shift: 'shift 5s infinite',
			},
			keyframes: {
				shift: {
					'0%, 48%, 55%, 85%': {
						transform: 'skewX(0deg)',
					},
					'50%': {
						transform: 'skewX(20deg)',
					},
					'51%': {
						transform: 'skewX(-20deg)',
					},
					'53%': {
						transform: 'skewX(20deg)',
					},
					'87%': {
						transform: 'skewX(-40deg) ',
					},
					'90%': {
						transform: 'skewX(40deg) ',
					},
					'92%': {
						transform: 'skewX(-40deg) ',
					},
					'94%': {
						transform: 'skewX(65deg) ',
					},
					'96%': {
						transform: 'skewX(-65deg) ',
					},
					'97%': {
						transform: 'skewX(65deg) ',
					},
					'100%': {
						transform: 'skewX(-65deg) ',
					},
				},
				fadeIn: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
				slideFromLeft: {
					'0%': {
						opacity: 0,
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
				slideFromRight: {
					'0%': {
						opacity: 0,
						transform: 'translateX(+100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
				slideFromTop: {
					'0%': {
						opacity: 0,
						transform: 'translateY(-100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
				slideFromBottom: {
					'0%': {
						opacity: 0,
						transform: 'translateY(+100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: 1,
					},
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0,
					},
				},
			},
		},
	},
	plugins: [import('tailwindcss-animate')],
};
