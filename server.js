/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

var server = new WebpackDevServer(webpack(config), {
  contentBase: './app',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})

server.listen(process.env.PORT || 5000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + (process.env.PORT || 5000));
});
