import type { FC } from 'react'
import type {
  TeamQuery,
  TeamQueryVariables,
  ColorScheme,
  Player,
} from 'src/services/graphql/generated/codegen'

import { useRouter } from 'next/router'
import { Flex, SimpleGrid, Heading, Spinner, Stack, useColorModeValue } from '@chakra-ui/react'
import { Suspense } from 'react'
import Head from 'next/head'

import IntersectionSlide from './IntersectionSlide'
import { client } from 'src/lib/graphql'
import { useTeamQuery } from 'src/services/graphql/generated/hooks'
import PlayerCard from './PlayerCard'
import Image from 'src/components/NextChakraImage'
import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

const TeamInfo: FC = () => {
  const router = useRouter()
  const id = router.query.id as string

  const { data } = useTeamQuery<TeamQuery, TeamQueryVariables>(client, { id })
  const { imageURL, blurDataURL } = useCloudinaryImage(data?.team?.logo?.id as string)

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

      <Stack alignItems="center" spacing={4} p={4} w="full" py={{ base: '8', sm: '16', md: '32' }}>
        <Heading
          as="h1"
          color={headingColor}
          py={8}
          fontSize={{ base: '6xl', md: '8xl' }}
          overflow="hidden"
          textAlign="center"
          bgGradient={bgGradient}
          bgClip="text"
        >
          {data?.team?.city} {data?.team?.name}
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
        <Flex direction="column" alignItems="center" my={{ base: 0, md: 32 }}>
          <SimpleGrid columns={[1, null, 3]} alignItems="center" spacingX={8} spacingY={16}>
            {data?.team?.players?.map((player) => (
              <IntersectionSlide key={player?.number}>
                <Suspense fallback={<Spinner size="md" color={data?.team?.colorScheme?.primary} />}>
                  <PlayerCard
                    player={player as Player}
                    colorScheme={data?.team?.colorScheme as ColorScheme}
                  />
                </Suspense>
              </IntersectionSlide>
            ))}
          </SimpleGrid>
        </Flex>
      </Stack>
    </>
  )
}

export default TeamInfo
