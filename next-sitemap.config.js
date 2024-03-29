/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}/`,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', disallow: ['/studio', '/studio/*'], allow: '/' },
		],
	},
}
