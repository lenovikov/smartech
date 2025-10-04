import { ICartProduct, ICategory } from '@/types/common'

export const getFilteredCategories = (categories: ICategory[]): ICategory[] => {
	const filteredCategories = categories?.filter(
		({ name, slug, parent }) => name !== 'Misc' && slug !== 'popular' && !slug.includes('test') && !parent
	)

	return filteredCategories
}

export const toUppercaseFirstLetter = (value: string) => {
	const result = value.split('-')
	result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1)
	return result.join(' ')
}

export const getProductsSum = (products: ICartProduct[]) => {
	const sum = products.reduce((acc, item) => {
		if (item.sum) acc += item.sum
		return acc
	}, 0)
	const installmentSum = products.reduce((acc, item) => {
		if (item.installmentSum) acc += item.installmentSum
		return acc
	}, 0)

	return sum + installmentSum
}

export const getProductsWithoutInstallment = (products: ICartProduct[]) => {
	return products.reduce((acc, item) => {
		if (item.sum) acc += item.sum
		return acc
	}, 0)
}

export const asyncReducer = async (array, method) => {
	let acc = {}

	for (let i = 0; i <= array.length - 1; i++) {
		const { id, variants } = await method(array[i])
		acc[id] = variants
	}
	return acc
}
