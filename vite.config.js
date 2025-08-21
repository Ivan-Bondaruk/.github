import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import sitemap from 'vite-plugin-sitemap';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss(),
      sitemap({
          hostname: 'https://bondarukid.com', // ваш домен
          routes: [
              '/', '/software/ohmslaw', '/software/ohmslaw/policy' // список страниц (можно динамически)
          ]
      })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
