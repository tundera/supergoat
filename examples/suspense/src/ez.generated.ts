import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import type { EZContext } from 'graphql-ez'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<import('graphql-ez').DeepPartial<TResult>> | import('graphql-ez').DeepPartial<TResult>
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any
  /** An arbitrary-precision Decimal type */
  Decimal: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains: Scalars['String']
  endsWith: Scalars['String']
  equals: Scalars['String']
  gt: Scalars['String']
  gte: Scalars['String']
  in: Array<Scalars['String']>
  lt: Scalars['String']
  lte: Scalars['String']
  notIn: Array<Scalars['String']>
  startsWith: Scalars['String']
}

export type IntFilter = {
  contains: Scalars['Int']
  endsWith: Scalars['Int']
  equals: Scalars['Int']
  gt: Scalars['Int']
  gte: Scalars['Int']
  in: Array<Scalars['Int']>
  lt: Scalars['Int']
  lte: Scalars['Int']
  notIn: Array<Scalars['Int']>
  startsWith: Scalars['Int']
}

/** Player model */
export type Player = {
  __typename?: 'Player'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  imageId?: Maybe<Scalars['String']>
  teamId?: Maybe<Scalars['String']>
  height: Scalars['String']
  weight: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  team?: Maybe<Team>
  image?: Maybe<Image>
}

/** Team model */
export type Team = {
  __typename?: 'Team'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches: Array<Coach>
  players: Array<Player>
  colorScheme?: Maybe<ColorScheme>
  logo?: Maybe<Image>
}

/** Coach model */
export type Coach = {
  __typename?: 'Coach'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  imageId?: Maybe<Scalars['String']>
  name: Scalars['String']
  teamId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  team?: Maybe<Team>
  image?: Maybe<Image>
}

/** Color scheme model */
export type ColorScheme = {
  __typename?: 'ColorScheme'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<Team>
}

/** Image for NBA team, player, or coach */
export type Image = {
  __typename?: 'Image'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  url: Scalars['String']
  type: ImageType
  player?: Maybe<Player>
  coach?: Maybe<Coach>
  team?: Maybe<Team>
}

export enum ImageType {
  Logo = 'LOGO',
  Headshot = 'HEADSHOT',
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  accounts: Array<Account>
  sessions: Array<Session>
}

export type Session = {
  __typename?: 'Session'
  id: Scalars['ID']
  userId: Scalars['String']
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  user: User
}

export type Account = {
  __typename?: 'Account'
  id: Scalars['ID']
  userId: Scalars['String']
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  user: User
}

export type Query = {
  __typename?: 'Query'
  account?: Maybe<Account>
  accounts: Array<Account>
  player?: Maybe<Player>
  players: Array<Player>
  team?: Maybe<Team>
  teams: Array<Team>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  colorScheme?: Maybe<ColorScheme>
  colorSchemes: Array<ColorScheme>
  image?: Maybe<Image>
  images: Array<Image>
  user?: Maybe<User>
  users: Array<User>
  session?: Maybe<Session>
  sessions: Array<Session>
}

export type QueryAccountArgs = {
  where: AccountWhereUniqueInput
}

export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>
  orderBy?: Maybe<Array<AccountOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<AccountWhereUniqueInput>
  after?: Maybe<AccountWhereUniqueInput>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>
  orderBy?: Maybe<Array<PlayerOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<PlayerWhereUniqueInput>
  after?: Maybe<PlayerWhereUniqueInput>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  where?: Maybe<TeamWhereInput>
  orderBy?: Maybe<Array<TeamOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<TeamWhereUniqueInput>
  after?: Maybe<TeamWhereUniqueInput>
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  where?: Maybe<CoachWhereInput>
  orderBy?: Maybe<Array<CoachOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<CoachWhereUniqueInput>
  after?: Maybe<CoachWhereUniqueInput>
}

export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput
}

export type QueryColorSchemesArgs = {
  where?: Maybe<ColorSchemeWhereInput>
  orderBy?: Maybe<Array<ColorSchemeOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<ColorSchemeWhereUniqueInput>
  after?: Maybe<ColorSchemeWhereUniqueInput>
}

export type QueryImageArgs = {
  where: ImageWhereUniqueInput
}

export type QueryImagesArgs = {
  where?: Maybe<ImageWhereInput>
  orderBy?: Maybe<Array<ImageOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<ImageWhereUniqueInput>
  after?: Maybe<ImageWhereUniqueInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<Array<UserOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<UserWhereUniqueInput>
  after?: Maybe<UserWhereUniqueInput>
}

export type QuerySessionArgs = {
  where: SessionWhereUniqueInput
}

export type QuerySessionsArgs = {
  where?: Maybe<SessionWhereInput>
  orderBy?: Maybe<Array<SessionOrderByInput>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<SessionWhereUniqueInput>
  after?: Maybe<SessionWhereUniqueInput>
}

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>
  OR?: Maybe<Array<PlayerWhereInput>>
  NOT?: Maybe<Array<PlayerWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  height?: Maybe<StringFilter>
  weight?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  teamId?: Maybe<StringNullableFilter>
  team?: Maybe<TeamWhereInput>
  imageId?: Maybe<StringNullableFilter>
  image?: Maybe<ImageWhereInput>
}

export type PlayerOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
  number?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  imageId?: Maybe<SortOrder>
}

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  abbreviation?: Maybe<Scalars['String']>
}

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>
  OR?: Maybe<Array<TeamWhereInput>>
  NOT?: Maybe<Array<TeamWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  city?: Maybe<StringFilter>
  abbreviation?: Maybe<StringFilter>
  wins?: Maybe<IntNullableFilter>
  losses?: Maybe<IntNullableFilter>
  winPercentage?: Maybe<FloatNullableFilter>
  conference?: Maybe<StringFilter>
  division?: Maybe<StringFilter>
  established?: Maybe<StringFilter>
  coaches?: Maybe<CoachListRelationFilter>
  players?: Maybe<PlayerListRelationFilter>
  colorSchemeId?: Maybe<StringNullableFilter>
  colorScheme?: Maybe<ColorSchemeWhereInput>
  logoId?: Maybe<StringNullableFilter>
  logo?: Maybe<ImageWhereInput>
}

