import { toPlainText } from '@portabletext/react'
import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import { getServerDeploymentURL } from 'lib/sanity.url'
import Head from 'next/head'

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
			<BlogMeta />
			<meta
				key="description"
				name="description"
				content={toPlainText(description)}
			/>
			<meta
				property="og:image"
				content={`${getServerDeploymentURL()}/api/og?${new URLSearchParams({
					title: ogImageTitle,
				})}`}
			/>
		</Head>
	)
}
