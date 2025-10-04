import clsx from 'clsx'
import { FC } from 'react'

interface IProps {
	size?: 'nav' | 'body'
	className?: string
	children: JSX.Element | React.ReactNode
}

const styles = {
	nav: 'max-w-[1280px] tablet:max-w-[95%] mobile:!max-w-[92%] mx-auto',
	body: 'max-w-[1280px] tablet:max-w-[95%] mobile:!max-w-[92%] mx-auto'
} as const

export const Wrapper: FC<IProps> = ({ size = 'body', className, children }) => {
	return <div className={clsx(className, styles[size], 'flex')}>{children}</div>
}
