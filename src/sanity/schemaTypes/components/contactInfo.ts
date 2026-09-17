import {defineField, defineType} from 'sanity'

export const contactInfoType = defineType({
    name: 'contactInfo',
    title: 'Villa de Miguel Contact Information',
    type: 'object',
    fieldsets: [
        {
            title: 'Address',
            name: 'address',
            options: {collapsible: true, collapsed: false},
        },
        {
            title: 'Contact Information',
            name: 'contact',
            options: {collapsible: true, collapsed: false},
        },
        {
            title: 'Check-in and Check-out Times',
            name: 'checkinCheckout',
            options: {collapsible: true, collapsed: false},
        },
    ],
    fields: [
        defineField({
            name: 'address',
            title: 'Villa de Miguel address',
            type: 'array',
            of: [{ type: 'block' }],
            fieldset: 'address'
        }),
        defineField({
            name: 'phonenumber',
            title: 'Phone number',
            type: 'string',
            fieldset: 'contact'
        }),
        defineField({
            name: 'email',
            title: 'Email address',
            type: 'string',
            fieldset: 'contact'
        }),
        defineField({
            name: 'contactperson',
            title: 'Contact person',
            type: 'string',
            fieldset: 'contact'
        }),
        defineField({
            name: 'checkinTime',
            title: 'Check-in Time',
            type: 'string',
            fieldset: 'checkinCheckout'
        }),
        defineField({
            name: 'checkoutTime',
            title: 'Check-out Time',
            type: 'string',
            fieldset: 'checkinCheckout'
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact information',
            }
        },
    },
})