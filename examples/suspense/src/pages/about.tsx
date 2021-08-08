import type { NextPage } from 'types'

import { Heading, Stack, useColorModeValue } from '@chakra-ui/react'

import { getLayout as getPageLayout } from 'src/layouts/PageLayout'
import FeaturesWithCards from 'src/components/blocks/FeaturesWithCards'

const AboutPage: NextPage = () => {
  const bg = useColorModeValue('black', 'white')
  const textGradient = useColorModeValue(
    'linear(to-tr, white,pink.400)',
    'linear(to-tr, white, purple.500)',
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

AboutPage.getLayout = getPageLayout

export default AboutPage
