import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  appType: "spa",
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Handle API routes first
      server.middlewares.use("/api", app);

      // Add SPA fallback for all other routes
      server.middlewares.use((req, res, next) => {
        // Skip if it's an API route or static asset
        if (req.url?.startsWith('/api') ||
          req.url?.includes('.') ||
          req.url?.startsWith('/@') ||
          req.url?.startsWith('/node_modules')) {
          return next();
        }

        // For all other routes, serve index.html
        req.url = '/';
        next();
      });
    },
  };
}
