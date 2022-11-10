import "dotenv/config"
import esbuild from "esbuild"
import { nodeExternalsPlugin } from "esbuild-node-externals"
import clear from "esbuild-plugin-clear"

esbuild.build({
  logLevel: "info",
  entryPoints: ["./src/server/index.js"],
  platform: "node",
  minifyIdentifiers: true,
  minifySyntax: true,
  minify: true,
  treeShaking: true,
  bundle: true,
  splitting: true,
  define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) },
  format: "esm",
  outdir: "./dist/server",
  plugins: [clear("./dist/server"), nodeExternalsPlugin()],
})
