import { FC } from 'react'
import product1 from '@assets/mainScreenProducts/big_headphone.png'
import product2 from '@assets/mainScreenProducts/headphone_air.png'
import product3 from '@assets/mainScreenProducts/marhsall.png'
import product4 from '@assets/mainScreenProducts/smart_watch.png'
import product5 from '@assets/mainScreenProducts/smart_watch_pro.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const products = [product1, product2, product3, product4, product5]
const CustomSlider = dynamic(() => import('@modules/Slider'))

interface IWelcomeScreenSlider {}

export const WelcomeScreenSlider: FC<IWelcomeScreenSlider> = () => {
	return (
		<CustomSlider
			className=''
			settings={{
				tabletSlidesToShow: 3,
				mobileSlidesToShow: 1,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				isArrow: false
			}}
			isButtonHidden
		>
			{products.map(item => (
				<div>
					<Image
						key={item.src}
						width={247}
						height={274}
						className='max-w-[274px] max-h-[274px] mx-auto'
						src={item}
						alt='Наушники'
					/>
				</div>
			))}
		</CustomSlider>
	)
}
