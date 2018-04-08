const HtmlWebPackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');
const indexHtml = path.join(__dirname, "src", "index.html");


const live = process.env.NODE_ENV === "production";
const mainCss = ["css-loader!sass-loader", path.join(__dirname, "src", "main.scss")];

if (live) {
    mainCss.unshift("file-loader?name=[name].[ext]", "extract-loader");
} else {
    mainCss.unshift("style-loader");
}



module.exports = {
	module: {
		//context: path.resolve(__dirname, './src'),
		
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
                        },
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
