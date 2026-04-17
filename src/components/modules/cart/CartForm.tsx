'use client'
import { Button } from '@/components/UI/Button'
import { Link } from '@/components/UI/Link'
import { ICartProduct } from '@/types/common'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import { Text } from '@/components/UI/Text'

import styles from '@styles/modal.module.css'
import clsx from 'clsx'
import { Loader } from '@/components/UI/Loader'

interface IProps {
	products: ICartProduct[]
}

const deliveryVariants = [
	{ id: 'pickup', label: 'Самовывоз бесплатно' },
	{ id: 'deliveryMinsk', label: 'Курьер по Минску - от 12р' },
	{ id: 'deliveryRB', label: 'Курьер по РБ - от 18р' },
	{ id: 'post', label: 'Почта - от 6р' },
	{ id: 'postEuro', label: 'Европочта - от 5р' }
]

export const CartForm = ({ products }: IProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const [selectedOption, setSelectedOption] = useState('pickup')
	const [isLoading, setLoading] = useState(false)
	const [isSuccess, setSuccess] = useState(false)

	const onSubmit = async (data: any) => {
		const delivery = deliveryVariants.find(({ id }) => id === selectedOption)?.label
		const productsList = products.map(({ name, quantity, cost }) => `${name} ${quantity}шт ${cost}byn \n`)
		setLoading(true)
		const response = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...data, delivery, productsList })
		})

		if (response.ok) {
			reset()
			setSelectedOption('pickup')
			setLoading(false)
			setSuccess(true)
		}
	}
	const hasInstalment = products.some(product => product?.installment)
	const isHiddenAddress = selectedOption === 'pickup'

	return (
		<>
			<Modal
				isOpen={isSuccess || isLoading}
				closeModal={() => {
					setSuccess(false)
				}}
				className='relative rounded-lg p-0 w-full h-[600px] max-w-[700px] mobile:max-w-[90%] mobile:h-[380px]'
			>
				{isLoading ? (
					<div className='w-full h-full flex items-center justify-center'>
						<Loader />
					</div>
				) : (
					<div className={clsx(styles.modalContentCart, 'mobile:h-auto')}>
						<Text variant='title' className='text-purple'>
							Заказ успешно оформлен
						</Text>
						<Text className='text-2xl mobile:text-sm'>Менеджер свяжется с Вами в течении 10 минут</Text>
						<div className={clsx(styles.emptyCartImage)} />
						<Link href='/catalog'>
							<Button variant='primary' className='p-4 mobile:p-2 mobile:!text-sm'>
								Перейти в каталог
							</Button>
						</Link>
					</div>
				)}
			</Modal>
			<form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto p-6 bg-white rounded-lg shadow-md'>
				<h2 className='text-2xl font-bold mb-6 text-gray-800'>Оформление заказа</h2>
				{/* Name Fields */}
				<div className='gap-4 mb-6'>
					<div>
						<label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>
							Имя *
						</label>
						<input
							type='text'
							id='firstName'
							{...register('firstName', { required: 'Имя обязательно' })}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
								errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
							}`}
							placeholder='Введите имя'
						/>
						{errors.firstName?.message && (
							<p className='mt-1 text-sm text-red-600'>{errors.firstName?.message as string}</p>
						)}
					</div>

					<div>
						<label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>
							Фамилия *
						</label>
						<input
							type='text'
							id='lastName'
							{...register('lastName', { required: 'Фамилия обязательна' })}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
								errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
							}`}
							placeholder='Введите фамилию'
						/>
						{errors.lastName && <p className='mt-1 text-sm text-red-600'>{errors.lastName.message as string}</p>}
					</div>

					<div>
						<label htmlFor='patronymic' className='block text-sm font-medium text-gray-700 mb-1'>
							Отчество *
						</label>
						<input
							type='text'
							id='patronymic'
							{...register('patronymic', { required: 'Отчество обязательно' })}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
								errors.patronymic ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
							}`}
							placeholder='Введите отчество'
						/>
						{errors.patronymic && <p className='mt-1 text-sm text-red-600'>{errors.patronymic.message as string}</p>}
					</div>
				</div>
				{/* Phone Number */}
				<div className='mb-6'>
					<label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
						Номер телефона *
					</label>
					<input
						type='tel'
						id='phone'
						{...register('phone', {
							required: 'Номер телефона обязателен'
						})}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
							errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
						}`}
						placeholder={__COUNTRY__ === 'RU' ? '+7 (999) 999-99-99' : '+375 (99) 999-99-99'}
					/>
					{errors.phone && <p className='mt-1 text-sm text-red-600'>{errors.phone.message as string}</p>}
				</div>
				{/* Address */}
				{!isHiddenAddress && (
					<div className='mb-6'>
						<label htmlFor='address' className='block text-sm font-medium text-gray-700 mb-1'>
							Адрес доставки *
						</label>
						<textarea
							id='address'
							{...register('address', { required: 'Адресс обязателен' })}
							rows={3}
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200'
							placeholder='Введите адрес доставки'
						/>
						{errors.address && <p className='mt-1 text-sm text-red-600'>{errors.address.message as string}</p>}
					</div>
				)}
				{/* Radio Group */}
				<div className='mb-8'>
					<label className='block text-sm font-medium text-gray-700 mb-3'>Способ доставки *</label>
					<div className='space-y-2'>
						{deliveryVariants.map(option => (
							<div key={option.id} className='flex items-center'>
								<input
									type='radio'
									id={option.id}
									name='deliveryMethod'
									value={option.id}
									checked={selectedOption === option.id}
									onChange={() => setSelectedOption(option.id)}
									className='h-4 w-4 text-blue-600 focus:ring-blue-500'
								/>
								<label htmlFor={option.id} className='ml-3 block text-sm text-gray-700'>
									{option.label}
								</label>
							</div>
						))}
					</div>
					{selectedOption === '' && <p className='mt-1 text-sm text-red-600'>Выберите способ доставки</p>}
				</div>
				{/* Submit Button */}
				<Button disabled={hasInstalment || isLoading} variant='primary' type='submit' className='px-4 py-3 w-full mb-2'>
					Оформить заказ
				</Button>

				{hasInstalment && (
					<>
						<p className='mb-2'>
							Если хотите оформить рассрочку, сделайте скриншот вашей корзины и отправьте нашему менеджеру по ссылке
							ниже
						</p>
						<Link href='https://t.me/smartech_by' variant='external' className='mb-3'>
							<Button className='px-4 py-3 w-full' variant='primary'>
								Написать менеджеру
							</Button>
						</Link>
					</>
				)}
			</form>
		</>
	)
}
