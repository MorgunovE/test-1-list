const { join } = require('path');

/**
 * Exports vue-cli configuration.
 * @see https://cli.vuejs.org/config/
 * @type {import("@vue/cli-service").ProjectOptions}
 */

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/list/' : '/',
  devServer: {
    overlay: {
      errors: true,
    },
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName:
            process.env.NODE_ENV !== 'production'
              ? '[name]__[local]'
              : '[hash:base64]',
        },
      },
    },
  },
  chainWebpack(config) {
    // Resolve from `src` directory
    config.resolve.modules.prepend(join(process.cwd(), 'src'));
    // Use `baseUrl` and `paths` from tsconfig.json
    config.resolve.alias
      .delete('@')
      .end()
      .plugin('tsconfig-paths')
      .use(require('tsconfig-paths-webpack-plugin'));
    // Drop console messages from production build
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
    // Limit inlined images to 1KB
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 1024 }));
    // Support svg manipulation from css via https://github.com/JetBrains/svg-mixer/tree/master/packages/svg-transform-loader
    config.module
      .rule('svg')
      .use('svg-transform-loader')
      .loader('svg-transform-loader');
  },
};
