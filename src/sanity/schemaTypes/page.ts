import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'PageContent',
      title: 'Page content',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'map' },
        { type: 'contentSection' },
      ],
    }),
  ],
})