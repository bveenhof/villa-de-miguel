import { type SchemaTypeDefinition } from 'sanity'

// Components
import { contactInfoType } from './components/contactInfo'
import { contentSectionType } from './components/contentsection'
import { footerType } from './components/footer'
import { heroType } from './components/hero'
import { linkType } from './components/link'
import { mapType } from './components/map'
import { socialType } from './components/socials'

import { pageType } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contactInfoType,
    contentSectionType,
    footerType,
    heroType,
    linkType,
    mapType,
    pageType,
    socialType,
  ],
}
