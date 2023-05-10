import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import PostTitle from 'components/PostTitle'
import { getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Script from 'next/script'

import styles from '../components/CookieDeclaration.module.css'

interface CookieProps {
	settings: Settings
	preview: boolean
	token: string | null
}
interface Query {
	[key: string]: string
}

interface PreviewData {
	token?: string
}

export default function Cookies(props: CookieProps) {
	const { settings, preview, token } = props

	const cookiebotDomainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_ID

	return !!cookiebotDomainGroupId ? (
		<>
			<IndexPageHead settings={settings} />
			<Layout preview={preview}>
				<Container>
					<BlogHeader level={2} />
					<PostTitle>Cookies</PostTitle>
					<div className={styles.cookieDeclaration}>
						<div id="CookieDeclaration" className="hidden" />
						<Script
							src={`https://consent.cookiebot.com/${cookiebotDomainGroupId}/cd.js`}
							type="text/javascript"
							async
						/>
					</div>
				</Container>
			</Layout>
		</>
	) : (
		<></>
	)
}

export const getStaticProps: GetStaticProps<
	CookieProps,
	Query,
	PreviewData
> = async (ctx) => {
	const { preview = false, previewData = {} } = ctx

	const [settings] = await Promise.all([getSettings()])

	return {
		props: {
			settings,
			preview,
			token: previewData.token ?? null,
		},
	}
}
