/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import getYouTubeID from 'get-youtube-id'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'
import Spotify from './Spotify'
import YouTube from './YouTube'

const myCustomComponents = {
	types: {
		image: ({ value }) => {
			return <SanityImage {...value} />
		},
		youtube: ({ value }) => {
			const { url } = value
			const id = getYouTubeID(url)
			return <YouTube id={id} />
		},
		spotify: ({ value }) => {
			const { type, id } = value
			return <Spotify type={type} id={id} />
		},
	},
}

export default function PostBody({ content }) {
	return (
		<div className={`mx-auto max-w-2xl ${styles.portableText}`}>
			<PortableText value={content} components={myCustomComponents} />
		</div>
	)
}
