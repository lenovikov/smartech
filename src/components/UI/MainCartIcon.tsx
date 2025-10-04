'use client'
import { FC } from 'react'
import { Link } from '@UI/Link'
import { CartIcon } from '@icons/CartIcon'
import { useAppSelector } from '@/hooks/store'

interface IMainCartIcon {}

export const MainCartIcon: FC<IMainCartIcon> = () => {
	const { products } = useAppSelector(state => state.persist)

	return (
		<Link
			href='/cart'
			variant='secondary'
			className='relative w-[42px] h-[42px] bg-purple rounded-full flex items-center justify-center'
		>
			{products?.length ? (
				<div className='flex justify-center items-center absolute top-[26px] left-[-7px] border-2 border-blackPurple rounded-full w-[24px] h-[24px] bg-white'>
					<span className='text-sm font-semibold'>{products?.length}</span>
				</div>
			) : null}
			<CartIcon className='w-5' color='white' />
		</Link>
	)
}
