import { Box, chakra, Flex, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

type Feature = {
  title: string
  icon: any
  description: string
}

interface Props {
  title: string
  subtitle: string
  features: Feature[]
}
const FeaturesGrid: FC<Props> = ({ title, subtitle, features }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Flex p={20} w="auto" justifyContent="center" alignItems="center" bg={bg}>
      <Box px={8} py={20} mx="auto" shadow="xl">
        <Box textAlign={{ lg: 'center' }} py="16">
          <chakra.p
            mt={2}
            fontSize={{ base: '3xl', sm: '4xl' }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={titleColor}
          >
            {title}
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: 'auto' }}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            {subtitle}
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          {features.map(({ icon, title, description }) => (
            <Box key={title}>
              <Flex align="center" justify="center" mb={8} rounded="full">
                <Icon as={icon} w="24" h="24" />
              </Flex>
              <chakra.h3
                fontSize="lg"
                mb={2}
                fontWeight="semibold"
                lineHeight="shorter"
                color={titleColor}
              >
                {title}
              </chakra.h3>
              <chakra.p fontSize="sm" color={textColor}>
                {description}
              </chakra.p>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default FeaturesGrid

export type { Props as FeatureGridProps }
