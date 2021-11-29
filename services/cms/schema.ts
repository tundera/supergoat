import { list } from '@keystone-next/keystone'
import {
  text,
  float,
  integer,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-next/keystone/fields'

export const lists = {
  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        isIndexed: 'unique',
        isFilterable: true,
        validation: { isRequired: true },
      }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
  Team: list({
    ui: {
      listView: {
        initialColumns: ['name', 'players', 'coaches', 'colorScheme', 'logo'],
      },
    },
    fields: {
      createdAt: timestamp({ validation: { isRequired: true } }),
      updatedAt: timestamp({ validation: { isRequired: true } }),
      name: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      handle: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      slug: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      city: text({ validation: { isRequired: true } }),
      abbreviation: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      conference: text({ validation: { isRequired: true } }),
      division: text({ validation: { isRequired: true } }),
      established: text({ validation: { isRequired: true } }),
      wins: integer(),
      losses: integer(),
      winPercentage: float(),
      players: relationship({ ref: 'Player.team', many: true }),
      coaches: relationship({ ref: 'Coach.team', many: true }),
      colorScheme: relationship({ ref: 'ColorScheme.team', many: false }),
      logo: relationship({ ref: 'Image.team', many: false }),
    },
  }),
  Player: list({
    ui: {
      listView: {
        initialColumns: ['name', 'weight', 'height', 'team', 'image'],
      },
    },
    fields: {
      createdAt: timestamp({ validation: { isRequired: true } }),
      updatedAt: timestamp({ validation: { isRequired: true } }),
      name: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      handle: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      slug: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      height: text(),
      weight: text(),
      number: text(),
      position: text(),
      team: relationship({
        ref: 'Team.players',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          linkToItem: true,
        },
      }),
      image: relationship({ ref: 'Image.player', many: false }),
    },
  }),
  Coach: list({
    ui: {
      listView: {
        initialColumns: ['name', 'type', 'team', 'image'],
      },
    },
    fields: {
      createdAt: timestamp({ validation: { isRequired: true } }),
      updatedAt: timestamp({ validation: { isRequired: true } }),
      name: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      handle: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      type: text(),
      isAssistant: text(),
      team: relationship({
        ref: 'Team.coaches',
        many: false,
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          linkToItem: true,
        },
      }),
      image: relationship({ ref: 'Image.coach', many: false }),
    },
  }),
  ColorScheme: list({
    ui: {
      isHidden: false,
    },
    fields: {
      createdAt: timestamp({ validation: { isRequired: true } }),
      updatedAt: timestamp({ validation: { isRequired: true } }),
      primary: text({ validation: { isRequired: true } }),
      secondary: text({ validation: { isRequired: true } }),
      team: relationship({ ref: 'Team.colorScheme', many: true }),
    },
  }),
  Image: list({
    ui: {
      listView: {
        initialColumns: ['type', 'url'],
      },
    },
    fields: {
      createdAt: timestamp({ validation: { isRequired: true } }),
      updatedAt: timestamp({ validation: { isRequired: true } }),
      url: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      type: select({
        options: [
          { label: 'Logo', value: 'LOGO' },
          { label: 'Headshot', value: 'HEADSHOT' },
        ],
        ui: {
          displayMode: 'select',
        },
      }),
      player: relationship({ ref: 'Player.image', many: false }),
      coach: relationship({ ref: 'Coach.image', many: false }),
      team: relationship({ ref: 'Team.logo', many: false }),
    },
  }),
}
