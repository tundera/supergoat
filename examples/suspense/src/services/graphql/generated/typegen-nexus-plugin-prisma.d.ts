import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationRequest: Prisma.VerificationRequest
  Coach: Prisma.Coach
  Player: Prisma.Player
  ColorScheme: Prisma.ColorScheme
  Team: Prisma.Team
  Image: Prisma.Image
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt' | 'user'
      ordering: 'id' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt' | 'user'
      ordering: 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt' | 'user'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'apple' | 'facebook' | 'github' | 'google' | 'twitter' | 'createdAt' | 'updatedAt' | 'accounts' | 'sessions'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'apple' | 'facebook' | 'github' | 'google' | 'twitter' | 'createdAt' | 'updatedAt' | 'accounts' | 'sessions'
    }
    verificationRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
    }
    coaches: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId' | 'team' | 'imageId' | 'image'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId' | 'team' | 'imageId' | 'image'
    }
    players: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId' | 'team' | 'imageId' | 'image'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId' | 'team' | 'imageId' | 'image'
    }
    colorSchemes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'primary' | 'secondary' | 'team'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'primary' | 'secondary' | 'team'
    }
    teams: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'city' | 'abbreviation' | 'wins' | 'losses' | 'winPercentage' | 'conference' | 'division' | 'established' | 'coaches' | 'players' | 'colorSchemeId' | 'colorScheme' | 'logoId' | 'logo'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'city' | 'abbreviation' | 'wins' | 'losses' | 'winPercentage' | 'conference' | 'division' | 'established' | 'coaches' | 'players' | 'colorSchemeId' | 'colorScheme' | 'logoId' | 'logo'
    }
    images: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'url' | 'type' | 'player' | 'coach' | 'team'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'url' | 'type' | 'player' | 'coach' | 'team'
    }
  },
  Account: {

  }
  Session: {

  }
  User: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt' | 'user'
      ordering: 'id' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt' | 'user'
      ordering: 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt' | 'user'
    }
  }
  VerificationRequest: {

  }
  Coach: {

  }
  Player: {

  }
  ColorScheme: {

  }
  Team: {
    coaches: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId' | 'team' | 'imageId' | 'image'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'type' | 'isAssistant' | 'teamId' | 'team' | 'imageId' | 'image'
    }
    players: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId' | 'team' | 'imageId' | 'image'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'handle' | 'name' | 'slug' | 'height' | 'weight' | 'number' | 'position' | 'teamId' | 'team' | 'imageId' | 'image'
    }
  }
  Image: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationRequest: 'VerificationRequest'
    verificationRequests: 'VerificationRequest'
    coach: 'Coach'
    coaches: 'Coach'
    player: 'Player'
    players: 'Player'
    colorScheme: 'ColorScheme'
    colorSchemes: 'ColorScheme'
    team: 'Team'
    teams: 'Team'
    image: 'Image'
    images: 'Image'
  },
  Mutation: {
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationRequest: 'VerificationRequest'
    updateOneVerificationRequest: 'VerificationRequest'
    updateManyVerificationRequest: 'AffectedRowsOutput'
    deleteOneVerificationRequest: 'VerificationRequest'
    deleteManyVerificationRequest: 'AffectedRowsOutput'
    upsertOneVerificationRequest: 'VerificationRequest'
    createOneCoach: 'Coach'
    updateOneCoach: 'Coach'
    updateManyCoach: 'AffectedRowsOutput'
    deleteOneCoach: 'Coach'
    deleteManyCoach: 'AffectedRowsOutput'
    upsertOneCoach: 'Coach'
    createOnePlayer: 'Player'
    updateOnePlayer: 'Player'
    updateManyPlayer: 'AffectedRowsOutput'
    deleteOnePlayer: 'Player'
    deleteManyPlayer: 'AffectedRowsOutput'
    upsertOnePlayer: 'Player'
    createOneColorScheme: 'ColorScheme'
    updateOneColorScheme: 'ColorScheme'
    updateManyColorScheme: 'AffectedRowsOutput'
    deleteOneColorScheme: 'ColorScheme'
    deleteManyColorScheme: 'AffectedRowsOutput'
    upsertOneColorScheme: 'ColorScheme'
    createOneTeam: 'Team'
    updateOneTeam: 'Team'
    updateManyTeam: 'AffectedRowsOutput'
    deleteOneTeam: 'Team'
    deleteManyTeam: 'AffectedRowsOutput'
    upsertOneTeam: 'Team'
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'AffectedRowsOutput'
    deleteOneImage: 'Image'
    deleteManyImage: 'AffectedRowsOutput'
    upsertOneImage: 'Image'
  },
  Account: {
    id: 'String'
    userId: 'String'
    providerType: 'String'
    providerId: 'String'
    providerAccountId: 'String'
    refreshToken: 'String'
    accessToken: 'String'
    accessTokenExpires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    user: 'User'
  }
  Session: {
    id: 'String'
    userId: 'String'
    expires: 'DateTime'
    sessionToken: 'String'
    accessToken: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    user: 'User'
  }
  User: {
    id: 'String'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    apple: 'String'
    facebook: 'String'
    github: 'String'
    google: 'String'
    twitter: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    accounts: 'Account'
    sessions: 'Session'
  }
  VerificationRequest: {
    id: 'String'
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Coach: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    handle: 'String'
    name: 'String'
    type: 'String'
    isAssistant: 'String'
    teamId: 'String'
    team: 'Team'
    imageId: 'String'
    image: 'Image'
  }
  Player: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    handle: 'String'
    name: 'String'
    slug: 'String'
    height: 'String'
    weight: 'String'
    number: 'String'
    position: 'String'
    teamId: 'String'
    team: 'Team'
    imageId: 'String'
    image: 'Image'
  }
  ColorScheme: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    primary: 'String'
    secondary: 'String'
    team: 'Team'
  }
  Team: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    handle: 'String'
    name: 'String'
    slug: 'String'
    city: 'String'
    abbreviation: 'String'
    wins: 'Int'
    losses: 'Int'
    winPercentage: 'Float'
    conference: 'String'
    division: 'String'
    established: 'String'
    coaches: 'Coach'
    players: 'Player'
    colorSchemeId: 'String'
    colorScheme: 'ColorScheme'
    logoId: 'String'
    logo: 'Image'
  }
  Image: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    url: 'String'
    type: 'ImageType'
    player: 'Player'
    coach: 'Coach'
    team: 'Team'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationRequest: Typegen.NexusPrismaFields<'VerificationRequest'>
  Coach: Typegen.NexusPrismaFields<'Coach'>
  Player: Typegen.NexusPrismaFields<'Player'>
  ColorScheme: Typegen.NexusPrismaFields<'ColorScheme'>
  Team: Typegen.NexusPrismaFields<'Team'>
  Image: Typegen.NexusPrismaFields<'Image'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  