import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menuPhotos',
  title: 'Menu Photos',
  description:
    'These Photos are displayed on Menu listing page, be careful when modifying! The assigned type will be the heading photo shown',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'menuImages',
      title: 'Menu Images',
      type: 'imageGallery'
    })
  ],
  preview: {
    select: {
      images: 'menuImages'
    },
    prepare(selection) {
      const { images } = selection

      return {
        title: `Gallery of ${Object.keys(images.images).length} images`,
        subtitle: `Alt text: ${images.images[0].alt}`,
        media: images.images[0]
      }
    }
  }
})
