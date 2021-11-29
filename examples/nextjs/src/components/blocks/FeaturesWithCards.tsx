import type { FC } from 'react'

import { Box, Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import GraphQLIcon from 'public/images/graphql.svg'
import NextJSIcon from 'public/images/nextjs.svg'
import ReactQueryIcon from 'public/images/react-query.svg'

const FeaturesWithCards: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gridGap={8}
    >
      <Box
        w={{ base: '75%', md: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt="6"
        bg={bg}
        shadow="dark-lg"
        rounded="lg"
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={NextJSIcon} h={24} w={24} />
          </Flex>
        </Box>
        <Heading
          as="h3"
          color={headerColor}
          fontSize={{ base: '2xl', sm: 'xl' }}
          fontWeight="semibold"
          py="4"
        >
          Next.js
        </Heading>
        <Text fontSize="md" color={textColor} py="4">
          The most powerful React framework for building websites and applications. Deployed on
          Vercel for optimized image caching and optional features like incremental static
          regeneration.
        </Text>
      </Box>
      <Box
        w={{ base: '75%', md: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt={{ base: 6, sm: 16, md: 20, lg: 24 }}
        bg={bg}
        shadow="dark-lg"
        rounded="lg"
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={GraphQLIcon} h={24} w={24} />
          </Flex>
        </Box>
        <Heading
          as="h3"
          color={headerColor}
          fontSize={{ base: '2xl', sm: 'xl' }}
          fontWeight="semibold"
          py="4"
        >
          GraphQL
        </Heading>
        <Text fontSize="md" color={textColor} py={4}>
          Type-safe GraphQL API for querying and mutating data. Built with Nexus and Prisma to
          easily interface with PostgreSQL data layer.
        </Text>
      </Box>
      <Box
        w={{ base: '75%', md: '50%', lg: '25%' }}
        mt={{ base: '6', sm: '16', md: '20', lg: '6' }}
        px="4"
        py="4"
        bg={bg}
        shadow="dark-lg"
        rounded="lg"
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={ReactQueryIcon} h={24} w={24} />
          </Flex>
        </Box>
        <Heading
          as="h3"
          color={headerColor}
          fontSize={{ base: '2xl', sm: 'xl' }}
          fontWeight="semibold"
          py={4}
        >
          React Query
        </Heading>
        <Text fontSize="md" color={textColor} py={4}>
          Prefetch data on the server and hydrate the query cache on the client. Optimized for
          server-side rendering and lazy hydration.
        </Text>
      </Box>
    </Box>
  )
}

export default FeaturesWithCards
