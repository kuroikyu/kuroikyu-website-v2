import Link from 'next/link'
import { FC } from 'react'

import styles from './Footer.module.css'

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
		<footer className={`container mx-auto px-5 pb-16 ${styles.footer}`}>
			<hr className="mb-8 mt-28 border-accent-7" />
			<div className="grid gap-8 md:grid-cols-3">
				<div className="mx-auto w-8 md:mx-0">
					<Link href="/" aria-label="Return to the homepage">
						<KuroiKyuIcon className="w-full transition-all duration-200 hover:shadow-medium hover:shadow-kuroi/50" />
					</Link>
				</div>
				<p className="text-center">
					Get in touch:{' '}
					<Link href={`mailto:hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}>
						{`hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}
					</Link>
				</p>
				<div className="text-center text-zinc-100/60 md:text-right">
					<Link href="/cookies">Cookies</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
