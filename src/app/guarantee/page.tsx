import { ContentWrapper } from '@/components/modules/ContentWrapper'
import { Guarantee } from '@/components/modules/guarantee/Guarantee'
import { GuaranteeRu } from '@/components/modules/guarantee/GuaranteeRu'

export const metadata = {
	title: 'Smartech Гарантия',
	description: 'Гарантия продукции Smartech'
}

export default async function DeliveryPage() {
	return (
		<>
			<ContentWrapper title='Гарантии'>{__COUNTRY__ === 'RU' ? <GuaranteeRu /> : <Guarantee />}</ContentWrapper>
		</>
	)
}
