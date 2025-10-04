'use client'
import { Text } from '@/components/UI/Text'
import { useAppSelector } from '@/hooks/store'
import { FC } from 'react'
import { CommonList } from '@modules/CommonList'
import { ICartProduct } from '@/types/common'
import { CartItem } from '@modules/cart/CartItem'
import { Price } from '@/components/UI/Price'
import { Link } from '@/components/UI/Link'
import { Button } from '@/components/UI/Button'
import { getProductsSum, getProductsWithoutInstallment } from '@/helpers/helpers'
import { EmptyCartModal } from '@modules/cart/EmptyCartModal'
import { Breadcrumbs } from '@modules/breadcrumbs/Breadcrumbs'

const isRussia = __COUNTRY__ === 'RU'

export const metadata = {
	title: 'Smartech Корзина'
}

interface ICart {}

export const Cart: FC<ICart> = () => {
	const { products } = useAppSelector(state => state.persist)

	const sumWithoutInstallment = getProductsWithoutInstallment(products)

	return (
		<>
			<EmptyCartModal isOpen={!products.length} />
			<div className='flex flex-col w-full'>
				<Breadcrumbs className='mb-7' isCart />
				<Text className='w-full text-left font-semibold text-3xl mb-5'>Корзина</Text>
				<div className='gap-16 flex-row flex w-full tablet:flex-wrap'>
					<div className='basis-2/3 tablet:basis-full'>
						{
							<CommonList<ICartProduct>
								className='flex flex-col'
								items={products}
								renderItem={product => <CartItem product={product} />}
							/>
						}
					</div>

					<div className='flex flex-col basis-1/3 tablet:basis-full'>
						<div className='p-5 bg-gray-100 rounded-lg'>
							<Text className='font-medium text-xl'>В корзине</Text>
							<div className='bg-[#dadada] w-[full] h-px relative overflow-hidden mb-3' />
							<Text className='mb-4'>Товаров : {products.length}</Text>
							<Text>Общая стоимость заказа:</Text>
							<Price country={__COUNTRY__} className={{ text: 'text-xl font-semibold' }}>
								{getProductsSum(products)}
							</Price>
							{!isRussia && !!sumWithoutInstallment && (
								<>
									<Text className='mt-4'>Сейчас к оплате:</Text>
									<Price country={__COUNTRY__} className={{ text: 'text-xl font-semibold' }}>
										{sumWithoutInstallment}
									</Price>
								</>
							)}
							<div className='bg-gray-200 w-[full] h-px relative  mb-3' />
							<div className='py-3 flex flex-col'>
								<p className='pb-5'>
									Пожалуйста, сделайте скриншот вашей корзины и отправьте нашему менеджеру по ссылке ниже. Или вы можете
									просто написать, что именно вас интересует. Чат с менеджером доступен по кнопке ниже. Мы онлайн
								</p>
								<Link href='https://t.me/+ncsQe4IfCFo4NDA6' variant='external' className='mb-3'>
									<Button className='px-4 py-3 w-full' variant='primary'>
										Написать менеджеру
									</Button>
								</Link>
								{!isRussia && (
									<Link href='https://t.me/+ncsQe4IfCFo4NDA6' variant='external'>
										<Button className='px-4 py-3 w-full' variant='primary'>
											Оформить в рассрочку
										</Button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
