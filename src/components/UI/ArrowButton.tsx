import clsx from 'clsx'
import { FC } from 'react'

interface IArrowButton {
	className?: string
	onClick?: () => void
	style?: CSSStyleRule
	variant: 'prev' | 'next'
}

import styles from '@styles/ArrowButton.module.css'

export const ArrowButton: FC<IArrowButton> = ({ className, onClick, variant }) => {
	return (
		<button className={clsx('absolute', className)} onClick={onClick}>
			<div className={clsx(styles.button, variant === 'next' ? styles.buttonNext : styles.buttonPrev)} />
		</button>
	)
}
