'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { Text } from '@UI/Text'
import { IProduct, IVariation } from '@/types/common'
import { Price } from '@UI/Price'
import { Link } from '@UI/Link'
import { AddProductToCartButton } from '@UI/AddProductToCartButton'
import { Present } from './Present'
import { ColorGroup } from '../UI/ColorGroup'
import { InstallmentCalculation } from './InstallmentCalculation'

const isRussia = __COUNTRY__ === 'RU'

interface IProductCard {
	className?: string
	product: IProduct
	categoryId: string
	href?: string
	variant?: 'small' | 'big'
	isExistPresent?: boolean
	products?: IProduct[]
}

const styles = {
	wrapper: 'transition hover:scale-105 basis-1/3 bg-red shadow-lg rounded-lg flex flex-col justify-between'
}

export const ProductCard: FC<IProductCard> = ({
	product,
	className,
	categoryId,
	href,
	isExistPresent = false,
	products
}) => {
	const { images, name, regular_price, slug, price, attributes } = product

	const colorOptions = attributes.find(({ name }) => name === 'color')?.options || []

	const isColorExist = !!colorOptions.length
	const defaultColor = isColorExist ? colorOptions[0] : null

	const defaultChosenProduct = !!colorOptions.length
		? products?.filter(item => item.slug === `${slug}-${defaultColor}`)[0]
		: product

	const [color, setColor] = useState(colorOptions[0])
	const [chosenProduct, setChosenProduct] = useState({ ...defaultChosenProduct, price, regular_price })

	const chosenImages = images.find(({ alt }) => alt === color) || images[0]

	const linkSlug = isColorExist ? `${slug}-${color}` : slug

	const path = href || `${categoryId}/${linkSlug}`

	const handleChangeProduct = color => {
		const chosenProduct = products?.filter(item => item.slug === `${slug}-${color}`)

		setChosenProduct({ ...chosenProduct[0], price, regular_price })
		setColor(color)
	}

	return (
		<div className={clsx(styles.wrapper, className, 'bg-white')}>
			<>
				<Link href={path} className={clsx('flex justify-center pt-3 px-7 py-5')}>
					<Image width={300} height={300} className='max-h-[300px]' src={chosenImages.src} alt={images[0]?.name} />
				</Link>

				<div className={clsx('flex justify-between grow text-left text-blackPurple ', 'mb-5 px-5')}>
					<div className='w-full flex flex-col justify-between'>
						<Text variant='base' className={clsx('mb-3 font-medium')}>
							{name}
						</Text>
						<Price className={{ text: 'text-xl font-semibold', wrapper: '' }} country={__COUNTRY__} preDiscount={price}>
							{regular_price}
						</Price>
						{isRussia ? <></> : <InstallmentCalculation className='mb-4' isShortVersion price={regular_price} />}

						<ColorGroup
							className='mb-4'
							attributes={attributes}
							color={color}
							onChange={color => {
								handleChangeProduct(color)
							}}
						/>
						{isExistPresent && (
							<div className='mb-4'>
								<Present attributes={attributes} variant='short' />
							</div>
						)}
						<AddProductToCartButton
							className='py-[12px]'
							product={{ ...chosenProduct, variant: price ? 'price' : 'regular' }}
						/>
					</div>
				</div>
			</>
		</div>
	)
}
