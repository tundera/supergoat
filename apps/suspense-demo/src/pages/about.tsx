import type { NextPage } from 'types'

import { Heading, Stack } from '@chakra-ui/react'

import { getLayout as getPageLayout } from 'src/layouts/PageLayout'
import FeaturesWithCards from 'src/components/blocks/FeaturesWithCards'

const AboutPage: NextPage = () => {
  return (
    <>
      <Stack direction="column" align="center" w="full" spacing={4} py={16}>
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
