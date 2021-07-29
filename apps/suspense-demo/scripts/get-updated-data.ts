import teams from 'nba/data/teams.json'

import db from 'db'
import { getUpdatedTeamData, updateTeamData } from 'db/helpers/teams'

export async function main() {
  console.log('Start updating ...')

  const teamData: any[] = []

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
