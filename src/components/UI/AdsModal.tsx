'use client'

import { FC, useEffect, useState } from 'react'
import { Modal } from '@modules/Modal'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { IBanner } from '@/types/common'
import { closeAdsBanner } from '@/store/slices/commonSlice'

interface IAdsModal {
	banners: IBanner[]
}

export const AdsModal: FC<IAdsModal> = ({ banners }) => {
	const dispatch = useAppDispatch()
	const { isAdsBannerShowed } = useAppSelector(state => state.session)

	const banner = banners.find(elem => elem.title.rendered === 'modal')?.source_url || ''

	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!isAdsBannerShowed) {
				setShowButton(true)
			}
		}, 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	const handleClose = () => {
		dispatch(closeAdsBanner())
		setShowButton(false)
	}

	return (
		<Modal isOpen={showButton && !!banner} closeModal={handleClose} className='relative rounded-lg !p-0'>
			<Image
				src={banner}
				onClick={handleClose}
				width={500}
				height={500}
				alt={'modal'}
				className='cursor-pointer max-w-[550px] desktop:max-w-[700px] mobile:w-[350px]'
			/>
		</Modal>
	)
}
