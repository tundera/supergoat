import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FaWrench } from 'react-icons/fa'
import { signOut } from 'next-auth/client'
import { useSession } from 'next-auth/client'

const SettingsButton: FC = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const hoverColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const hoverBg = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <Menu>
      <Tooltip hasArrow label="Settings ⚙️">
        <MenuButton
          as={IconButton}
          aria-label={'Settings icon dropdown'}
          icon={<FaWrench size="20" />}
          size="sm"
          color={color}
          _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: hoverColor }}
          variant="ghost"
        />
      </Tooltip>

      <MenuList bg={bg}>
        <MenuGroup title="Settings">
          <MenuItem
            onClick={() => router.push('/dashboard')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Flex justify="space-between" w="full">
              <Text>Dashboard</Text>
              <Avatar
                size="sm"
                name={session?.user?.name as string}
                src={session?.user?.image as string}
              />
            </Flex>
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/account')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Text>Account</Text>
          </MenuItem>
          <MenuItem
            onClick={() => signOut()}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Text>Sign Out</Text>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default SettingsButton
