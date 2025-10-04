import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.css'
import { Header } from '@modules/Header'
import { Footer } from '@modules/Footer'
import StoreProvider from '@/utils/StoreProvider'
import { WriteUs } from '@/components/modules/WriteUs'
import { RedirectTo } from '@/components/modules/Redirect'
import { InstallmentVariant } from '@/components/modules/Installment'

const monserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Smartech',
	description: 'Магазин трендовой техники'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={(monserrat.className, 'text-blackPurple bg-gray-bg flex flex-col min-h-screen relative')}>
				{/* <RedirectTo /> */}
				<StoreProvider>
					<InstallmentVariant />
					<Header />
					<div className='grow mt-[90px] overflow-hidden'>{children}</div>
					<Footer />
					<WriteUs />
				</StoreProvider>
			</body>
		</html>
	)
}