export type TeamOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  city?: Maybe<SortOrder>
  abbreviation?: Maybe<SortOrder>
  wins?: Maybe<SortOrder>
  losses?: Maybe<SortOrder>
  winPercentage?: Maybe<SortOrder>
  conference?: Maybe<SortOrder>
  division?: Maybe<SortOrder>
  established?: Maybe<SortOrder>
  colorSchemeId?: Maybe<SortOrder>
  logoId?: Maybe<SortOrder>
}

export type TeamCreateInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
}

export type TeamUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
}

export type CoachWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type CoachWhereInput = {
  AND?: Maybe<Array<CoachWhereInput>>
  OR?: Maybe<Array<CoachWhereInput>>
  NOT?: Maybe<Array<CoachWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  type?: Maybe<StringNullableFilter>
  isAssistant?: Maybe<StringNullableFilter>
  teamId?: Maybe<StringNullableFilter>
  team?: Maybe<TeamWhereInput>
  imageId?: Maybe<StringNullableFilter>
  image?: Maybe<ImageWhereInput>
}

export type CoachOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
  isAssistant?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  imageId?: Maybe<SortOrder>
}

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<ColorSchemeWhereInput>>
  OR?: Maybe<Array<ColorSchemeWhereInput>>
  NOT?: Maybe<Array<ColorSchemeWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  primary?: Maybe<StringFilter>
  secondary?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
}

export type ColorSchemeOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  primary?: Maybe<SortOrder>
  secondary?: Maybe<SortOrder>
}

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>
  OR?: Maybe<Array<ImageWhereInput>>
  NOT?: Maybe<Array<ImageWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  url?: Maybe<StringFilter>
  type?: Maybe<EnumImageTypeFilter>
  player?: Maybe<PlayerWhereInput>
  coach?: Maybe<CoachWhereInput>
  team?: Maybe<TeamWhereInput>
}

export type ImageOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  id?: Maybe<StringFilter>
  name?: Maybe<StringNullableFilter>
  email?: Maybe<StringNullableFilter>
  emailVerified?: Maybe<DateTimeNullableFilter>
  image?: Maybe<StringNullableFilter>
  apple?: Maybe<StringNullableFilter>
  facebook?: Maybe<StringNullableFilter>
  github?: Maybe<StringNullableFilter>
  google?: Maybe<StringNullableFilter>
  twitter?: Maybe<StringNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  accounts?: Maybe<AccountListRelationFilter>
  sessions?: Maybe<SessionListRelationFilter>
}

export type UserOrderByInput = {
  id?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  email?: Maybe<SortOrder>
  emailVerified?: Maybe<SortOrder>
  image?: Maybe<SortOrder>
  apple?: Maybe<SortOrder>
  facebook?: Maybe<SortOrder>
  github?: Maybe<SortOrder>
  google?: Maybe<SortOrder>
  twitter?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  sessionToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
}

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>
  OR?: Maybe<Array<SessionWhereInput>>
  NOT?: Maybe<Array<SessionWhereInput>>
  id?: Maybe<StringFilter>
  userId?: Maybe<StringFilter>
  expires?: Maybe<DateTimeFilter>
  sessionToken?: Maybe<StringFilter>
  accessToken?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  user?: Maybe<UserWhereInput>
}

export type SessionOrderByInput = {
  id?: Maybe<SortOrder>
  userId?: Maybe<SortOrder>
  expires?: Maybe<SortOrder>
  sessionToken?: Maybe<SortOrder>
  accessToken?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>
}

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>
  OR?: Maybe<Array<AccountWhereInput>>
  NOT?: Maybe<Array<AccountWhereInput>>
  id?: Maybe<StringFilter>
  userId?: Maybe<StringFilter>
  providerType?: Maybe<StringFilter>
  providerId?: Maybe<StringFilter>
  providerAccountId?: Maybe<StringFilter>
  refreshToken?: Maybe<StringNullableFilter>
  accessToken?: Maybe<StringNullableFilter>
  accessTokenExpires?: Maybe<DateTimeNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  user?: Maybe<UserWhereInput>
}

export type AccountOrderByInput = {
  id?: Maybe<SortOrder>
  userId?: Maybe<SortOrder>
  providerType?: Maybe<SortOrder>
  providerId?: Maybe<SortOrder>
  providerAccountId?: Maybe<SortOrder>
  refreshToken?: Maybe<SortOrder>
  accessToken?: Maybe<SortOrder>
  accessTokenExpires?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
}

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>
  some?: Maybe<CoachWhereInput>
  none?: Maybe<CoachWhereInput>
}

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>
  some?: Maybe<PlayerWhereInput>
  none?: Maybe<PlayerWhereInput>
}

export type CoachCreateNestedManyWithoutTeamInput = {
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<CoachWhereUniqueInput>>
}

export type PlayerCreateNestedManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<PlayerWhereUniqueInput>>
}

export type ColorSchemeCreateNestedOneWithoutTeamInput = {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
}

export type ImageCreateNestedOneWithoutTeamInput = {
  create?: Maybe<ImageCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>
}

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>
  increment?: Maybe<Scalars['Int']>
  decrement?: Maybe<Scalars['Int']>
  multiply?: Maybe<Scalars['Int']>
  divide?: Maybe<Scalars['Int']>
}

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>
  increment?: Maybe<Scalars['Float']>
  decrement?: Maybe<Scalars['Float']>
  multiply?: Maybe<Scalars['Float']>
  divide?: Maybe<Scalars['Float']>
}

