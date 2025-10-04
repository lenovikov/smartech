import clsx from 'clsx'
import { FC } from 'react'

interface ILoader {
	className?: string
}

export const Loader: FC<ILoader> = ({ className }) => {
	return <div className={clsx(className, 'rounded-full h-20 w-20 bg-purple animate-ping')} />
}
