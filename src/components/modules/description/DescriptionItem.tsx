import { Text } from '@/components/UI/Text'
import { IAttribute } from '@/types/common'

import clsx from 'clsx'
import { FC } from 'react'

interface IDescriptionItem {
	attribute: IAttribute
}

export const DescriptionItem: FC<IDescriptionItem> = ({ attribute }) => {
	const { name, options } = attribute

	return (
		<div className='mb-12'>
			<Text variant='semi' className='text-2xl text-blackPurple mb-4'>
				{name}
			</Text>
			<div className={''}>
				<Text variant='base' className={clsx('text-blackPurple mb-2')}>
					{options}
				</Text>
			</div>
		</div>
	)
}
