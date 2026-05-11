'use client'
import { Wrapper } from '@UI/Wrapper'
import { Navigation } from '@modules/Navigation'
import { ReactComponent as Logo } from '@icons/Logo.svg'
import { SocialButtons } from '@UI/SocialButtons'
import { headerLinks } from '@helpers/Consts'
import { Text } from '@UI/Text'
import { usePathname } from 'next/navigation'

export const Footer = () => {
	const pathname = usePathname()

	const footerLinks =
		__COUNTRY__ === 'RU'
			? headerLinks
			: [
					...headerLinks,
					{
						label: 'Политика конфиденциальности',
						href: '/policy'
					},
					{
						label: 'Публичная оферта',
						href: '/publicOffer'
					}
				]
	return (
		<footer className='pb-10 mobile:mt-[48px]'>
			<Wrapper size='nav' className='h-[90px] flex-col'>
				<div className='flex items-center justify-between mb-8 tablet:flex-col'>
					<Logo className='tablet:mb-4' />
					<Navigation links={footerLinks} className='flex tablet:mb-1 tablet:flex-col tablet:text-center tablet:mb-4' />
					<SocialButtons className='hidden mobile:flex tablet:mr-0 justify-around' />
				</div>
				<div className='flex items-center justify-between pb-10'>
					<Text variant='base'>
						{__COUNTRY__ !== 'RU' && pathname === '/'
							? 'ООО "СМАРТЕЧ" \n УНП 193732812 \n Время работы: пн-вс 9:00 - 20:00 \n г. Минск, ул. Бирюзова 12а, каб. 6 \n Свидетельство о государственной регистрации ООО «СМАРТЕЧ» выдано \n Мингорисполкомом на основании решения от 29.12.2023. Дата включения сведений \n об интернет-магазине smarttech.by в Торговый реестр Республики Беларусь - 22.02.2024 г. \n\n При покупке в кредит/рассрочку акционные цены не действуют. \n\n Smartech© 2026'
							: ''}
					</Text>
					<SocialButtons className='tablet:hidden' />
				</div>
			</Wrapper>
		</footer>
	)
}
