import type { FC } from 'react'

import { Flex, useColorModeValue } from '@chakra-ui/react'
import MotionBox from 'src/components/MotionBox'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const Main: FC = ({ children }) => {
  const router = useRouter()
  const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <AnimatePresence exitBeforeEnter>
      <MotionBox
        key={router.route}
        display="flex"
        flexDirection="column"
        animate="enter"
        as="main"
        exit="exit"
        h="full"
        flexGrow={1}
        bg={bg}
        color={color}
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 5 },
          enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          exit: { opacity: 0, transition: { duration: 0.1 } },
        }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  )
}

export default Main
