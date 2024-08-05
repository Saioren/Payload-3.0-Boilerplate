import { GetStaticProps } from 'next'
import { fetchPageData } from '@/utilities/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta }) => {
  return (
    <main>
      <Meta {...meta} />
      <div id="page-content">
        <Hero {...hero} />
        <Blocks blocks={layout} />
        <p>
          This is a blank <strong>Payload 3.0</strong> template! It has layout tools and
          dependencies installed to streamline the process a bit more. <br /> Delete this text when
          you clone the repo.
        </p>
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
