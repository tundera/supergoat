import type { FC } from 'react'

import Emoji from 'a11y-react-emoji'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
  Icon,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiGithub, FiMail, FiTwitter, FiYoutube, FiPlus, FiMinus } from 'react-icons/fi'

import useBrandLogo from 'src/hooks/useBrandLogo'
import Link from 'src/components/NextChakraLink'
import MediaIconLink from 'src/components/MediaIconLink'

const Footer: FC = () => {
  const headingColor = useColorModeValue('black', 'white')
  const linkColor = useColorModeValue('gray.500', 'gray.400')
  const tagBgColor = useColorModeValue('brand.500', 'brand.800')

  const BrandLogoIcon = useBrandLogo('black', 'white')

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW="6xl" py={10}>
        {/* Desktop View */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          mx="auto"
          spacing={32}
          display={{ base: 'none', md: 'inherit' }}
          justifyContent="space-between"
        >
          <Stack align="flex-start" color={linkColor}>
            <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
              Product
            </Text>
            <Link href="#">Overview</Link>
            <Stack direction="row" align="center" spacing={2}>
              <Link href="#">Features</Link>
              <Tag size="sm" bg={useColorModeValue('brand.500', 'brand.800')} ml={2} color="white">
                New
              </Tag>
            </Stack>
            <Link href="#">Tutorials</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Releases</Link>
          </Stack>
          <Stack align="flex-start" color={linkColor}>
            <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
              Company
            </Text>
            <Link href="#">About Us</Link>
            <Link href="#">Press</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Partners</Link>
          </Stack>
          <Stack align="flex-start" color={linkColor}>
            <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
              Legal
            </Text>
            <Link href="#">Cookies Policy</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Law Enforcement</Link>
            <Link href="#">Status</Link>
          </Stack>
          <Stack align="flex-start" color={linkColor}>
            <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
              Follow Us
            </Text>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">YouTube</Link>
          </Stack>
        </SimpleGrid>

        {/* Mobile View */}
        <Stack display={{ base: 'initial', md: 'none' }}>
          <Accordion allowToggle allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
                          Product
                        </Text>
                      </Box>
                      {isExpanded ? (
                        <Icon as={FiMinus} fontSize="12px" />
                      ) : (
                        <Icon as={FiPlus} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align="flex-start" ml={2} color={linkColor}>
                      <Link href="#">Overview</Link>
                      <Stack direction="row" align="center" spacing={2}>
                        <Link href="#">Features</Link>
                        <Tag size="sm" bg={tagBgColor} ml={2} color="white">
                          New
                        </Tag>
                      </Stack>
                      <Link href="#">Tutorials</Link>
                      <Link href="#">Pricing</Link>
                      <Link href="#">Releases</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
                          Company
                        </Text>
                      </Box>
                      {isExpanded ? (
                        <Icon as={FiMinus} fontSize="12px" />
                      ) : (
                        <Icon as={FiPlus} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align="flex-start" ml={2} color={linkColor}>
                      <Link href="#">About Us</Link>
                      <Link href="#">Press</Link>
                      <Link href="#">Careers</Link>
                      <Link href="#">Contact Us</Link>
                      <Link href="#">Partners</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
                          Legal
                        </Text>
                      </Box>
                      {isExpanded ? (
                        <Icon as={FiMinus} fontSize="12px" />
                      ) : (
                        <Icon as={FiPlus} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align="flex-start" ml={2} color={linkColor}>
                      <Link href="#">Cookies Policy</Link>
                      <Link href="#">Privacy Policy</Link>
                      <Link href="#">Terms of Service</Link>
                      <Link href="#">Law Enforcement</Link>
                      <Link href="#">Status</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight={500} fontSize="lg" mb={2} color={headingColor}>
                          Follow Us
                        </Text>
                      </Box>
                      {isExpanded ? (
                        <Icon as={FiMinus} fontSize="12px" />
                      ) : (
                        <Icon as={FiPlus} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align="flex-start" ml={2} color={linkColor}>
                      <Link href="#">Facebook</Link>
                      <Link href="#">Twitter</Link>
                      <Link href="#">YouTube</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
      <Box py={0}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Icon as={BrandLogoIcon} w={20} h={20} />
        </Flex>
      </Box>
      <Box py={0}>
        <Stack align="center">
          <HStack spacing={4}>
            <MediaIconLink
              href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
              title="Twitter"
              icon={<FiTwitter size="20" />}
            />
            <MediaIconLink
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              title="GitHub"
              icon={<FiGithub size="20" />}
            />
            <MediaIconLink
              href={`https://www.youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL}`}
              title="YouTube"
              icon={<FiYoutube size="20" />}
            />
            <MediaIconLink
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
              title="Email"
              icon={<FiMail size="20" />}
            />
          </HStack>
          <Text pt={4} mb={4} fontWeight="bold">
            Made with <Emoji symbol="🔥" label="Fire emoji" /> in North Carolina
          </Text>
          <Text mt={2} fontSize="sm">
            © 2021 Philip Johnston. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
