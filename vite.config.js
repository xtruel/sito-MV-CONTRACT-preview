import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name]-${Date.now()}.js`,
                chunkFileNames: `assets/[name]-${Date.now()}.js`,
                assetFileNames: `assets/[name]-${Date.now()}.[ext]`
            }
        }
    }
});
