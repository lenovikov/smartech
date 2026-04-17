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
import { CartForm } from './CartForm'

const isRussia = __COUNTRY__ === 'RU'

export const metadata = {
	title: 'Smartech Корзина'
}

interface ICart {}

export const Cart: FC<ICart> = () => {
	const { products } = useAppSelector(state => state.persist)

	return (
		<>
			<EmptyCartModal isOpen={!products.length} />
			<div className='flex flex-col w-full'>
				<Breadcrumbs className='mb-7' isCart />
				<Text className='w-full text-left font-semibold text-3xl mb-5'>Корзина</Text>
				<div className='gap-16 flex-row flex w-full tablet:flex-wrap'>
					<div className='basis-2/3 tablet:basis-full'>
						<CommonList<ICartProduct>
							className='flex flex-col'
							items={products}
							renderItem={product => <CartItem product={product} />}
						/>
					</div>

					<div className='flex flex-col basis-1/3 tablet:basis-full'>
						<div className='p-5 bg-gray-100 rounded-lg'>
							<Text className='font-medium text-xl'>В корзине</Text>
							<div className='bg-[#dadada] w-[full] h-px relative overflow-hidden mb-3' />
							<Text className='mb-4'>Товаров : {products.length}</Text>
							<Text>Общая стоимость заказа:</Text>
							<div className='flex items-end gap-x-2'>
								<Price country={__COUNTRY__} className={{ text: 'text-xl font-semibold' }}>
									{getProductsSum(products)}
								</Price>
								+ Доставка
							</div>

							<div className='bg-gray-200 w-[full] h-px relative  mb-3' />
							<div className='py-3 flex flex-col'>
								<p>
									После оформления заказа, с Вами свяжется менеджер для подтверждения заказа и ответит на все Ваши
									вопросы.
								</p>
							</div>
						</div>
						<CartForm products={products} />
					</div>
				</div>
			</div>
		</>
	)
}
