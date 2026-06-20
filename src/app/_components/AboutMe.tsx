import Link from 'next/link'
import Avatar from './avatar'
import Dice from './icons/Dice'
import Git from './icons/Git'
import Paw from './icons/Paw'

const AboutMe = () => (
  <section className='mb-20 grid grid-cols-1 gap-y-8 border-l-4 border-zinc-100 bg-true-black/30 py-6 pl-6 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8'>
    <div className='flex flex-col gap-4'>
      <Avatar name='Kuroi Kyu' picture='/assets/blog/authors/kk.png' />
      <div>
        <Link
          className='bg-gradient-to-b from-transparent from-50% to-kuroi to-50% bg-[length:auto_175%] transition-all hover:[background-position-y:100%]'
          href='mailto:hello@kuroikyu.com'
        >
          hello@kuroikyu.com
        </Link>
      </div>
    </div>
    <ul className='flex flex-col gap-2'>
      <li className='flex gap-2'>
        <Git size={24} /> <span>Software Developer</span>
      </li>
      <li className='flex gap-2'>
        <Dice size={24} /> <span>Gamer, video and tabletop</span>
      </li>
      <li className='flex gap-2'>
        <Paw size={24} /> <span>Animal friendly</span>
      </li>
    </ul>
  </section>
)

export default AboutMe
