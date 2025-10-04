'use client'
import { cn } from '@/lib/utils'
import { IAttribute } from '@/types/common'
import { FC, useMemo, useState } from 'react'
import { Text } from './Text'

interface ISizeGroup {
	attributes: IAttribute[]
	title: string
}

export const SizeGroup: FC<ISizeGroup> = ({ attributes, title }) => {
	const { options } = useMemo(() => {
		const attribute = attributes.find(({ name }) => name === 'size')

		return { options: attribute?.options || [] }
	}, [])

	const [size, setSize] = useState(options[0])

	if (options?.length) {
		return (
			<div>
				<Text variant='base' className='mb-2 font-semibold'>
					{title}
				</Text>
				{options?.length && (
					<div className='flex gap-1'>
						{options?.map(item => (
							<div
								onClick={() => {
									setSize(item)
								}}
								className={cn('bg-gray-50 border border-gray-50 px-4 py-1 rounded-lg', {
									'border-opacity': size === item
								})}
							>
								{item}
							</div>
						))}
					</div>
				)}
			</div>
		)
	}
}
