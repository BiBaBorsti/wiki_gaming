/** @type {import('tailwindcss').Config} */

import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

const default_light = { 200: '#b3c7ff', 600: '#364bff', 900: '#182775', 950: '#131e4f' };
const default_dark = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			// colors: { accent: colors.indigo, gray: colors.zinc },
			// colors: { accent: colors.teal, gray: default_dark },
			colors: { accent: default_light, gray: default_dark },
		},
	},
	plugins: [starlightPlugin()],
}
