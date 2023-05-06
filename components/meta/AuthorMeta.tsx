import { FC } from 'react'

import { OGProfile } from './types'

export type Props = {
	data?: OGProfile[]
}

export const AuthorMeta: FC<Props> = (props) => {
	const { data: authors } = props
	return (
		<>
			{!!authors &&
				authors.length > 0 &&
				authors.map((author) => (
					<>
						{!!author?.firstName && (
							<meta property="profile:first_name" content={author.firstName} />
						)}
						{!!author?.lastName && (
							<meta property="profile:last_name" content={author.lastName} />
						)}
						{!!author?.username && (
							<meta property="profile:username" content={author.username} />
						)}
						{!!author?.gender && (
							<meta property="profile:gender" content={author.gender} />
						)}
					</>
				))}
		</>
	)
}

export default AuthorMeta
