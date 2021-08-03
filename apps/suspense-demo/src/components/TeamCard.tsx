import type { FC } from 'react'
import type { Team } from 'src/services/graphql/generated/types'

import NextChakraImage from 'next/image'
import NextLink from 'next/link'
import { Box, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'

import { useImageUrlBuilder } from 'src/hooks/useImageUrlBuilder'
import MotionBox from 'src/components/MotionBox'
import { prefetchTeamQuery } from 'src/lib/teams'

interface Props {
  team: Team
}

const TeamCard: FC<Props> = ({ team }) => {
  const bgGradient = useColorModeValue(
    `linear(to-t, ${team?.colorScheme?.secondary}, black)`,
    `linear(to-t, white, ${team?.colorScheme?.secondary})`,
  )

  const { imageURL, blurDataURL } = useImageUrlBuilder(team?.logo?.id as string)

  // @ts-expect-error Alpha types missing
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })
  const queryClient = useQueryClient()

  function handleClick() {
    startTransition(() => {
      prefetchTeamQuery(queryClient, { id: team.id })
    })
  }

  return (
    <LinkBox as="article">
      <MotionBox
        display="flex"
        px={4}
        py={2}
        alignItems="center"
        justifyContent="center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box
          w="xs"
          bg={bgGradient}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
          textAlign="center"
          opacity={isPending ? 0.7 : 1.0}
        >
          <NextChakraImage
            src={imageURL}
            width={150}
            height={150}
            objectFit="cover"
            layout="responsive"
            alt="Team logo"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <NextLink href={`/teams/${team.id}`} passHref>
            <LinkOverlay
              onClick={handleClick}
              display="block"
              py="5"
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              _hover={{
                textDecoration: 'none',
              }}
            >
              {team?.city} {team?.name}
            </LinkOverlay>
          </NextLink>
        </Box>
      </MotionBox>
    </LinkBox>
  )
}

export default TeamCard
