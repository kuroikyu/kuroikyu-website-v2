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

/**
 * Uses the `NEXT_PUBLIC_VERCEL_URL` environment variable to get the deployment's URL.
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables
 * @returns {string} the deployment URL or an empty string
 */
export const getServerDeploymentURL = (): string =>
	process.env.NEXT_PUBLIC_VERCEL_URL
		? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
		: ''
