import { cn } from '@/lib/utils'
import { FC } from 'react'

interface IText {
	children?: React.ReactNode
	variant?: 'title' | 'base' | 'semi'
	className?: string
}

const styles = {
	title: 'font-semibold text-5xl whitespace-pre-line mobile:text-xl', // 600 / 46
	base: 'text-base whitespace-pre-line mobile:text-sm', // 500/ 16
	semi: 'font-semibold text-lg whitespace-pre-line mobile:text-base' // 600 / 18
} as const

export const Text: FC<IText> = ({ children, className, variant }) => {
	return <p className={cn(variant && styles[variant], className)}>{children}</p>
}
