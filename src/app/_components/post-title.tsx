import { PropsWithChildren } from 'react'

export function PostTitle({ children }: PropsWithChildren) {
  return (
    <h1 className='mb-12 text-center text-5xl leading-tight font-bold tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
      {children}
    </h1>
  )
}
