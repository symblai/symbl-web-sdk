const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  target: "node",
  entry: {
    "bundle": "./dist/symbl.js",
    "bundle.min": "./dist/symbl.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: "[name].js"
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
};