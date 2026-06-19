import Footer from '@/app/_components/footer'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { Catamaran } from 'next/font/google'
import cn from 'classnames'

import './globals.css'

const catamaran = Catamaran({
  weight: '400',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: `Home | ${BLOG_NAME}`,
  description:
    'Embark on a nerdy adventure with me as we explore the tech, games, and all things geeky.',
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dotSize = 1
  const dotSpace = 20
  const dotBetween = dotSpace - dotSize
  const bgColor = '#111112'
  const dotColor = '#3f3f46'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          catamaran.className,
          'bg-black text-zinc-100 selection:bg-kuroi selection:text-kuroi-50',
        )}
        style={{
          background: `
            linear-gradient(90deg, ${bgColor} ${dotBetween}px, transparent 1%) center 220% / ${dotSpace}px ${dotSpace}px,
            linear-gradient(${bgColor} ${dotBetween}px, transparent 1%) center 220% / ${dotSpace}px ${dotSpace}px,
            ${dotColor}
            `,
        }}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
