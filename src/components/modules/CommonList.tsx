import clsx from 'clsx'
import { ReactElement, ReactNode } from 'react'

interface CommonList<T> {
	items: T[]
	renderItem: (item: T) => ReactElement | ReactNode
	className?: string
}

export const CommonList = <Item extends {}>({ items, renderItem, className }: CommonList<Item>) => {
	return <div className={clsx('w-full', className)}>{items.map(renderItem)}</div>
}
