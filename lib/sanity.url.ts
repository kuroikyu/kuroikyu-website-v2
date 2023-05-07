enum DocumentTypes {
	POST = 'post',
	SLUG = 'slug',
}

type PathResolverProps = {
	_type: DocumentTypes
	slug: {
		_type: DocumentTypes.SLUG
		current: string
	}
}

export const pathResolver = ({ _type, slug }: PathResolverProps): string => {
	switch (_type) {
		case DocumentTypes.POST:
			return `/posts/${slug.current}`
		default:
			return '/'
	}
}
