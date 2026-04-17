import { FC } from 'react'
import GuaranteeImage from './GuaranteeImage'
import { Text } from '@/components/UI/Text'

interface IGuarantee {}

export const Guarantee: FC<IGuarantee> = () => {
	return (
		<div className='flex items-center tablet:flex-wrap'>
			<div className='basis-2/3 mr-10 tablet:basis-full'>
				<div className='text-xl mobile:text-sm'>
					<span>
						Мы предоставляем официальную гарантию на 1 год, которая распространяется на любые заводские браки.
					</span>

					<div className='mt-2'>
						<span>Гарантийное обслуживание осуществляется сервисным центром:</span>
						<ul>
							<li className='text-base'>ООО "КОММЕРУС"</li>
							<li className='text-base'>Адрес: Ул. Алибегова, 14</li>
							<li className='text-base'>Контактный номер: +375333783859</li>
							<li className='text-base'>ремя работы сервисного центра:</li>
							<li className='text-base'>С 09.00 до 19.00 в будние дни.</li>
							<li className='text-base'>С 11.00 до 15.00 - суббота</li>
							<li className='text-base'>Выходной- воскресенье.</li>
						</ul>
					</div>

					<Text className='text-purple mt-7 mb-3'>Гарантийными случаями не являются:</Text>
					<ul className=''>
						<li className='flex mb-5'>
							<Text className='mr-1'>1.</Text>
							<Text>
								Неправильное использование продукта, несоответствующее инструкции по эксплуатации или предназначению
								продукта.
							</Text>
						</li>
						<li className='flex mb-5'>
							<Text className='mr-1'>2.</Text>
							<Text>
								Повреждение продукта, вызванное внешними факторами, такими как падение, удар, разлитие жидкости или
								воздействие агрессивных веществ.
							</Text>
						</li>
						<li className='flex mb-5'>
							<Text className='mr-1'>3.</Text>
							<Text>Износ продукта из-за естественного использования или неправильного ухода за ним.</Text>
						</li>
						<li className='flex mb-5'>
							<Text className='mr-1'>4.</Text>
							<Text>Внесение изменений в продукт без согласования с производителем или продавцом.</Text>
						</li>
						<li className='flex mb-5'>
							<Text className='mr-1'>5.</Text>
							<Text>
								Ремонт или модификация продукта сторонними лицами без согласования с производителем или продавцом.
							</Text>
						</li>
						<li className='flex mb-5'>
							<Text className='mr-1'>6.</Text>
							<Text>
								Неисправность продукта, вызванная обстоятельствами непреодолимой силы, такими как пожар, наводнение,
								землетрясение и т. д.
							</Text>
						</li>
					</ul>
				</div>
			</div>
			<div className='basis-1/3 max-lg:basis-full mt-3 tablet:basis-full'>
				<GuaranteeImage />
			</div>
		</div>
	)
}
