export type NavigationLinks = { label: string; href: string }[]

export interface IImage {
	id: number
	src: string
	name: string
	alt: string
	source?: string
}

export interface IParams {
	category?: string
	per_page?: string
	page?: string
	slug?: string
	parent?: string
	currency?: 'RUB'
	rml_folder?: string
}

export interface IProduct {
	slug: string
	id: number
	name: string
	images: IImage[]
	// cо скидкой
	price: string
	image: string
	attributes: IAttribute[]
	regular_price: string
	categories: ICategory[]
	catalog_visibility: 'hidden' | 'visible'
	installment?: {
		month: string
		monthPrice: string
		fullPrice: string
	}
	variant: 'price' | 'regular' | 'installment'
	upsell_ids?: string[]
}

export interface IVariation {
	id: number
	image: IImage
	permalink: string
}

export interface ICartProduct extends IProduct {
	quantity: number
	sum?: number
	cost: number
	installmentSum?: number
}

export interface ICategory {
	id: number
	name: string
	slug: string
	image: IImage
	parent: number
}

export interface IAttribute {
	id: number
	name: string
	position: number
	options: string[]
	visible: boolean
}

export interface IBreadCrumb {
	name: string
	path: string | number
}

export interface IBreadCrumbProps {
	isBack: boolean
}

export interface IBanner {
	source_url: string
	title: {
		rendered: string
	}
}
