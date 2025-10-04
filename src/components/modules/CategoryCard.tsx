import { FC } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { ICategory } from '@/types/common'
import { Link } from '@UI/Link'
import { Text } from '@UI/Text'

interface ICategoryCard {
	category: ICategory
	className?: string
	href?: string
}

const styles = {
	wrapper:
		'transition hover:scale-105 min-w-[260px] max-w-[260px] basis-1/4 bg-red pt-4 px-5 shadow-lg rounded-lg flex flex-col justify-between mobile:min-w-[158px]'
}

export const CategoryCard: FC<ICategoryCard> = ({ category, className, href }) => {
	const { image, name, id } = category
	const path = href || `catalog/${id}`

	return (
		<Link href={path} className={clsx(styles.wrapper, className, 'bg-white')}>
			<div className='flex justify-center w-full relative mb-3'>
				<Image
					src={image?.src}
					width={214}
					height={215}
					alt={name}
					className='max-h-[215px] mobile:w-[140px] mobile:h-[140px]'
				/>
			</div>
			<Text
				variant='semi'
				className='text-2xl text-blackPurple flex justify-center text-center mb-3 min-h-[60px] items-center mobile:min-h-[0px]'
			>
				{name}
			</Text>
			<p className='border-t-4 border-solid rounded-t-md border-purple' />
		</Link>
	)
}
