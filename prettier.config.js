/**
 * @see https://prettier.io/docs/configuration.html
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: 'always',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  endOfLine: 'lf',
  plugins: [
    // WARN: tailwind plugin should always be the last to load
    'prettier-plugin-tailwindcss',
  ],
}

export default config
