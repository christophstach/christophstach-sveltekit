/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-heropatterns')({
			// as per tailwind docs you can pass variants
			variants: [],

			// the list of patterns you want to generate a class for
			// the names must be in kebab-case
			// an empty array will generate all 87 patterns
			patterns: ['floating-cogs'],

			// The foreground colors of the pattern
			colors: {
				default: 'slate'
			},

			// The foreground opacity
			opacity: {
				default: '0.05'
			}
		})
	]
};
