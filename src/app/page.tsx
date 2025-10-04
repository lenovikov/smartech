import { getBanners, getCategories, getProductsByCategory } from '@/api/requests'
import { AboutUs } from '@/components/modules/AboutUs'
import { CategoryCard } from '@/components/modules/CategoryCard'
import { CommonList } from '@/components/modules/CommonList'
import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { GoodsSet } from '@/components/modules/GoodsSet'
import { RedirectTo } from '@/components/modules/Redirect'
import { Reviews } from '@/components/modules/Reviews'

import { WelcomeScreen } from '@/components/modules/WelcomeScreen'
import { AdsModal } from '@/components/UI/AdsModal'
import { getFilteredCategories } from '@/helpers/helpers'
import { ICategory } from '@/types/common'

async function getData() {
	const banners = await getBanners()
	const categories = await getCategories({ per_page: '50' })

	return { categories, banners }
}

export default async function Home() {
	const { categories, banners } = await getData()

	return (
		<>
			<RedirectTo />
			<AdsModal banners={banners} />
			<WelcomeScreen banners={banners} />
			<GoodsSet />
			<ContentWrapper title='Категории'>
				<CommonList<ICategory>
					className='gap-16 grid grid-cols-4 tablet:grid-cols-2 tablet:justify-items-center mobile:gap-6'
					items={getFilteredCategories(categories)}
					renderItem={item => <CategoryCard category={item} />}
				/>
			</ContentWrapper>
			<ContentWrapper title='Преимущества'>
				<AboutUs />
			</ContentWrapper>
			<ContentWrapper
				title='Отзывы'
				description='Для нас самое важно - это клиентоориентированность и репутация. Именно поэтому у нас более 30000 довольных клиентов.'
			>
				<Reviews />
			</ContentWrapper>
		</>
	)
}
