import Image from 'next/image'
import favicon from 'public/favicon/studio-favicon-32x32.png'
import { FC } from 'react'

export const StudioFavicon: FC = () => (
	<Image src={favicon} alt="Studio Favicon" />
)
