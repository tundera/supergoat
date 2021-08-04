import { join } from 'path'
import { Generator } from '@paljs/generator'
import findWorkspaceRoot from 'find-yarn-workspace-root'

const cwd = process.cwd()
const workspaceRoot = findWorkspaceRoot(cwd) as string

const main = async () => {
  const generator = new Generator(
    { name: 'nexus', schemaPath: join(workspaceRoot, 'db/schema.prisma') },
    { prismaName: 'db', output: join(cwd, 'src/generated/types') },
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
