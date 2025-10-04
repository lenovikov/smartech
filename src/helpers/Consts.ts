import { NavigationLinks } from '@/types/common'
const isRussia = __COUNTRY__ === 'RU'

const initialLinks: NavigationLinks = [
	{
		label: 'Главная',
		href: '/'
	},
	{
		label: 'Каталог',
		href: '/catalog'
	},
	{ label: 'Рассрочка', href: '/installment' },
	{
		label: 'О магазине',
		href: '/about'
	},
	{
		label: 'Доставка и оплата',
		href: '/delivery'
	},
	{
		label: 'Отзывы',
		href: '/reviews'
	},
	{
		label: 'Гарантии',
		href: '/guarantee'
	}
]

export const headerLinks: NavigationLinks = isRussia
	? initialLinks.filter(({ label }) => label !== 'Рассрочка')
	: initialLinks
