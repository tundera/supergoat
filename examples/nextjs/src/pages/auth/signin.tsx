import { Flex } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import { ClientSafeProvider, getProviders } from 'next-auth/react'
import { getLayout as getPublicLayout } from 'src/layouts/PublicLayout'
import LoginForm from 'src/components/forms/LoginForm'
import type { NextPage as NextPage } from 'types'

interface Props {
  providers: ClientSafeProvider[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await getProviders(),
    },
  }
}

const SignInPage: NextPage<Props> = ({ providers }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <LoginForm providers={providers} />
      </Flex>
    </>
  )
}

SignInPage.getLayout = getPublicLayout

export default SignInPage
