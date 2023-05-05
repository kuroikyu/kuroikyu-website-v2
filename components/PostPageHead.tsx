import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import { getServerDeploymentURL } from 'lib/sanity.url'
import Head from 'next/head'

export interface PostPageHeadProps {
	settings: Settings
	post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
	const title = settings.title ?? demo.title
	return (
		<Head>
			<title>{post.title ? `${post.title} | ${title}` : title}</title>
			<BlogMeta />
			{post.coverImage?.asset?._ref && (
				<meta
					property="og:image"
					content={`${getServerDeploymentURL()}/api/og-post?${new URLSearchParams(
						{
							title: post.title || title,
							image: urlForImage(post.coverImage)
								.width(1200)
								.height(630)
								.fit('crop')
								.url(),
						}
					)}`}
				/>
			)}
		</Head>
	)
}
