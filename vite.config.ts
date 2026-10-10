import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));

const productionCsp =
  "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests";

const pages = ['about', 'skills', 'work', 'expertise', 'connect'];

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
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
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        ...Object.fromEntries(pages.map((page) => [page, resolve(root, `${page}/index.html`)])),
      },
    },
  },
  server: { host: true, port: 5173, strictPort: true },
  preview: { host: true, port: 4173, strictPort: true },
}));
