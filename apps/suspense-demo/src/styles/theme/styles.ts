import { GlobalStyles, mode } from '@chakra-ui/theme-tools'

const styles: GlobalStyles = {
  global: (props) => ({
    html: {
      minWidth: '360px',
      scrollBehavior: 'smooth',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'base',
      bgGradient: mode(
        'linear(to-t, brand.300, white)',
        'linear(to-t, brand.300, gray.800)',
      )(props),
    },
  }),
}

export default styles
