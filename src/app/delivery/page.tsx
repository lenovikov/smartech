import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { Delivery } from '@/components/modules/Delivery'
import { DeliveryRu } from '@/components/modules/DeliveryRu'

export const metadata = {
	title: 'Smartech Доставка',
	description: 'Доставка продукции Smartech'
}

export default async function DeliveryPage() {
	return (
		<>
			<ContentWrapper title='Доставка и Оплата'>{__COUNTRY__ === 'RU' ? <DeliveryRu /> : <Delivery />}</ContentWrapper>
		</>
	)
}
