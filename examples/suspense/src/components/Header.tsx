import type { FC } from 'react'

import {
  useColorModeValue,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  LinkOverlay,
  LinkBox,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaBars } from 'react-icons/fa'
import ColorModeToggle from './ColorModeToggle'
import NavButton from './buttons/NavButton'
import MotionBox from './MotionBox'
import useBrandLogo from 'src/hooks/useBrandLogo'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('src/components/MobileMenu'))

const Header: FC = () => {
  const color = useColorModeValue('black', 'white')
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.5)')
  const boxShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset',
    'rgba(255, 255, 255, 0.1) 0px -1px 0px 0px inset',
  )

  const borderBottomColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const hoverBg = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')

  const BrandLogoIcon = useBrandLogo('black', 'white')

  const links = [
    {
      text: 'About',
      url: '/about',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: 'Teams',
      url: '/teams',
    },
  ]

  return (
    <Box
      as="nav"
      bgColor={bgColor}
      zIndex="sticky"
      w="full"
      sx={{
        '@supports (backdrop-filter: saturate(1.8) blur(5px))': {
          backdropFilter: 'saturate(1.8) blur(5px)',
          bgColor,
        },
        '@supports (-webkit-backdrop-filter: saturate(1.8) blur(5px))': {
          WebkitBackdropFilter: 'saturate(1.8) blur(5px)',
          bgColor,
        },
        '@supports not (backdrop-filter: saturate(1.8) blur(5px))': {
          bgColor,
        },
      }}
      boxShadow={boxShadow}
      borderBottomColor={borderBottomColor}
      borderBottomWidth="2px"
      pos="sticky"
      top={0}
    >
      <Flex mx="auto" w="full" maxW="container.xl" pos="relative" py={2}>
        <HStack spacing={4} mx={2}>
          <LinkBox
            as={MotionBox}
            mr={8}
            ml={2}
            py={2}
            whileHover={{
              opacity: 0.7,
              fillOpacity: 0.7,
              transition: { ease: 'easeInOut', duration: 0.25 },
            }}
          >
            <Icon as={BrandLogoIcon} w={8} h={8} />
            <NextLink href="/" passHref>
              <LinkOverlay fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                tundera
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </HStack>
        {/* normal nav */}
        <Flex display={['none', 'flex']} justifyContent="space-between" flex="1">
          <HStack spacing={4} mx={2}>
            {links.map((link) => (
              <NavButton href={link.url} key={link.text}>
                {link.text}
              </NavButton>
            ))}
          </HStack>
          <ColorModeToggle ml="auto" mr="2" alignSelf="center" />
        </Flex>
        <Flex d={['flex', 'none']} justifyContent="flex-end" alignItems="center" flex="1">
          <IconButton
            as="button"
            onClick={onOpen}
            variant="ghost"
            aria-label="Open navigation menu"
            icon={<FaBars />}
          />
        </Flex>
        <MobileMenu isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  )
}

export default Header
