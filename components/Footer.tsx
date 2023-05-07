import Link from 'next/link'
import { FC } from 'react'

const KuroiKyuIcon: FC<{ className?: string }> = ({ className }) => (
	<svg
		width="112"
		height="104"
		viewBox="0 0 112 104"
		xmlns="http://www.w3.org/2000/svg"
		className={`h-full ${className} fill-black`}
	>
		<rect width="112" height="104" className="fill-kuroi" />
		<path d="M51.5061 70.82V94H9.53809V9.69803H51.5061V47.762H54.1901L59.4361 9.69803H102.136L87.2521 51.788L102.136 94H59.1921L54.1901 70.82H51.5061Z" />
	</svg>
)

export type Props = {}

const Footer: FC<Props> = () => {
	// TODO: Migrate data to Sanity
	return (
		<footer className="container mx-auto px-5 pb-16">
			<hr className="mb-8 mt-28 border-accent-7" />
			<div className="grid gap-8 md:grid-cols-3">
				<Link href="/" className="mx-auto w-8 md:mx-0">
					<KuroiKyuIcon className="w-full transition-all duration-200 hover:shadow-medium hover:shadow-kuroi/50" />
				</Link>
				<p className="text-center">
					Get in touch:{' '}
					<a
						href={`mailto:hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}
						className="relative before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-2 before:w-full before:bg-kuroi before:transition-all before:content-[''] hover:before:bottom-0 hover:before:h-full"
					>
						{`hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}
					</a>
				</p>
				<p className=" text-center text-zinc-100/60 md:text-right">
					No cookies were baked in the making of this website.
				</p>
			</div>
		</footer>
	)
}

export default Footer
