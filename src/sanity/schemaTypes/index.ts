import { type SchemaTypeDefinition } from 'sanity'

// Components
import { contentSectionType } from './components/contentsection'
import { footerType } from './components/footer'
import { heroType } from './components/hero'
import { mapType } from './components/map'
import { socialType } from './components/socials'

import { pageType } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contentSectionType,
    footerType,
    heroType,
    mapType,
    pageType,
    socialType,
  ],
}
