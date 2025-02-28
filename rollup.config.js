const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

module.exports = [
    // CommonJS Build
    {
        input: "src/index.js",
        output: {
            file: "dist/cjs/index.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [resolve(), commonjs()],
    },

    // ES Module Build
    {
        input: "src/index.js",
        output: {
            file: "dist/esm/index.js",
            format: "esm",
            sourcemap: true,
        },
        plugins: [resolve(), commonjs(), terser()],
    },
];
