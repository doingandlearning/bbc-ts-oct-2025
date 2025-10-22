const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("node:path")

module.exports = {
	entry: "./src/app.ts",
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				use: 'ts-loader',
				test: /.tsx?$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minify: false
		})
	],
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	}
}