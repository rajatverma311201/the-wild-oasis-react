import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from "path";

import { dependencies } from "./package.json";
function renderChunks(deps: Record<string, string>) {
    const chunks = {};
    Object.keys(deps).forEach((key) => {
        if (["react", "react-router-dom", "react-dom"].includes(key)) return;
        chunks[key] = [key];
    });
    return chunks;
}

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-router-dom", "react-dom"],
                    ...renderChunks(dependencies),
                },
            },
        },
    },
});
