import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from "path";

// https://vitejs.dev/config/

const aliasNamesArray = [
    "components",
    "config",
    "context",
    "features",
    "hooks",
    "pages",
    "services",
    "utils",
];

const aliasArray = aliasNamesArray.map((aliasName) => ({
    find: `@${aliasName}`,
    replacement: path.resolve(__dirname, `src/${aliasName}`),
}));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: aliasArray,
    },
});
