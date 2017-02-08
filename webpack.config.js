var path = require('path');
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
module.exports = {
  context: path.resolve('scripts'),
  entry: {
    about:'./about.js',
    contact: './contact.js',
    home: './home.js'
  },
  output:
    {
      path:path.resolve('build/scripts/'),
      publicPath:'/public/assets/scripts',
      filename: '[name].js'
    },
    // plugins:[commonsPlugin],
    devServer:{
      contentBase: 'public'
    },
    module:{

      loaders:[
        {
          test:/\.es6$/,
          exclude:/node_modules/,
          loader:'babel-loader'
        },
        {
          test:/\.js$/,
          exclude:/node_modules/,
          loader:'jshint-loader',
          enforce:'pre'
        }
      ]
    },
    resolve:{
      extensions:[' ','.js','.es6']
    },
    watch:true
};
