import { FC } from 'react'
import { Button } from '@UI/Button'
import { Link } from '@UI/Link'

import { WelcomeScreenSlider } from '@UI/WelcomeScreenSlider'
import { Banners } from '@UI/Banners'
import { IBanner } from '@/types/common'

import styles from '@styles/welcome.module.css'
import clsx from 'clsx'

interface IWelcomeScreen {
	banners: IBanner[]
}

export const WelcomeScreen: FC<IWelcomeScreen> = ({ banners }) => {
	return (
		<div className='mb-14 flex flex-col'>
			<Banners
				banners={banners}
				variant='main'
				className='max-w-[1280px] tablet:max-w-[95%] mobile:!max-w-[92%] mx-auto flex justify-center items-center'
			/>
			<div className='flex items-center grow my-[90px] tablet:flex-wrap mobile:my-14'>
				<div className='basis-[45%] flex flex-col items-end justify-center tablet:basis-full tablet:items-center tablet:mb-14'>
					<div>
						<div className='text-blackPurple text-5xl font-extrabold leading-[64px] whitespace-nowrap mb-6 mobile:text-2xl'>
							<p className='mobile:text-center'>
								<span className='text-purple'>SMARTECH</span> - магазин
							</p>
							<p className='mobile:text-center'>премиальной копии</p>
							<p className='mobile:text-center'>трендовой техники</p>
						</div>

						<div className='flex tablet:justify-between mobile:flex-col'>
							<Link href='/catalog' className=' mr-10 mobile:mr-0 mobile:mb-4 mobile:text-center mobile:w-auto'>
								<Button className='w-[203px] py-3 tablet:w-[220px] mobile:px-1 mobile:text-sm'>
									Перейти в каталог
								</Button>
							</Link>

							<Link href='https://t.me/smartech_by' variant='external' className='mobile:text-center mobile:w-auto'>
								<Button className='w-[203px] py-3 tablet:w-[220px]  mobile:px-1 mobile:text-sm' variant='secondary'>
									Написать менеджеру
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div
					className={clsx(
						styles.square,
						'basis-[55%] max-h-[270px] flex items-center tablet:basis-full  tablet:h-[300px]'
					)}
				>
					<div className='relative pl-[30px] z-40 w-[120%] mobile:pl-[inherit] mobile:w-full'>
						<WelcomeScreenSlider />
					</div>
				</div>
			</div>
		</div>
	)
}
