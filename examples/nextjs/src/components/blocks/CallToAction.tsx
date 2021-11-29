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
    'linear(to-t, #110d5b, black)',
    'linear(to-t, white, #a3f6e7)',
  )

  const subtitleColor = useColorModeValue('#a3f6e7', '#110d5b')

  const buttonColor = useColorModeValue('#110d5b', '#a3f6e7')
  const buttonBgColor = useColorModeValue('white', 'black')
  const hoverButtonBgColor = useColorModeValue('whiteAlpha.800', 'blackAlpha.800')

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
          <chakra.span display="block" fontSize={{ base: '3xl', sm: '4xl' }} color={subtitleColor}>
            {subtitle}
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" maxW="md" mx="auto" color={color}>
          {description}
        </Text>
        {link && (
          <Flex justify="center" mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
            <Box mt="12" display="inline-flex" rounded="md">
              <ButtonGroup spacing={4}>
                <NextLink href="/teams" passHref>
                  <Button
                    as="a"
                    href="https://github.com/tundera"
                    type="button"
                    color={buttonColor}
                    bg={buttonBgColor}
                    shadow="lg"
                    w="full"
                    textAlign="center"
                    fontSize="md"
                    fontWeight="semibold"
                    py="2"
                    px="4"
                    rounded="lg"
                    _hover={{ bg: hoverButtonBgColor }}
                    _active={{ bg: hoverButtonBgColor }}
                  >
                    See Demo
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
