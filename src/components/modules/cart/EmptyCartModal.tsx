import { Button } from '@/components/UI/Button'
import { Link } from '@/components/UI/Link'
import { Text } from '@/components/UI/Text'
import { FC } from 'react'
import { Modal } from '@modules/Modal'

interface IEmptyCartModal {
	isOpen: boolean
}

import styles from '@styles/modal.module.css'
import clsx from 'clsx'

export const EmptyCartModal: FC<IEmptyCartModal> = ({ isOpen }) => {
	return (
		<Modal isOpen={isOpen} className='w-full h-[600px] max-w-[700px] mobile:max-w-[90%] mobile:h-[380px]'>
			<div className={clsx(styles.modalContentCart, 'mobile:h-auto')}>
				<Text variant='title' className='text-purple'>
					Корзина
				</Text>
				<Text className='text-2xl mobile:text-sm'>Ваша корзина пуста</Text>
				<div className={clsx(styles.emptyCartImage)} />
				<Link href='/catalog'>
					<Button variant='primary' className='p-4 mobile:p-2 mobile:!text-sm'>
						Перейти в каталог
					</Button>
				</Link>
			</div>
		</Modal>
	)
}
