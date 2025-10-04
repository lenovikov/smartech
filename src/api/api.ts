import { IParams } from '@/types/common'

interface IProps {
	path: string
	method?: 'GET'
	params?: IParams
}

export const api = async <T>({ path, method = 'GET', params }: IProps): Promise<T> => {
	const result = await fetch(
		`${'https://server.smarttech.by/index.php/wp-json/wc/v3/'}${path}` +
			`?${new URLSearchParams({ ...params }).toString()}`,
		{
			method,

			headers: {
				Accept: 'application/json',
				Authorization: `Basic Y2tfMGJkM2JjNDI1OGJjY2VhMzY2NzhmNGYzNmY5NGMyZTBiNTVmNTFhYTpjc19lYmEwYmM4NzI3NTM3MDA1ZmY4NDdkNzdkODVhYmM1YTJhN2I0YmUz`
			},

			next: { revalidate: 3600 }
		}
	)

	return result.json() as T
}

export const mediaApi = async <T>({ path, method = 'GET', params }: IProps): Promise<T> => {
	const result = await fetch(
		`${'https://server.smarttech.by/wp-json/wp/v2/'}${path}` + `?${new URLSearchParams({ ...params }).toString()}`,
		{
			method,

			headers: {
				'Access-Control-Allow-Origin': '*',
				Accept: 'application/json',
				Authorization: `Basic Y2tfMGJkM2JjNDI1OGJjY2VhMzY2NzhmNGYzNmY5NGMyZTBiNTVmNTFhYTpjc19lYmEwYmM4NzI3NTM3MDA1ZmY4NDdkNzdkODVhYmM1YTJhN2I0YmUz`
			},

			next: { revalidate: 14400 }
		}
	)

	return result.json() as T
}
