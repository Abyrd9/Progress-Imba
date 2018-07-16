// webpack v4
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
	resolve: {
		extensions: [".imba",".js", ".json"]
	},
  entry: { main: "./src/index.imba" },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js"
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
			{
				test: /\.imba$/,
				loader: 'imba/loader',
			},
      {
        test: /\.s[c|a]ss$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
			disable: process.env.NODE_ENV !== 'production'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebpackMd5Hash()
  ]
};