'use client'

import { IAttribute, IImage } from '@/types/common'
import Image from 'next/image'
import { FC, useState } from 'react'
import guaranteeIcon from '@assets/guarantee-icon.png'
import SearchIcon from '@assets/search.svg'
import playIcon from '@assets/playIcon.svg'
import { usePathname } from 'next/navigation'
import CustomSlider from './Slider'
import { VideoPlayer } from './VideoPlayer'
import { cn } from '@/lib/utils'
import { Modal } from './Modal'
import { Button } from '../UI/Button'
import CloseIcon from '@icons/close.svg'

interface IImageSlider {
	images: IImage[]
	className?: string
	attributes?: IAttribute[]
}

const ImageSlider: FC<IImageSlider> = ({ images: defaultImages = [], className, attributes }) => {
	const { options } = attributes?.find(({ name }) => name?.includes('mainvideo')) || { options: [] }
	const [isShowModal, setIsShowModal] = useState(false)
	const images = options[0] ? defaultImages.slice(0, 6) : defaultImages

	const pathname = usePathname()
	const [chosenImage, setChosenImage] = useState(images[0] || { src: '', name: '', source: '' })
	const isHiddenGuaranteeIcon = ['48', '27'].includes(pathname.split('/')[2])

	return (
		<>
			<Modal
				className='w-[40%] bg-transparent'
				isOpen={isShowModal}
				closeModal={() => {
					setIsShowModal(false)
				}}
			>
				<div className='flex w-full h-full bg-transparent '>
					<CustomSlider
						className=''
						settings={{
							slidesToShow: 1,
							tabletSlidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							mobileSlidesToShow: 1,
							isArrow: true,
							className: 'slider variable-width',
							swipeToSlide: true,
							swipe: true,
							nextArrowStyles: 'top-0 right-[45%] mobile:right-[46%]',
							prevArrowStyles: 'top-0 left-[43%] mobile:left-[35%]'
						}}
					>
						{images.length > 1 &&
							images.map(({ id, name, src }) => (
								<div key={id} className='relative cursor-pointer'>
									<Image width={700} height={700} src={src} alt={name} className='rounded-lg w-full h-full' />
								</div>
							))}
					</CustomSlider>
					<Button
						variant='icon'
						className='absolute w-[50px] right-[0%] top-[0%]'
						handleClick={() => {
							setIsShowModal(false)
						}}
					>
						<Image src={CloseIcon} width={90} height={90} alt={'Иконка старта видео'} />
					</Button>
				</div>
			</Modal>

			<div className={cn(`flex flex-col mobile:w-full mobile:basis-full ${className}`)}>
				<div className='flex order-2 mobile:w-[110%] h-[80px]'>
					<CustomSlider
						className='product-images-slider'
						settings={{
							slidesToShow: images.length < 6 ? images.length : 5,
							tabletSlidesToShow: images.length < 6 ? images.length : 4,
							slidesToScroll: 1,
							infinite: false,
							mobileSlidesToShow: images.length < 6 ? images.length : 4,
							isArrow: false,
							className: 'slider variable-width',
							swipeToSlide: true,
							swipe: true
						}}
					>
						{options[0] && (
							<div className='relative' onClick={() => setChosenImage({ src: options[0], name: '', source: 'video' })}>
								<Image
									width={64}
									height={80}
									src={images[0]?.src}
									alt={images[0]?.name}
									className='rounded-lg h-[80px] mobile:max-w-[335px]'
								/>
								<Image
									src={playIcon}
									width={48}
									height={48}
									className='absolute right-[11px] bottom-[14px] cursor-pointer'
									alt={chosenImage.name}
								/>
							</div>
						)}
						{images.length > 1 &&
							images.map(({ id, name, src }) => (
								<div
									key={id}
									className='relative cursor-pointer'
									onClick={() => setChosenImage(images.find(img => img.id === id) || images[0])}
								>
									<Image width={64} height={80} src={src} alt={name} className='rounded-lg h-[80px]' />
								</div>
							))}
					</CustomSlider>
				</div>
				<div className='relative mb-4 cursor-pointer order-1 max-h-[460px] mobile:order-1 mobile:w-full mobile:flex mobile:justify-center'>
					{chosenImage?.source === 'video' ? (
						<div className='w-[468px] h-[460px] max-w-[468px] max-h-[460px]'>
							<VideoPlayer playing={true} controls={true} url={chosenImage.src} />
						</div>
					) : (
						<div className='relative'>
							<Image
								src={chosenImage.src}
								width={468}
								height={460}
								alt={chosenImage.name}
								className='rounded-lg max-h-[460px] main-image'
							/>
							<Button
								variant='icon'
								className='search-icon absolute rounded-lg w-full h-full bg-opacity top-0 left-0 flex justify-center items-center'
								handleClick={() => {
									setIsShowModal(true)
								}}
							>
								<Image src={SearchIcon} width={90} height={90} className='' alt={'Иконка увеличения картинки'} />
							</Button>
						</div>
					)}

					{!isHiddenGuaranteeIcon && (
						<Image
							src={guaranteeIcon}
							width={90}
							height={90}
							className='absolute right-0 bottom-0'
							alt={'Иконка старта видео'}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default ImageSlider
