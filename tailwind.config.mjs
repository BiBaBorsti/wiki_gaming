/** @type {import('tailwindcss').Config} */

import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

const default_light = { 200: '#b3c7ff', 600: '#364bff', 900: '#182775', 950: '#131e4f' };
const default_dark = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

// const accent = { 200: '#d8c7a2', 600: '#876600', 900: '#412f00', 950: '#2f2201' };
// const gray = { 100: '#f6f6f9', 200: '#ecedf3', 300: '#c0c1c8', 400: '#898a97', 500: '#565763', 700: '#363742', 800: '#252630', 900: '#17181d' };

const accent = { 200: '#dbb8f4', 600: '#9b00d8', 900: '#481263', 950: '#321343' };
const gray = { 100: '#f5f6f8', 200: '#ebeef1', 300: '#bfc2c6', 400: '#868c92', 500: '#53595e', 700: '#33393e', 800: '#22282c', 900: '#16191b' };




export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			// colors: { accent: colors.indigo, gray: colors.zinc },
			// colors: { accent: colors.teal, gray: default_dark },
			// colors: { accent: default_light, gray: default_dark },
			// colors: { accent, gray: colors.black },
			colors: { accent: colors.amber, gray },
			// colors: {  },
		},
	},
	plugins: [starlightPlugin()],
}
