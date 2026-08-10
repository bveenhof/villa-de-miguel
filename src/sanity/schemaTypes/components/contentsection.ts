import { defineField, defineType } from 'sanity'

export const contentSectionType = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images (maximum of 3)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
})