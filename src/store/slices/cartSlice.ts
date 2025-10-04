import { ICartProduct, IProduct } from '@/types/common'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState {
	products: ICartProduct[]
}

const initialState: CartState = {
	products: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<IProduct>) => {
			const { regular_price, price, installment, variant } = payload

			if (variant === 'installment' && installment?.fullPrice)
				state.products.push({
					...payload,
					quantity: 1,
					cost: +installment?.fullPrice,
					installmentSum: +installment?.fullPrice
				})
			if (variant === 'price' && price) state.products.push({ ...payload, quantity: 1, cost: +price, sum: +price })
			if (variant === 'regular' && regular_price)
				state.products.push({ ...payload, quantity: 1, cost: +regular_price, sum: +regular_price })
		},

		deleteProduct: (state, { payload }: PayloadAction<number>) => {
			state.products = state.products.filter(item => item.id !== payload)
		},

		changeQuantity: (state, { payload }: PayloadAction<{ id: number; quantity: number }>) => {
			const product = state.products.find(({ id }) => id === payload.id)

			if (payload.quantity === 0) {
				state.products = state.products.filter(item => item.id !== payload.id)
			} else {
				if (product) {
					product.quantity = payload.quantity
					if (product.sum) {
						product.sum = Number((+product.cost * payload.quantity).toFixed(2))
					} else {
						product.installmentSum = Number((+product.cost * payload.quantity).toFixed(2))
					}
				}
			}
		}
	}
})

export const { addToCart, deleteProduct, changeQuantity } = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer
