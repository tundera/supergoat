import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import useBrandLogo from 'src/hooks/useBrandLogo'

interface CtaWithDescriptionProps {
  title: string
  subtitle: string
  description: string
  link?: {
    href: string
    label: string
  }
}

const CallToAction = ({ title, subtitle, description, link }: CtaWithDescriptionProps) => {
  const color = useColorModeValue('white', 'black')
  const bgGradient = useColorModeValue(
    'linear(to-t, white, pink.500)',
    'linear(to-t, white, purple.800)',
  )

  const BrandLogoIcon = useBrandLogo('white', 'black')

  return (
    <Stack bgGradient={bgGradient} w="full" py={{ base: 0, md: 16 }}>
      <Box
        textAlign="center"
        mx="auto"
        py={{ base: '12', lg: '16' }}
        px={{ base: '4', sm: '6', lg: '8' }}
        zIndex={10}
      >
        <Icon as={BrandLogoIcon} w={40} h={40} />
        <Heading as="h2" fontSize={{ base: '4xl', sm: '6xl' }} fontWeight="extrabold" color={color}>
          <chakra.span display="block">{title}</chakra.span>
          <chakra.span display="block" fontSize={{ base: '3xl', sm: '4xl' }} color="indigo.500">
            {subtitle}
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" maxW="md" mx="auto" color={color}>
          {description}
        </Text>
        {link && (
          <Flex justify="center" mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
            <Box mt="12" display="inline-flex" rounded="md" shadow="base">
              <ButtonGroup spacing={4}>
                <NextLink href="/about" passHref>
                  <Button
                    as="a"
                    href="https://github.com/tundera"
                    type="button"
                    color="white"
                    variant="ghost"
                    bg="indigo.600"
                    shadow="md"
                    transition="ease-in"
                    transitionDuration="200ms"
                    w="full"
                    textAlign="center"
                    fontSize="md"
                    fontWeight="semibold"
                    py="2"
                    px="4"
                    rounded="lg"
                    _hover={{ bg: 'indigo.700' }}
                    _active={{ bg: 'indigo.700' }}
                  >
                    Learn more
                  </Button>
                </NextLink>
                <NextLink href="/teams" passHref>
                  <Button
                    as="a"
                    href="https://github.com/tundera"
                    type="button"
                    color="brand.600"
                    variant="ghost"
                    bg="whiteAlpha.600"
                    shadow="md"
                    transition="ease-in"
                    transitionDuration="200ms"
                    w="full"
                    textAlign="center"
                    fontSize="md"
                    fontWeight="semibold"
                    py="2"
                    px="4"
                    rounded="lg"
                    _hover={{ bg: 'whiteAlpha.700' }}
                    _active={{ bg: 'whiteAlpha.700' }}
                  >
                    See demo
                  </Button>
                </NextLink>
              </ButtonGroup>
            </Box>
          </Flex>
        )}
      </Box>
    </Stack>
  )
}

export default CallToAction