export type CoachUpdateManyWithoutTeamInput = {
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>
  upsert?: Maybe<Array<CoachUpsertWithWhereUniqueWithoutTeamInput>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<CoachWhereUniqueInput>>
  set?: Maybe<Array<CoachWhereUniqueInput>>
  disconnect?: Maybe<Array<CoachWhereUniqueInput>>
  delete?: Maybe<Array<CoachWhereUniqueInput>>
  update?: Maybe<Array<CoachUpdateWithWhereUniqueWithoutTeamInput>>
  updateMany?: Maybe<Array<CoachUpdateManyWithWhereWithoutTeamInput>>
  deleteMany?: Maybe<Array<CoachScalarWhereInput>>
}

export type PlayerUpdateManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutTeamInput>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<PlayerWhereUniqueInput>>
  set?: Maybe<Array<PlayerWhereUniqueInput>>
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>
  delete?: Maybe<Array<PlayerWhereUniqueInput>>
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutTeamInput>>
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereWithoutTeamInput>>
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>
}

export type ColorSchemeUpdateOneWithoutTeamInput = {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ColorSchemeUpdateWithoutTeamInput>
}

export type ImageUpdateOneWithoutTeamInput = {
  create?: Maybe<ImageCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ImageUpsertWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutTeamInput>
}

export type EnumImageTypeFilter = {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  notIn?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>
  some?: Maybe<AccountWhereInput>
  none?: Maybe<AccountWhereInput>
}

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>
  some?: Maybe<SessionWhereInput>
  none?: Maybe<SessionWhereInput>
}

export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableFilter>
}

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export type CoachCreateWithoutTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>
}

export type CoachCreateOrConnectWithoutTeamInput = {
  where: CoachWhereUniqueInput
  create: CoachCreateWithoutTeamInput
}

export type CoachCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<CoachCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type PlayerCreateWithoutTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  height: Scalars['String']
  weight: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>
}

export type PlayerCreateOrConnectWithoutTeamInput = {
  where: PlayerWhereUniqueInput
  create: PlayerCreateWithoutTeamInput
}

export type PlayerCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<PlayerCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type ColorSchemeCreateWithoutTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
}

export type ColorSchemeCreateOrConnectWithoutTeamInput = {
  where: ColorSchemeWhereUniqueInput
  create: ColorSchemeCreateWithoutTeamInput
}

export type ImageCreateWithoutTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
}

export type ImageCreateOrConnectWithoutTeamInput = {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutTeamInput
}

export type CoachUpsertWithWhereUniqueWithoutTeamInput = {
  where: CoachWhereUniqueInput
  update: CoachUpdateWithoutTeamInput
  create: CoachCreateWithoutTeamInput
}

export type CoachUpdateWithWhereUniqueWithoutTeamInput = {
  where: CoachWhereUniqueInput
  data: CoachUpdateWithoutTeamInput
}

export type CoachUpdateManyWithWhereWithoutTeamInput = {
  where: CoachScalarWhereInput
  data: CoachUpdateManyMutationInput
}

export type CoachScalarWhereInput = {
  AND?: Maybe<Array<CoachScalarWhereInput>>
  OR?: Maybe<Array<CoachScalarWhereInput>>
  NOT?: Maybe<Array<CoachScalarWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  type?: Maybe<StringNullableFilter>
  isAssistant?: Maybe<StringNullableFilter>
  teamId?: Maybe<StringNullableFilter>
  imageId?: Maybe<StringNullableFilter>
}

export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput
  update: PlayerUpdateWithoutTeamInput
  create: PlayerCreateWithoutTeamInput
}

export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput
  data: PlayerUpdateWithoutTeamInput
}

export type PlayerUpdateManyWithWhereWithoutTeamInput = {
  where: PlayerScalarWhereInput
  data: PlayerUpdateManyMutationInput
}

export type PlayerScalarWhereInput = {
  AND?: Maybe<Array<PlayerScalarWhereInput>>
  OR?: Maybe<Array<PlayerScalarWhereInput>>
  NOT?: Maybe<Array<PlayerScalarWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  height?: Maybe<StringFilter>
  weight?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  teamId?: Maybe<StringNullableFilter>
  imageId?: Maybe<StringNullableFilter>
}

export type ColorSchemeUpsertWithoutTeamInput = {
  update: ColorSchemeUpdateWithoutTeamInput
  create: ColorSchemeCreateWithoutTeamInput
}

export type ColorSchemeUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
}

export type ImageUpsertWithoutTeamInput = {
  update: ImageUpdateWithoutTeamInput
  create: ImageCreateWithoutTeamInput
}

export type ImageUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
}

export type NestedEnumImageTypeFilter = {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  notIn?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export type ImageCreateNestedOneWithoutCoachInput = {
  create?: Maybe<ImageCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export type CoachCreateManyTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export type ImageCreateNestedOneWithoutPlayerInput = {
  create?: Maybe<ImageCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export type PlayerCreateManyTeamInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  height: Scalars['String']
  weight: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export type PlayerCreateNestedOneWithoutImageInput = {
  create?: Maybe<PlayerCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
}

export type CoachCreateNestedOneWithoutImageInput = {
  create?: Maybe<CoachCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
}

export type CoachUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutCoachInput>
}

export type CoachUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export type PlayerUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>
}

export type PlayerUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export type EnumImageTypeFieldUpdateOperationsInput = {
  set?: Maybe<ImageType>
}

export type PlayerUpdateOneWithoutImageInput = {
  create?: Maybe<PlayerCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  upsert?: Maybe<PlayerUpsertWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<PlayerUpdateWithoutImageInput>
}

export type CoachUpdateOneWithoutImageInput = {
  create?: Maybe<CoachCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  upsert?: Maybe<CoachUpsertWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<CoachUpdateWithoutImageInput>
}

export type ImageCreateWithoutCoachInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
}

export type ImageCreateOrConnectWithoutCoachInput = {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutCoachInput
}

export type ImageCreateWithoutPlayerInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
}

export type ImageCreateOrConnectWithoutPlayerInput = {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutPlayerInput
}

export type PlayerCreateWithoutImageInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  height: Scalars['String']
  weight: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>
}

