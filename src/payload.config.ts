import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3';
import { S3Client } from "@aws-sdk/client-s3";

import { Users } from '@/app/(payload)/collections/Users'
import { Media } from '@/app/(payload)/collections/Media'
import Pages from '@/app/(payload)/collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// i use digital ocean spaces with s3 to serve images. 
// you can use whatever cloud provider, but this method is required by payload.

const s3Client = new S3Client({
  region: 'nyc3',
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || '',
    secretAccessKey: process.env.S3_SECRET_KEY || '',
  },
  forcePathStyle: false,
});

const s3StoragePlugin = s3Storage({
  bucket: process.env.S3_BUCKET || '',
  config: s3Client,
  collections: {
    media: {
      disableLocalStorage: true,
    },
  },
});

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // s3StoragePlugin, // if hosting images in a bucket, you can use something like this and refer to the payload documentation
  ],
})
