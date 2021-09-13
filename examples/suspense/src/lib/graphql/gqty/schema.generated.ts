/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
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
  asc = 'asc',
  desc = 'desc',
}

export interface StringFilter {
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

export interface IntFilter {
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

export enum ImageType {
  LOGO = 'LOGO',
  HEADSHOT = 'HEADSHOT',
}

export interface PlayerWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export interface PlayerWhereInput {
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

export interface PlayerOrderByInput {
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

export interface TeamWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  abbreviation?: Maybe<Scalars['String']>
}

export interface TeamWhereInput {
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

export interface TeamOrderByInput {
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

export interface TeamCreateInput {
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

export interface TeamUpdateInput {
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

export interface CoachWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface CoachWhereInput {
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

export interface CoachOrderByInput {
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

export interface ColorSchemeWhereUniqueInput {
  id?: Maybe<Scalars['String']>
}

export interface ColorSchemeWhereInput {
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

export interface ColorSchemeOrderByInput {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  primary?: Maybe<SortOrder>
  secondary?: Maybe<SortOrder>
}

export interface ImageWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface ImageWhereInput {
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

export interface ImageOrderByInput {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
}

export interface UserWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface UserWhereInput {
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

export interface UserOrderByInput {
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

export interface SessionWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  sessionToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
}

export interface SessionWhereInput {
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

export interface SessionOrderByInput {
  id?: Maybe<SortOrder>
  userId?: Maybe<SortOrder>
  expires?: Maybe<SortOrder>
  sessionToken?: Maybe<SortOrder>
  accessToken?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export interface AccountWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>
}

export interface AccountWhereInput {
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

export interface AccountOrderByInput {
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

export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export interface StringNullableFilter {
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

export interface IntNullableFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export interface FloatNullableFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export interface CoachListRelationFilter {
  every?: Maybe<CoachWhereInput>
  some?: Maybe<CoachWhereInput>
  none?: Maybe<CoachWhereInput>
}

export interface PlayerListRelationFilter {
  every?: Maybe<PlayerWhereInput>
  some?: Maybe<PlayerWhereInput>
  none?: Maybe<PlayerWhereInput>
}

export interface CoachCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<CoachWhereUniqueInput>>
}

export interface PlayerCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<PlayerWhereUniqueInput>>
}

export interface ColorSchemeCreateNestedOneWithoutTeamInput {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
}

export interface ImageCreateNestedOneWithoutTeamInput {
  create?: Maybe<ImageCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface StringFieldUpdateOperationsInput {
  set?: Maybe<Scalars['String']>
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Maybe<Scalars['DateTime']>
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: Maybe<Scalars['Int']>
  increment?: Maybe<Scalars['Int']>
  decrement?: Maybe<Scalars['Int']>
  multiply?: Maybe<Scalars['Int']>
  divide?: Maybe<Scalars['Int']>
}

export interface NullableFloatFieldUpdateOperationsInput {
  set?: Maybe<Scalars['Float']>
  increment?: Maybe<Scalars['Float']>
  decrement?: Maybe<Scalars['Float']>
  multiply?: Maybe<Scalars['Float']>
  divide?: Maybe<Scalars['Float']>
}

export interface CoachUpdateManyWithoutTeamInput {
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

export interface PlayerUpdateManyWithoutTeamInput {
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

export interface ColorSchemeUpdateOneWithoutTeamInput {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ColorSchemeUpdateWithoutTeamInput>
}

export interface ImageUpdateOneWithoutTeamInput {
  create?: Maybe<ImageCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ImageUpsertWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutTeamInput>
}

export interface EnumImageTypeFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  notIn?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export interface AccountListRelationFilter {
  every?: Maybe<AccountWhereInput>
  some?: Maybe<AccountWhereInput>
  none?: Maybe<AccountWhereInput>
}

export interface SessionListRelationFilter {
  every?: Maybe<SessionWhereInput>
  some?: Maybe<SessionWhereInput>
  none?: Maybe<SessionWhereInput>
}

export interface AccountProviderIdProviderAccountIdCompoundUniqueInput {
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
}

export interface NestedDateTimeFilter {
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
  default = 'default',
  insensitive = 'insensitive',
}

export interface NestedStringNullableFilter {
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

export interface NestedIntNullableFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export interface NestedFloatNullableFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export interface CoachCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>
}

export interface CoachCreateOrConnectWithoutTeamInput {
  where: CoachWhereUniqueInput
  create: CoachCreateWithoutTeamInput
}

export interface CoachCreateManyTeamInputEnvelope {
  data?: Maybe<Array<CoachCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export interface PlayerCreateWithoutTeamInput {
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

export interface PlayerCreateOrConnectWithoutTeamInput {
  where: PlayerWhereUniqueInput
  create: PlayerCreateWithoutTeamInput
}

export interface PlayerCreateManyTeamInputEnvelope {
  data?: Maybe<Array<PlayerCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export interface ColorSchemeCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
}

export interface ColorSchemeCreateOrConnectWithoutTeamInput {
  where: ColorSchemeWhereUniqueInput
  create: ColorSchemeCreateWithoutTeamInput
}

export interface ImageCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
}

export interface ImageCreateOrConnectWithoutTeamInput {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutTeamInput
}

export interface CoachUpsertWithWhereUniqueWithoutTeamInput {
  where: CoachWhereUniqueInput
  update: CoachUpdateWithoutTeamInput
  create: CoachCreateWithoutTeamInput
}

export interface CoachUpdateWithWhereUniqueWithoutTeamInput {
  where: CoachWhereUniqueInput
  data: CoachUpdateWithoutTeamInput
}

export interface CoachUpdateManyWithWhereWithoutTeamInput {
  where: CoachScalarWhereInput
  data: CoachUpdateManyMutationInput
}

export interface CoachScalarWhereInput {
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

export interface PlayerUpsertWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput
  update: PlayerUpdateWithoutTeamInput
  create: PlayerCreateWithoutTeamInput
}

export interface PlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput
  data: PlayerUpdateWithoutTeamInput
}

export interface PlayerUpdateManyWithWhereWithoutTeamInput {
  where: PlayerScalarWhereInput
  data: PlayerUpdateManyMutationInput
}

export interface PlayerScalarWhereInput {
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

export interface ColorSchemeUpsertWithoutTeamInput {
  update: ColorSchemeUpdateWithoutTeamInput
  create: ColorSchemeCreateWithoutTeamInput
}

export interface ColorSchemeUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
}

export interface ImageUpsertWithoutTeamInput {
  update: ImageUpdateWithoutTeamInput
  create: ImageCreateWithoutTeamInput
}

export interface ImageUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
}

export interface NestedEnumImageTypeFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  notIn?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export interface ImageCreateNestedOneWithoutCoachInput {
  create?: Maybe<ImageCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface CoachCreateManyTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export interface ImageCreateNestedOneWithoutPlayerInput {
  create?: Maybe<ImageCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface PlayerCreateManyTeamInput {
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

export interface PlayerCreateNestedOneWithoutImageInput {
  create?: Maybe<PlayerCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
}

export interface CoachCreateNestedOneWithoutImageInput {
  create?: Maybe<CoachCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
}

export interface CoachUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutCoachInput>
}

export interface CoachUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface PlayerUpdateWithoutTeamInput {
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

export interface PlayerUpdateManyMutationInput {
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

export interface EnumImageTypeFieldUpdateOperationsInput {
  set?: Maybe<ImageType>
}

export interface PlayerUpdateOneWithoutImageInput {
  create?: Maybe<PlayerCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  upsert?: Maybe<PlayerUpsertWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<PlayerUpdateWithoutImageInput>
}

export interface CoachUpdateOneWithoutImageInput {
  create?: Maybe<CoachCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  upsert?: Maybe<CoachUpsertWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<CoachUpdateWithoutImageInput>
}

export interface ImageCreateWithoutCoachInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
}

export interface ImageCreateOrConnectWithoutCoachInput {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutCoachInput
}

export interface ImageCreateWithoutPlayerInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
}

export interface ImageCreateOrConnectWithoutPlayerInput {
  where: ImageWhereUniqueInput
  create: ImageCreateWithoutPlayerInput
}

export interface PlayerCreateWithoutImageInput {
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

export interface PlayerCreateOrConnectWithoutImageInput {
  where: PlayerWhereUniqueInput
  create: PlayerCreateWithoutImageInput
}

export interface CoachCreateWithoutImageInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>
}

export interface CoachCreateOrConnectWithoutImageInput {
  where: CoachWhereUniqueInput
  create: CoachCreateWithoutImageInput
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: Maybe<Scalars['String']>
}

export interface ImageUpdateOneWithoutCoachInput {
  create?: Maybe<ImageCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  upsert?: Maybe<ImageUpsertWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutCoachInput>
}

export interface ImageUpdateOneWithoutPlayerInput {
  create?: Maybe<ImageCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutPlayerInput>
}

export interface PlayerUpsertWithoutImageInput {
  update: PlayerUpdateWithoutImageInput
  create: PlayerCreateWithoutImageInput
}

export interface PlayerUpdateWithoutImageInput {
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

export interface CoachUpsertWithoutImageInput {
  update: CoachUpdateWithoutImageInput
  create: CoachCreateWithoutImageInput
}

export interface CoachUpdateWithoutImageInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>
}

export interface TeamCreateNestedOneWithoutLogoInput {
  create?: Maybe<TeamCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface TeamCreateNestedOneWithoutPlayersInput {
  create?: Maybe<TeamCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface TeamCreateNestedOneWithoutCoachesInput {
  create?: Maybe<TeamCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface ImageUpsertWithoutCoachInput {
  update: ImageUpdateWithoutCoachInput
  create: ImageCreateWithoutCoachInput
}

export interface ImageUpdateWithoutCoachInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
}

export interface ImageUpsertWithoutPlayerInput {
  update: ImageUpdateWithoutPlayerInput
  create: ImageCreateWithoutPlayerInput
}

export interface ImageUpdateWithoutPlayerInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
}

export interface TeamUpdateOneWithoutPlayersInput {
  create?: Maybe<TeamCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutPlayersInput>
}

export interface TeamUpdateOneWithoutCoachesInput {
  create?: Maybe<TeamCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutCoachesInput>
}

export interface TeamCreateWithoutLogoInput {
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

export interface TeamCreateOrConnectWithoutLogoInput {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutLogoInput
}

export interface TeamCreateWithoutPlayersInput {
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

export interface TeamCreateOrConnectWithoutPlayersInput {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutPlayersInput
}

export interface TeamCreateWithoutCoachesInput {
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

export interface TeamCreateOrConnectWithoutCoachesInput {
  where: TeamWhereUniqueInput
  create: TeamCreateWithoutCoachesInput
}

export interface TeamUpdateOneWithoutLogoInput {
  create?: Maybe<TeamCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  upsert?: Maybe<TeamUpsertWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutLogoInput>
}

export interface TeamUpsertWithoutPlayersInput {
  update: TeamUpdateWithoutPlayersInput
  create: TeamCreateWithoutPlayersInput
}

export interface TeamUpdateWithoutPlayersInput {
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

export interface TeamUpsertWithoutCoachesInput {
  update: TeamUpdateWithoutCoachesInput
  create: TeamCreateWithoutCoachesInput
}

export interface TeamUpdateWithoutCoachesInput {
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

export interface TeamUpsertWithoutLogoInput {
  update: TeamUpdateWithoutLogoInput
  create: TeamCreateWithoutLogoInput
}

export interface TeamUpdateWithoutLogoInput {
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

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  DateTime: true,
  BigInt: true,
  Bytes: true,
  Decimal: true,
  Json: true,
  SortOrder: true,
  String: true,
  Int: true,
  ID: true,
  Float: true,
  ImageType: true,
  Boolean: true,
  QueryMode: true,
}
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    account: { __type: 'Account', __args: { where: 'AccountWhereUniqueInput!' } },
    accounts: {
      __type: '[Account!]!',
      __args: {
        where: 'AccountWhereInput',
        orderBy: '[AccountOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'AccountWhereUniqueInput',
        after: 'AccountWhereUniqueInput',
      },
    },
    player: { __type: 'Player', __args: { where: 'PlayerWhereUniqueInput!' } },
    players: {
      __type: '[Player!]!',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: '[PlayerOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'PlayerWhereUniqueInput',
        after: 'PlayerWhereUniqueInput',
      },
    },
    team: { __type: 'Team', __args: { where: 'TeamWhereUniqueInput!' } },
    teams: {
      __type: '[Team!]!',
      __args: {
        where: 'TeamWhereInput',
        orderBy: '[TeamOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'TeamWhereUniqueInput',
        after: 'TeamWhereUniqueInput',
      },
    },
    coach: { __type: 'Coach', __args: { where: 'CoachWhereUniqueInput!' } },
    coaches: {
      __type: '[Coach!]!',
      __args: {
        where: 'CoachWhereInput',
        orderBy: '[CoachOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'CoachWhereUniqueInput',
        after: 'CoachWhereUniqueInput',
      },
    },
    colorScheme: { __type: 'ColorScheme', __args: { where: 'ColorSchemeWhereUniqueInput!' } },
    colorSchemes: {
      __type: '[ColorScheme!]!',
      __args: {
        where: 'ColorSchemeWhereInput',
        orderBy: '[ColorSchemeOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'ColorSchemeWhereUniqueInput',
        after: 'ColorSchemeWhereUniqueInput',
      },
    },
    image: { __type: 'Image', __args: { where: 'ImageWhereUniqueInput!' } },
    images: {
      __type: '[Image!]!',
      __args: {
        where: 'ImageWhereInput',
        orderBy: '[ImageOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'ImageWhereUniqueInput',
        after: 'ImageWhereUniqueInput',
      },
    },
    user: { __type: 'User', __args: { where: 'UserWhereUniqueInput!' } },
    users: {
      __type: '[User!]!',
      __args: {
        where: 'UserWhereInput',
        orderBy: '[UserOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'UserWhereUniqueInput',
        after: 'UserWhereUniqueInput',
      },
    },
    session: { __type: 'Session', __args: { where: 'SessionWhereUniqueInput!' } },
    sessions: {
      __type: '[Session!]!',
      __args: {
        where: 'SessionWhereInput',
        orderBy: '[SessionOrderByInput!]',
        first: 'Int',
        last: 'Int',
        before: 'SessionWhereUniqueInput',
        after: 'SessionWhereUniqueInput',
      },
    },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createOneTeam: { __type: 'Team!', __args: { data: 'TeamCreateInput!' } },
    updateOneTeam: {
      __type: 'Team',
      __args: { data: 'TeamUpdateInput!', where: 'TeamWhereUniqueInput!' },
    },
  },
  subscription: {},
  StringFilter: {
    contains: { __type: 'String!' },
    endsWith: { __type: 'String!' },
    equals: { __type: 'String!' },
    gt: { __type: 'String!' },
    gte: { __type: 'String!' },
    in: { __type: '[String!]!' },
    lt: { __type: 'String!' },
    lte: { __type: 'String!' },
    notIn: { __type: '[String!]!' },
    startsWith: { __type: 'String!' },
  },
  IntFilter: {
    contains: { __type: 'Int!' },
    endsWith: { __type: 'Int!' },
    equals: { __type: 'Int!' },
    gt: { __type: 'Int!' },
    gte: { __type: 'Int!' },
    in: { __type: '[Int!]!' },
    lt: { __type: 'Int!' },
    lte: { __type: 'Int!' },
    notIn: { __type: '[Int!]!' },
    startsWith: { __type: 'Int!' },
  },
  Player: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    imageId: { __type: 'String' },
    teamId: { __type: 'String' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    team: { __type: 'Team' },
    image: { __type: 'Image' },
  },
  Team: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    coaches: { __type: '[Coach!]!' },
    players: { __type: '[Player!]!' },
    colorScheme: { __type: 'ColorScheme' },
    logo: { __type: 'Image' },
  },
  Coach: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    imageId: { __type: 'String' },
    name: { __type: 'String!' },
    teamId: { __type: 'String' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    team: { __type: 'Team' },
    image: { __type: 'Image' },
  },
  ColorScheme: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
    team: { __type: 'Team' },
  },
  Image: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'Player' },
    coach: { __type: 'Coach' },
    team: { __type: 'Team' },
  },
  User: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    accounts: { __type: '[Account!]!' },
    sessions: { __type: '[Session!]!' },
  },
  Session: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    userId: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    user: { __type: 'User!' },
  },
  Account: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    userId: { __type: 'String!' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    user: { __type: 'User!' },
  },
  PlayerWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
  },
  PlayerWhereInput: {
    AND: { __type: '[PlayerWhereInput!]' },
    OR: { __type: '[PlayerWhereInput!]' },
    NOT: { __type: '[PlayerWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    handle: { __type: 'StringFilter' },
    name: { __type: 'StringFilter' },
    slug: { __type: 'StringFilter' },
    height: { __type: 'StringFilter' },
    weight: { __type: 'StringFilter' },
    number: { __type: 'StringNullableFilter' },
    position: { __type: 'StringNullableFilter' },
    teamId: { __type: 'StringNullableFilter' },
    team: { __type: 'TeamWhereInput' },
    imageId: { __type: 'StringNullableFilter' },
    image: { __type: 'ImageWhereInput' },
  },
  PlayerOrderByInput: {
    id: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
    handle: { __type: 'SortOrder' },
    name: { __type: 'SortOrder' },
    slug: { __type: 'SortOrder' },
    height: { __type: 'SortOrder' },
    weight: { __type: 'SortOrder' },
    number: { __type: 'SortOrder' },
    position: { __type: 'SortOrder' },
    teamId: { __type: 'SortOrder' },
    imageId: { __type: 'SortOrder' },
  },
  TeamWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    abbreviation: { __type: 'String' },
  },
  TeamWhereInput: {
    AND: { __type: '[TeamWhereInput!]' },
    OR: { __type: '[TeamWhereInput!]' },
    NOT: { __type: '[TeamWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    handle: { __type: 'StringFilter' },
    name: { __type: 'StringFilter' },
    slug: { __type: 'StringFilter' },
    city: { __type: 'StringFilter' },
    abbreviation: { __type: 'StringFilter' },
    wins: { __type: 'IntNullableFilter' },
    losses: { __type: 'IntNullableFilter' },
    winPercentage: { __type: 'FloatNullableFilter' },
    conference: { __type: 'StringFilter' },
    division: { __type: 'StringFilter' },
    established: { __type: 'StringFilter' },
    coaches: { __type: 'CoachListRelationFilter' },
    players: { __type: 'PlayerListRelationFilter' },
    colorSchemeId: { __type: 'StringNullableFilter' },
    colorScheme: { __type: 'ColorSchemeWhereInput' },
    logoId: { __type: 'StringNullableFilter' },
    logo: { __type: 'ImageWhereInput' },
  },
  TeamOrderByInput: {
    id: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
    handle: { __type: 'SortOrder' },
    name: { __type: 'SortOrder' },
    slug: { __type: 'SortOrder' },
    city: { __type: 'SortOrder' },
    abbreviation: { __type: 'SortOrder' },
    wins: { __type: 'SortOrder' },
    losses: { __type: 'SortOrder' },
    winPercentage: { __type: 'SortOrder' },
    conference: { __type: 'SortOrder' },
    division: { __type: 'SortOrder' },
    established: { __type: 'SortOrder' },
    colorSchemeId: { __type: 'SortOrder' },
    logoId: { __type: 'SortOrder' },
  },
  TeamCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    coaches: { __type: 'CoachCreateNestedManyWithoutTeamInput' },
    players: { __type: 'PlayerCreateNestedManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeCreateNestedOneWithoutTeamInput' },
    logo: { __type: 'ImageCreateNestedOneWithoutTeamInput' },
  },
  TeamUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    city: { __type: 'StringFieldUpdateOperationsInput' },
    abbreviation: { __type: 'StringFieldUpdateOperationsInput' },
    wins: { __type: 'NullableIntFieldUpdateOperationsInput' },
    losses: { __type: 'NullableIntFieldUpdateOperationsInput' },
    winPercentage: { __type: 'NullableFloatFieldUpdateOperationsInput' },
    conference: { __type: 'StringFieldUpdateOperationsInput' },
    division: { __type: 'StringFieldUpdateOperationsInput' },
    established: { __type: 'StringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUpdateManyWithoutTeamInput' },
    players: { __type: 'PlayerUpdateManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeUpdateOneWithoutTeamInput' },
    logo: { __type: 'ImageUpdateOneWithoutTeamInput' },
  },
  CoachWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
  },
  CoachWhereInput: {
    AND: { __type: '[CoachWhereInput!]' },
    OR: { __type: '[CoachWhereInput!]' },
    NOT: { __type: '[CoachWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    handle: { __type: 'StringFilter' },
    name: { __type: 'StringFilter' },
    type: { __type: 'StringNullableFilter' },
    isAssistant: { __type: 'StringNullableFilter' },
    teamId: { __type: 'StringNullableFilter' },
    team: { __type: 'TeamWhereInput' },
    imageId: { __type: 'StringNullableFilter' },
    image: { __type: 'ImageWhereInput' },
  },
  CoachOrderByInput: {
    id: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
    handle: { __type: 'SortOrder' },
    name: { __type: 'SortOrder' },
    type: { __type: 'SortOrder' },
    isAssistant: { __type: 'SortOrder' },
    teamId: { __type: 'SortOrder' },
    imageId: { __type: 'SortOrder' },
  },
  ColorSchemeWhereUniqueInput: { id: { __type: 'String' } },
  ColorSchemeWhereInput: {
    AND: { __type: '[ColorSchemeWhereInput!]' },
    OR: { __type: '[ColorSchemeWhereInput!]' },
    NOT: { __type: '[ColorSchemeWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    primary: { __type: 'StringFilter' },
    secondary: { __type: 'StringFilter' },
    team: { __type: 'TeamWhereInput' },
  },
  ColorSchemeOrderByInput: {
    id: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
    primary: { __type: 'SortOrder' },
    secondary: { __type: 'SortOrder' },
  },
  ImageWhereUniqueInput: { id: { __type: 'String' }, url: { __type: 'String' } },
  ImageWhereInput: {
    AND: { __type: '[ImageWhereInput!]' },
    OR: { __type: '[ImageWhereInput!]' },
    NOT: { __type: '[ImageWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    url: { __type: 'StringFilter' },
    type: { __type: 'EnumImageTypeFilter' },
    player: { __type: 'PlayerWhereInput' },
    coach: { __type: 'CoachWhereInput' },
    team: { __type: 'TeamWhereInput' },
  },
  ImageOrderByInput: {
    id: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
    url: { __type: 'SortOrder' },
    type: { __type: 'SortOrder' },
  },
  UserWhereUniqueInput: { id: { __type: 'String' }, email: { __type: 'String' } },
  UserWhereInput: {
    AND: { __type: '[UserWhereInput!]' },
    OR: { __type: '[UserWhereInput!]' },
    NOT: { __type: '[UserWhereInput!]' },
    id: { __type: 'StringFilter' },
    name: { __type: 'StringNullableFilter' },
    email: { __type: 'StringNullableFilter' },
    emailVerified: { __type: 'DateTimeNullableFilter' },
    image: { __type: 'StringNullableFilter' },
    apple: { __type: 'StringNullableFilter' },
    facebook: { __type: 'StringNullableFilter' },
    github: { __type: 'StringNullableFilter' },
    google: { __type: 'StringNullableFilter' },
    twitter: { __type: 'StringNullableFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    accounts: { __type: 'AccountListRelationFilter' },
    sessions: { __type: 'SessionListRelationFilter' },
  },
  UserOrderByInput: {
    id: { __type: 'SortOrder' },
    name: { __type: 'SortOrder' },
    email: { __type: 'SortOrder' },
    emailVerified: { __type: 'SortOrder' },
    image: { __type: 'SortOrder' },
    apple: { __type: 'SortOrder' },
    facebook: { __type: 'SortOrder' },
    github: { __type: 'SortOrder' },
    google: { __type: 'SortOrder' },
    twitter: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
  },
  SessionWhereUniqueInput: {
    id: { __type: 'String' },
    sessionToken: { __type: 'String' },
    accessToken: { __type: 'String' },
  },
  SessionWhereInput: {
    AND: { __type: '[SessionWhereInput!]' },
    OR: { __type: '[SessionWhereInput!]' },
    NOT: { __type: '[SessionWhereInput!]' },
    id: { __type: 'StringFilter' },
    userId: { __type: 'StringFilter' },
    expires: { __type: 'DateTimeFilter' },
    sessionToken: { __type: 'StringFilter' },
    accessToken: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    user: { __type: 'UserWhereInput' },
  },
  SessionOrderByInput: {
    id: { __type: 'SortOrder' },
    userId: { __type: 'SortOrder' },
    expires: { __type: 'SortOrder' },
    sessionToken: { __type: 'SortOrder' },
    accessToken: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
  },
  AccountWhereUniqueInput: {
    id: { __type: 'String' },
    providerId_providerAccountId: {
      __type: 'AccountProviderIdProviderAccountIdCompoundUniqueInput',
    },
  },
  AccountWhereInput: {
    AND: { __type: '[AccountWhereInput!]' },
    OR: { __type: '[AccountWhereInput!]' },
    NOT: { __type: '[AccountWhereInput!]' },
    id: { __type: 'StringFilter' },
    userId: { __type: 'StringFilter' },
    providerType: { __type: 'StringFilter' },
    providerId: { __type: 'StringFilter' },
    providerAccountId: { __type: 'StringFilter' },
    refreshToken: { __type: 'StringNullableFilter' },
    accessToken: { __type: 'StringNullableFilter' },
    accessTokenExpires: { __type: 'DateTimeNullableFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    user: { __type: 'UserWhereInput' },
  },
  AccountOrderByInput: {
    id: { __type: 'SortOrder' },
    userId: { __type: 'SortOrder' },
    providerType: { __type: 'SortOrder' },
    providerId: { __type: 'SortOrder' },
    providerAccountId: { __type: 'SortOrder' },
    refreshToken: { __type: 'SortOrder' },
    accessToken: { __type: 'SortOrder' },
    accessTokenExpires: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
  },
  DateTimeFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime!]' },
    notIn: { __type: '[DateTime!]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeFilter' },
  },
  StringNullableFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String!]' },
    notIn: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    mode: { __type: 'QueryMode' },
    not: { __type: 'NestedStringNullableFilter' },
  },
  IntNullableFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int!]' },
    notIn: { __type: '[Int!]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableFilter' },
  },
  FloatNullableFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float!]' },
    notIn: { __type: '[Float!]' },
    lt: { __type: 'Float' },
    lte: { __type: 'Float' },
    gt: { __type: 'Float' },
    gte: { __type: 'Float' },
    not: { __type: 'NestedFloatNullableFilter' },
  },
  CoachListRelationFilter: {
    every: { __type: 'CoachWhereInput' },
    some: { __type: 'CoachWhereInput' },
    none: { __type: 'CoachWhereInput' },
  },
  PlayerListRelationFilter: {
    every: { __type: 'PlayerWhereInput' },
    some: { __type: 'PlayerWhereInput' },
    none: { __type: 'PlayerWhereInput' },
  },
  CoachCreateNestedManyWithoutTeamInput: {
    create: { __type: '[CoachCreateWithoutTeamInput!]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput!]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput!]' },
  },
  PlayerCreateNestedManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput!]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput!]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput!]' },
  },
  ColorSchemeCreateNestedOneWithoutTeamInput: {
    create: { __type: 'ColorSchemeCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ColorSchemeCreateOrConnectWithoutTeamInput' },
    connect: { __type: 'ColorSchemeWhereUniqueInput' },
  },
  ImageCreateNestedOneWithoutTeamInput: {
    create: { __type: 'ImageCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutTeamInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  StringFieldUpdateOperationsInput: { set: { __type: 'String' } },
  DateTimeFieldUpdateOperationsInput: { set: { __type: 'DateTime' } },
  NullableIntFieldUpdateOperationsInput: {
    set: { __type: 'Int' },
    increment: { __type: 'Int' },
    decrement: { __type: 'Int' },
    multiply: { __type: 'Int' },
    divide: { __type: 'Int' },
  },
  NullableFloatFieldUpdateOperationsInput: {
    set: { __type: 'Float' },
    increment: { __type: 'Float' },
    decrement: { __type: 'Float' },
    multiply: { __type: 'Float' },
    divide: { __type: 'Float' },
  },
  CoachUpdateManyWithoutTeamInput: {
    create: { __type: '[CoachCreateWithoutTeamInput!]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput!]' },
    upsert: { __type: '[CoachUpsertWithWhereUniqueWithoutTeamInput!]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput!]' },
    set: { __type: '[CoachWhereUniqueInput!]' },
    disconnect: { __type: '[CoachWhereUniqueInput!]' },
    delete: { __type: '[CoachWhereUniqueInput!]' },
    update: { __type: '[CoachUpdateWithWhereUniqueWithoutTeamInput!]' },
    updateMany: { __type: '[CoachUpdateManyWithWhereWithoutTeamInput!]' },
    deleteMany: { __type: '[CoachScalarWhereInput!]' },
  },
  PlayerUpdateManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput!]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput!]' },
    upsert: { __type: '[PlayerUpsertWithWhereUniqueWithoutTeamInput!]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput!]' },
    set: { __type: '[PlayerWhereUniqueInput!]' },
    disconnect: { __type: '[PlayerWhereUniqueInput!]' },
    delete: { __type: '[PlayerWhereUniqueInput!]' },
    update: { __type: '[PlayerUpdateWithWhereUniqueWithoutTeamInput!]' },
    updateMany: { __type: '[PlayerUpdateManyWithWhereWithoutTeamInput!]' },
    deleteMany: { __type: '[PlayerScalarWhereInput!]' },
  },
  ColorSchemeUpdateOneWithoutTeamInput: {
    create: { __type: 'ColorSchemeCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ColorSchemeCreateOrConnectWithoutTeamInput' },
    upsert: { __type: 'ColorSchemeUpsertWithoutTeamInput' },
    connect: { __type: 'ColorSchemeWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ColorSchemeUpdateWithoutTeamInput' },
  },
  ImageUpdateOneWithoutTeamInput: {
    create: { __type: 'ImageCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutTeamInput' },
    upsert: { __type: 'ImageUpsertWithoutTeamInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUpdateWithoutTeamInput' },
  },
  EnumImageTypeFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType!]' },
    notIn: { __type: '[ImageType!]' },
    not: { __type: 'NestedEnumImageTypeFilter' },
  },
  DateTimeNullableFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime!]' },
    notIn: { __type: '[DateTime!]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableFilter' },
  },
  AccountListRelationFilter: {
    every: { __type: 'AccountWhereInput' },
    some: { __type: 'AccountWhereInput' },
    none: { __type: 'AccountWhereInput' },
  },
  SessionListRelationFilter: {
    every: { __type: 'SessionWhereInput' },
    some: { __type: 'SessionWhereInput' },
    none: { __type: 'SessionWhereInput' },
  },
  AccountProviderIdProviderAccountIdCompoundUniqueInput: {
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
  },
  NestedDateTimeFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime!]' },
    notIn: { __type: '[DateTime!]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeFilter' },
  },
  NestedStringNullableFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String!]' },
    notIn: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    not: { __type: 'NestedStringNullableFilter' },
  },
  NestedIntNullableFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int!]' },
    notIn: { __type: '[Int!]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableFilter' },
  },
  NestedFloatNullableFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float!]' },
    notIn: { __type: '[Float!]' },
    lt: { __type: 'Float' },
    lte: { __type: 'Float' },
    gt: { __type: 'Float' },
    gte: { __type: 'Float' },
    not: { __type: 'NestedFloatNullableFilter' },
  },
  CoachCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    image: { __type: 'ImageCreateNestedOneWithoutCoachInput' },
  },
  CoachCreateOrConnectWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    create: { __type: 'CoachCreateWithoutTeamInput!' },
  },
  CoachCreateManyTeamInputEnvelope: {
    data: { __type: '[CoachCreateManyTeamInput!]' },
    skipDuplicates: { __type: 'Boolean' },
  },
  PlayerCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    image: { __type: 'ImageCreateNestedOneWithoutPlayerInput' },
  },
  PlayerCreateOrConnectWithoutTeamInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    create: { __type: 'PlayerCreateWithoutTeamInput!' },
  },
  PlayerCreateManyTeamInputEnvelope: {
    data: { __type: '[PlayerCreateManyTeamInput!]' },
    skipDuplicates: { __type: 'Boolean' },
  },
  ColorSchemeCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
  },
  ColorSchemeCreateOrConnectWithoutTeamInput: {
    where: { __type: 'ColorSchemeWhereUniqueInput!' },
    create: { __type: 'ColorSchemeCreateWithoutTeamInput!' },
  },
  ImageCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerCreateNestedOneWithoutImageInput' },
    coach: { __type: 'CoachCreateNestedOneWithoutImageInput' },
  },
  ImageCreateOrConnectWithoutTeamInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageCreateWithoutTeamInput!' },
  },
  CoachUpsertWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    update: { __type: 'CoachUpdateWithoutTeamInput!' },
    create: { __type: 'CoachCreateWithoutTeamInput!' },
  },
  CoachUpdateWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    data: { __type: 'CoachUpdateWithoutTeamInput!' },
  },
  CoachUpdateManyWithWhereWithoutTeamInput: {
    where: { __type: 'CoachScalarWhereInput!' },
    data: { __type: 'CoachUpdateManyMutationInput!' },
  },
  CoachScalarWhereInput: {
    AND: { __type: '[CoachScalarWhereInput!]' },
    OR: { __type: '[CoachScalarWhereInput!]' },
    NOT: { __type: '[CoachScalarWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    handle: { __type: 'StringFilter' },
    name: { __type: 'StringFilter' },
    type: { __type: 'StringNullableFilter' },
    isAssistant: { __type: 'StringNullableFilter' },
    teamId: { __type: 'StringNullableFilter' },
    imageId: { __type: 'StringNullableFilter' },
  },
  PlayerUpsertWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    update: { __type: 'PlayerUpdateWithoutTeamInput!' },
    create: { __type: 'PlayerCreateWithoutTeamInput!' },
  },
  PlayerUpdateWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    data: { __type: 'PlayerUpdateWithoutTeamInput!' },
  },
  PlayerUpdateManyWithWhereWithoutTeamInput: {
    where: { __type: 'PlayerScalarWhereInput!' },
    data: { __type: 'PlayerUpdateManyMutationInput!' },
  },
  PlayerScalarWhereInput: {
    AND: { __type: '[PlayerScalarWhereInput!]' },
    OR: { __type: '[PlayerScalarWhereInput!]' },
    NOT: { __type: '[PlayerScalarWhereInput!]' },
    id: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
    handle: { __type: 'StringFilter' },
    name: { __type: 'StringFilter' },
    slug: { __type: 'StringFilter' },
    height: { __type: 'StringFilter' },
    weight: { __type: 'StringFilter' },
    number: { __type: 'StringNullableFilter' },
    position: { __type: 'StringNullableFilter' },
    teamId: { __type: 'StringNullableFilter' },
    imageId: { __type: 'StringNullableFilter' },
  },
  ColorSchemeUpsertWithoutTeamInput: {
    update: { __type: 'ColorSchemeUpdateWithoutTeamInput!' },
    create: { __type: 'ColorSchemeCreateWithoutTeamInput!' },
  },
  ColorSchemeUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
  },
  ImageUpsertWithoutTeamInput: {
    update: { __type: 'ImageUpdateWithoutTeamInput!' },
    create: { __type: 'ImageCreateWithoutTeamInput!' },
  },
  ImageUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUpdateOneWithoutImageInput' },
    coach: { __type: 'CoachUpdateOneWithoutImageInput' },
  },
  NestedEnumImageTypeFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType!]' },
    notIn: { __type: '[ImageType!]' },
    not: { __type: 'NestedEnumImageTypeFilter' },
  },
  NestedDateTimeNullableFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime!]' },
    notIn: { __type: '[DateTime!]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableFilter' },
  },
  ImageCreateNestedOneWithoutCoachInput: {
    create: { __type: 'ImageCreateWithoutCoachInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutCoachInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  CoachCreateManyTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  ImageCreateNestedOneWithoutPlayerInput: {
    create: { __type: 'ImageCreateWithoutPlayerInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutPlayerInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  PlayerCreateManyTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  PlayerCreateNestedOneWithoutImageInput: {
    create: { __type: 'PlayerCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
  },
  CoachCreateNestedOneWithoutImageInput: {
    create: { __type: 'CoachCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
  },
  CoachUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    image: { __type: 'ImageUpdateOneWithoutCoachInput' },
  },
  CoachUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  PlayerUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    height: { __type: 'StringFieldUpdateOperationsInput' },
    weight: { __type: 'StringFieldUpdateOperationsInput' },
    number: { __type: 'NullableStringFieldUpdateOperationsInput' },
    position: { __type: 'NullableStringFieldUpdateOperationsInput' },
    image: { __type: 'ImageUpdateOneWithoutPlayerInput' },
  },
  PlayerUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    height: { __type: 'StringFieldUpdateOperationsInput' },
    weight: { __type: 'StringFieldUpdateOperationsInput' },
    number: { __type: 'NullableStringFieldUpdateOperationsInput' },
    position: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  EnumImageTypeFieldUpdateOperationsInput: { set: { __type: 'ImageType' } },
  PlayerUpdateOneWithoutImageInput: {
    create: { __type: 'PlayerCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'PlayerUpsertWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'PlayerUpdateWithoutImageInput' },
  },
  CoachUpdateOneWithoutImageInput: {
    create: { __type: 'CoachCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'CoachUpsertWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'CoachUpdateWithoutImageInput' },
  },
  ImageCreateWithoutCoachInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamCreateNestedOneWithoutLogoInput' },
  },
  ImageCreateOrConnectWithoutCoachInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageCreateWithoutCoachInput!' },
  },
  ImageCreateWithoutPlayerInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    coach: { __type: 'CoachCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamCreateNestedOneWithoutLogoInput' },
  },
  ImageCreateOrConnectWithoutPlayerInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageCreateWithoutPlayerInput!' },
  },
  PlayerCreateWithoutImageInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    team: { __type: 'TeamCreateNestedOneWithoutPlayersInput' },
  },
  PlayerCreateOrConnectWithoutImageInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    create: { __type: 'PlayerCreateWithoutImageInput!' },
  },
  CoachCreateWithoutImageInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    team: { __type: 'TeamCreateNestedOneWithoutCoachesInput' },
  },
  CoachCreateOrConnectWithoutImageInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    create: { __type: 'CoachCreateWithoutImageInput!' },
  },
  NullableStringFieldUpdateOperationsInput: { set: { __type: 'String' } },
  ImageUpdateOneWithoutCoachInput: {
    create: { __type: 'ImageCreateWithoutCoachInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutCoachInput' },
    upsert: { __type: 'ImageUpsertWithoutCoachInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUpdateWithoutCoachInput' },
  },
  ImageUpdateOneWithoutPlayerInput: {
    create: { __type: 'ImageCreateWithoutPlayerInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutPlayerInput' },
    upsert: { __type: 'ImageUpsertWithoutPlayerInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUpdateWithoutPlayerInput' },
  },
  PlayerUpsertWithoutImageInput: {
    update: { __type: 'PlayerUpdateWithoutImageInput!' },
    create: { __type: 'PlayerCreateWithoutImageInput!' },
  },
  PlayerUpdateWithoutImageInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    height: { __type: 'StringFieldUpdateOperationsInput' },
    weight: { __type: 'StringFieldUpdateOperationsInput' },
    number: { __type: 'NullableStringFieldUpdateOperationsInput' },
    position: { __type: 'NullableStringFieldUpdateOperationsInput' },
    team: { __type: 'TeamUpdateOneWithoutPlayersInput' },
  },
  CoachUpsertWithoutImageInput: {
    update: { __type: 'CoachUpdateWithoutImageInput!' },
    create: { __type: 'CoachCreateWithoutImageInput!' },
  },
  CoachUpdateWithoutImageInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    team: { __type: 'TeamUpdateOneWithoutCoachesInput' },
  },
  TeamCreateNestedOneWithoutLogoInput: {
    create: { __type: 'TeamCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  TeamCreateNestedOneWithoutPlayersInput: {
    create: { __type: 'TeamCreateWithoutPlayersInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutPlayersInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  TeamCreateNestedOneWithoutCoachesInput: {
    create: { __type: 'TeamCreateWithoutCoachesInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutCoachesInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  ImageUpsertWithoutCoachInput: {
    update: { __type: 'ImageUpdateWithoutCoachInput!' },
    create: { __type: 'ImageCreateWithoutCoachInput!' },
  },
  ImageUpdateWithoutCoachInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUpdateOneWithoutLogoInput' },
  },
  ImageUpsertWithoutPlayerInput: {
    update: { __type: 'ImageUpdateWithoutPlayerInput!' },
    create: { __type: 'ImageCreateWithoutPlayerInput!' },
  },
  ImageUpdateWithoutPlayerInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    coach: { __type: 'CoachUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUpdateOneWithoutLogoInput' },
  },
  TeamUpdateOneWithoutPlayersInput: {
    create: { __type: 'TeamCreateWithoutPlayersInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutPlayersInput' },
    upsert: { __type: 'TeamUpsertWithoutPlayersInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUpdateWithoutPlayersInput' },
  },
  TeamUpdateOneWithoutCoachesInput: {
    create: { __type: 'TeamCreateWithoutCoachesInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutCoachesInput' },
    upsert: { __type: 'TeamUpsertWithoutCoachesInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUpdateWithoutCoachesInput' },
  },
  TeamCreateWithoutLogoInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    coaches: { __type: 'CoachCreateNestedManyWithoutTeamInput' },
    players: { __type: 'PlayerCreateNestedManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeCreateNestedOneWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutLogoInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamCreateWithoutLogoInput!' },
  },
  TeamCreateWithoutPlayersInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    coaches: { __type: 'CoachCreateNestedManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeCreateNestedOneWithoutTeamInput' },
    logo: { __type: 'ImageCreateNestedOneWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutPlayersInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamCreateWithoutPlayersInput!' },
  },
  TeamCreateWithoutCoachesInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    players: { __type: 'PlayerCreateNestedManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeCreateNestedOneWithoutTeamInput' },
    logo: { __type: 'ImageCreateNestedOneWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutCoachesInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamCreateWithoutCoachesInput!' },
  },
  TeamUpdateOneWithoutLogoInput: {
    create: { __type: 'TeamCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    upsert: { __type: 'TeamUpsertWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUpdateWithoutLogoInput' },
  },
  TeamUpsertWithoutPlayersInput: {
    update: { __type: 'TeamUpdateWithoutPlayersInput!' },
    create: { __type: 'TeamCreateWithoutPlayersInput!' },
  },
  TeamUpdateWithoutPlayersInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    city: { __type: 'StringFieldUpdateOperationsInput' },
    abbreviation: { __type: 'StringFieldUpdateOperationsInput' },
    wins: { __type: 'NullableIntFieldUpdateOperationsInput' },
    losses: { __type: 'NullableIntFieldUpdateOperationsInput' },
    winPercentage: { __type: 'NullableFloatFieldUpdateOperationsInput' },
    conference: { __type: 'StringFieldUpdateOperationsInput' },
    division: { __type: 'StringFieldUpdateOperationsInput' },
    established: { __type: 'StringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUpdateManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeUpdateOneWithoutTeamInput' },
    logo: { __type: 'ImageUpdateOneWithoutTeamInput' },
  },
  TeamUpsertWithoutCoachesInput: {
    update: { __type: 'TeamUpdateWithoutCoachesInput!' },
    create: { __type: 'TeamCreateWithoutCoachesInput!' },
  },
  TeamUpdateWithoutCoachesInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    city: { __type: 'StringFieldUpdateOperationsInput' },
    abbreviation: { __type: 'StringFieldUpdateOperationsInput' },
    wins: { __type: 'NullableIntFieldUpdateOperationsInput' },
    losses: { __type: 'NullableIntFieldUpdateOperationsInput' },
    winPercentage: { __type: 'NullableFloatFieldUpdateOperationsInput' },
    conference: { __type: 'StringFieldUpdateOperationsInput' },
    division: { __type: 'StringFieldUpdateOperationsInput' },
    established: { __type: 'StringFieldUpdateOperationsInput' },
    players: { __type: 'PlayerUpdateManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeUpdateOneWithoutTeamInput' },
    logo: { __type: 'ImageUpdateOneWithoutTeamInput' },
  },
  TeamUpsertWithoutLogoInput: {
    update: { __type: 'TeamUpdateWithoutLogoInput!' },
    create: { __type: 'TeamCreateWithoutLogoInput!' },
  },
  TeamUpdateWithoutLogoInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    slug: { __type: 'StringFieldUpdateOperationsInput' },
    city: { __type: 'StringFieldUpdateOperationsInput' },
    abbreviation: { __type: 'StringFieldUpdateOperationsInput' },
    wins: { __type: 'NullableIntFieldUpdateOperationsInput' },
    losses: { __type: 'NullableIntFieldUpdateOperationsInput' },
    winPercentage: { __type: 'NullableFloatFieldUpdateOperationsInput' },
    conference: { __type: 'StringFieldUpdateOperationsInput' },
    division: { __type: 'StringFieldUpdateOperationsInput' },
    established: { __type: 'StringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUpdateManyWithoutTeamInput' },
    players: { __type: 'PlayerUpdateManyWithoutTeamInput' },
    colorScheme: { __type: 'ColorSchemeUpdateOneWithoutTeamInput' },
  },
} as const

