'use client'
import { getProduct } from '@/api/requests'
import { useAppDispatch } from '@/hooks/store'
import { addInstallment } from '@/store/slices/commonSlice'
import { FC, useEffect } from 'react'

interface IInstallment {}

export const InstallmentVariant: FC<IInstallment> = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		const getProductRequest = async () => {
			const product = await getProduct({
				slug: 'instalment'
			})
			const installment = product[0].attributes?.reduce((acc, { name, options }) => {
				acc[name] = options[0]
				return acc
			}, {})

			dispatch(addInstallment(installment))
		}

		getProductRequest()
	}, [])

	return null
}
