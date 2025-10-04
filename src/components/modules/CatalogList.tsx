import { getCategories } from '@/api/requests'
import { ICategory } from '@/types/common'

import { getFilteredCategories } from '@/helpers/helpers'
import { CategoryCard } from './CategoryCard'
import { CommonList } from './CommonList'

async function getData() {
	const categories = await getCategories({ per_page: '50' })

	return { categories }
}

export const CatalogList = async () => {
	const { categories } = await getData()
	return (
		<CommonList<ICategory>
			className='gap-16 grid grid-cols-4 tablet:grid-cols-2 tablet:justify-items-center mobile:gap-6'
			items={getFilteredCategories(categories)}
			renderItem={item => <CategoryCard key={item.id} category={item} />}
		/>
	)
}
