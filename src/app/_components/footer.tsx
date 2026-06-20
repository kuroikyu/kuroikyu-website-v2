import Link from 'next/link'
import KuroiKyuIcon from './kuroikyu-icon'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={`container mx-auto px-5 pb-16 ${styles.footer}`}>
      <hr className='mb-8 mt-28 border-accent-7' />
      <div className='grid gap-8 md:grid-cols-3'>
        <div className='mx-auto w-8 md:mx-0'>
          <Link href='/' aria-label='Return to the homepage'>
            <KuroiKyuIcon className='w-full transition-all duration-200 hover:shadow-md hover:shadow-kuroi/50' />
          </Link>
        </div>
        <p className='text-center'>
          Get in touch:{' '}
          <Link href={`mailto:hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}>
            {`hello@${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}
          </Link>
        </p>
        <div className='text-center text-zinc-100/60 md:text-right'>
          <Link href='/cookies'>Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
