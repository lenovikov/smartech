import { FC, ReactNode } from 'react'
import { Wrapper } from '@UI/Wrapper'
import { Text } from '@UI/Text'
import clsx from 'clsx'
import { Breadcrumbs } from '@modules/breadcrumbs/Breadcrumbs'
import { IBreadCrumbProps } from '@/types/common'

interface IContentWrapper {
	title?: string | ReactNode
	description?: string | ReactNode
	className?: string
	children: React.ReactNode
	breadcrumbs?: IBreadCrumbProps
}

export const ContentWrapper: FC<IContentWrapper> = ({ title, children, description, breadcrumbs, className }) => {
	return (
		<Wrapper
			className={clsx('mb-24 flex-col items-center mobile:mb-[48px]', className, { 'mt-12 mobile:mt-6': !title })}
		>
			{breadcrumbs && <Breadcrumbs className='mb-7' />}
			{title && (
				<Text variant='title' className='mb-14 mobile:mb-7 text-center leading-[64px]'>
					{title}
				</Text>
			)}

			{description && (
				<Text variant='base' className='font-medium mb-14 max-w-[550px] text-center text-opacityPurple mobile:text-sm'>
					{description}
				</Text>
			)}
			<>{children}</>
		</Wrapper>
	)
}