export interface Query {
  __typename?: 'Query'
  account: (args: { where: AccountWhereUniqueInput }) => Maybe<Account>
  accounts: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<Array<AccountOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<AccountWhereUniqueInput>
    after?: Maybe<AccountWhereUniqueInput>
  }) => Array<Account>
  player: (args: { where: PlayerWhereUniqueInput }) => Maybe<Player>
  players: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<Array<PlayerOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<PlayerWhereUniqueInput>
    after?: Maybe<PlayerWhereUniqueInput>
  }) => Array<Player>
  team: (args: { where: TeamWhereUniqueInput }) => Maybe<Team>
  teams: (args?: {
    where?: Maybe<TeamWhereInput>
    orderBy?: Maybe<Array<TeamOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<TeamWhereUniqueInput>
    after?: Maybe<TeamWhereUniqueInput>
  }) => Array<Team>
  coach: (args: { where: CoachWhereUniqueInput }) => Maybe<Coach>
  coaches: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<Array<CoachOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<CoachWhereUniqueInput>
    after?: Maybe<CoachWhereUniqueInput>
  }) => Array<Coach>
  colorScheme: (args: { where: ColorSchemeWhereUniqueInput }) => Maybe<ColorScheme>
  colorSchemes: (args?: {
    where?: Maybe<ColorSchemeWhereInput>
    orderBy?: Maybe<Array<ColorSchemeOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<ColorSchemeWhereUniqueInput>
    after?: Maybe<ColorSchemeWhereUniqueInput>
  }) => Array<ColorScheme>
  image: (args: { where: ImageWhereUniqueInput }) => Maybe<Image>
  images: (args?: {
    where?: Maybe<ImageWhereInput>
    orderBy?: Maybe<Array<ImageOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<ImageWhereUniqueInput>
    after?: Maybe<ImageWhereUniqueInput>
  }) => Array<Image>
  user: (args: { where: UserWhereUniqueInput }) => Maybe<User>
  users: (args?: {
    where?: Maybe<UserWhereInput>
    orderBy?: Maybe<Array<UserOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<UserWhereUniqueInput>
    after?: Maybe<UserWhereUniqueInput>
  }) => Array<User>
  session: (args: { where: SessionWhereUniqueInput }) => Maybe<Session>
  sessions: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<Array<SessionOrderByInput>>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    before?: Maybe<SessionWhereUniqueInput>
    after?: Maybe<SessionWhereUniqueInput>
  }) => Array<Session>
}

export interface Mutation {
  __typename?: 'Mutation'
  createOneTeam: (args: { data: TeamCreateInput }) => Team
  updateOneTeam: (args: { data: TeamUpdateInput; where: TeamWhereUniqueInput }) => Maybe<Team>
}

export interface Subscription {
  __typename?: 'Subscription'
}

/**
 * Player model
 */
export interface Player {
  __typename?: 'Player'
  id: ScalarsEnums['ID']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  slug: ScalarsEnums['String']
  imageId?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  height: ScalarsEnums['String']
  weight: ScalarsEnums['String']
  number?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
  image?: Maybe<Image>
}

/**
 * Team model
 */
export interface Team {
  __typename?: 'Team'
  id: ScalarsEnums['ID']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  slug: ScalarsEnums['String']
  city: ScalarsEnums['String']
  abbreviation: ScalarsEnums['String']
  wins?: Maybe<ScalarsEnums['Int']>
  losses?: Maybe<ScalarsEnums['Int']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
  conference: ScalarsEnums['String']
  division: ScalarsEnums['String']
  established: ScalarsEnums['String']
  coaches: Array<Coach>
  players: Array<Player>
  colorScheme?: Maybe<ColorScheme>
  logo?: Maybe<Image>
}

/**
 * Coach model
 */
