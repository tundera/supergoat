import type { FC } from 'react'
import type { ChakraProviderProps } from '@chakra-ui/react'

import {
  cookieStorageManager,
  localStorageManager,
  ChakraProvider as DefaultChakraProvider,
} from '@chakra-ui/react'

import defaultTheme from 'src/theme'

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>

export interface ThemeProviderProps extends ChakraProviderProps {
  cookies?: string
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
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
