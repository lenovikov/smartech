'use client'

import { FC, useState } from 'react'
import { Wrapper } from '@UI/Wrapper'
import { ReactComponent as Logo } from '@icons/Logo.svg'
import { MainCartIcon } from '@UI/MainCartIcon'
import { Button } from '../UI/Button'
import clsx from 'clsx'
import { Navigation } from './Navigation'
import { SocialButtons } from '../UI/SocialButtons'
import { headerLinks } from '@/helpers/Consts'
import { Link } from '@UI/Link'
import styles from '@styles/navigation.module.css'
import { Text } from '../UI/Text'

interface IMobileNavigation {}

export const MobileNavigation: FC<IMobileNavigation> = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
		setIsOpen(prev => !prev)
	}

	return (
		<Wrapper size='nav' className={clsx(styles.navigationMobile, 'py-3 h-[72px]')}>
			<div className='w-full flex justify-between'>
				<Button
					variant='icon'
					className={clsx(styles.burgerButton, 'w-[32px] relative', { [styles.open]: isOpen })}
					handleClick={handleOpenMenu}
				>
					<div className={styles.burgerLines} />
				</Button>
				<Link href='/'>
					<Logo />
				</Link>
				<MainCartIcon />
			</div>
			<div onClick={handleOpenMenu} className={clsx(styles.navigationMobileMenu, { [styles.open]: isOpen })}>
				<div className='flex basis-1/2 flex-col bg-purple pt-[72px]'>
					<Navigation links={headerLinks} className={styles.mobileBurgerText} />
					<a href='tel:+375336370202' className='ml-4 mb-4'>
						<Text variant='semi' className='text-white'>
							+375336370202
						</Text>
					</a>
					<SocialButtons className='ml-5' />
				</div>
			</div>
		</Wrapper>
	)
}
