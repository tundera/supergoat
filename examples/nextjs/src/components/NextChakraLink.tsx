import type { FC, PropsWithChildren } from 'react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

type NextChakraLinkProps = PropsWithChildren<NextLinkProps & Omit<ChakraLinkProps, 'as'>>

//  Has to be a new component because both chakra and next share the `as` keyword
const NextChakraLink: FC<NextChakraLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...chakraProps
}) => {
  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  )
}

export default NextChakraLink
