import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginReact.configs.flat.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['src/**/*.{astro,tsx}'],
		plugins: ['react-hooks'],
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
