import { type SchemaTypeDefinition } from 'sanity'

// Components
import { heroType } from './components/hero'
import { contentSectionType } from './components/contentsection'
import { mapType } from './components/map'

import { pageType } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contentSectionType,
    heroType,
    mapType,
    pageType,
  ],
}
