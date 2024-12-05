import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['src/**/*.{astro,tsx}'],
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];