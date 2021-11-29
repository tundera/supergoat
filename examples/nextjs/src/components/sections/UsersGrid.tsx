import { FC, Suspense } from 'react'
import { Box, Spinner, Text, SimpleGrid } from '@chakra-ui/react'

import Image from 'src/components/NextChakraImage'
import { client } from 'src/lib/graphql'
import { useAllUsersQuery } from 'src/services/graphql/generated/hooks'

const UsersGrid: FC = () => {
  const { data } = useAllUsersQuery(client)

  return (
    <SimpleGrid minChildWidth={30} spacing={10}>
      {data?.users?.map((user) => (
        <Suspense fallback={<Spinner size="lg" />} key={user?.id ?? ''}>
          <Box>
            <Image
              src={user?.image as string}
              width={150}
              height={150}
              alt="User avatar image"
              placeholder="blur"
            />
            <Text>{user?.name}</Text>
          </Box>
        </Suspense>
      ))}
    </SimpleGrid>
  )
}

export default UsersGrid
