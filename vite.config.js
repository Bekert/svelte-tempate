import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
	plugins: [
		svelte(),
		createHtmlPlugin({
			minify: true
		})
	]
})
