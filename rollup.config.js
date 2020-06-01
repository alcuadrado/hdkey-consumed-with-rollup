import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import nodeBuiltins from "rollup-plugin-node-builtins";
import nodeGlobals from "rollup-plugin-node-globals";

export default {
  input: __dirname + "/index.js",
  output: {
    file: __dirname + "/dist/index.js",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    commonjs(),
    json(),
    nodeGlobals(),
    nodeBuiltins(),
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
  ],
};
