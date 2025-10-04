'use client'
import { FC, useEffect, useMemo, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@UI/radio-group'
import { IAttribute } from '@/types/common'
import { CommonList } from '@modules/CommonList'
import { useRouter } from 'next/navigation'
import { Text } from './Text'

interface IColorGroup {
	attributes: IAttribute[]
	slug?: string
	onChange?: (color: string) => void
	color?: string
	title?: string
	className?: string
}

const colors = {
	blue: 'text-blue-button',
	violet: 'text-violet-button',
	red: 'text-red-button',
	black: 'text-black-button',
	brown: 'text-brown-button',
	fucksiya: 'text-fucksiya-button',
	ceramic: 'text-ceramic-button',
	topaz: 'text-topaz-button',
	nickel: 'text-nickel-button',
	vincablue: 'text-vincablue-button',
	prussianblue: 'text-prussianblue-button',
	strawberrybronze: 'text-strawberrybronze-button',
	ceramicpink: 'text-ceramicpink-button',
	graphit: 'text-graphit-button',
	silver: 'text-silver-button',
	green: 'text-green-button',
	pink: 'text-pink-button',
	orange: 'text-orange-button',
	midnight: 'text-midnight-button',
	stars: 'text-stars-button',
	lightblue: 'text-lightblue-button',
	golden: 'text-golden-button'
} as const

export const ColorGroup: FC<IColorGroup> = ({ attributes, slug, onChange, color: propsColor, title, className }) => {
	const router = useRouter()
	const color = slug?.split('-')[slug?.split('-').length - 1] || propsColor

	const [isChecked, setIsChecked] = useState(color)

	useEffect(() => {
		propsColor && setIsChecked(propsColor)
	}, [propsColor])

	const colorsMap = useMemo(
		() =>
			attributes
				?.find(({ name }) => name === 'color')
				?.options?.map((color, index) => ({
					name: color,
					color: color,
					id: index
				})) || [],
		[]
	)

	const getProduct = (color: string, slug: string): string => {
		const splited = slug?.split('-')
		return `${splited.slice(0, splited.length - 1).join('-')}-${color}`
	}

	return (
		<>
			{!!colorsMap.length && (
				<div className={className}>
					{title && (
						<Text variant='base' className='mb-2 font-semibold'>
							{title}
						</Text>
					)}
					<RadioGroup defaultValue='color'>
						<CommonList
							className='flex'
							items={colorsMap}
							renderItem={({ id, color, name }) => (
								<div key={id} className='flex items-center mr-2'>
									<RadioGroupItem
										className={`${colors[color]}`}
										value='option-one'
										id='color'
										checked={isChecked === name}
										onClick={() => (onChange ? onChange(color) : router.push(`${getProduct(name, slug)}`))}
									/>
								</div>
							)}
						/>
					</RadioGroup>
				</div>
			)}
		</>
	)
}
