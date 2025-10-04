import clsx from 'clsx'
import React, { FC } from 'react'

interface IButton {
	text?: string
	children: React.ReactNode
	handleClick?: (e: React.MouseEvent<HTMLElement>) => void
	variant?: 'primary' | 'secondary' | 'icon' | 'default'
	className?: string
	href?: string
	disabled?: boolean
}

const styles = {
	common: 'cursor-pointer font-semibold text-base',
	primary:
		'transition ease-out duration-500 rounded-md border border-opacityPurple text-white bg-purple hover:bg-white hover:text-blackPurple',
	secondary:
		'transition ease-out duration-500 rounded-md border border-purple text-transparent-purple hover:bg-hover-purple hover:text-white hover:bg-purple',
	icon: '',
	default: '',
	disabled: 'bg-white text-blackPurple border border-opacityPurple rounded-md'
} as const

export const Button: FC<IButton> = ({ handleClick, variant = 'primary', className, children, href, disabled }) => {
	if (variant === 'icon') {
		return (
			<button disabled={disabled} className={clsx(styles.icon, styles.common, className)} onClick={handleClick}>
				{children}
			</button>
		)
	}

	return (
		<button
			disabled={disabled}
			className={clsx(disabled ? styles.disabled : styles[variant], styles.common, className)}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