export interface Coach {
  __typename?: 'Coach'
  id: ScalarsEnums['ID']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  imageId?: Maybe<ScalarsEnums['String']>
  name: ScalarsEnums['String']
  teamId?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['String']>
  isAssistant?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
  image?: Maybe<Image>
}

/**
 * Color scheme model
 */
export interface ColorScheme {
  __typename?: 'ColorScheme'
  id: ScalarsEnums['ID']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  primary: ScalarsEnums['String']
  secondary: ScalarsEnums['String']
  team?: Maybe<Team>
}

/**
 * Image for NBA team, player, or coach
 */
export interface Image {
  __typename?: 'Image'
  id: ScalarsEnums['ID']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  url: ScalarsEnums['String']
  type: ScalarsEnums['ImageType']
  player?: Maybe<Player>
  coach?: Maybe<Coach>
  team?: Maybe<Team>
}

export interface User {
  __typename?: 'User'
  id: ScalarsEnums['ID']
  name?: Maybe<ScalarsEnums['String']>
  email?: Maybe<ScalarsEnums['String']>
  image?: Maybe<ScalarsEnums['String']>
  apple?: Maybe<ScalarsEnums['String']>
  facebook?: Maybe<ScalarsEnums['String']>
  github?: Maybe<ScalarsEnums['String']>
  google?: Maybe<ScalarsEnums['String']>
  twitter?: Maybe<ScalarsEnums['String']>
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  accounts: Array<Account>
  sessions: Array<Session>
}

