import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { NextPageWithLayout } from '@/features/common/interfaces'

// Redux
import { Provider as ReduxProvider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import { store } from '@/plugins/redux'

// Mui provider.
import MuiThemeProvider from '@/plugins/mui/components/mui-theme-provider'

// App config
import { AppConfig } from '@/features/app/config'

// utils
import { CommonUtils } from '@/features/common/utils'

// i18n
import { appWithTranslation } from 'next-i18next'

// snackbar
import { SnackbarProvider } from 'notistack'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'simplebar-react/dist/simplebar.min.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = CommonUtils.createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout<unknown>
}

function App(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)
  return (
    <ReduxProvider store={store}>
      <CacheProvider value={emotionCache}>
        {/* ! WARNING ! Redux persist blocking ssr here */}
        {/* <PersistGate loading={<CircularProgress />} persistor={persistor}> */}

        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href={AppConfig.AppFavicon} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#fff' />
          <meta content='#fff' name='theme-color' />
          <meta content='#fff' name='msapplication-navbutton-color' />
          <meta content='#fff' name='apple-mobile-web-app-status-bar-style' />
          <meta content='yes' name='apple-mobile-web-app-capable' />
        </Head>
        <MuiThemeProvider>
          <SnackbarProvider>{getLayout(<Component {...pageProps} />)}</SnackbarProvider>
        </MuiThemeProvider>
        {/* </PersistGate> */}
      </CacheProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(App)
