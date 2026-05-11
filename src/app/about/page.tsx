import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { Text } from '@UI/Text'
import Image from 'next/image'
import image1 from '@assets/about1.png'
import image2 from '@assets/about2.png'

export const metadata = {
	title: 'Smartech Информация',
	description: 'Информация о магазине Smartech'
}

export default function AboutPage() {
	return (
		<ContentWrapper title='О магазине'>
			<div className='flex items-center justify-between mb-24 flex-wrap'>
				<Image src={image1} alt='photo' className='mobile:mb-[48px]' />
				<div className='basis-[50%] mobile:basis-full'>
					<Text variant='semi' className='ml-[128px] text-2xl mobile:ml-0'>
						<span className='text-purple'>SMARTECH</span> - магазин трендовой техники - это официальный онлайн-магазин
						самых качественных копий техники и товаров с высоким уровнем сервиса.
					</Text>
				</div>
			</div>
			<div className='flex items-center justify-between mobile:flex-wrap'>
				<div className='basis-[50%] mobile:order-2 mobile:basis-full'>
					<Text variant='base' className='mr-[128px] mobile:mr-0'>
						{`Мы верим, что техника должна быть по справедливой цене, при этом самого высокого качества. \n\nМы делаем все, чтобы каждый наш клиент получил ответы на все вопросы и остался максимально довольным покупкой. На все представленные товары в нашем ассортименте действует официальная гарантия в течение 1 года.\n\n С 2021 года мы	предлагаем продукцию, которая проверена и точно заслуживает вашего внимания. Мы работаем ежедневно с 09:00 до 20:00, поэтому в случае возникновения каких-либо вопросов Вы можете смело обращаться по указанным	контактам на сайте и мы сразу же Вам ответим.`}
					</Text>
				</div>
				<Image src={image2} alt='photo' className='mobile:order-1 mobile:mb-[48px]' />
			</div>
			{/* <Text variant='semi'>Мы в социальных сетях</Text> */}
		</ContentWrapper>
	)
}
