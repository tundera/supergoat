import type {
  BackupColorSchemeData,
  BackupImageData,
  BackupCoachData,
  BackupPlayerData,
  BackupTeamData,
} from 'db/types'

import colorSchemesJson from 'db/backups/documents/color-schemes.json'
import imagesJson from 'db/backups/documents/images.json'
import coachesJson from 'db/backups/documents/coaches.json'
import playersJson from 'db/backups/documents/players.json'
import teamsJson from 'db/backups/documents/teams.json'

export const coaches: BackupCoachData[] = coachesJson.map(({ createdAt, updatedAt, ...coach }) => ({
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  ...coach,
}))

export const players: BackupPlayerData[] = playersJson.map(
  ({ createdAt, updatedAt, ...player }) => ({
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
    ...player,
  }),
)

export const colorSchemes: BackupColorSchemeData[] = colorSchemesJson.map(
  ({ createdAt, updatedAt, ...colorScheme }) => ({
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
    ...colorScheme,
  }),
)

export const images: BackupImageData[] = imagesJson.map(({ createdAt, updatedAt, ...image }) => ({
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  ...image,
}))

export const teams: BackupTeamData[] = teamsJson.map(({ createdAt, updatedAt, ...team }) => ({
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  ...team,
}))