export interface Session {
  __typename?: 'Session'
  id: ScalarsEnums['ID']
  userId: ScalarsEnums['String']
  expires: ScalarsEnums['DateTime']
  sessionToken: ScalarsEnums['String']
  accessToken: ScalarsEnums['String']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  user: User
}

export interface Account {
  __typename?: 'Account'
  id: ScalarsEnums['ID']
  userId: ScalarsEnums['String']
  providerType: ScalarsEnums['String']
  providerId: ScalarsEnums['String']
  providerAccountId: ScalarsEnums['String']
  refreshToken?: Maybe<ScalarsEnums['String']>
  accessToken?: Maybe<ScalarsEnums['String']>
  accessTokenExpires?: Maybe<ScalarsEnums['DateTime']>
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  user: User
}

export interface SchemaObjectTypes {
  Query: Query
  Mutation: Mutation
  Subscription: Subscription
  Player: Player
  Team: Team
  Coach: Coach
  ColorScheme: ColorScheme
  Image: Image
  User: User
  Session: Session
  Account: Account
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'Player'
  | 'Team'
  | 'Coach'
  | 'ColorScheme'
  | 'Image'
  | 'User'
  | 'Session'
  | 'Account'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortOrder: SortOrder | undefined
  ImageType: ImageType | undefined
  QueryMode: QueryMode | undefined
}
