import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import {
	getServerDeploymentURL,
	hasProductionDomain,
	isProductionEnvironment,
} from 'lib/server.url'
import Head from 'next/head'

import IndexMeta from './meta/IndexMeta'

export interface IndexPageHeadProps {
	settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
	const { title = demo.title, description = demo.description } = settings
	const image = `${getServerDeploymentURL()}/kuroikyu-og.png`

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
			<meta property="og:image" content={image} />
			<meta property="og:site_name" content="Kuroi Kyu" />
			<meta property="og:locale" content="en_US" />
			{isProductionEnvironment && hasProductionDomain && (
				<meta
					property="og:url"
					content={`https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}/`}
				/>
			)}
			{/* twitter tags */}
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={toPlainText(description)} />
			<meta property="twitter:image" content={image} />
			<meta property="twitter:card" content="summary_large_image" />
		</Head>
	)
}
