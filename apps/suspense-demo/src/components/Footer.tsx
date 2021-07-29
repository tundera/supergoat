import { Box, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'
import { FC } from 'react'
import { FiGithub, FiMail, FiTwitter, FiYoutube } from 'react-icons/fi'
import MediaIconLink from 'src/components/MediaIconLink'

const Footer: FC = () => {
  const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <Stack p={4} bg={bg} color={color} align="center">
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
      <Text mt={2} mb={4} fontWeight="bold">
        Made with <Emoji symbol="🔥" label="Fire emoji" /> in Colorado
      </Text>
      <Text fontSize="sm">
        <Text as="span" fontFamily="body">
          ©
        </Text>
        2021 Tundera. All Rights Reserved.
      </Text>
    </Stack>
  )
}

export default Footer
