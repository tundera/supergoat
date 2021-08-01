import { join } from 'path'
import { Generator } from '@paljs/generator'

const cwd = process.cwd()

new Generator(
  { name: 'nexus', schemaPath: join(cwd, './db/schema.prisma') },
  { prismaName: 'db' },
).run()
