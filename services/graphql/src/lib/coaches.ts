import type { BackupCoachData, Coach, CoachData } from '../../types'
import db from '../index'

export const transformCoachData = (coach: BackupCoachData) => {
  return {
    ...coach,
    id: coach.id,
    createdAt: new Date(coach.createdAt),
    updatedAt: new Date(),
    handle: coach.handle,
    isAssistant: coach.isAssistant,
    teamId: coach.teamId,
  }
}

export const upsertCoachData = async (coach: CoachData) => {
  // Update or create coach if not present in database
  await db.coach.upsert({
    where: { id: coach.coachId.toString() },
    create: {
      id: coach.coachId.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: coach.coachId.toString(),
      name: coach.coachName,
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
    },
    update: {
      id: coach.coachId.toString(),
      updatedAt: new Date(),
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
    },
  })

  // Connect coaches to or remove coaches from teams
  if (coach.teamId) {
    await db.coach.update({
      where: { id: coach.coachId.toString() },
      data: {
        team: {
          connect: {
            id: coach.teamId.toString(),
          },
        },
      },
    })
  } else {
    await db.coach.update({
      where: { id: coach.coachId.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}

export const seedCoachData = async (coach: Coach) => {
  // Create coach in database
  await db.coach.create({
    data: {
      id: coach.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: coach.handle,
      name: coach.name,
      type: coach.type,
      isAssistant: coach.isAssistant,
    },
  })

  // Connect coaches to or remove coaches from teams
  if (coach.teamId) {
    await db.coach.update({
      where: { id: coach.id.toString() },
      data: {
        team: {
          connect: {
            id: coach.teamId.toString(),
          },
        },
      },
    })
  } else {
    await db.coach.update({
      where: { id: coach.id.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}
