import { extendTheme, ThemeOverride } from '@chakra-ui/react'

import colors from './colors'
import fonts from './fonts'
import styles from './styles'

const overrides: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  fonts,
  colors,
}

export const theme = extendTheme(overrides)
