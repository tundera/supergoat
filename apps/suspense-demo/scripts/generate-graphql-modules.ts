import { join } from 'path'
import { Generator } from '@paljs/generator'
import findWorkspaceRoot from 'find-yarn-workspace-root'

const cwd = process.cwd()
const root = findWorkspaceRoot(cwd) as string

const main = async () => {
  const generator = new Generator(
    { name: 'nexus', schemaPath: join(root, 'db/schema.prisma') },
    { prismaName: 'db', output: join(cwd, 'src/services/graphql/generated/types') },
  )

  await generator.run()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
