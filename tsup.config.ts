import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "./dist",
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  clean: true,
  sourcemap: true,
  minify: true,
  keepNames: true,
  treeshake: true,
});
