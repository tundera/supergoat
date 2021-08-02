import type { FC } from 'react'
import type {
  TeamQuery,
  TeamQueryVariables,
  ColorScheme,
  Player,
} from 'src/services/graphql/generated/types'

import { useRouter } from 'next/router'
import { SimpleGrid, Heading, Spinner, Stack, useColorModeValue } from '@chakra-ui/react'
import { Suspense, SuspenseList } from 'react'
import Head from 'next/head'

import IntersectionSlide from './IntersectionSlide'
import { client } from 'src/lib/graphql'
import { useTeamQuery } from 'src/services/graphql/generated/hooks'
import PlayerCard from './PlayerCard'
import Image from 'src/components/NextChakraImage'
import { useImageUrlBuilder } from 'src/hooks/useImageUrlBuilder'

const TeamInfo: FC = () => {
  const router = useRouter()
  const id = router.query.id as string

  const { data } = useTeamQuery<TeamQuery, TeamQueryVariables>(client, { id })
  const { imageURL, blurDataURL } = useImageUrlBuilder(data?.findUniqueTeam?.logo?.id as string)

  const headingColor = useColorModeValue(
    data?.findUniqueTeam?.colorScheme?.secondary,
    data?.findUniqueTeam?.colorScheme?.primary,
  )
  const bgGradient = useColorModeValue(
    `linear(to-b, ${data?.findUniqueTeam?.colorScheme?.primary}, ${data?.findUniqueTeam?.colorScheme?.secondary})`,
    `linear(to-b, ${data?.findUniqueTeam?.colorScheme?.secondary}, ${data?.findUniqueTeam?.colorScheme?.primary})`,
  )

  return (
    <>
      <Head>
        <title>
          {data?.findUniqueTeam?.city} {data?.findUniqueTeam?.name}
        </title>
      </Head>
      <Stack alignItems="center" spacing={4} bgGradient={bgGradient} p={4} w="full">
        <Heading as="h1" color={headingColor} fontSize="6xl" overflow="hidden" textAlign="center">
          {data?.findUniqueTeam?.city} {data?.findUniqueTeam?.name}
        </Heading>
        <Image
          src={imageURL}
          width={300}
          height={300}
          layout="intrinsic"
          alt="Team logo"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          <SuspenseList revealOrder="forwards" tail="collapsed">
            {data?.findUniqueTeam?.players?.map((player) => (
              <IntersectionSlide key={player?.number}>
                <Suspense
                  fallback={
                    <Spinner size="md" color={data?.findUniqueTeam?.colorScheme?.primary} />
                  }
                >
                  <PlayerCard
                    player={player as Player}
                    colorScheme={data?.findUniqueTeam?.colorScheme as ColorScheme}
                  />
                </Suspense>
              </IntersectionSlide>
            )) ?? []}
          </SuspenseList>
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default TeamInfo
