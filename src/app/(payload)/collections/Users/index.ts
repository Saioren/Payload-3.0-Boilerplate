import type { CollectionConfig } from 'payload'
import { admins } from './UserAccess/Permissions/admins'
import anyone from './UserAccess/Permissions/anyone'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      required: true,
      defaultValue: 'user',
      access: {
        create: admins,
        read: anyone,
        update: admins,
      },
      options: [
        {
          value: 'user',
          label: 'User'
        },
        {
          value: 'editor',
          label: 'Editor',
        },
        {
          value: 'author',
          label: 'Author',
        },
        {
          value: 'admin',
          label: 'Admin'
        }
      ]
    },
  ],
}
