import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

const NextChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'layout',
      'priority',
      'placeholder',
      'blur',
      'blurDataURL',
    ].includes(prop),
})

export default NextChakraImage
