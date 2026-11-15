import Link from 'next/link'

const Header = () => {
  return (
    <h2 className='mt-8 mb-20 flex items-center text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter'>
      <Link href='/' className='hover:underline'>
        kuroikyu
      </Link>
    </h2>
  )
}

export default Header
