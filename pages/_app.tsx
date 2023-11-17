import 'tailwindcss/tailwind.css'

import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { Catamaran } from 'next/font/google'
import { lazy, Suspense, useEffect } from 'react'
import TagManager from 'react-gtm-consent-module'

export interface SharedPageProps {
	draftMode: boolean
	token: string
}

const catamaran = Catamaran({
	weight: '400',
	subsets: ['latin-ext'],
})

const PreviewProvider = lazy(() => import('components/PreviewProvider'))
const VisualEditing = lazy(() => import('components/VisualEditing'))

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
			{draftMode && (
				<Suspense>
					<VisualEditing />
				</Suspense>
			)}
			<Analytics />
		</div>
	)
}
