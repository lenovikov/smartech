'use client'

import { FC } from 'react'
import { Button } from './Button'
import clsx from 'clsx'
import { CartIcon } from '@icons/CartIcon'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addToCart } from '@store/slices/cartSlice'
import { IProduct } from '@/types/common'

interface ICartButton {
	className: string
	product: IProduct
	isIcon?: boolean
}

export const AddProductToCartButton: FC<ICartButton> = ({ className, product, isIcon = false }) => {
	const dispatch = useAppDispatch()

	const { products } = useAppSelector(state => state.persist) || { products: [] }

	const existProductInCart = products.some(({ id: productId }) => product.id === productId)

	const handleAddToCart = () => {
		dispatch(addToCart(product))
	}

	if (isIcon) {
		return (
			<Button disabled={existProductInCart} variant='icon' className={clsx(className)} handleClick={handleAddToCart}>
				<CartIcon fill={existProductInCart} />
			</Button>
		)
	}

	return (
		<Button disabled={existProductInCart} className={clsx(className)} handleClick={handleAddToCart}>
			{existProductInCart ? 'Товар в корзине' : 'Добавить в корзину'}
		</Button>
	)
}
