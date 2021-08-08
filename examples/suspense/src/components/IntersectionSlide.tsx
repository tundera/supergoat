import type { FC } from 'react'

import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import MotionBox from 'src/components/MotionBox'

interface Props {
  threshold?: number | number[]
}

const IntersectionSlide: FC<Props> = ({ threshold, children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: threshold ?? 0.35 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.4 }}
      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
    >
      {children}
    </MotionBox>
  )
}

export default IntersectionSlide
