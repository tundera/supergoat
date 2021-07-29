import db from 'db'

const removeUsers = async () => {
  const users = await db.user.findMany()
  console.dir(users)
}

const main = async () => {
  await removeUsers()
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    process.exit(0)
  })
