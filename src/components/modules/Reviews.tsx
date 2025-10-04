'use client'

import { FC } from 'react'
import Image from 'next/image'
import Iphone from '@/app/assets/iphone.png'
import review1 from '@/app/assets/reviewPhotos/6.png'
import review2 from '@/app/assets/reviewPhotos/7.png'
import review3 from '@/app/assets/reviewPhotos/8.png'
import review4 from '@/app/assets/reviewPhotos/9.png'
import review5 from '@/app/assets/reviewPhotos/10.png'
import review6 from '@/app/assets/reviewPhotos/11.png'
import review7 from '@/app/assets/reviewPhotos/12.png'
import review8 from '@/app/assets/reviewPhotos/13.png'
import dynamic from 'next/dynamic'
const CustomSlider = dynamic(() => import('@modules/Slider'))

interface IReviews {}

export const Reviews: FC<IReviews> = () => {
	const photos = [review1, review2, review3, review4, review5, review6, review7, review8]

	return (
		<div className='flex items-center gap-12'>
			<div className='relative tablet:hidden'>
				<Image src={review7} alt='iphone' className='max-h-[480px] max-w-[224px]' />
				<Image
					src={Iphone}
					alt='iphone'
					className='max-h-[540px] max-w-[250px] absolute top-[-13px] left-[-11px] z-50'
				/>
			</div>
			<div className='relative flex items-center justify-center w-[290px] h-[590px]'>
				<Image
					src={Iphone}
					alt='оболочка'
					width={290}
					height={590}
					className='max-h-[570px] max-w-[290px] absolute top-[-17px] left-[-2px] z-50 overflow-hidden'
				/>
				<CustomSlider
					className='relative w-[87%] left-[14px]'
					settings={{
						slidesToShow: 1,
						slidesToScroll: 1,
						tabletSlidesToShow: 1,
						mobileSlidesToShow: 1,
						isArrow: true,
						nextArrowStyles: 'top-[40px] right-[46%] mobile:right-[45%]',
						prevArrowStyles: 'top-[40px] left-[30%] mobile:left-[35%]'
					}}
				>
					{photos.map(item => (
						<Image
							key={item.src}
							src={item}
							alt='iphone'
							width={266}
							height={540}
							className='max-h-[540px] max-w-[266px]'
						/>
					))}
				</CustomSlider>
			</div>

			<div className='relative tablet:hidden'>
				<Image src={review8} alt='iphone' className='max-h-[480px] max-w-[224px]' />
				<Image
					src={Iphone}
					alt='iphone'
					className='max-h-[540px] max-w-[250px] absolute top-[-13px] left-[-11px] z-50'
				/>
			</div>
		</div>
	)
}
