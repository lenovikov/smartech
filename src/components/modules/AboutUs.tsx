import { FC } from 'react'
import guaranteeImg from '@assets/guarantee.svg'
import certImg from '@assets/about.svg'
import deliveryImg from '@assets/delivery.svg'
import giftImg from '@assets/price.svg'
import { Text } from '@UI/Text'
import Image from 'next/image'

interface IAboutUs {}

export const AboutUs: FC<IAboutUs> = () => {
	const variants = [
		{
			img: guaranteeImg,
			name: 'Сертификаты \nкачества',
			description: 'Только проверенная \nпродукция'
		},
		{
			img: certImg,
			name: 'Гарантия \nгод',
			description: 'На все приобретенные \nтовары'
		},
		{ img: deliveryImg, name: 'Большие скидки \nи подарки', description: 'Акции к каждому \nпразднику' },
		{
			img: giftImg,
			name: 'Быстрая \nдоставка',
			description: 'Экспресс-доставка за 3 часа \nпо г. Минску'
		}
	]
	return (
		<div className='flex items-center max-h-[256px] w-full bg-white px-8 rounded-lg shadow-lg mobile:flex-col mobile:max-h-none mobile:py-8'>
			{variants.map(({ img, name, description }) => (
				<>
					<div className='py-[43px] flex relative flex-1 shrink-0 pl-[56px] first:pl-0 mobile:p-0 mobile:w-full'>
						<div className='max-w-[256px] w-[256px] mobile:max-w-full mobile:w-full'>
							<Image width={48} height={48} src={img} alt={''} className='mb-4' />
							<Text variant='semi' className='mb-2 text-2xl font-semibold mobile:whitespace-normal'>
								{name}
							</Text>
							<Text variant='base' className='text-gray-600 text-opacityPurple mobile:whitespace-normal'>
								{description}
							</Text>
						</div>
					</div>

					<div className='flex items-center last:hidden mobile:my-[20px]'>
						<div className='inline-block h-[192px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 mobile:w-[192px] mobile:h-[1px] mobile:min-h-[1px]' />
					</div>
				</>
			))}
		</div>
	)
}
