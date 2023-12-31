import { CogIcon } from '@sanity/icons'
import { ComposeIcon } from '@sanity/icons'
import { MenuIcon } from '@sanity/icons'
import { InfoOutlineIcon } from '@sanity/icons'
import { ImagesIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Home')
    .items([
      S.listItem()
        .id('menu')
        .title('Menu Items')
        .icon(MenuIcon)
        .child(
          S.list()
            .title('Menu Items')
            .showIcons(false)
            .items([
              ...S.documentTypeListItems().filter(
                listItem =>
                  !['information', 'siteSettings', 'gallery'].includes(
                    listItem.getId()
                  )
              )
            ])
        ),
      S.listItem()
        .id('info')
        .title('Restaurant Information')
        .icon(InfoOutlineIcon)
        .child(
          S.list()
            .title('Information')
            .items([
              S.listItem()
                .title('Information')
                .icon(ComposeIcon)
                .child(
                  S.document()
                    .schemaType('information')
                    .documentId('information')
                ),
              S.listItem()
                .title('Gallery')
                .icon(ImagesIcon)
                .child(S.document().schemaType('gallery').documentId('gallery'))
            ])
        ),
      S.listItem()
        .id('settings')
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Settings')
                .showIcon(false)
                .child(
                  S.document().schemaType('siteSettings').documentId('settings')
                )
            ])
        )
    ])
