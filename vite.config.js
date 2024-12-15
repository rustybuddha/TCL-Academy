import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// envPrefix: 'VITE_',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
