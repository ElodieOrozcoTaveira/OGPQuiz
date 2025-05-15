import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ligne critique

export default defineConfig({
  plugins: [react()], // Utilisation du plugin
});
