const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /node_modules\/(?!antd\/).*/,
					name: "vendors",
					chunks: "all",
				}
			},
		},
		runtimeChunk: {
			name: "manifest",
		},
	},
	context: resolve(__dirname, '../../../src'),
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			},
			{
				test: /\.(scss|sass|css)$/,
				exclude: /node_modules/,
				loaders: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap: true,
							importLoaders: 1
						}
					},
					'sass-loader',
				],
			},
			{
				// Preprocess 3rd party .css files located in node_modules
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				include : resolve(__dirname, '../../../public/images'),
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
				],
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin({template: './index.html', inject: true}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
	],
	performance: {
		hints: false,
	},
};
