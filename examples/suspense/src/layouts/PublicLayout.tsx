import type { GetLayoutFunction, ErrorFallbackProps } from 'types'
import type { FC } from 'react'

import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Flex, useColorModeValue, Box, Button, Heading } from '@chakra-ui/react'
import NProgress from 'next-nprogress-emotion'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { FiRefreshCw } from 'react-icons/fi'

import ThemeProvider from 'src/providers/ThemeProvider'
import FormProvider from 'src/providers/FormProvider'
import Main from 'src/components/Main'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

import { FullPageSpinner } from 'src/components/FullPageSpinner'

interface Props {
  title?: string
}

const PublicLayout: FC<Props> = ({ title, children }) => {
  const color = useColorModeValue('black', 'white')
  const { reset } = useQueryErrorResetBoundary()

  return (
    <>
      <Head>
        <title>{title ? `Suspense Demo | ${title}` : 'Suspense Demo'}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Suspense Demo by Tundera" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <ThemeProvider>
        <FormProvider>
          <ErrorBoundary FallbackComponent={PublicLayoutErrorFallback} onReset={reset}>
            <Suspense fallback={<FullPageSpinner />}>
              <NProgress
                color={color}
                showAfterMs={100}
                spinner={false}
                options={{ easing: 'ease' }}
              />
              <Flex minH="100vh" direction="column">
                <Header />
                <Main>{children}</Main>
                <Footer />
              </Flex>
            </Suspense>
          </ErrorBoundary>
        </FormProvider>
      </ThemeProvider>

      <ReactQueryDevtools />
    </>
  )
}

export default PublicLayout

export const getLayout: GetLayoutFunction = (page) => {
  const Layout = dynamic(() => import('src/layouts/PublicLayout'))

  return <Layout>{page}</Layout>
}

const PublicLayoutErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Heading as="h2" fontSize="lg">
        Page failed to load! See Error below for details.
      </Heading>
      <Box>
        <pre>
          <code>{error.message}</code>
        </pre>
      </Box>
      <Button rightIcon={<FiRefreshCw size={20} />} onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Flex>
  )
}
