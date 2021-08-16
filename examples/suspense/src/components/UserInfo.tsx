import type { FC } from 'react'

import Image from 'next/image'
import { signOut } from 'next-auth/client'
import { useSession } from 'next-auth/client'

import NextChakraLink from 'src/components/NextChakraLink'

const UserInfo: FC = () => {
  const { data: session } = useSession()

  if (session?.user) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await signOut()
          }}
        >
          Logout
        </button>
        <div>
          <Image
            src={session.user.image as string}
            width={50}
            height={50}
            layout="responsive"
            alt="User avatar image"
          />
          User name: <code>{session.user.name}</code>
          <br />
          User role: <code>{session.user.name}</code>
          <br />
          Email address: <code>{session.user.email}</code>
          <br />
        </div>
      </>
    )
  } else {
    return (
      <>
        <NextChakraLink href="/signup">
          <strong>Sign Up</strong>
        </NextChakraLink>
        <NextChakraLink href="/signin">
          <strong>Login</strong>
        </NextChakraLink>
      </>
    )
  }
}

export default UserInfo
