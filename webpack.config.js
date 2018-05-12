var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isDev = options.mode === 'development';

  return {
    // Content
    entry: './index.js',
    // A SourceMap without column-mappings ignoring loaded Source Maps.
    devtool: 'cheap-module-source-map',
    watch: isDev,
    plugins: [
      // simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Barnmålvakt'
      }),
      // Auto replacement of page when i save some file, even css
      new webpack.HotModuleReplacementPlugin()
    ],

    output: {
      path: path.join(__dirname, publicPath),
      filename: '[name].bundle.js',
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },

    devServer: {
      port: 3000,
      host: 'localhost',
      // Be possible go back pressing the "back" button at chrome
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: publicPath,
      contentBase: path.join(__dirname, publicPath),
      // hotmodulereplacementeplugin
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' +
            'includePaths[]=' +
            (encodeURIComponent(
              path.resolve(process.cwd(), './node_modules')
            )) +
            '&includePaths[]=' +
            (encodeURIComponent(
              path.resolve(process.cwd(),
                './node_modules/grommet/node_modules'))
            )
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loaders: ['babel-loader']
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'eslint-loader'
        }
      ]
    }
  };
};
