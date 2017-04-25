const path = require('path');

module.exports = {
	entry: ['./src/find-rep.component.js'],
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
		],
	},
	resolve: {
		alias: {
			src: path.resolve('./src'),
		},
	},
	devtool: 'sourcemaps',
};
