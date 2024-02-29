import 'tailwindcss/tailwind.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Catamaran } from 'next/font/google'
import { useEffect } from 'react'
import TagManager from 'react-gtm-consent-module'

export interface SharedPageProps {
	draftMode: boolean
	token: string
}

const catamaran = Catamaran({
	weight: '400',
	subsets: ['latin-ext'],
})

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({
	Component,
	pageProps,
}: AppProps<SharedPageProps>) {
	/** Loads GTM - Google Tag Manager */
	useEffect(() => {
		const gtmTrackingCode = process.env.NEXT_PUBLIC_GTM_TRACKING_CODE
		!!gtmTrackingCode && TagManager.initialize({ gtmId: gtmTrackingCode })
	}, [])
	const { draftMode, token } = pageProps
	return (
		<div className={catamaran.className}>
			{draftMode ? (
				<PreviewProvider token={token}>
					<Component {...pageProps} />
				</PreviewProvider>
			) : (
				<Component {...pageProps} />
			)}
			{draftMode && <VisualEditing />}
			<Analytics />
		</div>
	)
}
