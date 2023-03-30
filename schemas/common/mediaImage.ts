import { defineField, defineType } from 'sanity'

export default defineType({
	title: 'Image',
	name: 'mediaImage',
	type: 'image',
	options: {
		hotspot: true,
	},
	fields: [
		defineField({
			name: 'caption',
			type: 'string',
			title: 'Caption',
		}),
		defineField({
			name: 'link',
			type: 'object',
			title: 'Link',
			fields: [
				defineField({
					name: 'href',
					type: 'url',
					title: 'External URL',
					hidden: ({ parent }) => !!parent?.reference,
				}),
				defineField({
					name: 'reference',
					type: 'reference',
					title: 'Internal reference',
					to: [{ type: 'post' }],
					hidden: ({ parent }) => !!parent?.href,
				}),
			],
		}),
	],
})
