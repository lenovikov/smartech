import { TrashIcon } from '@/components/icons/TrashIcon'
import { Button } from '@/components/UI/Button'
import { Counter } from '@/components/UI/Counter'
import { Price } from '@/components/UI/Price'
import { Text } from '@/components/UI/Text'
import { useAppDispatch } from '@/hooks/store'
import { deleteProduct } from '@/store/slices/cartSlice'
import { ICartProduct } from '@/types/common'
import Image from 'next/image'
import { FC } from 'react'
import { Present } from '@modules/Present'

interface ICartItem {
	product: ICartProduct
}

const isRussia = __COUNTRY__ === 'RU'

export const CartItem: FC<ICartItem> = ({ product }) => {
	const dispatch = useAppDispatch()

	const { name, sum, quantity, id, images, attributes, installment, installmentSum } = product

	return (
		<div className='border-gray py-5 border-t-2'>
			<div className='flex items-center justify-between flex tablet:hidden'>
				<div className='flex items-center gap-6'>
					<div className='w-[100px] h-[100px] relative'>
						<Image src={images[0].src} fill={true} object-fit='fill' alt={images[0].name} className='mb-3' />
					</div>
					<Text className='w-[170px] m-w-[170px] mobile:text-base' variant='semi'>
						{name}
					</Text>
				</div>
				<div>
					<Counter quantity={quantity} id={id} />
				</div>
				<div className='max-w-[130px]'>
					<Price country={__COUNTRY__} className={{ wrapper: ' w-[130px]', text: 'font-semibold text-lg' }}>
						{sum || installmentSum}
					</Price>
					{installment?.monthPrice && !isRussia && (
						<div>
							<Text className='text-sm'>{`${installment?.monthPrice} BYN/мес`}</Text>
							<Text variant='base' className='text-sm'>
								Первоначальный взнос - 0 BYN
							</Text>
						</div>
					)}
				</div>
				<Button
					variant='icon'
					className=''
					handleClick={() => {
						dispatch(deleteProduct(id))
					}}
				>
					<TrashIcon />
				</Button>
			</div>
			<div className='flex py-5  items-center justify-between gap-4 hidden tablet:flex'>
				<div className='w-[100px] h-[100px] relative'>
					<Image src={images[0].src} fill={true} object-fit='fill' alt={images[0].name} className='mb-3' />
				</div>
				<div className='flex flex-col justify-between h-full flex-1 gap-3'>
					<div className='flex justify-between items-start'>
						<Text className='w-[170px] m-w-[170px] mobile:text-base' variant='semi'>
							{name}
						</Text>
						<Button
							variant='icon'
							className=''
							handleClick={() => {
								dispatch(deleteProduct(id))
							}}
						>
							<TrashIcon />
						</Button>
					</div>
					<div className='flex justify-between'>
						<div className='max-w-[130px]'>
							<Price country={__COUNTRY__} className={{ wrapper: ' w-[130px]', text: 'font-semibold text-lg' }}>
								{sum || installmentSum}
							</Price>
						</div>
						<Counter quantity={quantity} id={id} />
					</div>
				</div>
			</div>
			<Present className='mt-3' attributes={attributes} />
		</div>
	)
}
