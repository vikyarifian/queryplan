import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Workaround for Vite SSR limitation with CommonJS pg module
export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		external: ['pg']
	}
});
