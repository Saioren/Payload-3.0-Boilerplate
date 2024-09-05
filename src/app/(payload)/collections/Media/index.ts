import type { CollectionConfig } from 'payload'
import anyone from '../Users/UserAccess/Permissions/anyone'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