export type PlayerCreateOrConnectWithoutImageInput = {
  where: PlayerWhereUniqueInput
  create: PlayerCreateWithoutImageInput
}

export type CoachCreateWithoutImageInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>
}

export type CoachCreateOrConnectWithoutImageInput = {
  where: CoachWhereUniqueInput
  create: CoachCreateWithoutImageInput
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>
}

export type ImageUpdateOneWithoutCoachInput = {
  create?: Maybe<ImageCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  upsert?: Maybe<ImageUpsertWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutCoachInput>
}

export type ImageUpdateOneWithoutPlayerInput = {
  create?: Maybe<ImageCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutPlayerInput>
}

export type PlayerUpsertWithoutImageInput = {
  update: PlayerUpdateWithoutImageInput
  create: PlayerCreateWithoutImageInput
}

export type PlayerUpdateWithoutImageInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>
}

export type CoachUpsertWithoutImageInput = {
  update: CoachUpdateWithoutImageInput
  create: CoachCreateWithoutImageInput
}

export type CoachUpdateWithoutImageInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>
}

export type TeamCreateNestedOneWithoutLogoInput = {
  create?: Maybe<TeamCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export type TeamCreateNestedOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export type TeamCreateNestedOneWithoutCoachesInput = {
  create?: Maybe<TeamCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export type ImageUpsertWithoutCoachInput = {
  update: ImageUpdateWithoutCoachInput
  create: ImageCreateWithoutCoachInput
}

export type ImageUpdateWithoutCoachInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
}

export type ImageUpsertWithoutPlayerInput = {
  update: ImageUpdateWithoutPlayerInput
  create: ImageCreateWithoutPlayerInput
}

export type ImageUpdateWithoutPlayerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
}

export type TeamUpdateOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutPlayersInput>
}

export type TeamUpdateOneWithoutCoachesInput = {
  create?: Maybe<TeamCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutCoachesInput>
}

export type TeamCreateWithoutLogoInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
}

export type TeamCreateOrConnectWithoutLogoInput = {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutLogoInput
}

export type TeamCreateWithoutPlayersInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
}

export type TeamCreateOrConnectWithoutPlayersInput = {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutPlayersInput
}

export type TeamCreateWithoutCoachesInput = {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
}

export type TeamCreateOrConnectWithoutCoachesInput = {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutCoachesInput
}

export type TeamUpdateOneWithoutLogoInput = {
  create?: Maybe<TeamCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  upsert?: Maybe<TeamUpsertWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutLogoInput>
}

export type TeamUpsertWithoutPlayersInput = {
  update: TeamUpdateWithoutPlayersInput
  create: TeamCreateWithoutPlayersInput
}

export type TeamUpdateWithoutPlayersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
}

export type TeamUpsertWithoutCoachesInput = {
  update: TeamUpdateWithoutCoachesInput
  create: TeamCreateWithoutCoachesInput
}

export type TeamUpdateWithoutCoachesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
}

export type TeamUpsertWithoutLogoInput = {
  update: TeamUpdateWithoutLogoInput
  create: TeamCreateWithoutLogoInput
}

export type TeamUpdateWithoutLogoInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
}

export type Mutation = {
  __typename?: 'Mutation'
  createOneTeam: Team
  updateOneTeam?: Maybe<Team>
}

export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput
}

