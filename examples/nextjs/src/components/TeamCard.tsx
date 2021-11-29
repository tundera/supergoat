import type { FC } from 'react'
import type { Team } from 'src/services/graphql/generated/codegen'

import Image from 'src/components/NextChakraImage'
import NextLink from 'next/link'
import { Box, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'
import MotionBox from 'src/components/MotionBox'

interface Props {
  team: Team
}

const TeamCard: FC<Props> = ({ team }) => {
  const bgGradient = useColorModeValue(
    `linear(to-t, white, ${team.colorScheme?.primary})`,
    `linear(to-t, gray.800, ${team.colorScheme?.primary})`,
  )

  const boxShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
    'rgba(255, 255, 255, 0.05) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset',
  )

  const { imageURL, blurDataURL } = useCloudinaryImage(team?.logo?.id as string)

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
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
          textAlign="center"
          transition="ease-in-out"
          transitionDuration="250ms"
          bgGradient={bgGradient}
          _hover={{ boxShadow }}
        >
          <Image
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
