import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import config from 'sanity.config'

export default function StudioPage() {
	return (
		<>
			<Head>
				{Object.entries(metadata).map(([key, value]) => (
					<meta key={key} name={key} content={value} />
				))}
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/studio-favicon-32x32.png"
				/>
			</Head>

			<NextStudio config={config} />
		</>
	)
}
