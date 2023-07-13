import { BillIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pho',
  title: 'Pho',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'item',
      title: 'Item',
      type: 'menuItem',
    }),
  ],
})
