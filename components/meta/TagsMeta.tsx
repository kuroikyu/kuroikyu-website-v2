import { FC } from 'react'

import { OGTags } from './types'

export type Props = {
	data?: OGTags
}

export const TagsMeta: FC<Props> = (props) => {
	const { data: tags } = props
	return (
		<>
			{!!tags &&
				tags.length > 0 &&
				tags.map((tag) => (
					<meta key={tag} property="article:tag" content={tag} />
				))}
		</>
	)
}

export default TagsMeta
