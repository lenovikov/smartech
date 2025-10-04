import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { CatalogList } from '@/components/modules/CatalogList'

export const metadata = {
	title: 'Smartech Каталог',
	description: 'Каталог продукции smartech'
}

export default async function CategoriesPage() {
	return (
		<ContentWrapper title='Категории'>
			<CatalogList />
		</ContentWrapper>
	)
}
