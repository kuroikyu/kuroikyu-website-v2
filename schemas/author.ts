import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const authorType = defineType({
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})

export default authorType

export const authorField = defineField({
  name: 'author',
  title: 'Author',
  type: 'reference',
  to: [{ type: authorType.name }],
})
