import { FC } from 'react'
import { Text } from '@UI/Text'
import { IBanner, IBreadCrumb, IProduct, IVariation } from '@/types/common'
import { DescriptionSection } from '@modules/description/DescriptionSection'
import { ProductCard } from '@modules/ProductCard'
import { Present } from '@modules/Present'
import { Breadcrumbs } from '@modules/breadcrumbs/Breadcrumbs'
import { Banners } from '@UI/Banners'
import CustomSlider from '@modules/Slider'
import ImageSlider from '@modules/ImageSlider'
import { ColorGroup } from '@UI/ColorGroup'
import { PaymentVariants } from './PaymentVariants'
import { DeliveryInfoShortBlock } from './DeliveryInfoShortBlock'
import { SizeGroup } from '../UI/SizeGroup'

interface IProductInfo {
	product: IProduct
	kitProducts: IProduct[]
	popularProducts: IProduct[]
	breadcrumbs?: IBreadCrumb[]
	banners: IBanner[]
}

export const ProductInfo: FC<IProductInfo> = ({ product, popularProducts, kitProducts, breadcrumbs, banners }) => {
	const { images, name, regular_price, slug } = product || {}

	return (
		<>
			<Banners banners={banners} variant='product' className='mb-5 h-[130px]' />
			<Breadcrumbs className='w-full mb-6' breadcrumbs={breadcrumbs} />
			<Text className='text-[36px] leading-[48px] w-full text-left font-bold mb-8 mobile:text-[26px] mobile:leading-[28px]'>
				{name}
			</Text>
			<div className='gap-16 flex-row justify-around flex w-full mb-20 mobile:flex-wrap mobile:gap-8'>
				<div className='flex flex-col basis-[36%] max-w-[468px] mobile:w-full'>
					<ImageSlider images={images} attributes={product?.attributes} className='' />
				</div>
				<div className='flex flex-col basis-[25%] tablet:basis-full'>
					<div className='mb-8 mobile:mb-6'>
						<Text variant='semi' className='text-base mb-2'>
							Наличие
						</Text>
						<Text variant='base' className='text-purple text-sm'>
							Товар в наличии
						</Text>
					</div>
					<ColorGroup attributes={product?.attributes} slug={slug} title='Цвет' className='mb-8 mobile:mb-6' />
					<SizeGroup title='Размер' attributes={product?.attributes} />
				</div>
				<div className='flex flex-col max-w-[357px] basis-[28%] mobile:basis-[100%]'>
					<Present attributes={product?.attributes} className='mb-5' />
					<PaymentVariants product={product} regularPrice={regular_price} />
					<DeliveryInfoShortBlock />
				</div>
			</div>
			<div className='w-full'>
				<DescriptionSection attributes={product?.attributes} />
			</div>
			<div className='w-full tablet:basis-full mb-[100px] mobile:mb-[30px]'>
				{!!kitProducts.length && (
					<>
						<Text className='text-left font-semibold text text-2xl mb-6 pl-[35px] mobile:text-[24px] mobile:pl-0 mobile:text-center'>
							Набором дешевле:
						</Text>
						<CustomSlider
							className='w-[120%] mobile:w-full kit-slider'
							settings={{
								tabletSlidesToShow: 4,
								mobileSlidesToShow: 1,
								slidesToShow: 4,
								slidesToScroll: 1,
								isArrow: true,
								nextArrowStyles: 'top-0 right-[49%] mobile:right-[46%]',
								prevArrowStyles: 'top-0 left-[46%] mobile:left-[35%]',
								infinite: true
							}}
						>
							{kitProducts.map(item => (
								<ProductCard
									isExistPresent
									key={item.id}
									product={item}
									className='max-w-[360px]  mb-8 mobile:mx-auto'
									categoryId={'/catalog/kit'}
								/>
							))}
						</CustomSlider>
					</>
				)}
			</div>
			<div className='w-full tablet:basis-full'>
				<Text className='text-left font-semibold text text-2xl mb-6 pl-[35px] mobile:text-[24px] mobile:pl-0 mobile:text-center'>
					Рекомендуем также:
				</Text>
				<CustomSlider
					className='w-[120%] mobile:w-full'
					settings={{
						tabletSlidesToShow: 4,
						mobileSlidesToShow: 1,
						slidesToShow: 4,
						slidesToScroll: 1,
						isArrow: true,
						infinite: true,
						nextArrowStyles: 'top-0 right-[49%] mobile:right-[46%]',
						prevArrowStyles: 'top-0 left-[46%] mobile:left-[35%]'
					}}
				>
					{popularProducts.map(item => (
						<ProductCard
							isExistPresent
							key={item.id}
							product={item}
							className='max-w-[360px]  mb-8 mobile:mx-auto'
							categoryId={'/catalog/kit'}
						/>
					))}
				</CustomSlider>
			</div>
		</>
	)
}
