'use client'

import clsx from 'clsx'
import { FC, ReactNode, MouseEvent } from 'react'
import styles from '@styles/modal.module.css'
import { cn } from '@/lib/utils'

interface IModal {
	children: ReactNode
	isOpen: boolean
	className?: string
	closeModal?: () => void
}

export const Modal: FC<IModal> = ({ children, isOpen, className, closeModal }) => {
	const closeWindow = (e: MouseEvent<HTMLDivElement>): void => {
		if (e.target === e.currentTarget && closeModal) {
			closeModal()
		}
	}

	return (
		<div className={cn({ [styles.open]: isOpen }, styles.modalOverlay)} onClick={closeWindow}>
			<div className={cn(styles.modal, className)}>{children}</div>
		</div>
	)
}
