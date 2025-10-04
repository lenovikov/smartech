import { FC } from 'react'
import { Text } from '@UI/Text'
import { Button } from '@UI/Button'
import { Link } from '@UI/Link'

interface IDeliveryRu {}

export const DeliveryRu: FC<IDeliveryRu> = () => {
	return (
		<div>
			<div>
				<Text className='text-xl mb-7'>Мы доставляем наши товары по странам СНГ!</Text>
				<div className='flex gap-16 mobile:flex-wrap'>
					<div className='basis-1/2 rounded-lg shadow-lg px-10 pt-12 pb-7 bg-white mobile:basis-full'>
						<Text className='text-3xl font-semibold text-center mb-8 text-purple'>СДЭК</Text>
						<div className=''>
							<ul className=''>
								<li className='flex'>
									<span className='mr-1 font-semibold'>-</span>
									<span>
										Доставка осуществляется в течение 2-5 дней до удобного для Вас отделения(если Ваш населенный пункт
										находится далеко, то сроки доставки могут увеличиваться)
									</span>
								</li>

								<li className='flex'>
									<span className='mr-1 font-semibold'>-</span>
									<span>Цену доставки уточняйте у менеджера.</span>
								</li>

								<li className='flex'>
									<span className='mr-1 font-semibold'>-</span>
									<span>Доставка по РФ и странам СНГ.</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='flex flex-col shadow-lg items-center bg-white basis-1/2 px-10 pt-12 pb-7 mobile:basis-full'>
						<Text className='text-3xl font-semibold text-center mb-8 text-purple max-lg:text-lg max-lg:text-4'>
							По всему Миру
						</Text>

						<Link href='https://t.me/+ncsQe4IfCFo4NDA6' variant='primary'>
							<Button className='px-4 py-3' variant='primary'>
								Написать менеджеру
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
