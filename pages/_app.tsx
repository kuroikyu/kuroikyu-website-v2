import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Catamaran } from 'next/font/google'

const catamaran = Catamaran({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={catamaran.className}>
      <Component {...pageProps} />
    </div>
  )
}
