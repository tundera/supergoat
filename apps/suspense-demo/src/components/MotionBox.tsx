import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type MotionBoxProps = Omit<BoxProps, 'transition'>

const MotionBox = motion<MotionBoxProps>(Box)

export default MotionBox
