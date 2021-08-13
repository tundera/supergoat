import type { FC } from 'react'

import { Box, Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import GraphQLIcon from 'public/images/graphql.svg'
import NextJSIcon from 'public/images/nextjs.svg'
import NodeJSIcon from 'public/images/nodejs.svg'

const FeaturesWithCards: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <Box
      display={{ sm: 'flex' }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gridGap="8"
    >
      <Box
        w={{ base: 'full', sm: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt="6"
        bg={bg}
        shadow="dark-lg"
        rounded={{ base: 'none', md: 'lg' }}
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={NextJSIcon} h="24" w="24" />
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
          The most powerful React framework for building websites and applications. Amplified with
          TypeScript for type safety and utilties like Hygen and GraphQL Codegen for code generation
          to speed up development workflow.
        </Text>
      </Box>
      <Box
        w={{ base: 'full', sm: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt={{ base: '6', sm: '16', md: '20', lg: '24' }}
        bg={bg}
        shadow="dark-lg"
        rounded={{ base: 'none', md: 'lg' }}
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={GraphQLIcon} h="24" w="24" />
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
        <Text fontSize="md" color={textColor} py="4">
          Flexible data queries and mutations with GraphQL, preconfigured to work with React Query
          v3. Interface with your data layer using Prisma + Nexus integration to create highly
          customizable APIs.
        </Text>
      </Box>
      <Box
        w={{ base: 'full', sm: '50%', lg: '25%' }}
        mt={{ base: '6', sm: '16', md: '20', lg: '6' }}
        px="4"
        py="4"
        bg={bg}
        shadow="dark-lg"
        rounded={{ base: 'none', md: 'lg' }}
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
            <Icon as={NodeJSIcon} h="24" w="24" />
          </Flex>
        </Box>
        <Heading
          as="h3"
          color={headerColor}
          fontSize={{ base: '2xl', sm: 'xl' }}
          fontWeight="semibold"
          py="4"
        >
          Serverless
        </Heading>
        <Text fontSize="md" color={textColor} py="4">
          Easily integrate with headless CMS providers and setup payment services like Stripe
          Checkout using popular JAMStack FaaS platforms. Example configurations included for
          deploying your API routes functions on your existing Vercel or Netlify account.
        </Text>
      </Box>
    </Box>
  )
}

export default FeaturesWithCards
