import { IAttribute } from '@/types/common'
import { FC } from 'react'
import presentIcon from '@assets/present-icon.png'
import { Text } from '@UI/Text'
import clsx from 'clsx'
import Image from 'next/image'

interface IPresent {
	attributes: IAttribute[]
	className?: string
	variant?: 'base' | 'short'
}

export const Present: FC<IPresent> = ({ attributes = [], className, variant = 'base' }) => {
	const { options } = attributes?.find(({ name }) => name?.includes('одарок')) || { options: [] }

	return options[0]?.length ? (
		<div className={clsx('flex items-center w-full bg-bg-present-purple rounded-lg p-2', className)}>
			<Image src={presentIcon} className='min-w-[56px]' width={55} height={55} alt='Подарок' />
			<div className='ml-1 text-left'>
				<Text className='font-medium text-base mobile:text-sm'>В подарок</Text>
				<Text
					variant='base'
					className={clsx('text-opacityPurple leading-4', { 'present-description': variant === 'short' })}
				>
					{options}
				</Text>
			</div>
		</div>
	) : null
}
