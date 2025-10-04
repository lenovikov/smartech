'use client'

import { FC } from 'react'
import { Button } from '@UI/Button'

import { ReactComponent as Plus } from '@icons/plus.svg'
import { ReactComponent as Minus } from '@icons/Minus.svg'
import { changeQuantity } from '@/store/slices/cartSlice'
import { useAppDispatch } from '@/hooks/store'

interface ICounter {
	quantity: number
	id: number
}

export const Counter: FC<ICounter> = ({ quantity, id }) => {
	const dispatch = useAppDispatch()
	const changeQuantityByButtons = (type: 'minus' | 'plus') => {
		if (type === 'plus') {
			dispatch(changeQuantity({ id, quantity: quantity + 1 }))
		} else {
			dispatch(changeQuantity({ id, quantity: quantity - 1 }))
		}
	}

	return (
		<div className='max-w-[85px] flex flex-nowrap border-2 rounded border-opacityPurple'>
			<Button variant='default' handleClick={() => changeQuantityByButtons('minus')}>
				<Minus />
			</Button>
			<input
				value={quantity}
				type='number'
				disabled
				className='w-full text-center bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
			/>
			<Button variant='default' handleClick={() => changeQuantityByButtons('plus')}>
				<Plus />
			</Button>
		</div>
	)
}
