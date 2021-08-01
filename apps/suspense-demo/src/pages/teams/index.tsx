import type { NextPage } from 'types'
import type { GetStaticProps } from 'next'
import type { AllTeamsQuery } from 'src/services/graphql/generated/types'

import { Suspense } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { QueryClient, useQueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex } from '@chakra-ui/react'

import { prefetchAllTeamsQuery } from 'src/lib/teams'
import { getLayout as getPageLayout } from 'src/layouts/PageLayout'
import { FullPageSpinner } from 'src/components/FullPageSpinner'

const TeamsGrid = dynamic(() => import('src/components/TeamsGrid'))

const TeamsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teams</title>
      </Head>

      <Flex direction="column" alignItems="center">
        <Suspense fallback={<FullPageSpinner />}>
          <TeamsGrid />
        </Suspense>
      </Flex>
    </>
  )
}

TeamsPage.getLayout = getPageLayout

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
