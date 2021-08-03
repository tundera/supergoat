import type { NextPage } from 'types'

import { Stack } from '@chakra-ui/react'

import CallToAction from 'src/components/blocks/CallToAction'
import { getLayout as getPageLayout } from 'src/layouts/PageLayout'

interface PageProps {
  cookies?: string
}

const HomePage: NextPage<PageProps> = () => {
  return (
    <Stack direction="column" align="center" w="full" spacing={4}>
      <CallToAction
        title="Suspense Demo"
        subtitle="tundera.dev"
        description="Showcase of upcoming React 18 features including concurrent rendering and the new Suspense API. Built with Next.js, Chakra UI, and React Query."
        link={{ label: 'Learn more', href: '/about' }}
      />
    </Stack>
  )
}

HomePage.getLayout = getPageLayout

export default HomePage
