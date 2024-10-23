import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fec3ff',
				secondary: '#000',
				white: '#fff',
			}
		},
	},
	plugins: [animations],
}
