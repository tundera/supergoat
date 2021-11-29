import type { NextPage } from 'types'

import { Heading, Stack, useColorModeValue } from '@chakra-ui/react'

import { getLayout as getPublicLayout } from 'src/layouts/PublicLayout'
import FeaturesWithCards from 'src/components/blocks/FeaturesWithCards'

const AboutPage: NextPage = () => {
  const bg = useColorModeValue('gray.800', 'white')
  const textGradient = useColorModeValue(
    'linear(to-tr, gray.300, #a3f6e7)',
    'linear(to-tr, #110d5b, gray.800)',
  )

  return (
    <>
      <Stack direction="column" align="center" w="full" bg={bg} spacing={4} py={16}>
        <Heading
          as="h2"
          mb="4"
          bgGradient={textGradient}
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          About
        </Heading>
        <FeaturesWithCards />
      </Stack>
    </>
  )
}

AboutPage.getLayout = getPublicLayout

export default AboutPage
