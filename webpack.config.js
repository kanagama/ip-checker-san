const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// package.json の情報を min.js のコメントに追加
const packageJson = require('./package.json');
const version = packageJson.version
const authorName = packageJson.author.name;
const authorEmail = packageJson.author.email;

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ipcheckersan.min.js',
    libraryTarget: 'umd',
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `ip-checker-san v` + version + `

(c) 2023 ` + authorName + ` <` + authorEmail + `>
License: MIT`,
    }),
  ],
};
