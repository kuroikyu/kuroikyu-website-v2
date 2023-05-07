import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import { hasProductionDomain, isProductionEnvironment } from 'lib/server.url'
import Head from 'next/head'

import IndexMeta from './meta/IndexMeta'

export interface PostPageHeadProps {
	settings: Settings
	post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
	const mixedTitle = settings.title ?? demo.title
	const title = post.title || mixedTitle
	const isImageAvailable = !!post.coverImage?.asset?._ref
	const image = urlForImage(post.coverImage)
		.width(1200)
		.height(630)
		.fit('crop')
		.url()

	return (
		<Head>
			<title>{post.title ? `${post.title} | ${mixedTitle}` : title}</title>
			<IndexMeta />
			{!!post?.excerpt && (
				<meta key="description" name="description" content={post.excerpt} />
			)}
			{/* og tags */}
			<meta property="og:title" content={title} />
			{!!post?.excerpt && (
				<meta property="og:description" content={post.excerpt} />
			)}
			{isImageAvailable && <meta property="og:image" content={image} />}
			<meta property="og:type" content="article" />
			<meta property="og:site_name" content="Kuroi Kyu" />
			<meta property="og:locale" content="en_US" />
			{isProductionEnvironment && hasProductionDomain && !!post?.slug && (
				<meta
					property="og:url"
					content={`https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}/posts/${post.slug}`}
				/>
			)}
			{/* article tags */}
			{!!post?.date && (
				<meta property="article:published_time" content={post.date} />
			)}
			<meta property="profile:first_name" content="Kuroi" />
			<meta property="profile:last_name" content="Kyu" />
			<meta property="profile:username" content="kuroikyu" />
			{/* twitter tags */}
			<meta property="twitter:title" content={title} />
			{!!post?.excerpt && (
				<meta property="twitter:description" content={post.excerpt} />
			)}
			{isImageAvailable && <meta property="twitter:image" content={image} />}
			<meta property="twitter:card" content="summary_large_image" />
		</Head>
	)
}
