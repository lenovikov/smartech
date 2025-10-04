import { FC } from 'react'
import { Text } from '../UI/Text'

interface IDeliveryInfoShortBlock {}

const info = [
	{ title: 'Доставка курьером по Минску/РБ', description: 'в течении 1-3 дней' },
	{ title: 'Самовывоз в Минске', description: 'в течении одного дня' },
	{ title: 'Доставка почтами по РБ', description: 'в течении 1-3 дней' },
	{ title: 'Доставка СДЕК по РФ', description: 'в течении 1-3 дней' }
]

export const DeliveryInfoShortBlock: FC<IDeliveryInfoShortBlock> = () => {
	return (
		<div className='pl-6 pt-6 rounded-lg bg-gray-50'>
			{info.map(({ title, description }) => (
				<div className='mb-6'>
					<Text className='font-semibold text-sm'>{title}</Text>
					<Text className='text-sm text-opacityPurple'>{description}</Text>
				</div>
			))}
		</div>
	)
}
