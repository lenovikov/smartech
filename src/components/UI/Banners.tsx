import { IBanner } from '@/types/common'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

interface BannersVariant {
	[key: string]: string
}

interface IBanners {
	banners: IBanner[]
	variant: 'product' | 'main'
	className?: string
}

export const Banners: FC<IBanners> = ({ banners, variant = 'main', className }) => {
	const bannersVariants = banners?.reduce((acc, elem) => {
		acc[elem?.title?.rendered] = elem?.source_url
		return acc
	}, {} as BannersVariant)

	return (
		<div className={clsx(`relative w-full  mobile:h-[116px] rounded-lg overflow-hidden`, className)}>
			<Image
				className={'flex mobile:hidden'}
				src={bannersVariants[`desktop-${variant}${variant === 'product' ? `-${__COUNTRY__}` : ''}`]}
				priority={false}
				width={1000}
				height={variant === 'product' ? 118 : 218}
				style={{ width: '100%' }}
				alt={'баннер'}
				quality={100}
			/>
			<Image
				className={'hidden mobile:flex'}
				src={bannersVariants[`mobile-${variant}${variant === 'product' ? `-${__COUNTRY__}` : ''}`]}
				priority={false}
				width={1000}
				height={variant === 'product' ? 118 : 218}
				style={{ maxWidth: '100%' }}
				alt={'баннер'}
				quality={100}
			/>
		</div>
	)
}
