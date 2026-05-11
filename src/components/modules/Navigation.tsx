'use client'

import { NavigationLinks } from '@/types/common'
import { FC } from 'react'
import { Link } from '@UI/Link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface INavigation {
	links: NavigationLinks
	className?: string
	additionalFunc?: (e: React.MouseEvent<HTMLElement>) => void
}

export const Navigation: FC<INavigation> = ({ links, className, additionalFunc }) => {
	const pathname = usePathname() || ''

	return (
		<div className={clsx('flex', className)}>
			{links.map(({ label, href }) => {
				const isActive = pathname.split('/')[1] === href.split('/')[1]

				return (
					<Link
						className='mx-3 navigation-link'
						key={label}
						href={href}
						variant='primary'
						isUnderline
						isActive={isActive}
						handleClick={additionalFunc}
					>
						{label}
					</Link>
				)
			})}
		</div>
	)
}
