import { ImageResponse } from '@vercel/og'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import type { NextRequest, NextResponse } from 'next/server'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'

export const config: PageConfig = { runtime: 'edge' }

import {
	height,
	OpenGraphImagePost,
	width,
} from 'components/OpenGraphImagePost'
import * as demo from 'lib/demo.data'
import { Settings, settingsQuery } from 'lib/sanity.queries'

export default async function og(req: NextRequest, res: NextResponse) {
	const font = fetch(
		new URL('public/Catamaran-Bold.ttf', import.meta.url)
	).then((res) => res.arrayBuffer())
	const { searchParams } = new URL(req.url)

	let title = searchParams.get('title')
	if (!title) {
		const client = createClient({
			projectId,
			dataset,
			apiVersion,
			useCdn: false,
		})
		const settings = (await client.fetch<Settings>(settingsQuery)) || {}
		title = settings?.ogImage?.title
	}
	let image = searchParams.get('image')

	return new ImageResponse(
		<OpenGraphImagePost title={title || demo.ogImageTitle} image={image} />,
		{
			width,
			height,
			fonts: [
				{
					name: 'Catamaran',
					data: await font,
					style: 'normal',
					weight: 700,
				},
			],
		}
	)
}
