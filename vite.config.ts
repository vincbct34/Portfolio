import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API calls to the Hono backend (`npm run dev:server`) in dev.
      "/api": "http://localhost:3001",
    },
  },
});
