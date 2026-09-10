import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const productionCsp =
  "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: 'production-csp',
      transformIndexHtml(html) {
        if (command !== 'build') return html;
        return html.replace(
          '<meta charset="UTF-8" />',
          `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${productionCsp}" />`,
        );
      },
    },
  ],
  base: process.env.GITHUB_PAGES === 'true' ? '/who-am-I/' : '/',
  server: { host: true, port: 5173, strictPort: true },
  preview: { host: true, port: 4173, strictPort: true },
}));
