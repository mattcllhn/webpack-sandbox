var WebPackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
console.log('in webpack-production\n\n\n');
var stripLoader = {
  test:[/\.js$/,/\.ex6$/],
  exclude:/node_modules/,
  loader: WebPackStrip.loader('console.log')
};
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
