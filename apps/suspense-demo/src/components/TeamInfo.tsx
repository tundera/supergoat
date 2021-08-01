import type { FC } from 'react'
import type {
  TeamQuery,
  TeamQueryVariables,
  ColorScheme,
  Player,
} from 'src/services/graphql/generated/types'

import { useRouter } from 'next/router'
import { Text, Flex, SimpleGrid, Spinner, Stack, useColorModeValue } from '@chakra-ui/react'
import { Suspense, SuspenseList } from 'react'
import Head from 'next/head'

import { PageTitle } from './PageTitle'
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
  const { imageURL, blurDataURL } = useImageUrlBuilder(data?.team?.logo?.id as string)

  const headingColor = useColorModeValue(
    data?.team?.colorScheme?.secondary,
    data?.team?.colorScheme?.primary,
  )
  const bgGradient = useColorModeValue(
    `linear(to-b, ${data?.team?.colorScheme?.primary}, ${data?.team?.colorScheme?.secondary})`,
    `linear(to-b, ${data?.team?.colorScheme?.secondary}, ${data?.team?.colorScheme?.primary})`,
  )

  return (
    <>
      <Head>
        <title>
          {data?.team?.city} {data?.team?.name}
        </title>
      </Head>
      <Stack alignItems="center" spacing={4} bgGradient={bgGradient} py={8} w="full">
        <PageTitle as="h1" color={headingColor} textTransform="uppercase" fontSize="6xl">
          {data?.team?.city} {data?.team?.name}
        </PageTitle>
        <Image
          src={imageURL}
          width={300}
          height={300}
          layout="intrinsic"
          alt="Team logo"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <SimpleGrid columns={[1, null, 3]}>
          <SuspenseList revealOrder="forwards" tail="collapsed">
            {data?.team?.players?.map((player) => (
              <IntersectionSlide key={player?.number}>
                <Suspense fallback={<Spinner size="md" color={data?.team?.colorScheme?.primary} />}>
                  <PlayerCard
                    player={player as Player}
                    colorScheme={data?.team?.colorScheme as ColorScheme}
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
