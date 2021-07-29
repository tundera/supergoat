import type { FC } from 'react'

import { Button, ButtonProps } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaBars, FaExternalLinkAlt } from 'react-icons/fa'
import ColorModeToggle from './ColorModeToggle'
import NavButton from './buttons/NavButton'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const MobileDrawer = dynamic(() => import('./MobileMenu'), {
  ssr: false,
})

const Header: FC = () => {
  const color = useColorModeValue('#202020', 'white')
  const bgColor = useColorModeValue('whiteAlpha.50', 'blackAlpha.50')
  const bgColorFallback = useColorModeValue('whiteAlpha.900', 'rgba(29, 29, 29, 0.9)')
  const borderBottomColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const hoverBg = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const skipColor = useColorModeValue('white', '#202020')

  const buttonStyle: ButtonProps = {
    as: 'a',
    borderRadius: 'none',
    py: [6, 8],
    px: 2,
    minW: ['50px', '60px'],
    variant: 'ghost',
    colorScheme: 'blackAlpha',
    color,
    _hover: {
      bgColor: hoverBg,
    },
    _focus: {
      boxShadow: 'none',
    },
  }
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
      bgColor="whiteAlpha.50"
      zIndex="sticky"
      w="full"
      sx={{
        '@supports (backdrop-filter: blur(12px))': {
          backdropFilter: 'blur(12px)',
          bgColor,
        },
        '@supports (-webkit-backdrop-filter: blur(12px))': {
          WebkitBackdropFilter: 'blur(12px)',
          bgColor,
        },
        '@supports not (backdrop-filter: blur(12px))': {
          bgColor: bgColorFallback,
        },
      }}
      borderBottomColor={borderBottomColor}
      borderBottomWidth="2px"
      pos="sticky"
      top={0}
    >
      <Flex mx="auto" w="full" maxW="5xl" pos="relative">
        <NextLink href="/" passHref>
          <Button as="a" {...buttonStyle} fontSize={{ base: 'lg', md: 'xl' }}>
            tundera.dev
          </Button>
        </NextLink>
        {/* normal nav */}
        <Flex d={['none', 'flex']} justifyContent="space-between" flex="1">
          <HStack spacing={0}>
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
            {...buttonStyle}
            as="button"
            onClick={onOpen}
            variant="ghost"
            aria-label="Open navigation menu"
            icon={<FaBars />}
          />
        </Flex>
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  )
}

export default Header
