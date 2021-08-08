import type { FC } from 'react'
import type { Team } from 'src/services/graphql/generated/codegen'

import dynamic from 'next/dynamic'
// import { useRouter } from 'next/router'
import { Flex, SimpleGrid, Spinner } from '@chakra-ui/react'
import { SuspenseList, Suspense } from 'react'

import { useAllTeamsQuery } from 'src/services/graphql/generated/hooks'
import { client } from 'src/lib/graphql'

const IntersectionSlide = dynamic(() => import('src/components/IntersectionSlide'))
const TeamCard = dynamic(() => import('src/components/TeamCard'))

const TeamsGrid: FC = () => {
  // const router = useRouter()
  // const page = Number(router.query.page) || 0

  const { data } = useAllTeamsQuery(client)

  // const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  // const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <Flex direction="column" alignItems="center">
      <SimpleGrid columns={[1, null, 3]} alignItems="center" spacingX={8} spacingY={16}>
        <SuspenseList revealOrder="forwards" tail="collapsed">
          {data?.findManyTeam?.map((team) => (
            <IntersectionSlide key={team?.id}>
              <Suspense fallback={<Spinner size="md" />}>
                <TeamCard team={team as Team} />
              </Suspense>
            </IntersectionSlide>
          )) ?? []}
        </SuspenseList>
      </SimpleGrid>

      {/* <Button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </Button>
      <Button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </Button> */}
    </Flex>
  )
}

export default TeamsGrid
