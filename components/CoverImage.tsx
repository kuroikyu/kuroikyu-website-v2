import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
	title: string
	slug?: string
	image: any
	priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
	const { title, slug, image: source, priority } = props
	const image = source?.asset?._ref ? (
		<div
			className={cn('shadow-small shadow-true-black', {
				'transition-shadow duration-200 hover:shadow-medium hover:shadow-true-black':
					slug,
			})}
		>
			<Image
				className="h-auto w-full"
				width={2000}
				height={1000}
				alt=""
				src={urlForImage(source).height(1000).width(2000).url()}
				sizes="100vw"
				priority={priority}
			/>
		</div>
	) : (
		<div className="bg-black pt-[50%]" />
	)

	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={`/posts/${slug}`} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	)
}
