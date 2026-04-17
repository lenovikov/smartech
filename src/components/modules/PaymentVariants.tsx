'use client'
import { FC, useEffect, useState } from 'react'
import { Text } from '../UI/Text'
import { Checkbox } from '../UI/Checkbox'
import { IProduct } from '@/types/common'
import { AddProductToCartButton } from '../UI/AddProductToCartButton'
import { Price } from '../UI/Price'
import { InstallmentCalculation } from './InstallmentCalculation'
import { useAppSelector } from '@/hooks/store'

const isRussia = __COUNTRY__ === 'RU'

interface IPaymentVariant {
	isChecked: boolean
	text: string
	onClick: () => void
	product: IProduct
	regularPrice: string
	foundProductInCart?: IProduct
}

const VariantNow: FC<IPaymentVariant> = ({ text, isChecked, onClick, product, regularPrice }) => {
	const { price } = product

	return (
		<div className='shadow-lg p-6 rounded-lg mb-6' onClick={onClick}>
			<div className='flex items-center justify-between'>
				<Text variant='base' className='font-semibold'>
					{text}
				</Text>
				<Checkbox checked={isChecked} />
			</div>
			{isChecked && (
				<div className='mt-6'>
					<Price
						className={{ text: 'text-3xl font-semibold', subText: 'font-semibold', wrapper: 'flex items-center' }}
						country={__COUNTRY__}
						preDiscount={price}
					>
						{regularPrice}
					</Price>
					<AddProductToCartButton
						className='mt-6 py-3 w-full'
						product={{ ...product, regular_price: regularPrice, variant: price ? 'price' : 'regular' }}
					/>
				</div>
			)}
		</div>
	)
}

const VariantInstallment: FC<IPaymentVariant> = ({ text, isChecked, onClick, product, regularPrice }) => {
	const [installment, setInstallment] = useState()

	const changeInstallment = value => {
		setInstallment(value)
	}

	return (
		<div className='shadow-lg p-6 rounded-lg mb-6' onClick={onClick}>
			<div className='flex items-center justify-between'>
				<Text variant='base' className='font-semibold'>
					{text}
				</Text>
				<Checkbox checked={isChecked} />
			</div>
			{isChecked && (
				<div className='mt-6'>
					<InstallmentCalculation price={regularPrice} changeInstallment={changeInstallment} product={product} />
					<AddProductToCartButton
						className='mt-6 py-3 w-full'
						product={{ ...product, regular_price: regularPrice, installment, variant: 'installment' }}
					/>
				</div>
			)}
		</div>
	)
}

interface IPaymentVariants {
	product: IProduct
	regularPrice: string
}

export const PaymentVariants: FC<IPaymentVariants> = ({ product, regularPrice }) => {
	const { products } = useAppSelector(state => state.persist) || { products: [] }
	const foundProductInCart = products.find(({ id: productId }) => product.id === productId)

	const [variant, setVariant] = useState<'now' | 'installment'>(foundProductInCart?.installment ? 'installment' : 'now')

	return (
		<div>
			<VariantNow
				product={product}
				text={'Одним платежом'}
				isChecked={variant === 'now'}
				onClick={() => setVariant('now')}
				regularPrice={regularPrice}
			/>
			{!isRussia && (
				<VariantInstallment
					product={product}
					foundProductInCart={foundProductInCart}
					text={'В рассрочку'}
					isChecked={variant === 'installment'}
					onClick={() => setVariant('installment')}
					regularPrice={regularPrice}
				/>
			)}
		</div>
	)
}
