'use client'

import ReactPlayer from 'react-player'

export const VideoPlayer = ({ ...settings }) => {
	return <ReactPlayer width='100%' height='100%' {...settings} />
}
