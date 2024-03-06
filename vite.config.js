import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@info",
        replacement: "/src/info",
      },
      {
        find: "@styles",
        replacement: "/src/styles",
      },
      { find: "@helpers", replacement: "/src/helpers" },
    ],
  },
});
