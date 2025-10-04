import { IBanner, ICategory, IParams, IProduct, IVariation } from '@/types/common'
import { api, mediaApi } from './api'

export const getCategories = async (params: IParams): Promise<ICategory[]> => {
	const response = await api<ICategory[]>({ path: 'products/categories', params })
	return response
}

export const getCategory = async (id: string): Promise<ICategory> => {
	const response = await api<ICategory>({ path: `products/categories/${id}` })
	return response
}

export const getProductsByCategory = async (params: IParams): Promise<IProduct[]> => {
	const response = await api<IProduct[]>({ path: `products`, params })
	return response
}

export const getProduct = async (params: IParams): Promise<IProduct[]> => {
	const response = await api<IProduct[]>({ path: 'products', params })
	return response
}

export const getBanners = async (): Promise<IBanner[]> => {
	const response = await mediaApi<IBanner[]>({ path: 'media', params: { rml_folder: '1', per_page: '50' } })
	return response
}

export const getAllProducts = async (): Promise<IProduct[]> => {
	const allLinks = [
		api<IProduct[]>({ path: 'products', params: { per_page: '100', page: '1' } }),
		api<IProduct[]>({ path: 'products', params: { per_page: '100', page: '2' } })
	]

	const results = await Promise.all(allLinks)

	return results.flat()
}
