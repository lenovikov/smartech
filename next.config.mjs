/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'server.smarttech.by',
				port: '',
				pathname: '/wp-content/uploads/**'
			}
		]
	},
	webpack: (config, { webpack }) => {
		// Добавляем DefinePlugin в конфигурацию Webpack
		config.plugins.push(
			new webpack.DefinePlugin({
				__COUNTRY__: JSON.stringify('BY')
			}) // RU/BY
		)

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader']
		})
		return config
	}
}

export default nextConfig
