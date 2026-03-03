import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/revox-rec/', // <--- AÑADE ESTA LÍNEA (debe coincidir con el nombre de tu repositorio) 
    plugins: [react(), tailwindcss()],
    // ... resto del código igual
  };
});