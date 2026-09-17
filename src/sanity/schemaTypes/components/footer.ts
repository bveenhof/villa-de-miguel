import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fieldsets: [
      {
          name: 'linksGroup',
          title: 'Navigation Links',
          options: { collapsible: true, collapsed: false },
      },
      {
          name: 'socialsGroup',
          title: 'Social Media Section',
          options: { collapsible: true, collapsed: false },
      },
  ],
  fields: [
    defineField({
      name: 'linksContent',
      title: 'Links title',
      type: 'string',
      fieldset: 'linksGroup',
    }),
    defineField({
      name: 'linkList',
      title: 'Links',
      type: 'array',
      of: [
        { type: 'link' }
      ],
      fieldset: 'linksGroup',
    }),
    defineField({
      name: 'socialsTitle',
      title: 'Socials title',
      type: 'string',
      fieldset: 'socialsGroup',
    }),
    defineField({
      name: 'socialsContent',
      title: 'Socials paragraph',
      type: 'string',
      fieldset: 'socialsGroup',
    }),
    defineField({
      name: 'locationTitle',
      title: 'Location title',
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