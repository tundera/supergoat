import type { NextPage } from 'types'
import type { GetStaticProps } from 'next'

import { Suspense } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex, useColorModeValue } from '@chakra-ui/react'

import { prefetchAllTeamsQuery } from 'src/lib/teams'
import { getLayout as getPublicLayout } from 'src/layouts/PublicLayout'
import { FullPageSpinner } from 'src/components/FullPageSpinner'

const TeamsGrid = dynamic(() => import('src/components/TeamsGrid'), { suspense: true })

const TeamsPage: NextPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, #f8f9fa, gray.800)',
    'linear(to-b, #212529, gray.300)',
  )

  return (
    <>
      <Head>
        <title>Teams</title>
      </Head>

      <Flex direction="column" alignItems="center" bgGradient={bgGradient}>
        <Suspense fallback={<FullPageSpinner />}>
          <TeamsGrid />
        </Suspense>
      </Flex>
    </>
  )
}

TeamsPage.getLayout = getPublicLayout

export default TeamsPage

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        suspense: true,
      },
    },
  })

  await prefetchAllTeamsQuery(queryClient)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
