'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FC, MutableRefObject, ReactElement, ReactNode, useRef } from 'react'
import clsx from 'clsx'
import Slider, { Settings } from 'react-slick'
import { ArrowButton } from '../UI/ArrowButton'

interface ISlider {
	children: ReactNode
	className?: string
	isButtonHidden?: boolean
	settings: Settings & {
		tabletSlidesToShow: number
		tabletSlidesToScroll?: number
		mobileSlidesToShow: number
		isArrow: boolean
		prevArrowStyles?: string
		nextArrowStyles?: string
		isArrowMobile?: boolean
	}
}

const CustomSlider: FC<ISlider> = ({ className, children, settings }) => {
	const sliderRef = useRef<Slider | null>(null)
	const {
		slidesToShow,
		slidesToScroll,
		speed = 500,
		arrows,
		swipe,
		dots = false,
		tabletSlidesToShow,
		tabletSlidesToScroll,
		mobileSlidesToShow,
		prevArrowStyles = '',
		nextArrowStyles = '',
		isArrow,
		autoplay = false,
		autoplaySpeed,
		swipeToSlide = false,
		infinite,
		customPaging,
		isArrowMobile = true
	} = settings || {}

	const updatedSettings: Settings = {
		speed,
		slidesToShow,
		slidesToScroll,
		arrows,
		swipe,
		dots,
		autoplay,
		autoplaySpeed,
		infinite,
		customPaging,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: isArrowMobile,
					slidesToShow: tabletSlidesToShow || 2,
					slidesToScroll: tabletSlidesToScroll || 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: isArrowMobile,
					slidesToShow: mobileSlidesToShow || 2,
					fade: true,
					slidesToScroll: 1,
					initialSlide: 1,
					swipeToSlide
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: isArrowMobile,
					vertical: false,
					verticalSwiping: false,
					slidesToShow: mobileSlidesToShow || 2,
					slidesToScroll: 1,
					swipeToSlide
				}
			}
		]
	}
	return (
		<div className={clsx('w-full h-full')}>
			<Slider ref={sliderRef} {...updatedSettings} className={clsx('slider-wrapper', className)}>
				{children}
			</Slider>
			{isArrow && (
				<div className='flex relative h-[40px] justify-center'>
					<ArrowButton
						variant='prev'
						className={prevArrowStyles}
						onClick={() => {
							sliderRef?.current?.slickPrev()
						}}
					/>
					<ArrowButton
						variant='next'
						className={nextArrowStyles}
						onClick={() => {
							sliderRef?.current?.slickNext()
						}}
					/>
				</div>
			)}
		</div>
	)
}

export default CustomSlider
