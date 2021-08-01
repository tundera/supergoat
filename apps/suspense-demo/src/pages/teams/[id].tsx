import type { NextPage } from 'types'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { Team } from 'db'

import db from 'db'
import { Suspense } from 'react'
import { Flex } from '@chakra-ui/react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { FullPageSpinner } from 'src/components/FullPageSpinner'
import { getLayout as getPageLayout } from 'src/layouts/PageLayout'
import { prefetchTeamQuery } from 'src/lib/teams'
import TeamInfo from 'src/components/TeamInfo'

type RouteParams = {
  id: string
}

export const TeamPage: NextPage = () => {
  return (
    <>
      <Suspense fallback={<FullPageSpinner />}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <TeamInfo />
        </Flex>
      </Suspense>
    </>
  )
}

TeamPage.getLayout = getPageLayout

export default TeamPage

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const allTeams = await db.team.findMany()
  const paths = (allTeams as Team[])?.map((team) => ({ params: { id: team?.id } }))

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        suspense: true,
      },
    },
  })

  await prefetchTeamQuery(queryClient, { id })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
