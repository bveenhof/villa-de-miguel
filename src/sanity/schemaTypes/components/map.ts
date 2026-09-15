import { defineField, defineType } from 'sanity'

export const mapType = defineType({
  name: 'map',
  title: 'Google Maps',
  type: 'object',
  fields: [
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
            name: 'locationMarker',
            title: 'Location marker',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Location title (will not be displayed, just for the editor',
                    type: 'string',
                }),
                defineField({
                    name: 'content',
                    title: 'Location description',
                    type: 'text',
                }),
                defineField({
                    name: 'lat',
                    title: 'Lattitude',
                    type: 'number',
                }),
                defineField({
                    name: 'lng',
                    title: 'Longitude',
                    type: 'number',
                }),
                defineField({
                    name: 'isActive',
                    title: 'Active marker (only one location can be active at a time)',
                    type: 'boolean',
                    initialValue: false,
                }),
                defineField({
                    name: 'isVilla',
                    title: 'Villa marker (only use this for the villa location)',
                    type: 'boolean',
                    initialValue: false,
                }),
            ]
        },
      ],
    }),
  ],
  preview: {
    select: {
      locationsArray: 'locations',
    },
    prepare({ locationsArray }) {
      // Count how many locations have been added
      const count = locationsArray ? locationsArray.length : 0;
      
      return {
        title: 'Google maps',
        subtitle: `${count} location(s)`,
        media: () => '🗺️',
      };
    },
  },
})