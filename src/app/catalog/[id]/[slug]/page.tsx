import { getAllProducts, getBanners, getCategory, getProduct, getProductsByCategory } from '@/api/requests'

import { ContentWrapper } from '@/components/modules/ContentWrapper'

import { ProductInfo } from '@/components/modules/ProductInfo'
import { IProduct } from '@/types/common'

const isRussiaCurrency = __COUNTRY__ === 'RU'

async function getProductsByCategoryData(categoryId: string) {
	const products = await getProductsByCategory({
		category: categoryId,
		per_page: '100',
		...(isRussiaCurrency ? { currency: 'RUB' } : {})
	})

	return { products }
}

async function getProductData(params) {
	const product = await getProduct({ ...params, per_page: '100', ...(isRussiaCurrency ? { currency: 'RUB' } : {}) })

	return { product }
}

async function getBannersData() {
	const banners = await getBanners()
	return { banners }
}

async function getCategoryData(id: string) {
	const category = await getCategory(id)

	return { category }
}

export async function generateStaticParams() {
	const products: IProduct[] = await getAllProducts()

	return products.map(product => ({
		id: product.categories?.length ? String(product.categories[0]?.id || 0) : '0',
		slug: product.slug
	}))
}

export default async function ProductPage({ params }: { params: { id: string; slug: string } }) {
	const { id, slug } = params

	const { banners } = await getBannersData()
	const { products: popularProducts } = await getProductsByCategoryData('50') // TODO
	const { product: searchedProduct } = await getProductData({ slug })
	const mainProductSlug = slug.split('-').includes('main') && slug.split('-').slice(0, -1).join('-')

	let mainProduct: IProduct[]

	if (mainProductSlug) {
		const { product } = await getProductData({ slug: mainProductSlug })
		mainProduct = product
	}

	const { category } = await getCategoryData(id)

	let product: IProduct = searchedProduct[0]
	let kitProducts: IProduct[] = []

	if (mainProduct?.length) {
		product = {
			...product,
			regular_price: mainProduct[0].regular_price,
			price: mainProduct[0].price,
			attributes: mainProduct[0].attributes,
			upsell_ids: mainProduct[0].upsell_ids
		}
	}

	if (product?.upsell_ids.length) {
		const { product: products } = await getProductData(
			product?.upsell_ids.reduce((acc, id) => {
				acc[`include[${id}]`] = `${id}`

				return acc
			}, {})
		)

		kitProducts = [...products]
	}

	const breadcrumbs = [{ name: category.name, path: `/catalog/${category.id}` }]

	return (
		<ContentWrapper>
			<ProductInfo
				product={product}
				popularProducts={popularProducts}
				kitProducts={kitProducts}
				breadcrumbs={breadcrumbs}
				banners={banners}
			/>
		</ContentWrapper>
	)
}
