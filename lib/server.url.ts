/**
 * Uses the `NEXT_PUBLIC_VERCEL_URL` environment variable to get the deployment's URL.
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables
 * @returns {string} the deployment URL or an empty string
 */

export const getServerDeploymentURL = (): string =>
	process.env.NEXT_PUBLIC_VERCEL_URL
		? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
		: ''

export const isProductionEnvironment = process.env.NODE_ENV === 'production'

export const hasProductionDomain = !!process.env.NEXT_PUBLIC_SITE_DOMAIN
