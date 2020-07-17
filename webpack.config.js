const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const webpack = require('webpack')
const path = require('path');

module.exports = (env, { mode }) => {
	const config = {
		entry: ['@babel/polyfill', 'whatwg-fetch', 'react-hot-loader/patch', path.join(__dirname, '/src/index.tsx')],
		module: {
			rules: [
				{
					test: /\.tsx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-transform-runtime']
						}
					}
				},
				  {
					test: /\.ts$/,
					use: ["source-map-loader"],
					enforce: "pre"
				  },
				{
					test: /\.css$/,
					use: ['style-loader', 'raw-loader']
				},
				{  
					test: /\.(png|jpg|svg)$/,  
					use: 'file-loader'
				}
			]
		},
		plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
	}
	if (mode === 'development') {
		const {
			api_key,
			auth_domain,
			database_url,
			project_id,
			storage_bucket,
			sender_id,
			app_id,
			github_token
		} = require('./credentials')
		config.devtool = 'cheap-module-eval-source-map'
		config.devServer = { historyApiFallback: true }
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					API_KEY: JSON.stringify(api_key),
					AUTH_DOMAIN: JSON.stringify(auth_domain),
					DATABASE_URL: JSON.stringify(database_url),
					PROJECT_ID: JSON.stringify(project_id),
					STORAGE_BUCKET: JSON.stringify(storage_bucket),
					SENDER_ID: JSON.stringify(sender_id),
					APP_ID: JSON.stringify(app_id),
					GITHUB_TOKEN: JSON.stringify(github_token)
				}
			})
		)
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push(
			new CompressionPlugin(),
			new CopyWebpackPlugin([
				{ from: './_redirects', to: '_redirects', toType: 'file' },
				{ from: './src/sw.js', to: 'sw.js', toType: 'file' }
			]),
			new WebpackPwaManifest({
				name: 'Cursos',
				short_name: 'Cursos',
				start_url: '/',
				background_color: '#FFF',
				theme_color: '#FFF',
				display: 'standalone',
				icons: [{ src: './logo.png', sizes: [96, 128, 192, 256, 384, 512] }]
			}),
			new webpack.DefinePlugin({
				'process.env': {
					API_KEY: JSON.stringify(process.env.API_KEY),
					AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
					DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
					PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
					STORAGE_BUCKET: JSON.stringify(process.env).STORAGE_BUCKET,
					SENDER_ID: JSON.stringify(process.env.SENDER_ID),
					APP_ID: JSON.stringify(process.env.APP_ID),
					GITHUB_TOKEN: JSON.stringify(process.env.GITHUB_TOKEN)
				}
			})
		)
	}
	return config
}