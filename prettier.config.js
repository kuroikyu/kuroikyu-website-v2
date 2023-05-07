/** @type {import('prettier').Config} */
module.exports = {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'lf',
	plugins: [require('prettier-plugin-tailwindcss')],
}
