// path provides utilities for working with file and directory paths
const path = require('path');

//simplifies creation of HTML files to serve your webpack bundles.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
    entry: [path.join(paths.SRC, 'index.js')],
    output: {
      path: paths.DIST,
      filename: 'index.bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
    ]
  };