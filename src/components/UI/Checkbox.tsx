import * as CheckboxUI from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import React, { FC } from 'react'

interface IProps {
	checked: boolean
	onClick?: () => void
}

export const Checkbox: FC<IProps> = ({ checked, onClick }) => {
	return (
		<CheckboxUI.Root
			onCheckedChange={onClick}
			checked={checked}
			className='w-6 h-6 rounded-full bg-white border-[1px] data-[state=checked]:bg-purple border-opacityPurple flex items-center justify-center focus:outline-none transition-all'
		>
			<CheckboxUI.Indicator className='text-purple-500'>
				<CheckIcon className='w-4 h-4' color='#ffffff' />
			</CheckboxUI.Indicator>
		</CheckboxUI.Root>
	)
}
