import type { FC } from 'react'

import { Spinner, Center } from '@chakra-ui/react'

/** Renders a full page loading spinner */
export const FullPageSpinner: FC = () => {
  return (
    <Center height="100vh" width="100vw">
      <Spinner />
    </Center>
  )
}
