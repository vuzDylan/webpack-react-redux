const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
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
      'react-router'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new OfflinePlugin({
      publicPath: '/static/',
      relativePaths: false,
      AppCache: {
        directory: '../appcache',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true,
      sourceMap: false,
    }),
    new CopyWebpackPlugin([]),
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
        loaders: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
    ],
  },
};
