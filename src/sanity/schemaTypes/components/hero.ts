import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Hero paragraph',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ],
})