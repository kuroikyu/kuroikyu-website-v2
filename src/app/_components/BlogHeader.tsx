import Link from 'next/link'

// import styles from './BlogHeader.module.css'
import KuroikyuTitle from './KuroikyuTitle'

export default function BlogHeader({
  description,
  level,
}: {
  description?: string
  /**
   * Level `1` is the homepage. Not a link.
   *
   * Level `2` is any other page. Links to the homepage.
   */
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
          <h1 className={`lg:pr-8`}>
            <KuroikyuTitle classNames="max-w-xs sm:max-w-md md:max-w-xl" />
          </h1>
          <h2 className={`mt-5 text-center text-lg lg:pl-8 lg:text-left`}>
            <div>{description}</div>
          </h2>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 w-36 transition-all duration-200 hover:shadow-md hover:shadow-kuroi/50 md:w-52">
            <Link href="/" aria-label="Return to the homepage">
              <KuroikyuTitle classNames="w-36 md:w-52" />
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level}, only 1 or 2 are allowed`,
      )
  }
}
