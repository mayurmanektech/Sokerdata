import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/~yagnik/sokerdata/",
  plugins: [react()],
  // Optionally, add other configurations as needed (e.g., proxy settings)
});
