import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "FloatingActions",
      fileName: (format) => {
        return `floating-actions.${format === "es" ? "es" : "umd"}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
