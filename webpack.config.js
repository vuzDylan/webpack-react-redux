/*
 * This config is used to start the dev server
 * All files that are complied will be stored in memory
 * CSS is inlined in the JS to make development faster
 * If adding a new plugin make sure it know the publicPath is /static/
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: [
      './app/js/app.jsx',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:5000',
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'redux-thunk',
      'react-redux',
      'react-router',
      'bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      // add files you want copied here
    ]),
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
        test: /\.s?css$/,
        loaders: ['style', 'css', 'resolve-url', 'sass']
      },
      {
        test: /\.(gif|png|jpg|jpeg|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url?limit=8192'
      },
    ],
  },
};
