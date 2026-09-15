import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items(
      [
        S.listItem()
        .title('Structure & settings')
        .child(
          S.list()
            .title('Site Structure & settings')
            .items([
              S.listItem()
                .title('Social media channels')
                .child(
                  S.document().schemaType('socials').documentId('social-media-items').title('Social media channels')
                ),
              S.listItem()
                .title('Footer')
                .child(
                  S.document().schemaType('footer').documentId('global-footer').title('Footer settings')
                )
            ])
        ),

        S.documentTypeListItem('page').title('Pages'),
      ]
    )
