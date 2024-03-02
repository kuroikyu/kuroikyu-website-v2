import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import { pathResolver } from 'lib/sanity.url'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'

interface Props {
	asset: SanityImageSource
	alt: string
	caption?: string
	link?: {
		href?: any
		reference?: any
	}
}

export const SanityImage = (props: Props) => {
	const { asset, alt, caption, link } = props
	const imageProps = useNextSanityImage(getSanityImageConfig(), asset)

	const internalLink = link?.href
	const externalLink = link?.reference
	const linkType = (() => {
		if (internalLink) return 'internal'
		if (externalLink) return 'external'
		return undefined
	})()

	const LinkComponent = ({ children }) =>
		linkType ? (
			<Link href={internalLink || pathResolver(externalLink)}>{children}</Link>
		) : (
			<>{children}</>
		)

	if (!imageProps) return null

	return (
		<figure>
			<LinkComponent>
				<Image
					{...imageProps}
					alt={alt}
					sizes="(max-width: 800px) 100vw, 1200px"
					quality={90}
				/>
			</LinkComponent>
			{caption && (
				<figcaption className="pt-2 text-center text-sm text-zinc-100/60">
					{caption}
				</figcaption>
			)}
		</figure>
	)
}
