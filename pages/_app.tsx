import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Catamaran } from 'next/font/google'
import { useEffect } from 'react'
import TagManager from 'react-gtm-consent-module'

const catamaran = Catamaran({
	weight: '400',
	subsets: ['latin-ext'],
})

export default function App({ Component, pageProps }: AppProps) {
	/** Loads GTM - Google Tag Manager */
	useEffect(() => {
		const gtmTrackingCode = process.env.NEXT_PUBLIC_GTM_TRACKING_CODE
		!!gtmTrackingCode && TagManager.initialize({ gtmId: gtmTrackingCode })
	}, [])
	return (
		<div className={catamaran.className}>
			<Component {...pageProps} />
		</div>
	)
}
