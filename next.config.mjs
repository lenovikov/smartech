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
		// BY указываем при сборке для бел домена
		// RU указываем при сборке для росс домена

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader']
		})
		return config
	}
}

export default nextConfig
