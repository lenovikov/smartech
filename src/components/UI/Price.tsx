import { FC, ReactNode } from 'react'
import { Text } from '@UI/Text'
import clsx from 'clsx'

interface IPrice {
	country: 'RU' | 'BY'
	children: ReactNode
	className: { wrapper?: string; text?: string; subText?: string }
	preDiscount?: string
}

const variants = {
	RU: 'RUB',
	BY: 'BYN'
} as const

export const Price: FC<IPrice> = ({ country, children, className, preDiscount }) => {
	if (preDiscount !== children && !!preDiscount) {
		return (
			<div className={clsx('flex gap-2 items-end', className?.wrapper)}>
				<Text className={className?.text}>{`${preDiscount} ${variants[country]}`}</Text>
				<Text
					className={clsx('text-opacityPurple line-through', className?.subText)}
				>{`${children} ${variants[country]}`}</Text>
			</div>
		)
	}
	return (
		<div className={clsx('flex gap-2 items-end', className?.wrapper)}>
			<Text className={className?.text}>{`${children} ${variants[country]}`}</Text>
		</div>
	)
}
