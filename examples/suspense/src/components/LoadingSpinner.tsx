import type { FC } from 'react'

import { Flex, Spinner } from '@chakra-ui/react'

const LoadingSpinner: FC = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  )
}

export default LoadingSpinner
