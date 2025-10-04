import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { Reviews } from '@/components/modules/Reviews'
import { Button } from '@/components/UI/Button'
import { Link } from '@/components/UI/Link'
import { Text } from '@/components/UI/Text'

export const metadata = {
	title: 'Smartech Отзывы',
	description: 'Отзывы о продукции Smartech'
}

export default async function CategoriesPage() {
	return (
		<>
			<ContentWrapper
				title='Отзывы'
				description={
					<div className='flex flex-col'>
						<Link href='https://t.me/smartfeedbacks' variant='external' className='mb-5'>
							<Button className='px-4 py-3' variant='primary'>
								Больше отзывов
							</Button>
						</Link>
						<Text>
							Для нас самое важно - это клиентоориентированность и репутация. Именно поэтому у нас более 30000 довольных
							клиентов.
						</Text>
					</div>
				}
			>
				<Reviews />
			</ContentWrapper>
		</>
	)
}
