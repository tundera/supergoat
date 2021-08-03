import type { NextPage } from 'types'

import { Heading, Stack, useColorModeValue } from '@chakra-ui/react'

import { getLayout as getPageLayout } from 'src/layouts/PageLayout'
import FeaturesWithCards from 'src/components/blocks/FeaturesWithCards'

const AboutPage: NextPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-tr, white,pink.400)',
    'linear(to-tr, white, purple.500)',
  )

  return (
    <>
      <Stack direction="column" align="center" w="full" bgGradient={bgGradient} spacing={4} py={16}>
        <Heading as="h2" fontSize="6xl" mb="4">
          About
        </Heading>
        <FeaturesWithCards />
      </Stack>
    </>
  )
}

AboutPage.getLayout = getPageLayout

export default AboutPage
