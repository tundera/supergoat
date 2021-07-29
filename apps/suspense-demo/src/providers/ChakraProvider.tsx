import type { FC } from 'react'
import type { ChakraProviderProps as DefaultChakraProviderProps } from '@chakra-ui/react'

import {
  cookieStorageManager,
  localStorageManager,
  ChakraProvider as DefaultChakraProvider,
} from '@chakra-ui/react'

import defaultTheme from 'src/styles/theme'

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>

export interface ChakraProviderProps extends DefaultChakraProviderProps {
  cookies?: string
}

const ChakraProvider: FC<ChakraProviderProps> = ({
  cookies,
  theme = defaultTheme,
  children,
  ...props
}) => {
  return (
    <DefaultChakraProvider
      {...props}
      theme={theme}
      colorModeManager={cookies ? cookieStorageManager(cookies) : localStorageManager}
    >
      {children}
    </DefaultChakraProvider>
  )
}

export default ChakraProvider
