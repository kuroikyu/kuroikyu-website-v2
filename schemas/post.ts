import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import { authorField } from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
	name: 'post',
	title: 'Post',
	icon: BookIcon,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
				},
				{
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						defineField({
							name: 'caption',
							type: 'string',
							title: 'Caption',
							description: 'Caption displayed below the image.',
						}),
						defineField({
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity.',
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
				},
				{
					type: 'youtube',
				},
				{
					type: 'spotify',
				},
			],
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		}),
		authorField,
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			date: 'date',
			media: 'coverImage',
		},
		prepare({ title, media, author, date }) {
			const subtitles = [
				author && `by ${author}`,
				date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
			].filter(Boolean)

			return { title, media, subtitle: subtitles.join(' ') }
		},
	},
})
