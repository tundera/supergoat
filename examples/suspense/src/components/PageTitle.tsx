import type { FC } from 'react'

import { Heading, HeadingProps } from '@chakra-ui/react'

type Props = Omit<HeadingProps, 'css'>

export const PageTitle: FC<Props> = ({ children, ...props }) => (
  <Heading size="lg" mb={6} {...props}>
    {children}
  </Heading>
)

PageTitle.defaultProps = {
  size: 'lg',
  mb: 6,
}
