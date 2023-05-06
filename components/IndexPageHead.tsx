import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import { getServerDeploymentURL } from 'lib/sanity.url'
import Head from 'next/head'

import IndexMeta from './meta/IndexMeta'

export interface IndexPageHeadProps {
	settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
	const {
		title = demo.title,
		description = demo.description,
		ogImage = {},
	} = settings
	const ogImageTitle = ogImage?.title || demo.ogImageTitle

	return (
		<Head>
			<title>{title}</title>
			<IndexMeta />
			<meta
				key="description"
				name="description"
				content={toPlainText(description)}
			/>
			{/* og tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={toPlainText(description)} />
			<meta
				property="og:image"
				content={`${getServerDeploymentURL()}/api/og?${new URLSearchParams({
					title: ogImageTitle,
				})}`}
			/>
			<meta property="og:site_name" content="Kuroi Kyu" />
			<meta property="og:locale" content="en_US" />
			{/* twitter tags */}
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={toPlainText(description)} />
			<meta
				property="twitter:image"
				content={`${getServerDeploymentURL()}/kuroikyu-og.png`}
			/>
			<meta property="twitter:card" content="summary_large_image" />
		</Head>
	)
}
