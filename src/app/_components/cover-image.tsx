import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div
      className={cn('shadow-sm shadow-true-black', {
        'transition-shadow duration-200 hover:shadow-md hover:shadow-true-black': slug,
      })}
    >
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="w-full"
        width={1300}
        height={630}
      />
    </div>
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

export default CoverImage
