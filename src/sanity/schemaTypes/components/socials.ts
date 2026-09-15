import { defineField, defineType } from 'sanity'

export const socialType = defineType({
  name: 'socials',
  title: 'Social Media Channels',
  type: 'document',
  fields: [
    defineField({
      name: 'channels',
      title: 'Social Channels',
      type: 'array',
      of: [
        {
          title: 'Social channel',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Platform Name (e.g., Instagram)',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Social Media Channels',
      }
    },
  },
})
