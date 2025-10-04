import { Loader } from '@/components/UI/Loader'

export default function Loading() {
	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<Loader />
		</div>
	)
}
