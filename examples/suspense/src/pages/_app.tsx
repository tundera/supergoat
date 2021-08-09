import type { AppProps } from 'types'

import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'

import RootErrorFallback from 'src/components/RootErrorFallback'
import { FullPageSpinner } from 'src/components/FullPageSpinner'

import '@fontsource/inter/variable.css'
import '@fontsource/raleway/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours (must be greater than or equal to `persistQueryClient` maxAge)
          },
        },
      }),
  )

  if (typeof window !== 'undefined') {
    const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })

    persistQueryClient({
      queryClient,
      persistor: localStoragePersistor,
      maxAge: 24 * 60 * 60 * 1000,
    })
  }

  const { reset } = useQueryErrorResetBoundary()

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={reset}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Suspense fallback={FullPageSpinner}>
              {getLayout(<Component {...pageProps} />)}
            </Suspense>
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

export default MyApp