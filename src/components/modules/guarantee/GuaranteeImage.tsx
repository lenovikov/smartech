'use client'

import Image from 'next/image'
import { useState } from 'react'
import guarantee from '@assets/screenshot.jpg'
import { ReactComponent as CloseIcon } from '@icons/close.svg'
import { Button } from '@/components/UI/Button'
import { Modal } from '@modules/Modal'

const GuaranteeImage = () => {
	const [isShowImage, setIsShowImage] = useState(false)

	return (
		<>
			<div className='relative'>
				<Image src={guarantee} alt='guarantee' className='border rounded-lg' />
				<div className='absolute left-0 top-0 bg-black-opacity h-full w-full rounded-lg z-0 flex justify-center items-center'>
					<Button
						handleClick={() => setIsShowImage(true)}
						className='py-3 px-5 bg-purple text-white max-lg:text-sm z-20 absolute left-50 top-50'
					>
						Посмотреть гарантийный талон
					</Button>
				</div>
			</div>
			<Modal
				isOpen={isShowImage}
				closeModal={() => {
					setIsShowImage(false)
				}}
			>
				<div className='h-screen relative'>
					<Image src={guarantee} className='border rounded-lg h-full w-full' alt='Гарантийный талон' />
					<Button variant='icon' className='absolute top-[42px] right-[42px]' handleClick={() => setIsShowImage(false)}>
						<CloseIcon />
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default GuaranteeImage
