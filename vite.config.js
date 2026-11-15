import { defineConfig } from "vite";
import { transformAsync } from "@babel/core";
import htmPlugin from "babel-plugin-htm";

/**
 * Compila os templates htm (h`<div/>`) para React.createElement em build time,
 * eliminando o parse de strings no navegador e o runtime do htm.
 */
function precompileHtm() {
  return {
    name: "precompile-htm",
    enforce: "pre",
    async transform(code, id) {
      if (!/\/src\/.*\.js$/.test(id) || !code.includes("h`")) return null;
      const result = await transformAsync(code, {
        filename: id,
        babelrc: false,
        configFile: false,
        sourceMaps: true,
        plugins: [
          [
            htmPlugin,
            {
              tag: "h",
              pragma: "_h",
              import: { module: "react", export: "createElement" },
            },
          ],
        ],
      });
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  plugins: [precompileHtm()],
  build: {
    assetsInlineLimit: 0, // fontes e imagens sempre como arquivos cacheáveis
    cssMinify: "lightningcss",
  },
});
