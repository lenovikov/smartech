import { FC } from 'react'
import { Text } from '@UI/Text'
import { Link } from '@UI/Link'
import { Button } from '@UI/Button'

interface IDelivery {}

export const Delivery: FC<IDelivery> = () => {
	return (
		<div>
			<div className='flex justify-around gap-6 tablet:flex-wrap'>
				<div className='basis-1/3 shadow-lg rounded-lg bg-white px-10 pt-12 pb-7 tablet:basis-full'>
					<Text className='text-3xl font-semibold text-center mb-8 text-purple'>По Минску</Text>
					<div className=''>
						<Text className='font-semibold mb-7'>По Минску есть два способа доставки:</Text>
						<ul className='lg:block leading-7'>
							<li className='flex font-semibold mb-3'>
								<span className='mr-1'>1.</span>
								<span>Доставка курьером к удобному для Вас адресу в пределах МКАДа:</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>
									Доставка осуществляется на следующий будний день после оформления заказа или через день при сильной
									загруженности курьера. Если Вам нужна срочная доставка день в день - по мере загруженности можем
									отправить заказ Яндекс доставкой.
								</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>График доставки: пн - пт, с 11.00 до 18.00 или с 18.00 до 21.00</span>
							</li>
							<li>Стоимость доставки уточнять у менеджера</li>

							<li className='flex font-semibold mt-7 mb-3'>
								<span className='mr-1 font-semibold'>2.</span>
								<span> Самовывоз:</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>
									Самовывоз осуществляется на следующий будний день после оформления заказа. Если Вам нужна срочная
									доставка день в день - по мере загруженности можем осуществить самовывоз день в день (уточнять у
									менеджера).
								</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Забрать товар можно с понедельника по пятницу после согласовании времени самовывоза</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Адрес самовывоза - ул. Бирюзова 12а, каб. 8</span>
							</li>
							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Стоимость - бесплатно</span>
							</li>
							<li className='mt-7'>
								Оплата наличными, либо безналичными по реквизитам расчетного счета (через приложение Вашего банка)
							</li>
							<li className='mt-7'>
								В случае безналичного расчета - сразу сообщите при оформлении заказа, оплата производится заранее, чтобы
								доставка курьером/самовывоз были максимально оперативными, без ожиданий
							</li>
						</ul>
					</div>
				</div>
				<div className='basis-1/3 bg-white shadow-lg rounded-lg px-10 pt-12 pb-7 tablet:basis-full'>
					<Text className='text-3xl font-semibold text-center mb-8 text-purple '>По Беларуси</Text>
					<div className=''>
						<p className='font-semibold mb-7'>По Беларуси у нас есть 4 способа доставки</p>
						<ul className=''>
							<li className='flex font-semibold mb-3'>
								<span className='mr-1'>1.</span>
								<span>Курьерская доставка по Беларуси до двери:</span>
							</li>
							<li className='flex mb-7'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Производится в течение 1-3 дней на удобный для Вас адрес в течение дня.</span>
							</li>
							<li className='flex font-semibold mb-3'>
								<span className='mr-1'>2.</span>
								<span>Обычная доставка Европочтой:</span>
							</li>
							<li className='flex mb-7'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Производится в течение 3-ех дней.</span>
							</li>

							<li className='flex font-semibold my-3'>
								<span className='mr-1 font-semibold'>3.</span>
								<span> Обычная доставка Белпочтой:</span>
							</li>

							<li className='flex mb-7'>
								<span className='mr-1 font-semibold'>-</span>
								<span> Производится в течение 3-ех рабочих дней (включая субботу).</span>
							</li>

							<li className='flex font-semibold my-3'>
								<span className='mr-1 font-semibold'>4.</span>
								<span>Экспресс доставка курьером к квартире:</span>
							</li>

							<li className='flex'>
								<span className='mr-1 font-semibold'>-</span>
								<span> Сегодня отправляем - завтра/послезавтра заказ уже у Вас.</span>
							</li>

							<li className='flex mb-3'>
								<span className='mr-1 font-semibold'>-</span>
								<span>Доставка осуществляется курьером на удобный для Вас адрес в течение дня.</span>
							</li>

							<li className='my-7'>Оплата производится наложенным платежом при получении заказа💰</li>

							<li className='flex'>
								<span>По стоимости доставки уточнять у менеджера.</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='basis-1/3 shadow-lg bg-white rounded-lg  px-10 pt-12 pb-7 tablet:basis-full'>
					<p className='text-3xl font-semibold text-center mb-8 text-purple'>По странам СНГ</p>

					<li className='flex mb-7 justify-center'>
						<Link href='https://t.me/+ncsQe4IfCFo4NDA6' variant='external'>
							<Button className='py-3 px-5 bg-purple text-white'>Написать менеджеру</Button>
						</Link>
					</li>
				</div>
			</div>
		</div>
	)
}
