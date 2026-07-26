const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // Relative base so the build works under a GitHub Pages project subpath
  // (https://<user>.github.io/<repo>/) as well as at a domain root.
  publicPath: './',
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    // Floor asset loading uses top-level await (see src/classes/Floor.ts).
    experiments: {
      topLevelAwait: true,
    },
  },

  chainWebpack(config) {
    // ts-loader stays in transpileOnly mode: types are stripped, the build is
    // not gated on type errors. Run `npm run typecheck` for a full check.
    if (config.plugins.has('fork-ts-checker')) {
      config.plugins.delete('fork-ts-checker');
    }
  },
});
