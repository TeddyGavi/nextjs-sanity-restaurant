import { BillIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bahnMi',
  title: 'Bahn Mi',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'item',
      title: 'item',
      type: 'menuItem'
    })
  ],
  preview: {
    select: {
      price: 'item.price',
      title: 'item.title'
    },
    prepare(selection) {
      const { price } = selection
      return { ...selection, subtitle: `Price is: ${price}` }
    }
  }
})