export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput
  where: TeamWhereUniqueInput
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  Decimal: ResolverTypeWrapper<Scalars['Decimal']>
  Json: ResolverTypeWrapper<Scalars['Json']>
  SortOrder: SortOrder
  StringFilter: StringFilter
  String: ResolverTypeWrapper<Scalars['String']>
  IntFilter: IntFilter
  Int: ResolverTypeWrapper<Scalars['Int']>
  Player: ResolverTypeWrapper<Player>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Team: ResolverTypeWrapper<Team>
  Float: ResolverTypeWrapper<Scalars['Float']>
  Coach: ResolverTypeWrapper<Coach>
  ColorScheme: ResolverTypeWrapper<ColorScheme>
  Image: ResolverTypeWrapper<Image>
  ImageType: ImageType
  User: ResolverTypeWrapper<User>
  Session: ResolverTypeWrapper<Session>
  Account: ResolverTypeWrapper<Account>
  Query: ResolverTypeWrapper<{}>
  PlayerWhereUniqueInput: PlayerWhereUniqueInput
  PlayerWhereInput: PlayerWhereInput
  PlayerOrderByInput: PlayerOrderByInput
  TeamWhereUniqueInput: TeamWhereUniqueInput
  TeamWhereInput: TeamWhereInput
  TeamOrderByInput: TeamOrderByInput
  TeamCreateInput: TeamCreateInput
  TeamUpdateInput: TeamUpdateInput
  CoachWhereUniqueInput: CoachWhereUniqueInput
  CoachWhereInput: CoachWhereInput
  CoachOrderByInput: CoachOrderByInput
  ColorSchemeWhereUniqueInput: ColorSchemeWhereUniqueInput
  ColorSchemeWhereInput: ColorSchemeWhereInput
  ColorSchemeOrderByInput: ColorSchemeOrderByInput
  ImageWhereUniqueInput: ImageWhereUniqueInput
  ImageWhereInput: ImageWhereInput
  ImageOrderByInput: ImageOrderByInput
  UserWhereUniqueInput: UserWhereUniqueInput
  UserWhereInput: UserWhereInput
  UserOrderByInput: UserOrderByInput
  SessionWhereUniqueInput: SessionWhereUniqueInput
  SessionWhereInput: SessionWhereInput
  SessionOrderByInput: SessionOrderByInput
  AccountWhereUniqueInput: AccountWhereUniqueInput
  AccountWhereInput: AccountWhereInput
  AccountOrderByInput: AccountOrderByInput
  DateTimeFilter: DateTimeFilter
  StringNullableFilter: StringNullableFilter
  IntNullableFilter: IntNullableFilter
  FloatNullableFilter: FloatNullableFilter
  CoachListRelationFilter: CoachListRelationFilter
  PlayerListRelationFilter: PlayerListRelationFilter
  CoachCreateNestedManyWithoutTeamInput: CoachCreateNestedManyWithoutTeamInput
  PlayerCreateNestedManyWithoutTeamInput: PlayerCreateNestedManyWithoutTeamInput
  ColorSchemeCreateNestedOneWithoutTeamInput: ColorSchemeCreateNestedOneWithoutTeamInput
  ImageCreateNestedOneWithoutTeamInput: ImageCreateNestedOneWithoutTeamInput
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput
  NullableFloatFieldUpdateOperationsInput: NullableFloatFieldUpdateOperationsInput
  CoachUpdateManyWithoutTeamInput: CoachUpdateManyWithoutTeamInput
  PlayerUpdateManyWithoutTeamInput: PlayerUpdateManyWithoutTeamInput
  ColorSchemeUpdateOneWithoutTeamInput: ColorSchemeUpdateOneWithoutTeamInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  ImageUpdateOneWithoutTeamInput: ImageUpdateOneWithoutTeamInput
  EnumImageTypeFilter: EnumImageTypeFilter
  DateTimeNullableFilter: DateTimeNullableFilter
  AccountListRelationFilter: AccountListRelationFilter
  SessionListRelationFilter: SessionListRelationFilter
  AccountProviderIdProviderAccountIdCompoundUniqueInput: AccountProviderIdProviderAccountIdCompoundUniqueInput
  NestedDateTimeFilter: NestedDateTimeFilter
  QueryMode: QueryMode
  NestedStringNullableFilter: NestedStringNullableFilter
  NestedIntNullableFilter: NestedIntNullableFilter
  NestedFloatNullableFilter: NestedFloatNullableFilter
  CoachCreateWithoutTeamInput: CoachCreateWithoutTeamInput
  CoachCreateOrConnectWithoutTeamInput: CoachCreateOrConnectWithoutTeamInput
  CoachCreateManyTeamInputEnvelope: CoachCreateManyTeamInputEnvelope
  PlayerCreateWithoutTeamInput: PlayerCreateWithoutTeamInput
  PlayerCreateOrConnectWithoutTeamInput: PlayerCreateOrConnectWithoutTeamInput
  PlayerCreateManyTeamInputEnvelope: PlayerCreateManyTeamInputEnvelope
  ColorSchemeCreateWithoutTeamInput: ColorSchemeCreateWithoutTeamInput
  ColorSchemeCreateOrConnectWithoutTeamInput: ColorSchemeCreateOrConnectWithoutTeamInput
  ImageCreateWithoutTeamInput: ImageCreateWithoutTeamInput
  ImageCreateOrConnectWithoutTeamInput: ImageCreateOrConnectWithoutTeamInput
  CoachUpsertWithWhereUniqueWithoutTeamInput: CoachUpsertWithWhereUniqueWithoutTeamInput
  CoachUpdateWithWhereUniqueWithoutTeamInput: CoachUpdateWithWhereUniqueWithoutTeamInput
  CoachUpdateManyWithWhereWithoutTeamInput: CoachUpdateManyWithWhereWithoutTeamInput
  CoachScalarWhereInput: CoachScalarWhereInput
  PlayerUpsertWithWhereUniqueWithoutTeamInput: PlayerUpsertWithWhereUniqueWithoutTeamInput
  PlayerUpdateWithWhereUniqueWithoutTeamInput: PlayerUpdateWithWhereUniqueWithoutTeamInput
  PlayerUpdateManyWithWhereWithoutTeamInput: PlayerUpdateManyWithWhereWithoutTeamInput
  PlayerScalarWhereInput: PlayerScalarWhereInput
  ColorSchemeUpsertWithoutTeamInput: ColorSchemeUpsertWithoutTeamInput
  ColorSchemeUpdateWithoutTeamInput: ColorSchemeUpdateWithoutTeamInput
  ImageUpsertWithoutTeamInput: ImageUpsertWithoutTeamInput
  ImageUpdateWithoutTeamInput: ImageUpdateWithoutTeamInput
  NestedEnumImageTypeFilter: NestedEnumImageTypeFilter
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter
  ImageCreateNestedOneWithoutCoachInput: ImageCreateNestedOneWithoutCoachInput
  CoachCreateManyTeamInput: CoachCreateManyTeamInput
  ImageCreateNestedOneWithoutPlayerInput: ImageCreateNestedOneWithoutPlayerInput
  PlayerCreateManyTeamInput: PlayerCreateManyTeamInput
  PlayerCreateNestedOneWithoutImageInput: PlayerCreateNestedOneWithoutImageInput
  CoachCreateNestedOneWithoutImageInput: CoachCreateNestedOneWithoutImageInput
  CoachUpdateWithoutTeamInput: CoachUpdateWithoutTeamInput
  CoachUpdateManyMutationInput: CoachUpdateManyMutationInput
  PlayerUpdateWithoutTeamInput: PlayerUpdateWithoutTeamInput
  PlayerUpdateManyMutationInput: PlayerUpdateManyMutationInput
  EnumImageTypeFieldUpdateOperationsInput: EnumImageTypeFieldUpdateOperationsInput
  PlayerUpdateOneWithoutImageInput: PlayerUpdateOneWithoutImageInput
  CoachUpdateOneWithoutImageInput: CoachUpdateOneWithoutImageInput
  ImageCreateWithoutCoachInput: ImageCreateWithoutCoachInput
  ImageCreateOrConnectWithoutCoachInput: ImageCreateOrConnectWithoutCoachInput
  ImageCreateWithoutPlayerInput: ImageCreateWithoutPlayerInput
  ImageCreateOrConnectWithoutPlayerInput: ImageCreateOrConnectWithoutPlayerInput
  PlayerCreateWithoutImageInput: PlayerCreateWithoutImageInput
  PlayerCreateOrConnectWithoutImageInput: PlayerCreateOrConnectWithoutImageInput
  CoachCreateWithoutImageInput: CoachCreateWithoutImageInput
  CoachCreateOrConnectWithoutImageInput: CoachCreateOrConnectWithoutImageInput
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput
  ImageUpdateOneWithoutCoachInput: ImageUpdateOneWithoutCoachInput
  ImageUpdateOneWithoutPlayerInput: ImageUpdateOneWithoutPlayerInput
  PlayerUpsertWithoutImageInput: PlayerUpsertWithoutImageInput
  PlayerUpdateWithoutImageInput: PlayerUpdateWithoutImageInput
  CoachUpsertWithoutImageInput: CoachUpsertWithoutImageInput
  CoachUpdateWithoutImageInput: CoachUpdateWithoutImageInput
  TeamCreateNestedOneWithoutLogoInput: TeamCreateNestedOneWithoutLogoInput
  TeamCreateNestedOneWithoutPlayersInput: TeamCreateNestedOneWithoutPlayersInput
  TeamCreateNestedOneWithoutCoachesInput: TeamCreateNestedOneWithoutCoachesInput
  ImageUpsertWithoutCoachInput: ImageUpsertWithoutCoachInput
  ImageUpdateWithoutCoachInput: ImageUpdateWithoutCoachInput
  ImageUpsertWithoutPlayerInput: ImageUpsertWithoutPlayerInput
  ImageUpdateWithoutPlayerInput: ImageUpdateWithoutPlayerInput
  TeamUpdateOneWithoutPlayersInput: TeamUpdateOneWithoutPlayersInput
  TeamUpdateOneWithoutCoachesInput: TeamUpdateOneWithoutCoachesInput
  TeamCreateWithoutLogoInput: TeamCreateWithoutLogoInput
  TeamCreateOrConnectWithoutLogoInput: TeamCreateOrConnectWithoutLogoInput
  TeamCreateWithoutPlayersInput: TeamCreateWithoutPlayersInput
  TeamCreateOrConnectWithoutPlayersInput: TeamCreateOrConnectWithoutPlayersInput
  TeamCreateWithoutCoachesInput: TeamCreateWithoutCoachesInput
  TeamCreateOrConnectWithoutCoachesInput: TeamCreateOrConnectWithoutCoachesInput
  TeamUpdateOneWithoutLogoInput: TeamUpdateOneWithoutLogoInput
  TeamUpsertWithoutPlayersInput: TeamUpsertWithoutPlayersInput
  TeamUpdateWithoutPlayersInput: TeamUpdateWithoutPlayersInput
  TeamUpsertWithoutCoachesInput: TeamUpsertWithoutCoachesInput
  TeamUpdateWithoutCoachesInput: TeamUpdateWithoutCoachesInput
  TeamUpsertWithoutLogoInput: TeamUpsertWithoutLogoInput
  TeamUpdateWithoutLogoInput: TeamUpdateWithoutLogoInput
  Mutation: ResolverTypeWrapper<{}>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']
  BigInt: Scalars['BigInt']
  Bytes: Scalars['Bytes']
  Decimal: Scalars['Decimal']
  Json: Scalars['Json']
  StringFilter: StringFilter
  String: Scalars['String']
  IntFilter: IntFilter
  Int: Scalars['Int']
  Player: Player
  ID: Scalars['ID']
  Team: Team
  Float: Scalars['Float']
  Coach: Coach
  ColorScheme: ColorScheme
  Image: Image
  User: User
  Session: Session
  Account: Account
  Query: {}
  PlayerWhereUniqueInput: PlayerWhereUniqueInput
  PlayerWhereInput: PlayerWhereInput
  PlayerOrderByInput: PlayerOrderByInput
  TeamWhereUniqueInput: TeamWhereUniqueInput
  TeamWhereInput: TeamWhereInput
  TeamOrderByInput: TeamOrderByInput
  TeamCreateInput: TeamCreateInput
  TeamUpdateInput: TeamUpdateInput
  CoachWhereUniqueInput: CoachWhereUniqueInput
  CoachWhereInput: CoachWhereInput
  CoachOrderByInput: CoachOrderByInput
  ColorSchemeWhereUniqueInput: ColorSchemeWhereUniqueInput
  ColorSchemeWhereInput: ColorSchemeWhereInput
  ColorSchemeOrderByInput: ColorSchemeOrderByInput
  ImageWhereUniqueInput: ImageWhereUniqueInput
  ImageWhereInput: ImageWhereInput
  ImageOrderByInput: ImageOrderByInput
  UserWhereUniqueInput: UserWhereUniqueInput
  UserWhereInput: UserWhereInput
  UserOrderByInput: UserOrderByInput
  SessionWhereUniqueInput: SessionWhereUniqueInput
  SessionWhereInput: SessionWhereInput
  SessionOrderByInput: SessionOrderByInput
  AccountWhereUniqueInput: AccountWhereUniqueInput
  AccountWhereInput: AccountWhereInput
  AccountOrderByInput: AccountOrderByInput
  DateTimeFilter: DateTimeFilter
  StringNullableFilter: StringNullableFilter
  IntNullableFilter: IntNullableFilter
  FloatNullableFilter: FloatNullableFilter
  CoachListRelationFilter: CoachListRelationFilter
  PlayerListRelationFilter: PlayerListRelationFilter
  CoachCreateNestedManyWithoutTeamInput: CoachCreateNestedManyWithoutTeamInput
  PlayerCreateNestedManyWithoutTeamInput: PlayerCreateNestedManyWithoutTeamInput
  ColorSchemeCreateNestedOneWithoutTeamInput: ColorSchemeCreateNestedOneWithoutTeamInput
  ImageCreateNestedOneWithoutTeamInput: ImageCreateNestedOneWithoutTeamInput
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput
  NullableFloatFieldUpdateOperationsInput: NullableFloatFieldUpdateOperationsInput
  CoachUpdateManyWithoutTeamInput: CoachUpdateManyWithoutTeamInput
  PlayerUpdateManyWithoutTeamInput: PlayerUpdateManyWithoutTeamInput
  ColorSchemeUpdateOneWithoutTeamInput: ColorSchemeUpdateOneWithoutTeamInput
  Boolean: Scalars['Boolean']
  ImageUpdateOneWithoutTeamInput: ImageUpdateOneWithoutTeamInput
  EnumImageTypeFilter: EnumImageTypeFilter
  DateTimeNullableFilter: DateTimeNullableFilter
  AccountListRelationFilter: AccountListRelationFilter
  SessionListRelationFilter: SessionListRelationFilter
  AccountProviderIdProviderAccountIdCompoundUniqueInput: AccountProviderIdProviderAccountIdCompoundUniqueInput
  NestedDateTimeFilter: NestedDateTimeFilter
  NestedStringNullableFilter: NestedStringNullableFilter
  NestedIntNullableFilter: NestedIntNullableFilter
  NestedFloatNullableFilter: NestedFloatNullableFilter
  CoachCreateWithoutTeamInput: CoachCreateWithoutTeamInput
  CoachCreateOrConnectWithoutTeamInput: CoachCreateOrConnectWithoutTeamInput
  CoachCreateManyTeamInputEnvelope: CoachCreateManyTeamInputEnvelope
  PlayerCreateWithoutTeamInput: PlayerCreateWithoutTeamInput
  PlayerCreateOrConnectWithoutTeamInput: PlayerCreateOrConnectWithoutTeamInput
  PlayerCreateManyTeamInputEnvelope: PlayerCreateManyTeamInputEnvelope
  ColorSchemeCreateWithoutTeamInput: ColorSchemeCreateWithoutTeamInput
  ColorSchemeCreateOrConnectWithoutTeamInput: ColorSchemeCreateOrConnectWithoutTeamInput
  ImageCreateWithoutTeamInput: ImageCreateWithoutTeamInput
  ImageCreateOrConnectWithoutTeamInput: ImageCreateOrConnectWithoutTeamInput
  CoachUpsertWithWhereUniqueWithoutTeamInput: CoachUpsertWithWhereUniqueWithoutTeamInput
  CoachUpdateWithWhereUniqueWithoutTeamInput: CoachUpdateWithWhereUniqueWithoutTeamInput
  CoachUpdateManyWithWhereWithoutTeamInput: CoachUpdateManyWithWhereWithoutTeamInput
  CoachScalarWhereInput: CoachScalarWhereInput
  PlayerUpsertWithWhereUniqueWithoutTeamInput: PlayerUpsertWithWhereUniqueWithoutTeamInput
  PlayerUpdateWithWhereUniqueWithoutTeamInput: PlayerUpdateWithWhereUniqueWithoutTeamInput
  PlayerUpdateManyWithWhereWithoutTeamInput: PlayerUpdateManyWithWhereWithoutTeamInput
  PlayerScalarWhereInput: PlayerScalarWhereInput
  ColorSchemeUpsertWithoutTeamInput: ColorSchemeUpsertWithoutTeamInput
  ColorSchemeUpdateWithoutTeamInput: ColorSchemeUpdateWithoutTeamInput
  ImageUpsertWithoutTeamInput: ImageUpsertWithoutTeamInput
  ImageUpdateWithoutTeamInput: ImageUpdateWithoutTeamInput
  NestedEnumImageTypeFilter: NestedEnumImageTypeFilter
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter
  ImageCreateNestedOneWithoutCoachInput: ImageCreateNestedOneWithoutCoachInput
  CoachCreateManyTeamInput: CoachCreateManyTeamInput
  ImageCreateNestedOneWithoutPlayerInput: ImageCreateNestedOneWithoutPlayerInput
  PlayerCreateManyTeamInput: PlayerCreateManyTeamInput
  PlayerCreateNestedOneWithoutImageInput: PlayerCreateNestedOneWithoutImageInput
  CoachCreateNestedOneWithoutImageInput: CoachCreateNestedOneWithoutImageInput
  CoachUpdateWithoutTeamInput: CoachUpdateWithoutTeamInput
  CoachUpdateManyMutationInput: CoachUpdateManyMutationInput
  PlayerUpdateWithoutTeamInput: PlayerUpdateWithoutTeamInput
  PlayerUpdateManyMutationInput: PlayerUpdateManyMutationInput
  EnumImageTypeFieldUpdateOperationsInput: EnumImageTypeFieldUpdateOperationsInput
  PlayerUpdateOneWithoutImageInput: PlayerUpdateOneWithoutImageInput
  CoachUpdateOneWithoutImageInput: CoachUpdateOneWithoutImageInput
  ImageCreateWithoutCoachInput: ImageCreateWithoutCoachInput
  ImageCreateOrConnectWithoutCoachInput: ImageCreateOrConnectWithoutCoachInput
  ImageCreateWithoutPlayerInput: ImageCreateWithoutPlayerInput
  ImageCreateOrConnectWithoutPlayerInput: ImageCreateOrConnectWithoutPlayerInput
  PlayerCreateWithoutImageInput: PlayerCreateWithoutImageInput
  PlayerCreateOrConnectWithoutImageInput: PlayerCreateOrConnectWithoutImageInput
  CoachCreateWithoutImageInput: CoachCreateWithoutImageInput
  CoachCreateOrConnectWithoutImageInput: CoachCreateOrConnectWithoutImageInput
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput
  ImageUpdateOneWithoutCoachInput: ImageUpdateOneWithoutCoachInput
  ImageUpdateOneWithoutPlayerInput: ImageUpdateOneWithoutPlayerInput
  PlayerUpsertWithoutImageInput: PlayerUpsertWithoutImageInput
  PlayerUpdateWithoutImageInput: PlayerUpdateWithoutImageInput
  CoachUpsertWithoutImageInput: CoachUpsertWithoutImageInput
  CoachUpdateWithoutImageInput: CoachUpdateWithoutImageInput
  TeamCreateNestedOneWithoutLogoInput: TeamCreateNestedOneWithoutLogoInput
  TeamCreateNestedOneWithoutPlayersInput: TeamCreateNestedOneWithoutPlayersInput
  TeamCreateNestedOneWithoutCoachesInput: TeamCreateNestedOneWithoutCoachesInput
  ImageUpsertWithoutCoachInput: ImageUpsertWithoutCoachInput
  ImageUpdateWithoutCoachInput: ImageUpdateWithoutCoachInput
  ImageUpsertWithoutPlayerInput: ImageUpsertWithoutPlayerInput
  ImageUpdateWithoutPlayerInput: ImageUpdateWithoutPlayerInput
  TeamUpdateOneWithoutPlayersInput: TeamUpdateOneWithoutPlayersInput
  TeamUpdateOneWithoutCoachesInput: TeamUpdateOneWithoutCoachesInput
  TeamCreateWithoutLogoInput: TeamCreateWithoutLogoInput
  TeamCreateOrConnectWithoutLogoInput: TeamCreateOrConnectWithoutLogoInput
  TeamCreateWithoutPlayersInput: TeamCreateWithoutPlayersInput
  TeamCreateOrConnectWithoutPlayersInput: TeamCreateOrConnectWithoutPlayersInput
  TeamCreateWithoutCoachesInput: TeamCreateWithoutCoachesInput
  TeamCreateOrConnectWithoutCoachesInput: TeamCreateOrConnectWithoutCoachesInput
  TeamUpdateOneWithoutLogoInput: TeamUpdateOneWithoutLogoInput
  TeamUpsertWithoutPlayersInput: TeamUpsertWithoutPlayersInput
  TeamUpdateWithoutPlayersInput: TeamUpdateWithoutPlayersInput
  TeamUpsertWithoutCoachesInput: TeamUpsertWithoutCoachesInput
  TeamUpdateWithoutCoachesInput: TeamUpdateWithoutCoachesInput
  TeamUpsertWithoutLogoInput: TeamUpsertWithoutLogoInput
  TeamUpdateWithoutLogoInput: TeamUpdateWithoutLogoInput
  Mutation: {}
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export interface DecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal'
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json'
}

