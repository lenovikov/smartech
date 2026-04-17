import TikTokIcon from '@icons/tiktok.svg'
import TelegramIcon from '@icons/telegram.svg'
import InstagramIcon from '@icons/instagram.svg'
import YouTubeIcon from '@icons/youtube.svg'
import { Link } from '@UI/Link'
import { FC } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface SocialButtons {
	className?: string
}

export const SocialButtons: FC<SocialButtons> = ({ className }) => {
	return (
		<div className={clsx('social-buttons flex mr-4 mobile:gap-2', className)}>
			<Link
				className='mr-2 tablet:mr-0 relative w-[26px] h-[26px]'
				variant='external'
				href='https://www.youtube.com/@smartechbyy?si=aAiYBjWOgZKe6eLQ'
			>
				<Image fill={true} className='mx-1' src={YouTubeIcon} alt='youTube' />
			</Link>
			<Link
				className='mr-2 tablet:mr-0 relative w-[26px] h-[26px]'
				variant='external'
				href='https://www.tiktok.com/@smartechby?_t=8i4TpEGojQL&_r=1'
			>
				<Image fill={true} className='mx-1' src={TikTokIcon} alt='tiktok' />
			</Link>
			<Link className='mr-2 relative w-[26px] h-[26px] tablet:mr-0' variant='external' href='https://t.me/smartech_by'>
				<Image fill={true} className='mx-1' src={TelegramIcon} alt='telegram' />
			</Link>
			<Link className='relative w-[26px] h-[26px]' variant='external' href='https://www.instagram.com/smartech.by'>
				<Image fill={true} className='mx-1' src={InstagramIcon} alt='instagram' />
			</Link>
		</div>
	)
}
