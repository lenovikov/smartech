import { FC } from 'react'
import CustomLink from 'next/link'
import clsx from 'clsx'

interface ILink {
	href: string
	variant?: 'primary' | 'external' | 'secondary'
	className?: string
	isUnderline?: boolean
	children: React.ReactNode
	isActive?: boolean
	handleClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const styles = {
	common: 'text-sm text-opacityPurple',
	secondary: '',
	external: '',
	primary: ''
} as const

export const Link: FC<ILink> = ({
	href,
	variant = 'primary',
	className,
	children,
	isUnderline = false,
	isActive,
	handleClick
}) => {
	if (variant === 'external') {
		return (
			<a href={href as string} target='_blank' className={clsx(styles[variant], className)}>
				{children}
			</a>
		)
	}

	return (
		<CustomLink
			onClick={handleClick}
			href={href}
			className={clsx(styles[variant], styles.common, className, 'group', {
				'text-purple font-semibold': isActive
			})}
		>
			{isUnderline ? (
				<>
					{children}
					<div
						className={clsx('bg-purple h-[2px] w-0 group-hover:w-full transition-all duration-500', {
							'w-full': isActive
						})}
					/>
				</>
			) : (
				children
			)}
		</CustomLink>
	)
}
