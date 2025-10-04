'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export const RedirectTo = () => {
	const router = useRouter()
	useEffect(() => {
		const fetchData = async () => {
			axios
				.get('https://ipapi.co/json/')
				.then(response => {
					if (response?.data?.country !== 'BY') router.replace('https://smarrtech.ru/')
				})
				.catch(error => {})
		}
		fetchData()
	}, [])
	return <></>
}
