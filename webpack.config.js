// path provides utilities for working with file and directory paths
const path = require('path');

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
		filename: 'index.bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: paths.DIST,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
		],
	}
};
