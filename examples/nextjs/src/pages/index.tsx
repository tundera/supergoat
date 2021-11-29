import type { NextPage } from 'types'

import { Stack } from '@chakra-ui/react'

import CallToAction from 'src/components/blocks/CallToAction'
import { getLayout as getPublicLayout } from 'src/layouts/PublicLayout'

const HomePage: NextPage = () => {
  return (
    <Stack direction="column" align="center" w="full" spacing={4}>
      <CallToAction
        title="Suspense Demo"
        subtitle="tundera.dev"
        description="Next.js template app built with Chakra UI and React Query."
        link={{ label: 'Learn more', href: '/about' }}
      />
    </Stack>
  )
}

HomePage.getLayout = getPublicLayout

export default HomePage
