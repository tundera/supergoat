import type { FC } from 'react'

import { Heading, HeadingProps } from '@chakra-ui/react'

export const PageTitle: FC<HeadingProps> = ({ children, ...props }) => (
  <Heading size="lg" mb={6} {...props}>
    {children}
  </Heading>
)

PageTitle.defaultProps = {
  size: 'lg',
  mb: 6,
}
