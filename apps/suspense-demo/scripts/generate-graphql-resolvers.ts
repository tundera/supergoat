import { join } from 'path'
import { Generator } from '@paljs/generator'

const cwd = process.cwd()

const main = async () => {
  const generator = new Generator(
    { name: 'nexus', schemaPath: join(cwd, './db/schema.prisma') },
    { prismaName: 'db', output: join(cwd, 'src/services/graphql/generated') },
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
