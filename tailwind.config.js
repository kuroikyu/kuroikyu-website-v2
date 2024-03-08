/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./plugins/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#151515',
				'accent-7': '#333',
				success: '#0070f3',
				kuroi: {
					DEFAULT: '#DA145B',
					50: '#f2e1e6',
					100: '#f4c3d2',
					200: '#f6a4be',
					300: '#f16c99',
					400: '#e93b77',
					500: '#DA145B',
					600: '#bb0645',
					700: '#940032',
					800: '#670021',
					900: '#390012',
					950: '#0d0004',
				},
				cyan: '#79FFE1',
				black: '#111112',
				'true-black': '#000000',
				'blue-500': '#2276FC',
				'yellow-100': '#fef7da',
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
