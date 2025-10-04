import rrb from '@assets/bankImages/rrb.png'
import dobr from '@assets/bankImages/dobr.png'
import par from '@assets/bankImages/paritet.png'
import sber from '@assets/bankImages/sber.png'
import card from '@assets/bankImages/card.png'
import card1 from '@assets/bankImages/card1.png'
import card2 from '@assets/bankImages/card2.png'
import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { CommonList } from '@/components/modules/CommonList'
import { Text } from '@/components/UI/Text'
import Image from 'next/image'

const info = {
	bank: {
		icon: [rrb, dobr, sber, par],
		title: 'bank'
	},

	cards: {
		iconHeight: 150,
		icon: [card, card1, card2],
		title: 'card'
	}
}

const contentBank = () => {
	const description = 'Оформляйте рассрочку прямо со смартфона или компьютера без посещения отделения банка!'

	const personalInfo = [
		'Интересующий товар',
		'Срок рассрочки',
		'ФИО клиента',
		'Номер телефона клиента',
		'Досрочное погашение без ограничений'
	]

	return (
		<>
			<Text variant='base' className='mb-5'>
				{description}
			</Text>
			<Text variant='semi' className='font-semibold mb-1'>
				Для составления заявки менеджеру необходима информация:
			</Text>
			<div className='mb-4'>
				{personalInfo.map(item => (
					<Text variant='base'>- {item}</Text>
				))}
			</div>
			<Text variant='semi' className='font-semibold mb-2'>
				Рассрочка у нас идет без первоначального взноса
			</Text>
			<Text variant='semi' className='font-semibold mb-2'>
				Рассрочку можно погасить досрочно
			</Text>
			<Text variant='semi' className='font-semibold mb-2'>
				Оформление происходит онлайн через Агрегатор «Скрепка»
			</Text>
			<Text variant='semi' className='font-semibold mb-3'>
				Заполнение данных и одобрение заявки занимает 5-10 минут
			</Text>
			<Text variant='semi' className='font-semibold mb-3'>
				Оплата рассрочки также онлайн, по ЕРИП
			</Text>
		</>
	)
}

const contentCard = () => {
	const personalInfo = [
		'Черепаха-рассрочка 8 месяцев',
		'Халва MIX- рассрочка 3 месяца',
		'Халва MAX - рассрочка 5 месяцев',
		'Карта Покупок - рассрочка 3 месяца'
	]

	return (
		<>
			<Text variant='semi' className='font-semibold mb-1 text-3xl'>
				Оплатить заказ картами рассрочки можно только на нашем пункте самовывоза в Минске
			</Text>
			<div className='mb-4'>
				{personalInfo.map(item => (
					<Text variant='base' className='text-xl'>
						- {item}
					</Text>
				))}
			</div>
		</>
	)
}

export default function Installment() {
	const renderContent = item => {
		const { icon, iconHeight, title } = item
		return (
			<div className='bg-white p-12 flex items-center justify-between mb-6 mobile:flex-wrap mobile:justify-center'>
				<div className='max-w-[700px] mobile:order-2'>{title === 'bank' ? contentBank() : contentCard()}</div>
				<div className='flex flex-col'>
					{icon.map(item => (
						<Image className='mb-3' height={iconHeight || 70} quality={100} src={item} alt='bank' />
					))}
				</div>
			</div>
		)
	}

	return (
		<ContentWrapper title={`Рассрочка в банках \n от 3 до 18 месяцев`}>
			<div className='flex flex-col w-full mb-16'>{renderContent(info.bank)}</div>
			<Text variant='title' className='mb-14 mobile:mb-7'>
				Карты рассрочек
			</Text>
			<div className='flex flex-col w-full'>{renderContent(info.cards)}</div>
		</ContentWrapper>
	)
}
