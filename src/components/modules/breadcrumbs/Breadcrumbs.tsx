import { Link } from '@/components/UI/Link'
import clsx from 'clsx'
import { FC } from 'react'
import { ReactComponent as ArrowIcon } from '@icons/arrow.svg'
import { Text } from '@/components/UI/Text'
import { IBreadCrumb } from '@/types/common'
import styles from '@styles/breadcrumbs.module.css'

interface IBreadcrumbs {
	href?: string
	className?: string
	isCart?: boolean
	breadcrumbs?: IBreadCrumb[]
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ href, className, isCart, breadcrumbs = [] }) => {
	const arr = [{ name: 'Главная', path: '/' }, { name: 'Каталог', path: '/catalog' }, ...breadcrumbs]

	if (isCart) {
		return (
			<div className={clsx(className)}>
				<Link href='/catalog' className='flex items-center relative'>
					<ArrowIcon className='absolute top-[3px] left-0' />
					<Text className='pl-6'>Вернуться в каталог</Text>
				</Link>
			</div>
		)
	}

	return (
		<div className={clsx(className, 'flex')}>
			{arr.map(({ path, name }) => (
				<Link key={path} className={styles.breadcrumbRoute} href={String(path)}>
					{name}
				</Link>
			))}
		</div>
	)
}
