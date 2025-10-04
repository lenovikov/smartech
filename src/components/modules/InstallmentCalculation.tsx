'use client'
import { useAppSelector } from '@/hooks/store'
import { FC, useEffect, useState } from 'react'
import { Text } from '../UI/Text'
import { cn } from '@/lib/utils'
import { IProduct } from '@/types/common'

interface IInstallmentCalculation {
	isShortVersion?: boolean
	className?: string
	price: string
	changeInstallment?: (item: {}) => void
	product?: IProduct
}

export const InstallmentCalculation: FC<IInstallmentCalculation> = ({
	isShortVersion,
	className,
	price,
	changeInstallment,
	product
}) => {
	const { products } = useAppSelector(state => state.persist)
	const foundProductInCart = products.find(({ id: productId }) => product?.id === productId)
	const [installmentMonth, setInstallmentMonth] = useState(foundProductInCart?.installment?.month || '3')
	const { installmentsVariants } = useAppSelector(state => state.session)
	const objectKeys = Object.keys(installmentsVariants)

	const priceWithInstallment = isShortVersion
		? Math.round(+price * (1 + installmentsVariants[objectKeys?.at(-1)] / 100) * (1 + 7 / 100) * 100) / 100
		: Math.round(+price * (1 + installmentsVariants[installmentMonth] / 100) * (1 + 7 / 100) * 100) / 100

	const monthPayment = isShortVersion
		? (priceWithInstallment / +objectKeys?.at(-1)).toFixed(2)
		: (priceWithInstallment / +installmentMonth).toFixed(2)

	const handleChangeInstallment = item => {
		setInstallmentMonth(item)
	}

	useEffect(() => {
		changeInstallment &&
			changeInstallment({ month: installmentMonth, monthPrice: monthPayment, fullPrice: priceWithInstallment })
	}, [installmentMonth])

	// const monthPayment
	if (isShortVersion) {
		return (
			<Text variant='base' className={cn(className, 'mb-4')}>
				{`от ${monthPayment} BYN/мес`}
			</Text>
		)
	}

	return (
		<>
			<div className='flex flex flex-wrap gap-4 mb-6'>
				{objectKeys.map(item => (
					<button
						key={item}
						disabled={!!foundProductInCart}
						className={cn(
							'border border-gray-200 px-4 py-1 rounded-lg flex flex-col items-center justify-center w-[52px] h-[65px] cursor-pointer',
							{
								'border-opacity': installmentMonth === item
							}
						)}
						onClick={() => handleChangeInstallment(item)}
					>
						<Text variant='semi' className='text-opacity text-xl'>
							{item}
						</Text>
						<Text className='text-opacityPurple'>мес</Text>
					</button>
				))}
			</div>
			<Text className='font-semibold text-3xl mb-2'>{`от ${monthPayment} BYN/мес`}</Text>
			<Text variant='base' className='text-sm'>
				<span className='font-semibold'>0 BYN</span> - Первоначальный взнос
			</Text>
			{/* <Text variant='base' className='text-sm'>
				<span className='font-semibold'>{priceWithInstallment} BYN</span> - Итоговая стоимость
			</Text> */}
		</>
	)
}
