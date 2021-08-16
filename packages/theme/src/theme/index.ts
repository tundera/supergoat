import { extendTheme, ThemeOverride } from '@chakra-ui/react'

import colors from 'src/theme/colors'
import fonts from 'src/theme/fonts'
import styles from 'src/theme/styles'

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
