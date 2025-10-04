import { getCategory, getProductsByCategory } from '@/api/requests'
import { CommonList } from '@/components/modules/CommonList'
import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { ProductCard } from '@/components/modules/ProductCard'
import { asyncReducer } from '@/helpers/helpers'
import { ICategory, IProduct } from '@/types/common'

const isRussiaCurrency = __COUNTRY__ === 'RU'

async function getProductsByCategoryData(categoryId: string) {
	const products = await getProductsByCategory({
		category: categoryId,
		per_page: '100',
		...(isRussiaCurrency ? { currency: 'RUB' } : {})
	})
	// // массив вариациий для каждого товара
	// const variations = await asyncReducer(products, async item => ({
	// 	id: item.id,
	// 	variants: await getVariationByProduct(item.id)
	// }))

	return { products }
}

// export async function generateStaticParams() {
// 	const categories: ICategory[] = await api<ICategory[]>({ path: 'products/categories' })

// 	return categories?.map(category => ({
// 		id: String(category.id)
// 	}))
// }

async function getCategoryData(id: string) {
	const category = await getCategory(id)

	return { category }
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {}

export default async function CommonPage({ params }: { params: { id: string } }) {
	const { id } = params

	const { products } = await getProductsByCategoryData(id)

	const visibleProducts = products.filter(item => item.catalog_visibility !== 'hidden')

	const { category } = await getCategoryData(id)

	return (
		<ContentWrapper title={category.name}>
			<CommonList<IProduct>
				className='gap-24 grid grid-cols-3 tablet:grid-cols-2 tablet:gap-16 mobile:!grid-cols-1 mobile:!gap-8 mobile:justify-items-center'
				items={visibleProducts}
				renderItem={item => (
					<ProductCard
						key={item.id}
						product={item}
						categoryId={id}
						className='w-[360px] mobile:min-w-[360px] mb-4'
						products={products}
					/>
				)}
			/>
		</ContentWrapper>
	)
}
