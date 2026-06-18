import wordpress from '@wordpress/eslint-plugin';
import globals from 'globals';

export default [
	...wordpress.configs.recommended,
	{
		ignores: [
			'node_modules/',
			'dist/',
			'build/',
			'plugin-sidebar/build/**',
		],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jquery,
			},
		},
	},
];
