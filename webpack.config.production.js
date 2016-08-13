/*
 * This is the porduction webpack config
 * This will build all files in there min version to the dist dir
 * to run the application you must server the index.html and the static dir
 * CSS files will be outputed as bundles just like the js files
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './app/js/app.jsx',
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
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true,
      sourceMap: false,
    }),
    new CopyWebpackPlugin([
      // Add files that you would like copied here
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
        loader: ExtractTextPlugin.extract(['css', 'resolve-url', 'sass']),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(gif|png|jpg|jpeg)(\?[a-z0-9]+)?$/,
        loader: 'url?limit=8192'
      },
    ],
  },
};
