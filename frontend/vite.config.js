import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5050,
  },
  plugins: [react()],
});
