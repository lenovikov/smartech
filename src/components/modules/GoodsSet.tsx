import { FC } from 'react'
import { ContentWrapper } from './ContentWrapper'
import { ProductCard } from './ProductCard'
import CustomSlider from './Slider'
import { getProductsByCategory } from '@/api/requests'

const isRussiaCurrency = __COUNTRY__ === 'RU'

interface IGoodsSet {}

async function getData() {
	const kitProducts = await getProductsByCategory({
		category: '54',
		per_page: '50',
		...(isRussiaCurrency ? { currency: 'RUB' } : {})
	})
	return { kitProducts }
}

export const GoodsSet: FC<IGoodsSet> = async () => {
	const { kitProducts } = await getData()
	return (
		<ContentWrapper title='Набором дешевле' className='mobile:mb-[80px]'>
			<div className='w-full h-full flex'>
				<CustomSlider
					className={'w-[120%] mobile:w-[100%]'}
					settings={{
						slidesToShow: 4,
						tabletSlidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						mobileSlidesToShow: 1,
						isArrow: true,
						nextArrowStyles: 'top-0 right-[49%] mobile:right-[46%]',
						prevArrowStyles: 'top-0 left-[46%] mobile:left-[35%]'
					}}
				>
					{kitProducts.map(item => (
						<div>
							<ProductCard
								isExistPresent
								key={item.id}
								product={item}
								className='max-w-[360px] mb-8 mobile:mx-auto'
								categoryId={'catalog/kit'}
							/>
						</div>
					))}
				</CustomSlider>
			</div>
		</ContentWrapper>
	)
}
