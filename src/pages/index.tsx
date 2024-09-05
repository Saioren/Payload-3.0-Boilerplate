import { GetStaticProps } from 'next'
import { fetchPageData } from '@/utilities/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'
import Link from 'next/link'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta }) => {
  return (
    <main>
      <Meta {...meta} />
      <div id="page-content">
        <Hero {...hero} />
        <Blocks blocks={layout} />
        <div style={{
          textAlign: 'center',
        }}>
          <p>This is a blank <strong>Payload 3.0</strong> template! <br /> It has layout tools and
          dependencies installed to streamline the process a bit more. <br /> Delete this text when
          you clone the repo.</p>
          <Link style={{ textDecoration: 'underline'}} href="/admin">Admin Panel</Link> <br/>
          <a target="_blank" href="https://payloadcms.com/docs/beta/getting-started/what-is-payload" style={{ textDecoration: 'underline'}}>Payload Documentation</a>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await fetchPageData('home')
  return {
    props: {
      ...pageData,
    },
    revalidate: 10,
  }
}

export default HomePage
