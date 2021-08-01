import type { FC } from 'react'
import type { Player, ColorScheme } from 'src/services/graphql/generated/types'

import { Suspense } from 'react'
import Image from 'src/components/NextChakraImage'
import { chakra, Box, Text, Flex, useColorModeValue, Link } from '@chakra-ui/react'

import MotionBox from 'src/components/MotionBox'
import colors from 'src/styles/theme/colors'
import { useImageUrlBuilder } from 'src/hooks/useImageUrlBuilder'

interface Props {
  player: Player
  colorScheme: ColorScheme
}

const PlayerCard: FC<Props> = ({ player, colorScheme }) => {
  const textColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const bgGradient = useColorModeValue(
    `linear(to-t, ${colorScheme.primary}, black)`,
    `linear(to-t, white, ${colorScheme.primary})`,
  )

  const { imageURL, blurDataURL } = useImageUrlBuilder(player?.image?.id as string)

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <MotionBox
        w="full"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
        textAlign="center"
        _hover={{
          shadow: '2xl',
          borderWidth: '2px',
          borderColor: colors.indigo[500],
        }}
      >
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
        <Box pt={10} pb={4} bgGradient={bgGradient} color={textColor}>
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
        </Box>
      </MotionBox>
    </Flex>
  )
}

export default PlayerCard
