const Obfuscator = require('webpack-obfuscator');
const Compression = require('compression-webpack-plugin');

const dev = {
  devServer: {
    hot: true,
  },
};

const prod = {
  plugins: [
    new Compression({
      cache: true,
      test: /\.(html|js|css|svg)/i,
    }),
    new Obfuscator({
      disableConsoleOutput: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
    },
  },
  output: {
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js',
  },
  devtool: '(none)',
};

module.exports = {
  configureWebpack: process.env.NODE_ENV === 'production' ? prod : dev,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
  productionSourceMap: false,
};
