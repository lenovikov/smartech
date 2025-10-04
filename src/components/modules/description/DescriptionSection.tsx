'use client'
import { IAttribute } from '@/types/common'
import { FC, useState } from 'react'
import { DescriptionItem } from './DescriptionItem'
import { toUppercaseFirstLetter } from '@/helpers/helpers'
import styles from '@styles/description.module.css'
import { Text } from '@/components/UI/Text'

interface IDescriptionSection {
	attributes: IAttribute[]
}

export const DescriptionSection: FC<IDescriptionSection> = ({ attributes = [] }) => {
	const [isShow, setIsShow] = useState(false)
	const requiredAttributes = attributes
		.filter(item => !item.name.includes('подарок') && item.visible)
		.map(item => ({
			...item,
			name: toUppercaseFirstLetter(item.name)
		}))

	const updatedRequiredAttributes = isShow ? requiredAttributes.slice(0, 3) : requiredAttributes

	return (
		<div className={styles.description}>
			{updatedRequiredAttributes.map((item, index) => (
				<DescriptionItem key={index} attribute={item} />
			))}
			{requiredAttributes.length > 3 && (
				<div
					role='button'
					onClick={() => {
						setIsShow(prev => !prev)
					}}
				>
					{isShow ? (
						<Text variant='base' className='text-purple'>
							Показать полностью
						</Text>
					) : (
						<Text variant='base' className='text-purple'>
							Скрыть
						</Text>
					)}
				</div>
			)}
		</div>
	)
}
