import { ICartProduct, IProduct } from '@/types/common'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
	isAdsBannerShowed: boolean
	installmentsVariants: {}
}

const initialState: CommonState = {
	isAdsBannerShowed: false,
	installmentsVariants: {}
}

export const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		closeAdsBanner: state => {
			state.isAdsBannerShowed = true
		},
		addInstallment: (state, { payload }: PayloadAction<{}>) => {
			state.installmentsVariants = payload
		}
	}
})

export const { closeAdsBanner, addInstallment } = commonSlice.actions
export const commonSliceReducer = commonSlice.reducer
