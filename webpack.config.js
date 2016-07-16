const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './app/js/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([]),
    new OfflinePlugin({
      publicPath: '/static/',
      relativePaths: false,
      AppCache: {
        directory: '../appcache',
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
    ],
  },
};
