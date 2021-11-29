import type { FC } from 'react'
import type { ThemeProviderProps as ChakraProviderProps } from '@chakra-ui/react'

import { cookieStorageManager, localStorageManager, ChakraProvider } from '@chakra-ui/react'

import { theme } from '../../src/theme'

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>

export interface ThemeProviderProps extends Omit<ChakraProviderProps, 'theme'> {
  cookies?: string
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ cookies, children, ...props }) => {
  return (
    <ChakraProvider
      {...props}
      theme={theme}
      colorModeManager={cookies ? cookieStorageManager(cookies) : localStorageManager}
    >
      {children}
    </ChakraProvider>
  )
}
