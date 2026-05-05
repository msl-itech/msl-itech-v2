import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";
import { renderSitemapXml } from "./src/lib/sitemap-routes";
import fs from "fs";

function dynamicSitemap(): Plugin {
  return {
    name: "msl-dynamic-sitemap",
    apply: () => true,
    configureServer(server) {
      server.middlewares.use("/sitemap.xml", (_req, res) => {
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600");
        res.end(renderSitemapXml());
      });
    },
    closeBundle() {
      try {
        const out = path.resolve(__dirname, "dist", "sitemap.xml");
        if (!fs.existsSync(path.dirname(out))) return;
        fs.writeFileSync(out, renderSitemapXml(), "utf-8");
      } catch {
        // build sans étape dist — ignorer
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    dynamicSitemap(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