export type PlayerResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  weight?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TeamResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  winPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  conference?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  division?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  established?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  coaches?: Resolver<Array<ResolversTypes['Coach']>, ParentType, ContextType>
  players?: Resolver<Array<ResolversTypes['Player']>, ParentType, ContextType>
  colorScheme?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType>
  logo?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CoachResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Coach'] = ResolversParentTypes['Coach'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isAssistant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ColorSchemeResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['ColorScheme'] = ResolversParentTypes['ColorScheme'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  secondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ImageResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ImageType'], ParentType, ContextType>
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>
  coach?: Resolver<Maybe<ResolversTypes['Coach']>, ParentType, ContextType>
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  apple?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  google?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>
  sessions?: Resolver<Array<ResolversTypes['Session']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SessionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AccountResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  providerType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  providerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accessTokenExpires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  account?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountArgs, 'where'>
  >
  accounts?: Resolver<
    Array<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountsArgs, never>
  >
  player?: Resolver<
    Maybe<ResolversTypes['Player']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlayerArgs, 'where'>
  >
  players?: Resolver<
    Array<ResolversTypes['Player']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlayersArgs, never>
  >
  team?: Resolver<
    Maybe<ResolversTypes['Team']>,
    ParentType,
    ContextType,
    RequireFields<QueryTeamArgs, 'where'>
  >
  teams?: Resolver<
    Array<ResolversTypes['Team']>,
    ParentType,
    ContextType,
    RequireFields<QueryTeamsArgs, never>
  >
  coach?: Resolver<
    Maybe<ResolversTypes['Coach']>,
    ParentType,
    ContextType,
    RequireFields<QueryCoachArgs, 'where'>
  >
  coaches?: Resolver<
    Array<ResolversTypes['Coach']>,
    ParentType,
    ContextType,
    RequireFields<QueryCoachesArgs, never>
  >
  colorScheme?: Resolver<
    Maybe<ResolversTypes['ColorScheme']>,
    ParentType,
    ContextType,
    RequireFields<QueryColorSchemeArgs, 'where'>
  >
  colorSchemes?: Resolver<
    Array<ResolversTypes['ColorScheme']>,
    ParentType,
    ContextType,
    RequireFields<QueryColorSchemesArgs, never>
  >
  image?: Resolver<
    Maybe<ResolversTypes['Image']>,
    ParentType,
    ContextType,
    RequireFields<QueryImageArgs, 'where'>
  >
  images?: Resolver<
    Array<ResolversTypes['Image']>,
    ParentType,
    ContextType,
    RequireFields<QueryImagesArgs, never>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'where'>
  >
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, never>
  >
  session?: Resolver<
    Maybe<ResolversTypes['Session']>,
    ParentType,
    ContextType,
    RequireFields<QuerySessionArgs, 'where'>
  >
  sessions?: Resolver<
    Array<ResolversTypes['Session']>,
    ParentType,
    ContextType,
    RequireFields<QuerySessionsArgs, never>
  >
}

export type MutationResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createOneTeam?: Resolver<
    ResolversTypes['Team'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneTeamArgs, 'data'>
  >
  updateOneTeam?: Resolver<
    Maybe<ResolversTypes['Team']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneTeamArgs, 'data' | 'where'>
  >
}

export type Resolvers<ContextType = EZContext> = {
  DateTime?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  Decimal?: GraphQLScalarType
  Json?: GraphQLScalarType
  Player?: PlayerResolvers<ContextType>
  Team?: TeamResolvers<ContextType>
  Coach?: CoachResolvers<ContextType>
  ColorScheme?: ColorSchemeResolvers<ContextType>
  Image?: ImageResolvers<ContextType>
  User?: UserResolvers<ContextType>
  Session?: SessionResolvers<ContextType>
  Account?: AccountResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
}

declare module 'graphql-ez' {
  interface EZResolvers extends Resolvers<import('graphql-ez').EZContext> {}
}
