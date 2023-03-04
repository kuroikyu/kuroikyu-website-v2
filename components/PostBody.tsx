/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import getYouTubeID from 'get-youtube-id'
import { urlForImage } from 'lib/sanity.image'
import { pathResolver } from 'lib/sanity.url'
import Image from 'next/image'
import Link from 'next/link'

import styles from './PostBody.module.css'
import Spotify from './Spotify'
import YouTube from './YouTube'

const myCustomComponents = {
  types: {
    mediaImage: ({ value }) => {
      const internalLink = value?.link?.href
      const externalLink = value?.link?.reference
      const linkType = (() => {
        if (internalLink) return 'internal'
        if (externalLink) return 'external'
        return undefined
      })()

      const LinkComponent = ({ children }) =>
        linkType ? (
          <Link href={internalLink || pathResolver(externalLink)}>
            {children}
          </Link>
        ) : (
          <>{children}</>
        )

      return (
        <div>
          <LinkComponent>
            <Image
              className="h-auto w-full"
              width={2000}
              height={1000}
              alt={value?.caption || 'Embedded image'}
              title={value?.caption}
              src={urlForImage(value).url()}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={urlForImage(value).width(200).height(200).url()}
            />
          </LinkComponent>

          {value?.caption ? (
            <div className="pt-2 text-center text-sm tracking-tight text-black/60">
              {value.caption}
            </div>
          ) : null}
        </div>
      )
    },
    youtube: ({ value }) => {
      const { url } = value
      const id = getYouTubeID(url)
      return <YouTube id={id} />
    },
    spotify: ({ value }) => {
      const { type, id } = value
      return <Spotify type={type} id={id} />
    },
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={myCustomComponents} />
    </div>
  )
}
