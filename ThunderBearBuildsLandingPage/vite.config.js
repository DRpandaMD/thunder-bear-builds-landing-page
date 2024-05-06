import { defineConfig } from 'vite';

export default defineConfig({
  // Define server options
  server: {
    host: '0.0.0.0',
    port: 8080,  // Specifies the development server port
  },
  // Configure build options
  build: {
    outDir: 'dist',  // Specifies the output directory for build files: default is "dist"
  },
  publicDir: 'public'
});
