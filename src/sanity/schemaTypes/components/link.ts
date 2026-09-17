import { defineField, defineType } from 'sanity'

export const linkType = defineType({
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
        defineField({
            name: 'label',
            title: 'Link Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
        defineField({
            name: 'isExternal',
            title: 'External link (opens in a new window)',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})