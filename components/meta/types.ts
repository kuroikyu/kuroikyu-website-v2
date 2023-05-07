/**
 * Based of off the Open Graph Protocol
 * @see https://ogp.me/#type_profile
 */

export type OGProfile = {
	firstName?: string | undefined
	lastName?: string | undefined
	username?: string | undefined
	/** Not my choice, it's in the spec like this */
	gender?: 'male' | 'female' | undefined
}

export type OGTags = string[] | undefined

/**
 * Based of off the Open Graph Protocol
 * @see https://ogp.me/#type_article
 */

export type OGArticle = {
	publishedTime?: Date | undefined
	modifiedTime?: Date | undefined
	expirationTime?: Date | undefined
	authors?: OGProfile[] | undefined
	section?: string | undefined
	tags?: OGTags | undefined
}
