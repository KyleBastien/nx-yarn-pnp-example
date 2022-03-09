module.exports = (config) => {
  /**
   * For some reason @nrwl/node:webpack config includes ts-loader for ts files and also
   * fork-ts-checker-webpack-plugin for ts files. This is redundant and is causing the build to hang
   * therefore removing this plugin.
   */
  config.plugins = config.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
  );

  return config;
};
