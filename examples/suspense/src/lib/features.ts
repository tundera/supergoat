import PrismaLogo from 'public/images/prisma.svg'
import ReactQueryLogo from 'public/images/react-query.svg'
import TypeScriptLogo from 'public/images/typescript.svg'

export const mainFeatures = [
  {
    title: 'TypeScript',
    icon: TypeScriptLogo,
    description:
      'Client and server code both written in TypeScript, so you get full type safety across your stack. Code hinting and autocomplete in your IDE for top-notch developer experience.',
  },
  {
    title: 'Prisma',
    icon: PrismaLogo,
    description:
      'Connect to your PostgreSQL database instance, run migrations, and execute CRUD operations on your data during builds and at runtime.',
  },

  {
    title: 'React Query',
    icon: ReactQueryLogo,
    description:
      'Query, update, and cache data using React Query. Works seamlessly with GraphQL for instant data fetching on both the server and client.',
  },
]
