#!/usr/bin/env node

import 'universal-dotenv/register'

import type {
  TeamTableData,
  CoachTableData,
  ImageTableData,
  PlayerTableData,
  ColorSchemeTableData,
} from 'types'

import prettier from 'prettier'
import path from 'path'

import { promises as fs } from 'fs'

import images from 'seed-data/documents/raw/images.json'
import colorSchemes from 'seed-data/documents/raw/color-schemes.json'
import coaches from 'seed-data/documents/raw/coaches.json'
import players from 'seed-data/documents/raw/players.json'
import teams from 'seed-data/documents/raw/teams.json'

const prepareColorSchemes = async (data: ColorSchemeTableData[], filePath: string) => {
  const filtered: Omit<ColorSchemeTableData, 'id'>[] = []

  for (const colorScheme of data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...filteredData } = colorScheme
    filtered.push(filteredData)
  }

  const prettierConfig = await prettier.resolveConfig(path.resolve('../../', 'prettier.config.js'))

  const formatted = prettier.format(JSON.stringify(filtered), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')

  console.log('Filtered color scheme data 🧑‍🎨')
}

const prepareImages = async (data: ImageTableData[], filePath: string) => {
  const filtered: Omit<ImageTableData, 'id' | 'team' | 'player'>[] = []

  for (const image of data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, team, player, ...filteredData } = image
    filtered.push(filteredData)
  }

  const prettierConfig = await prettier.resolveConfig(path.resolve('../../', 'prettier.config.js'))

  const formatted = prettier.format(JSON.stringify(filtered), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')

  console.log('Filtered image data 🖼️')
}

const prepareCoaches = async (data: CoachTableData[], filePath: string) => {
  const filtered: Omit<CoachTableData, 'id' | 'team' | 'image'>[] = []

  for (const coach of data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, team, image, ...filteredData } = coach
    filtered.push(filteredData)
  }

  const prettierConfig = await prettier.resolveConfig(path.resolve('../../', 'prettier.config.js'))

  const formatted = prettier.format(JSON.stringify(filtered), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')

  console.log('Filtered coach data 📔')
}

const preparePlayers = async (data: PlayerTableData[], filePath: string) => {
  const filtered: Omit<PlayerTableData, 'id' | 'team'>[] = []

  for (const player of data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, team, ...filteredData } = player
    filtered.push(filteredData)
  }

  const prettierConfig = await prettier.resolveConfig(path.resolve('../../', 'prettier.config.js'))

  const formatted = prettier.format(JSON.stringify(filtered), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')

  console.log('Filtered player data ⛹️‍♂️')
}

const prepareTeams = async (data: TeamTableData[], filePath: string) => {
  const filtered: Omit<TeamTableData, 'id' | 'colorScheme'>[] = []

  for (const team of data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, colorScheme, ...filteredData } = team
    filtered.push(filteredData)
  }

  const prettierConfig = await prettier.resolveConfig(path.resolve('../../', 'prettier.config.js'))

  const formatted = prettier.format(JSON.stringify(filtered), {
    ...prettierConfig,
    parser: 'json',
  })

  const jsonData = Buffer.from(formatted, 'utf8')
  await fs.writeFile(filePath, jsonData, 'utf8')

  console.log('Filtered team data 🧑‍🤝‍🧑')
}

const prepareTableData = async () => {
  // Remove relational table data from exported table JSON and write to `seed-data/documents/filtered`
  await prepareColorSchemes(colorSchemes, 'seed-data/documents/filtered/color-schemes.json')
  await prepareImages(images, 'seed-data/documents/filtered/images.json')
  await prepareCoaches(coaches, 'seed-data/documents/filtered/coaches.json')
  await preparePlayers(players, 'seed-data/documents/filtered/players.json')
  await prepareTeams(teams, 'seed-data/documents/filtered/teams.json')
}

const main = async () => {
  try {
    await prepareTableData()
    console.log('\nDone filtering table data ✅')
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
