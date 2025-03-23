import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/Dream11-Calculator/',
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Treat .js files as JSX
  },
});