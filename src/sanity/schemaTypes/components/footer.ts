import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'footer',
      title: 'Footer title',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer settings',
      }
    },
  },
})