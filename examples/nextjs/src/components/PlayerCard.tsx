import type { FC } from 'react'
import type { Player, ColorScheme } from 'src/services/graphql/generated/codegen'

import Image from 'src/components/NextChakraImage'
import NextLink from 'next/link'
import { Box, Text, useColorModeValue, LinkBox, LinkOverlay } from '@chakra-ui/react'

import MotionBox from 'src/components/MotionBox'
import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

interface Props {
  player: Player
  colorScheme: ColorScheme
}

const PlayerCard: FC<Props> = ({ player, colorScheme }) => {
  const bgGradient = useColorModeValue(
    `linear(to-t, white, ${colorScheme?.primary})`,
    `linear(to-t, gray.800, ${colorScheme?.primary})`,
  )

  const { imageURL, blurDataURL } = useCloudinaryImage(player?.image?.id as string)

  console.log(imageURL)
  return (
    <LinkBox as="article">
      <MotionBox
        display="flex"
        flexDirection="column"
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
        >
          <Image
            src={imageURL}
            width={150}
            height={150}
            layout="responsive"
            objectFit="cover"
            alt={`${player.name} avatar`}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />

          <NextLink href="#" passHref>
            <LinkOverlay
              display="block"
              pt={5}
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              _hover={{
                textDecoration: 'none',
              }}
            >
              {player.name}
            </LinkOverlay>
          </NextLink>

          <Box fontSize="md" fontWeight="medium" my={4}>
            <Text>{player.position}</Text>
            <Text>
              {player.height} / {player.weight}
            </Text>
          </Box>
        </Box>
      </MotionBox>
    </LinkBox>
  )
}

export default PlayerCard
