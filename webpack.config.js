const HtmlWebPackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
                test: /\.css$/,
                loaders: [
                    {
						loader: "file-loader",
						options: {
                            name: "[name].[ext]",
                        }
                    },
                    {
						loader: "extract-loader",
						options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.jpg$/,
                loaders: [
                    {
                        loader: "file-loader"
                    },
                ],
            },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
		]
	},
	plugins: [
		//new ExtractTextPlugin("styles.css"),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};
