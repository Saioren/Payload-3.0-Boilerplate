import React, { useEffect } from 'react'
import '../scss/app.scss'
import { Metadata } from 'next'
import { AppProps } from 'next/app'
import { GridProvider } from '@faceless-ui/css-grid'
import { WindowInfoProvider } from '@faceless-ui/window-info'
import cssVariables from '../../cssVariables'
import Gutter from '@/layout/Gutter'

export const metadata: Metadata = {
  title: 'payload 3.0 boilerplate',
  icons: '/favicon.ico',
}

const PayloadBoilerplate = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { ...otherProps } = pageProps

  useEffect(() => {
    console.log(
      '%cCreated by %cEvan Mikrut %c(https://github.com/Saioren)',
      'font-weight: bolder;',
      'font-weight: bolder; color: #34eb95;',
      'font-weight: bolder;',
    ) // eslint-disable-line no-console
  }, [])

  return (
    <React.Fragment>
      <WindowInfoProvider
        breakpoints={{
          s: '(max-width: 768px)',
          m: '(max-width: 1024px)',
          l: '(max-width: 1279px)',
          xl: '(max-width: 1679px)',
          xxl: '(max-width: 1920px)',
        }}
      >
        <GridProvider
          breakpoints={{
            s: cssVariables.breakpoints.s,
            m: cssVariables.breakpoints.m,
            l: cssVariables.breakpoints.l,
          }}
          rowGap={{
            s: '1rem',
            m: '1rem',
            l: '4rem',
            xl: '4rem',
          }}
          colGap={{
            s: '10px',
            m: '10px',
            l: '4rem',
            xl: '4rem',
          }}
          cols={{
            s: 9,
            m: 9,
            l: 14,
            xl: 14,
          }}
        >
          <Gutter>
            <Component {...otherProps} />
          </Gutter>
        </GridProvider>
      </WindowInfoProvider>
    </React.Fragment>
  )
}

export default PayloadBoilerplate
