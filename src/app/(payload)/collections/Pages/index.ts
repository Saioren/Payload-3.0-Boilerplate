import { CollectionConfig } from "payload";
import { Hero } from "../../fields/Heroes";
import { slugField } from "../../fields/Slug";
import anyone from "../Users/UserAccess/Permissions/anyone";
import { admins } from "../Users/UserAccess/Permissions/admins";

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'fullTitle',
      'author',
      'createdAt',
      'appUrl',
    ],
  },
  versions: {
    drafts: true,
  },
  access: {
    create: admins,
    read: anyone,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    Hero,
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [], // define block fields here
    },
    slugField(),
    {
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'fullTitle',
      type: 'text',
      admin: {
        components: {
          Field: undefined,
        },
      },
    },
    {
      name: 'appUrl',
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          Field: './collections/Pages/fields/AppURL/Field#AppUrlField',
          Cell: './collections/Pages/fields/AppURL/Cell#AppUrlCell'
        },
      },
    },
  ],
};

export default Pages;
