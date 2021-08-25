import type { FC } from 'react'
import type { Player, ColorScheme } from 'src/services/graphql/generated/codegen'

import Image from 'src/components/NextChakraImage'
import { Box, Text, Flex, useColorModeValue, Link } from '@chakra-ui/react'

import MotionBox from 'src/components/MotionBox'
import { useImageUrlBuilder } from 'src/hooks/useImageUrlBuilder'

interface Props {
  player: Player
  colorScheme: ColorScheme
}

const PlayerCard: FC<Props> = ({ player, colorScheme }) => {
  const textColor = useColorModeValue('white', 'black')
  const bgGradient = useColorModeValue(
    `linear(to-t, ${colorScheme.primary}, black)`,
    `linear(to-t, white, ${colorScheme.primary})`,
  )

  const { imageURL, blurDataURL } = useImageUrlBuilder(player?.image?.id as string)

  return (
    <Box w={{ base: '500px', md: '350px' }} h="full" p="4">
      <MotionBox
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        textAlign="center"
        bgGradient={bgGradient}
        color={textColor}
      >
        <Box shadow="xl" pt={4}>
          <Image
            src={imageURL}
            height={760}
            width={1040}
            layout="responsive"
            objectFit="cover"
            alt="Player avatar"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </Box>
        <Flex direction="column" h="auto" pt={10} pb={4}>
          <Link
            display="block"
            fontSize="2xl"
            fontWeight="bold"
            mx={2}
            _hover={{
              textDecoration: 'none',
            }}
          >
            {player.name}
          </Link>
          <Text fontSize="sm">{player.position}</Text>
          <Text fontSize="sm">
            {player.height} / {player.weight}
          </Text>
        </Flex>
      </MotionBox>
    </Box>
  )
}

export default PlayerCard
