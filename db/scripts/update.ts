import teams from 'nba/data/teams.json'

import db from '@/db'
import { getUpdatedTeamData, updateTeamData } from '@/db/lib/teams'

export async function main(): Promise<void> {
  console.log('Start updating ...')

  const teamData = []

  for (const team of teams) {
    const data = await getUpdatedTeamData(team.teamId)
    teamData.push(data)
  }

  for (const team of teamData) {
    await updateTeamData(team)
  }

  console.log('Updates finished.')
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
