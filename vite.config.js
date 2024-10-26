import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add any specific modules you want to externalize here if needed
      ],
    },
  },
  assetsInclude: ['**/*.png', '**/*.PNG'], // Ensure PNG files are included
});
