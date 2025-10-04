import { CSSProperties, FC } from 'react'
import { ReactComponent as ArrowLeft } from '@icons/arrow-l.svg'
import { ReactComponent as ArrowRight } from '@icons/Arrow-r.svg'
import clsx from 'clsx'

interface IArrows {
	className?: string
	style?: CSSProperties
	onClick?: () => void
	position?: 'left' | 'right'
}

export const Arrows: FC<IArrows> = ({ className, style, onClick, position }) => {
	return (
		<div className={clsx(className)} onClick={onClick}>
			{position === 'left' ? <ArrowLeft /> : <ArrowRight />}
		</div>
	)
}
