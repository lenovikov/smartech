import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSliceReducer } from '@/store/slices/cartSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { commonSliceReducer } from './slices/commonSlice'

const persistConfig = {
	key: 'smarttech-client',
	storage,
	whitelist: ['persist']
}

export const rootReducer = combineReducers({
	session: commonSliceReducer,
	persist: cartSliceReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
