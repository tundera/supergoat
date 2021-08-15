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
  /** Json custom scalar type */
  Json: any
  /** Decimal custom scalar type */
  Decimal: any
  /** BigInt custom scalar type */
  BigInt: any
  /** Date custom scalar type */
  DateTime: string
}

export enum AccountScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  providerType = 'providerType',
  providerId = 'providerId',
  providerAccountId = 'providerAccountId',
  refreshToken = 'refreshToken',
  accessToken = 'accessToken',
  accessTokenExpires = 'accessTokenExpires',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SessionScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  expires = 'expires',
  sessionToken = 'sessionToken',
  accessToken = 'accessToken',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum UserScalarFieldEnum {
  id = 'id',
  name = 'name',
  email = 'email',
  emailVerified = 'emailVerified',
  image = 'image',
  apple = 'apple',
  facebook = 'facebook',
  github = 'github',
  google = 'google',
  twitter = 'twitter',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum VerificationRequestScalarFieldEnum {
  id = 'id',
  identifier = 'identifier',
  token = 'token',
  expires = 'expires',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum CoachScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  handle = 'handle',
  name = 'name',
  type = 'type',
  isAssistant = 'isAssistant',
  teamId = 'teamId',
  imageId = 'imageId',
}

export enum PlayerScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  handle = 'handle',
  name = 'name',
  slug = 'slug',
  height = 'height',
  weight = 'weight',
  number = 'number',
  position = 'position',
  teamId = 'teamId',
  imageId = 'imageId',
}

export enum ColorSchemeScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  primary = 'primary',
  secondary = 'secondary',
}

export enum TeamScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  handle = 'handle',
  name = 'name',
  slug = 'slug',
  city = 'city',
  abbreviation = 'abbreviation',
  wins = 'wins',
  losses = 'losses',
  winPercentage = 'winPercentage',
  conference = 'conference',
  division = 'division',
  established = 'established',
  colorSchemeId = 'colorSchemeId',
  logoId = 'logoId',
}

export enum ImageScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  url = 'url',
  type = 'type',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}

export enum ImageType {
  LOGO = 'LOGO',
  HEADSHOT = 'HEADSHOT',
}

export interface AccountWhereInput {
  AND?: Maybe<Array<Maybe<AccountWhereInput>>>
  OR?: Maybe<Array<Maybe<AccountWhereInput>>>
  NOT?: Maybe<Array<Maybe<AccountWhereInput>>>
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

export interface AccountWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>
}

export interface AccountScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  userId?: Maybe<StringWithAggregatesFilter>
  providerType?: Maybe<StringWithAggregatesFilter>
  providerId?: Maybe<StringWithAggregatesFilter>
  providerAccountId?: Maybe<StringWithAggregatesFilter>
  refreshToken?: Maybe<StringNullableWithAggregatesFilter>
  accessToken?: Maybe<StringNullableWithAggregatesFilter>
  accessTokenExpires?: Maybe<DateTimeNullableWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
}

export interface SessionWhereInput {
  AND?: Maybe<Array<Maybe<SessionWhereInput>>>
  OR?: Maybe<Array<Maybe<SessionWhereInput>>>
  NOT?: Maybe<Array<Maybe<SessionWhereInput>>>
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

export interface SessionWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  sessionToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
}

export interface SessionScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  userId?: Maybe<StringWithAggregatesFilter>
  expires?: Maybe<DateTimeWithAggregatesFilter>
  sessionToken?: Maybe<StringWithAggregatesFilter>
  accessToken?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
}

export interface UserWhereInput {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>
  OR?: Maybe<Array<Maybe<UserWhereInput>>>
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>
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

export interface UserWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  name?: Maybe<StringNullableWithAggregatesFilter>
  email?: Maybe<StringNullableWithAggregatesFilter>
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>
  image?: Maybe<StringNullableWithAggregatesFilter>
  apple?: Maybe<StringNullableWithAggregatesFilter>
  facebook?: Maybe<StringNullableWithAggregatesFilter>
  github?: Maybe<StringNullableWithAggregatesFilter>
  google?: Maybe<StringNullableWithAggregatesFilter>
  twitter?: Maybe<StringNullableWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
}

export interface VerificationRequestWhereInput {
  AND?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>
  OR?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>
  NOT?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>
  id?: Maybe<StringFilter>
  identifier?: Maybe<StringFilter>
  token?: Maybe<StringFilter>
  expires?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export interface VerificationRequestOrderByInput {
  id?: Maybe<SortOrder>
  identifier?: Maybe<SortOrder>
  token?: Maybe<SortOrder>
  expires?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export interface VerificationRequestWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
  identifier_token?: Maybe<VerificationRequestIdentifierTokenCompoundUniqueInput>
}

export interface VerificationRequestScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  identifier?: Maybe<StringWithAggregatesFilter>
  token?: Maybe<StringWithAggregatesFilter>
  expires?: Maybe<DateTimeWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
}

export interface CoachWhereInput {
  AND?: Maybe<Array<Maybe<CoachWhereInput>>>
  OR?: Maybe<Array<Maybe<CoachWhereInput>>>
  NOT?: Maybe<Array<Maybe<CoachWhereInput>>>
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

export interface CoachWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface CoachScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
  handle?: Maybe<StringWithAggregatesFilter>
  name?: Maybe<StringWithAggregatesFilter>
  type?: Maybe<StringNullableWithAggregatesFilter>
  isAssistant?: Maybe<StringNullableWithAggregatesFilter>
  teamId?: Maybe<StringNullableWithAggregatesFilter>
  imageId?: Maybe<StringNullableWithAggregatesFilter>
}

export interface PlayerWhereInput {
  AND?: Maybe<Array<Maybe<PlayerWhereInput>>>
  OR?: Maybe<Array<Maybe<PlayerWhereInput>>>
  NOT?: Maybe<Array<Maybe<PlayerWhereInput>>>
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

export interface PlayerWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export interface PlayerScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
  handle?: Maybe<StringWithAggregatesFilter>
  name?: Maybe<StringWithAggregatesFilter>
  slug?: Maybe<StringWithAggregatesFilter>
  height?: Maybe<StringWithAggregatesFilter>
  weight?: Maybe<StringWithAggregatesFilter>
  number?: Maybe<StringNullableWithAggregatesFilter>
  position?: Maybe<StringNullableWithAggregatesFilter>
  teamId?: Maybe<StringNullableWithAggregatesFilter>
  imageId?: Maybe<StringNullableWithAggregatesFilter>
}

export interface ColorSchemeWhereInput {
  AND?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>
  OR?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>
  NOT?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>
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

export interface ColorSchemeWhereUniqueInput {
  id?: Maybe<Scalars['String']>
}

export interface ColorSchemeScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
  primary?: Maybe<StringWithAggregatesFilter>
  secondary?: Maybe<StringWithAggregatesFilter>
}

export interface TeamWhereInput {
  AND?: Maybe<Array<Maybe<TeamWhereInput>>>
  OR?: Maybe<Array<Maybe<TeamWhereInput>>>
  NOT?: Maybe<Array<Maybe<TeamWhereInput>>>
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

export interface TeamWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  abbreviation?: Maybe<Scalars['String']>
}

export interface TeamScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
  handle?: Maybe<StringWithAggregatesFilter>
  name?: Maybe<StringWithAggregatesFilter>
  slug?: Maybe<StringWithAggregatesFilter>
  city?: Maybe<StringWithAggregatesFilter>
  abbreviation?: Maybe<StringWithAggregatesFilter>
  wins?: Maybe<IntNullableWithAggregatesFilter>
  losses?: Maybe<IntNullableWithAggregatesFilter>
  winPercentage?: Maybe<FloatNullableWithAggregatesFilter>
  conference?: Maybe<StringWithAggregatesFilter>
  division?: Maybe<StringWithAggregatesFilter>
  established?: Maybe<StringWithAggregatesFilter>
  colorSchemeId?: Maybe<StringNullableWithAggregatesFilter>
  logoId?: Maybe<StringNullableWithAggregatesFilter>
}

export interface ImageWhereInput {
  AND?: Maybe<Array<Maybe<ImageWhereInput>>>
  OR?: Maybe<Array<Maybe<ImageWhereInput>>>
  NOT?: Maybe<Array<Maybe<ImageWhereInput>>>
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

export interface ImageWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface ImageScalarWhereWithAggregatesInput {
  AND?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>
  OR?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>
  NOT?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>
  id?: Maybe<StringWithAggregatesFilter>
  createdAt?: Maybe<DateTimeWithAggregatesFilter>
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>
  url?: Maybe<StringWithAggregatesFilter>
  type?: Maybe<EnumImageTypeWithAggregatesFilter>
}

export interface AccountCreateInput {
  id?: Maybe<Scalars['String']>
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserCreateNestedOneWithoutAccountsInput
}

export interface AccountUncheckedCreateInput {
  id?: Maybe<Scalars['String']>
  userId: Scalars['String']
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface AccountUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  user?: Maybe<UserUpdateOneRequiredWithoutAccountsInput>
}

export interface AccountUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  userId?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface AccountCreateManyInput {
  id?: Maybe<Scalars['String']>
  userId: Scalars['String']
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface AccountUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface AccountUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  userId?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionCreateInput {
  id?: Maybe<Scalars['String']>
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserCreateNestedOneWithoutSessionsInput
}

export interface SessionUncheckedCreateInput {
  id?: Maybe<Scalars['String']>
  userId: Scalars['String']
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SessionUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  user?: Maybe<UserUpdateOneRequiredWithoutSessionsInput>
}

export interface SessionUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  userId?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionCreateManyInput {
  id?: Maybe<Scalars['String']>
  userId: Scalars['String']
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SessionUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  userId?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface UserCreateInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>
}

export interface UserUncheckedCreateInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  accounts?: Maybe<AccountUncheckedCreateNestedManyWithoutUserInput>
  sessions?: Maybe<SessionUncheckedCreateNestedManyWithoutUserInput>
}

export interface UserUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>
}

export interface UserUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  accounts?: Maybe<AccountUncheckedUpdateManyWithoutUserInput>
  sessions?: Maybe<SessionUncheckedUpdateManyWithoutUserInput>
}

export interface UserCreateManyInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface UserUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface UserUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface VerificationRequestCreateInput {
  id?: Maybe<Scalars['String']>
  identifier: Scalars['String']
  token: Scalars['String']
  expires: Scalars['DateTime']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface VerificationRequestUncheckedCreateInput {
  id?: Maybe<Scalars['String']>
  identifier: Scalars['String']
  token: Scalars['String']
  expires: Scalars['DateTime']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface VerificationRequestUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  identifier?: Maybe<StringFieldUpdateOperationsInput>
  token?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface VerificationRequestUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  identifier?: Maybe<StringFieldUpdateOperationsInput>
  token?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface VerificationRequestCreateManyInput {
  id?: Maybe<Scalars['String']>
  identifier: Scalars['String']
  token: Scalars['String']
  expires: Scalars['DateTime']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface VerificationRequestUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  identifier?: Maybe<StringFieldUpdateOperationsInput>
  token?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface VerificationRequestUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  identifier?: Maybe<StringFieldUpdateOperationsInput>
  token?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface CoachCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>
}

export interface CoachUncheckedCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  teamId?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export interface CoachUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>
  image?: Maybe<ImageUpdateOneWithoutCoachInput>
}

export interface CoachUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface CoachCreateManyInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  teamId?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
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

export interface CoachUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface PlayerCreateInput {
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
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>
}

export interface PlayerUncheckedCreateInput {
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
  teamId?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export interface PlayerUpdateInput {
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
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>
}

export interface PlayerUncheckedUpdateInput {
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
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface PlayerCreateManyInput {
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
  teamId?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
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

export interface PlayerUncheckedUpdateManyInput {
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
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface ColorSchemeCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutColorSchemeInput>
}

export interface ColorSchemeUncheckedCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutColorSchemeInput>
}

export interface ColorSchemeUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutColorSchemeInput>
}

export interface ColorSchemeUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUncheckedUpdateOneWithoutColorSchemeInput>
}

export interface ColorSchemeCreateManyInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
}

export interface ColorSchemeUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
}

export interface ColorSchemeUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
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

export interface TeamUncheckedCreateInput {
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
  colorSchemeId?: Maybe<Scalars['String']>
  logoId?: Maybe<Scalars['String']>
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>
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

export interface TeamUncheckedUpdateInput {
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
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>
}

export interface TeamCreateManyInput {
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
  colorSchemeId?: Maybe<Scalars['String']>
  logoId?: Maybe<Scalars['String']>
}

export interface TeamUpdateManyMutationInput {
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
}

export interface TeamUncheckedUpdateManyInput {
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
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface ImageCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
}

export interface ImageUncheckedCreateInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>
}

export interface ImageUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
}

export interface ImageUncheckedUpdateInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>
}

export interface ImageCreateManyInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
}

export interface ImageUpdateManyMutationInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
}

export interface ImageUncheckedUpdateManyInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
}

export interface StringFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringFilter>
}

export interface StringNullableFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
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

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export interface UserRelationFilter {
  is?: Maybe<UserWhereInput>
  isNot?: Maybe<UserWhereInput>
}

export interface AccountProviderIdProviderAccountIdCompoundUniqueInput {
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
}

export interface StringWithAggregatesFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedStringFilter>
  min?: Maybe<NestedStringFilter>
  _max?: Maybe<NestedStringFilter>
  max?: Maybe<NestedStringFilter>
}

export interface StringNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedStringNullableFilter>
  min?: Maybe<NestedStringNullableFilter>
  _max?: Maybe<NestedStringNullableFilter>
  max?: Maybe<NestedStringNullableFilter>
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedDateTimeNullableFilter>
  min?: Maybe<NestedDateTimeNullableFilter>
  _max?: Maybe<NestedDateTimeNullableFilter>
  max?: Maybe<NestedDateTimeNullableFilter>
}

export interface DateTimeWithAggregatesFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedDateTimeFilter>
  min?: Maybe<NestedDateTimeFilter>
  _max?: Maybe<NestedDateTimeFilter>
  max?: Maybe<NestedDateTimeFilter>
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

export interface VerificationRequestIdentifierTokenCompoundUniqueInput {
  identifier: Scalars['String']
  token: Scalars['String']
}

export interface TeamRelationFilter {
  is?: Maybe<TeamWhereInput>
  isNot?: Maybe<TeamWhereInput>
}

export interface ImageRelationFilter {
  is?: Maybe<ImageWhereInput>
  isNot?: Maybe<ImageWhereInput>
}

export interface IntNullableFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export interface FloatNullableFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
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

export interface ColorSchemeRelationFilter {
  is?: Maybe<ColorSchemeWhereInput>
  isNot?: Maybe<ColorSchemeWhereInput>
}

export interface IntNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _avg?: Maybe<NestedFloatNullableFilter>
  avg?: Maybe<NestedFloatNullableFilter>
  _sum?: Maybe<NestedIntNullableFilter>
  sum?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedIntNullableFilter>
  min?: Maybe<NestedIntNullableFilter>
  _max?: Maybe<NestedIntNullableFilter>
  max?: Maybe<NestedIntNullableFilter>
}

export interface FloatNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _avg?: Maybe<NestedFloatNullableFilter>
  avg?: Maybe<NestedFloatNullableFilter>
  _sum?: Maybe<NestedFloatNullableFilter>
  sum?: Maybe<NestedFloatNullableFilter>
  _min?: Maybe<NestedFloatNullableFilter>
  min?: Maybe<NestedFloatNullableFilter>
  _max?: Maybe<NestedFloatNullableFilter>
  max?: Maybe<NestedFloatNullableFilter>
}

export interface EnumImageTypeFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<Maybe<ImageType>>>
  notIn?: Maybe<Array<Maybe<ImageType>>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export interface PlayerRelationFilter {
  is?: Maybe<PlayerWhereInput>
  isNot?: Maybe<PlayerWhereInput>
}

export interface CoachRelationFilter {
  is?: Maybe<CoachWhereInput>
  isNot?: Maybe<CoachWhereInput>
}

export interface EnumImageTypeWithAggregatesFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<Maybe<ImageType>>>
  notIn?: Maybe<Array<Maybe<ImageType>>>
  not?: Maybe<NestedEnumImageTypeWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedEnumImageTypeFilter>
  min?: Maybe<NestedEnumImageTypeFilter>
  _max?: Maybe<NestedEnumImageTypeFilter>
  max?: Maybe<NestedEnumImageTypeFilter>
}

export interface UserCreateNestedOneWithoutAccountsInput {
  create?: Maybe<UserUncheckedCreateWithoutAccountsInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

export interface StringFieldUpdateOperationsInput {
  set?: Maybe<Scalars['String']>
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: Maybe<Scalars['String']>
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Maybe<Scalars['DateTime']>
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Maybe<Scalars['DateTime']>
}

export interface UserUpdateOneRequiredWithoutAccountsInput {
  create?: Maybe<UserUncheckedCreateWithoutAccountsInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>
  upsert?: Maybe<UserUpsertWithoutAccountsInput>
  connect?: Maybe<UserWhereUniqueInput>
  update?: Maybe<UserUncheckedUpdateWithoutAccountsInput>
}

export interface UserCreateNestedOneWithoutSessionsInput {
  create?: Maybe<UserUncheckedCreateWithoutSessionsInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

export interface UserUpdateOneRequiredWithoutSessionsInput {
  create?: Maybe<UserUncheckedCreateWithoutSessionsInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>
  upsert?: Maybe<UserUpsertWithoutSessionsInput>
  connect?: Maybe<UserWhereUniqueInput>
  update?: Maybe<UserUncheckedUpdateWithoutSessionsInput>
}

export interface AccountCreateNestedManyWithoutUserInput {
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
}

export interface SessionCreateNestedManyWithoutUserInput {
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
}

export interface AccountUncheckedCreateNestedManyWithoutUserInput {
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
}

export interface SessionUncheckedCreateNestedManyWithoutUserInput {
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
}

export interface AccountUpdateManyWithoutUserInput {
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>
  upsert?: Maybe<Array<Maybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>
  updateMany?: Maybe<Array<Maybe<AccountUpdateManyWithWhereWithoutUserInput>>>
  deleteMany?: Maybe<Array<Maybe<AccountScalarWhereInput>>>
}

export interface SessionUpdateManyWithoutUserInput {
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>
  upsert?: Maybe<Array<Maybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>
  updateMany?: Maybe<Array<Maybe<SessionUpdateManyWithWhereWithoutUserInput>>>
  deleteMany?: Maybe<Array<Maybe<SessionScalarWhereInput>>>
}

export interface AccountUncheckedUpdateManyWithoutUserInput {
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>
  upsert?: Maybe<Array<Maybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>
  updateMany?: Maybe<Array<Maybe<AccountUpdateManyWithWhereWithoutUserInput>>>
  deleteMany?: Maybe<Array<Maybe<AccountScalarWhereInput>>>
}

export interface SessionUncheckedUpdateManyWithoutUserInput {
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>
  upsert?: Maybe<Array<Maybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>
  updateMany?: Maybe<Array<Maybe<SessionUpdateManyWithWhereWithoutUserInput>>>
  deleteMany?: Maybe<Array<Maybe<SessionScalarWhereInput>>>
}

export interface TeamCreateNestedOneWithoutCoachesInput {
  create?: Maybe<TeamUncheckedCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface ImageCreateNestedOneWithoutCoachInput {
  create?: Maybe<ImageUncheckedCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface TeamUpdateOneWithoutCoachesInput {
  create?: Maybe<TeamUncheckedCreateWithoutCoachesInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutCoachesInput>
}

export interface ImageUpdateOneWithoutCoachInput {
  create?: Maybe<ImageUncheckedCreateWithoutCoachInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  upsert?: Maybe<ImageUpsertWithoutCoachInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUncheckedUpdateWithoutCoachInput>
}

export interface TeamCreateNestedOneWithoutPlayersInput {
  create?: Maybe<TeamUncheckedCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface ImageCreateNestedOneWithoutPlayerInput {
  create?: Maybe<ImageUncheckedCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface TeamUpdateOneWithoutPlayersInput {
  create?: Maybe<TeamUncheckedCreateWithoutPlayersInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutPlayersInput>
}

export interface ImageUpdateOneWithoutPlayerInput {
  create?: Maybe<ImageUncheckedCreateWithoutPlayerInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUncheckedUpdateWithoutPlayerInput>
}

export interface TeamCreateNestedOneWithoutColorSchemeInput {
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface TeamUncheckedCreateNestedOneWithoutColorSchemeInput {
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface TeamUpdateOneWithoutColorSchemeInput {
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  upsert?: Maybe<TeamUpsertWithoutColorSchemeInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutColorSchemeInput>
}

export interface TeamUncheckedUpdateOneWithoutColorSchemeInput {
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  upsert?: Maybe<TeamUpsertWithoutColorSchemeInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutColorSchemeInput>
}

export interface CoachCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
}

export interface PlayerCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
}

export interface ColorSchemeCreateNestedOneWithoutTeamInput {
  create?: Maybe<ColorSchemeUncheckedCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
}

export interface ImageCreateNestedOneWithoutTeamInput {
  create?: Maybe<ImageUncheckedCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
}

export interface CoachUncheckedCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
}

export interface PlayerUncheckedCreateNestedManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
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
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>
  upsert?: Maybe<Array<Maybe<CoachUpsertWithWhereUniqueWithoutTeamInput>>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<CoachUpdateWithWhereUniqueWithoutTeamInput>>>
  updateMany?: Maybe<Array<Maybe<CoachUpdateManyWithWhereWithoutTeamInput>>>
  deleteMany?: Maybe<Array<Maybe<CoachScalarWhereInput>>>
}

export interface PlayerUpdateManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>
  upsert?: Maybe<Array<Maybe<PlayerUpsertWithWhereUniqueWithoutTeamInput>>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<PlayerUpdateWithWhereUniqueWithoutTeamInput>>>
  updateMany?: Maybe<Array<Maybe<PlayerUpdateManyWithWhereWithoutTeamInput>>>
  deleteMany?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>
}

export interface ColorSchemeUpdateOneWithoutTeamInput {
  create?: Maybe<ColorSchemeUncheckedCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>
  connect?: Maybe<ColorSchemeWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ColorSchemeUncheckedUpdateWithoutTeamInput>
}

export interface ImageUpdateOneWithoutTeamInput {
  create?: Maybe<ImageUncheckedCreateWithoutTeamInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  upsert?: Maybe<ImageUpsertWithoutTeamInput>
  connect?: Maybe<ImageWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUncheckedUpdateWithoutTeamInput>
}

export interface CoachUncheckedUpdateManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>
  upsert?: Maybe<Array<Maybe<CoachUpsertWithWhereUniqueWithoutTeamInput>>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<CoachUpdateWithWhereUniqueWithoutTeamInput>>>
  updateMany?: Maybe<Array<Maybe<CoachUpdateManyWithWhereWithoutTeamInput>>>
  deleteMany?: Maybe<Array<Maybe<CoachScalarWhereInput>>>
}

export interface PlayerUncheckedUpdateManyWithoutTeamInput {
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>
  upsert?: Maybe<Array<Maybe<PlayerUpsertWithWhereUniqueWithoutTeamInput>>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  set?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  disconnect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  delete?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>
  update?: Maybe<Array<Maybe<PlayerUpdateWithWhereUniqueWithoutTeamInput>>>
  updateMany?: Maybe<Array<Maybe<PlayerUpdateManyWithWhereWithoutTeamInput>>>
  deleteMany?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>
}

export interface PlayerCreateNestedOneWithoutImageInput {
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
}

export interface CoachCreateNestedOneWithoutImageInput {
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
}

export interface TeamCreateNestedOneWithoutLogoInput {
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface PlayerUncheckedCreateNestedOneWithoutImageInput {
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
}

export interface CoachUncheckedCreateNestedOneWithoutImageInput {
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
}

export interface TeamUncheckedCreateNestedOneWithoutLogoInput {
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
}

export interface EnumImageTypeFieldUpdateOperationsInput {
  set?: Maybe<ImageType>
}

export interface PlayerUpdateOneWithoutImageInput {
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  upsert?: Maybe<PlayerUpsertWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<PlayerUncheckedUpdateWithoutImageInput>
}

export interface CoachUpdateOneWithoutImageInput {
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  upsert?: Maybe<CoachUpsertWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<CoachUncheckedUpdateWithoutImageInput>
}

export interface TeamUpdateOneWithoutLogoInput {
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  upsert?: Maybe<TeamUpsertWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutLogoInput>
}

export interface PlayerUncheckedUpdateOneWithoutImageInput {
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  upsert?: Maybe<PlayerUpsertWithoutImageInput>
  connect?: Maybe<PlayerWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<PlayerUncheckedUpdateWithoutImageInput>
}

export interface CoachUncheckedUpdateOneWithoutImageInput {
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  upsert?: Maybe<CoachUpsertWithoutImageInput>
  connect?: Maybe<CoachWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<CoachUncheckedUpdateWithoutImageInput>
}

export interface TeamUncheckedUpdateOneWithoutLogoInput {
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  upsert?: Maybe<TeamUpsertWithoutLogoInput>
  connect?: Maybe<TeamWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUncheckedUpdateWithoutLogoInput>
}

export interface NestedStringFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringFilter>
}

export interface NestedStringNullableFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableFilter>
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export interface NestedStringWithAggregatesFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedStringFilter>
  min?: Maybe<NestedStringFilter>
  _max?: Maybe<NestedStringFilter>
  max?: Maybe<NestedStringFilter>
}

export interface NestedIntFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedStringNullableFilter>
  min?: Maybe<NestedStringNullableFilter>
  _max?: Maybe<NestedStringNullableFilter>
  max?: Maybe<NestedStringNullableFilter>
}

export interface NestedIntNullableFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedDateTimeNullableFilter>
  min?: Maybe<NestedDateTimeNullableFilter>
  _max?: Maybe<NestedDateTimeNullableFilter>
  max?: Maybe<NestedDateTimeNullableFilter>
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedDateTimeFilter>
  min?: Maybe<NestedDateTimeFilter>
  _max?: Maybe<NestedDateTimeFilter>
  max?: Maybe<NestedDateTimeFilter>
}

export interface NestedFloatNullableFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _avg?: Maybe<NestedFloatNullableFilter>
  avg?: Maybe<NestedFloatNullableFilter>
  _sum?: Maybe<NestedIntNullableFilter>
  sum?: Maybe<NestedIntNullableFilter>
  _min?: Maybe<NestedIntNullableFilter>
  min?: Maybe<NestedIntNullableFilter>
  _max?: Maybe<NestedIntNullableFilter>
  max?: Maybe<NestedIntNullableFilter>
}

export interface NestedFloatNullableWithAggregatesFilter {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>
  _count?: Maybe<NestedIntNullableFilter>
  count?: Maybe<NestedIntNullableFilter>
  _avg?: Maybe<NestedFloatNullableFilter>
  avg?: Maybe<NestedFloatNullableFilter>
  _sum?: Maybe<NestedFloatNullableFilter>
  sum?: Maybe<NestedFloatNullableFilter>
  _min?: Maybe<NestedFloatNullableFilter>
  min?: Maybe<NestedFloatNullableFilter>
  _max?: Maybe<NestedFloatNullableFilter>
  max?: Maybe<NestedFloatNullableFilter>
}

export interface NestedEnumImageTypeFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<Maybe<ImageType>>>
  notIn?: Maybe<Array<Maybe<ImageType>>>
  not?: Maybe<NestedEnumImageTypeFilter>
}

export interface NestedEnumImageTypeWithAggregatesFilter {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<Maybe<ImageType>>>
  notIn?: Maybe<Array<Maybe<ImageType>>>
  not?: Maybe<NestedEnumImageTypeWithAggregatesFilter>
  _count?: Maybe<NestedIntFilter>
  count?: Maybe<NestedIntFilter>
  _min?: Maybe<NestedEnumImageTypeFilter>
  min?: Maybe<NestedEnumImageTypeFilter>
  _max?: Maybe<NestedEnumImageTypeFilter>
  max?: Maybe<NestedEnumImageTypeFilter>
}

export interface UserCreateWithoutAccountsInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>
}

export interface UserUncheckedCreateWithoutAccountsInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  sessions?: Maybe<SessionUncheckedCreateNestedManyWithoutUserInput>
}

export interface UserCreateOrConnectWithoutAccountsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutAccountsInput
}

export interface UserUpsertWithoutAccountsInput {
  update: UserUncheckedUpdateWithoutAccountsInput
  create: UserUncheckedCreateWithoutAccountsInput
}

export interface UserUpdateWithoutAccountsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>
}

export interface UserUncheckedUpdateWithoutAccountsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessions?: Maybe<SessionUncheckedUpdateManyWithoutUserInput>
}

export interface UserCreateWithoutSessionsInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>
}

export interface UserUncheckedCreateWithoutSessionsInput {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  image?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  accounts?: Maybe<AccountUncheckedCreateNestedManyWithoutUserInput>
}

export interface UserCreateOrConnectWithoutSessionsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutSessionsInput
}

export interface UserUpsertWithoutSessionsInput {
  update: UserUncheckedUpdateWithoutSessionsInput
  create: UserUncheckedCreateWithoutSessionsInput
}

export interface UserUpdateWithoutSessionsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>
}

export interface UserUncheckedUpdateWithoutSessionsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  accounts?: Maybe<AccountUncheckedUpdateManyWithoutUserInput>
}

export interface AccountCreateWithoutUserInput {
  id?: Maybe<Scalars['String']>
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface AccountUncheckedCreateWithoutUserInput {
  id?: Maybe<Scalars['String']>
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface AccountCreateOrConnectWithoutUserInput {
  where: AccountWhereUniqueInput
  create: AccountUncheckedCreateWithoutUserInput
}

export interface AccountCreateManyUserInputEnvelope {
  data: AccountCreateManyUserInput
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export interface SessionCreateWithoutUserInput {
  id?: Maybe<Scalars['String']>
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SessionUncheckedCreateWithoutUserInput {
  id?: Maybe<Scalars['String']>
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SessionCreateOrConnectWithoutUserInput {
  where: SessionWhereUniqueInput
  create: SessionUncheckedCreateWithoutUserInput
}

export interface SessionCreateManyUserInputEnvelope {
  data: SessionCreateManyUserInput
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export interface AccountUpsertWithWhereUniqueWithoutUserInput {
  where: AccountWhereUniqueInput
  update: AccountUncheckedUpdateWithoutUserInput
  create: AccountUncheckedCreateWithoutUserInput
}

export interface AccountUpdateWithWhereUniqueWithoutUserInput {
  where: AccountWhereUniqueInput
  data: AccountUncheckedUpdateWithoutUserInput
}

export interface AccountUpdateManyWithWhereWithoutUserInput {
  where: AccountScalarWhereInput
  data: AccountUncheckedUpdateManyWithoutAccountsInput
}

export interface AccountScalarWhereInput {
  AND?: Maybe<Array<Maybe<AccountScalarWhereInput>>>
  OR?: Maybe<Array<Maybe<AccountScalarWhereInput>>>
  NOT?: Maybe<Array<Maybe<AccountScalarWhereInput>>>
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
}

export interface SessionUpsertWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput
  update: SessionUncheckedUpdateWithoutUserInput
  create: SessionUncheckedCreateWithoutUserInput
}

export interface SessionUpdateWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput
  data: SessionUncheckedUpdateWithoutUserInput
}

export interface SessionUpdateManyWithWhereWithoutUserInput {
  where: SessionScalarWhereInput
  data: SessionUncheckedUpdateManyWithoutSessionsInput
}

export interface SessionScalarWhereInput {
  AND?: Maybe<Array<Maybe<SessionScalarWhereInput>>>
  OR?: Maybe<Array<Maybe<SessionScalarWhereInput>>>
  NOT?: Maybe<Array<Maybe<SessionScalarWhereInput>>>
  id?: Maybe<StringFilter>
  userId?: Maybe<StringFilter>
  expires?: Maybe<DateTimeFilter>
  sessionToken?: Maybe<StringFilter>
  accessToken?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
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

export interface TeamUncheckedCreateWithoutCoachesInput {
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
  colorSchemeId?: Maybe<Scalars['String']>
  logoId?: Maybe<Scalars['String']>
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>
}

export interface TeamCreateOrConnectWithoutCoachesInput {
  where: TeamWhereUniqueInput
  create: TeamUncheckedCreateWithoutCoachesInput
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

export interface ImageUncheckedCreateWithoutCoachInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>
}

export interface ImageCreateOrConnectWithoutCoachInput {
  where: ImageWhereUniqueInput
  create: ImageUncheckedCreateWithoutCoachInput
}

export interface TeamUpsertWithoutCoachesInput {
  update: TeamUncheckedUpdateWithoutCoachesInput
  create: TeamUncheckedCreateWithoutCoachesInput
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

export interface TeamUncheckedUpdateWithoutCoachesInput {
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
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>
}

export interface ImageUpsertWithoutCoachInput {
  update: ImageUncheckedUpdateWithoutCoachInput
  create: ImageUncheckedCreateWithoutCoachInput
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

export interface ImageUncheckedUpdateWithoutCoachInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>
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

export interface TeamUncheckedCreateWithoutPlayersInput {
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
  colorSchemeId?: Maybe<Scalars['String']>
  logoId?: Maybe<Scalars['String']>
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>
}

export interface TeamCreateOrConnectWithoutPlayersInput {
  where: TeamWhereUniqueInput
  create: TeamUncheckedCreateWithoutPlayersInput
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

export interface ImageUncheckedCreateWithoutPlayerInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>
}

export interface ImageCreateOrConnectWithoutPlayerInput {
  where: ImageWhereUniqueInput
  create: ImageUncheckedCreateWithoutPlayerInput
}

export interface TeamUpsertWithoutPlayersInput {
  update: TeamUncheckedUpdateWithoutPlayersInput
  create: TeamUncheckedCreateWithoutPlayersInput
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

export interface TeamUncheckedUpdateWithoutPlayersInput {
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
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>
}

export interface ImageUpsertWithoutPlayerInput {
  update: ImageUncheckedUpdateWithoutPlayerInput
  create: ImageUncheckedCreateWithoutPlayerInput
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

export interface ImageUncheckedUpdateWithoutPlayerInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>
}

export interface TeamCreateWithoutColorSchemeInput {
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
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
}

export interface TeamUncheckedCreateWithoutColorSchemeInput {
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
  logoId?: Maybe<Scalars['String']>
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>
}

export interface TeamCreateOrConnectWithoutColorSchemeInput {
  where: TeamWhereUniqueInput
  create: TeamUncheckedCreateWithoutColorSchemeInput
}

export interface TeamUpsertWithoutColorSchemeInput {
  update: TeamUncheckedUpdateWithoutColorSchemeInput
  create: TeamUncheckedCreateWithoutColorSchemeInput
}

export interface TeamUpdateWithoutColorSchemeInput {
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
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
}

export interface TeamUncheckedUpdateWithoutColorSchemeInput {
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
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>
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

export interface CoachUncheckedCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
}

export interface CoachCreateOrConnectWithoutTeamInput {
  where: CoachWhereUniqueInput
  create: CoachUncheckedCreateWithoutTeamInput
}

export interface CoachCreateManyTeamInputEnvelope {
  data: CoachCreateManyTeamInput
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

export interface PlayerUncheckedCreateWithoutTeamInput {
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

export interface PlayerCreateOrConnectWithoutTeamInput {
  where: PlayerWhereUniqueInput
  create: PlayerUncheckedCreateWithoutTeamInput
}

export interface PlayerCreateManyTeamInputEnvelope {
  data: PlayerCreateManyTeamInput
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export interface ColorSchemeCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
}

export interface ColorSchemeUncheckedCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  primary: Scalars['String']
  secondary: Scalars['String']
}

export interface ColorSchemeCreateOrConnectWithoutTeamInput {
  where: ColorSchemeWhereUniqueInput
  create: ColorSchemeUncheckedCreateWithoutTeamInput
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

export interface ImageUncheckedCreateWithoutTeamInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  type: ImageType
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>
}

export interface ImageCreateOrConnectWithoutTeamInput {
  where: ImageWhereUniqueInput
  create: ImageUncheckedCreateWithoutTeamInput
}

export interface CoachUpsertWithWhereUniqueWithoutTeamInput {
  where: CoachWhereUniqueInput
  update: CoachUncheckedUpdateWithoutTeamInput
  create: CoachUncheckedCreateWithoutTeamInput
}

export interface CoachUpdateWithWhereUniqueWithoutTeamInput {
  where: CoachWhereUniqueInput
  data: CoachUncheckedUpdateWithoutTeamInput
}

export interface CoachUpdateManyWithWhereWithoutTeamInput {
  where: CoachScalarWhereInput
  data: CoachUncheckedUpdateManyWithoutCoachesInput
}

export interface CoachScalarWhereInput {
  AND?: Maybe<Array<Maybe<CoachScalarWhereInput>>>
  OR?: Maybe<Array<Maybe<CoachScalarWhereInput>>>
  NOT?: Maybe<Array<Maybe<CoachScalarWhereInput>>>
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
  update: PlayerUncheckedUpdateWithoutTeamInput
  create: PlayerUncheckedCreateWithoutTeamInput
}

export interface PlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput
  data: PlayerUncheckedUpdateWithoutTeamInput
}

export interface PlayerUpdateManyWithWhereWithoutTeamInput {
  where: PlayerScalarWhereInput
  data: PlayerUncheckedUpdateManyWithoutPlayersInput
}

export interface PlayerScalarWhereInput {
  AND?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>
  OR?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>
  NOT?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>
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
  update: ColorSchemeUncheckedUpdateWithoutTeamInput
  create: ColorSchemeUncheckedCreateWithoutTeamInput
}

export interface ColorSchemeUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
}

export interface ColorSchemeUncheckedUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
}

export interface ImageUpsertWithoutTeamInput {
  update: ImageUncheckedUpdateWithoutTeamInput
  create: ImageUncheckedCreateWithoutTeamInput
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

export interface ImageUncheckedUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>
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

export interface PlayerUncheckedCreateWithoutImageInput {
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
  teamId?: Maybe<Scalars['String']>
}

export interface PlayerCreateOrConnectWithoutImageInput {
  where: PlayerWhereUniqueInput
  create: PlayerUncheckedCreateWithoutImageInput
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

export interface CoachUncheckedCreateWithoutImageInput {
  id: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  teamId?: Maybe<Scalars['String']>
}

export interface CoachCreateOrConnectWithoutImageInput {
  where: CoachWhereUniqueInput
  create: CoachUncheckedCreateWithoutImageInput
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

export interface TeamUncheckedCreateWithoutLogoInput {
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
  colorSchemeId?: Maybe<Scalars['String']>
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>
}

export interface TeamCreateOrConnectWithoutLogoInput {
  where: TeamWhereUniqueInput
  create: TeamUncheckedCreateWithoutLogoInput
}

export interface PlayerUpsertWithoutImageInput {
  update: PlayerUncheckedUpdateWithoutImageInput
  create: PlayerUncheckedCreateWithoutImageInput
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

export interface PlayerUncheckedUpdateWithoutImageInput {
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
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface CoachUpsertWithoutImageInput {
  update: CoachUncheckedUpdateWithoutImageInput
  create: CoachUncheckedCreateWithoutImageInput
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

export interface CoachUncheckedUpdateWithoutImageInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface TeamUpsertWithoutLogoInput {
  update: TeamUncheckedUpdateWithoutLogoInput
  create: TeamUncheckedCreateWithoutLogoInput
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

export interface TeamUncheckedUpdateWithoutLogoInput {
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
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>
}

export interface AccountCreateManyUserInput {
  id?: Maybe<Scalars['String']>
  providerType: Scalars['String']
  providerId: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SessionCreateManyUserInput {
  id?: Maybe<Scalars['String']>
  expires: Scalars['DateTime']
  sessionToken: Scalars['String']
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface AccountUpdateWithoutUserInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface AccountUncheckedUpdateWithoutUserInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface AccountUncheckedUpdateManyWithoutAccountsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionUpdateWithoutUserInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionUncheckedUpdateWithoutUserInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export interface SessionUncheckedUpdateManyWithoutSessionsInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
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

export interface CoachUncheckedUpdateWithoutTeamInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface CoachUncheckedUpdateManyWithoutCoachesInput {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
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

export interface PlayerUncheckedUpdateWithoutTeamInput {
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
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export interface PlayerUncheckedUpdateManyWithoutPlayersInput {
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
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  String: true,
  Int: true,
  Float: true,
  Json: true,
  Decimal: true,
  BigInt: true,
  DateTime: true,
  AccountScalarFieldEnum: true,
  SessionScalarFieldEnum: true,
  UserScalarFieldEnum: true,
  VerificationRequestScalarFieldEnum: true,
  CoachScalarFieldEnum: true,
  PlayerScalarFieldEnum: true,
  ColorSchemeScalarFieldEnum: true,
  TeamScalarFieldEnum: true,
  ImageScalarFieldEnum: true,
  SortOrder: true,
  QueryMode: true,
  ImageType: true,
  Boolean: true,
}
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    aggregateAccount: {
      __type: 'AggregateAccount',
      __args: {
        where: 'AccountWhereInput',
        orderBy: '[AccountOrderByInput]',
        cursor: 'AccountWhereUniqueInput',
        distinct: 'AccountScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyAccountCount: {
      __type: 'Int!',
      __args: {
        where: 'AccountWhereInput',
        orderBy: '[AccountOrderByInput]',
        cursor: 'AccountWhereUniqueInput',
        distinct: 'AccountScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstAccount: {
      __type: 'Account',
      __args: {
        where: 'AccountWhereInput',
        orderBy: '[AccountOrderByInput]',
        cursor: 'AccountWhereUniqueInput',
        distinct: 'AccountScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyAccount: {
      __type: '[Account!]!',
      __args: {
        where: 'AccountWhereInput',
        orderBy: '[AccountOrderByInput]',
        cursor: 'AccountWhereUniqueInput',
        distinct: 'AccountScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueAccount: { __type: 'Account', __args: { where: 'AccountWhereUniqueInput!' } },
    aggregateCoach: {
      __type: 'AggregateCoach',
      __args: {
        where: 'CoachWhereInput',
        orderBy: '[CoachOrderByInput]',
        cursor: 'CoachWhereUniqueInput',
        distinct: 'CoachScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyCoachCount: {
      __type: 'Int!',
      __args: {
        where: 'CoachWhereInput',
        orderBy: '[CoachOrderByInput]',
        cursor: 'CoachWhereUniqueInput',
        distinct: 'CoachScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstCoach: {
      __type: 'Coach',
      __args: {
        where: 'CoachWhereInput',
        orderBy: '[CoachOrderByInput]',
        cursor: 'CoachWhereUniqueInput',
        distinct: 'CoachScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyCoach: {
      __type: '[Coach!]!',
      __args: {
        where: 'CoachWhereInput',
        orderBy: '[CoachOrderByInput]',
        cursor: 'CoachWhereUniqueInput',
        distinct: 'CoachScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueCoach: { __type: 'Coach', __args: { where: 'CoachWhereUniqueInput!' } },
    aggregateColorScheme: {
      __type: 'AggregateColorScheme',
      __args: {
        where: 'ColorSchemeWhereInput',
        orderBy: '[ColorSchemeOrderByInput]',
        cursor: 'ColorSchemeWhereUniqueInput',
        distinct: 'ColorSchemeScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyColorSchemeCount: {
      __type: 'Int!',
      __args: {
        where: 'ColorSchemeWhereInput',
        orderBy: '[ColorSchemeOrderByInput]',
        cursor: 'ColorSchemeWhereUniqueInput',
        distinct: 'ColorSchemeScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstColorScheme: {
      __type: 'ColorScheme',
      __args: {
        where: 'ColorSchemeWhereInput',
        orderBy: '[ColorSchemeOrderByInput]',
        cursor: 'ColorSchemeWhereUniqueInput',
        distinct: 'ColorSchemeScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyColorScheme: {
      __type: '[ColorScheme!]!',
      __args: {
        where: 'ColorSchemeWhereInput',
        orderBy: '[ColorSchemeOrderByInput]',
        cursor: 'ColorSchemeWhereUniqueInput',
        distinct: 'ColorSchemeScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueColorScheme: {
      __type: 'ColorScheme',
      __args: { where: 'ColorSchemeWhereUniqueInput!' },
    },
    aggregateImage: {
      __type: 'AggregateImage',
      __args: {
        where: 'ImageWhereInput',
        orderBy: '[ImageOrderByInput]',
        cursor: 'ImageWhereUniqueInput',
        distinct: 'ImageScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyImageCount: {
      __type: 'Int!',
      __args: {
        where: 'ImageWhereInput',
        orderBy: '[ImageOrderByInput]',
        cursor: 'ImageWhereUniqueInput',
        distinct: 'ImageScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstImage: {
      __type: 'Image',
      __args: {
        where: 'ImageWhereInput',
        orderBy: '[ImageOrderByInput]',
        cursor: 'ImageWhereUniqueInput',
        distinct: 'ImageScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyImage: {
      __type: '[Image!]!',
      __args: {
        where: 'ImageWhereInput',
        orderBy: '[ImageOrderByInput]',
        cursor: 'ImageWhereUniqueInput',
        distinct: 'ImageScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueImage: { __type: 'Image', __args: { where: 'ImageWhereUniqueInput!' } },
    aggregatePlayer: {
      __type: 'AggregatePlayer',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: '[PlayerOrderByInput]',
        cursor: 'PlayerWhereUniqueInput',
        distinct: 'PlayerScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyPlayerCount: {
      __type: 'Int!',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: '[PlayerOrderByInput]',
        cursor: 'PlayerWhereUniqueInput',
        distinct: 'PlayerScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstPlayer: {
      __type: 'Player',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: '[PlayerOrderByInput]',
        cursor: 'PlayerWhereUniqueInput',
        distinct: 'PlayerScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyPlayer: {
      __type: '[Player!]!',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: '[PlayerOrderByInput]',
        cursor: 'PlayerWhereUniqueInput',
        distinct: 'PlayerScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniquePlayer: { __type: 'Player', __args: { where: 'PlayerWhereUniqueInput!' } },
    aggregateSession: {
      __type: 'AggregateSession',
      __args: {
        where: 'SessionWhereInput',
        orderBy: '[SessionOrderByInput]',
        cursor: 'SessionWhereUniqueInput',
        distinct: 'SessionScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManySessionCount: {
      __type: 'Int!',
      __args: {
        where: 'SessionWhereInput',
        orderBy: '[SessionOrderByInput]',
        cursor: 'SessionWhereUniqueInput',
        distinct: 'SessionScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstSession: {
      __type: 'Session',
      __args: {
        where: 'SessionWhereInput',
        orderBy: '[SessionOrderByInput]',
        cursor: 'SessionWhereUniqueInput',
        distinct: 'SessionScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManySession: {
      __type: '[Session!]!',
      __args: {
        where: 'SessionWhereInput',
        orderBy: '[SessionOrderByInput]',
        cursor: 'SessionWhereUniqueInput',
        distinct: 'SessionScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueSession: { __type: 'Session', __args: { where: 'SessionWhereUniqueInput!' } },
    aggregateTeam: {
      __type: 'AggregateTeam',
      __args: {
        where: 'TeamWhereInput',
        orderBy: '[TeamOrderByInput]',
        cursor: 'TeamWhereUniqueInput',
        distinct: 'TeamScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyTeamCount: {
      __type: 'Int!',
      __args: {
        where: 'TeamWhereInput',
        orderBy: '[TeamOrderByInput]',
        cursor: 'TeamWhereUniqueInput',
        distinct: 'TeamScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstTeam: {
      __type: 'Team',
      __args: {
        where: 'TeamWhereInput',
        orderBy: '[TeamOrderByInput]',
        cursor: 'TeamWhereUniqueInput',
        distinct: 'TeamScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyTeam: {
      __type: '[Team!]!',
      __args: {
        where: 'TeamWhereInput',
        orderBy: '[TeamOrderByInput]',
        cursor: 'TeamWhereUniqueInput',
        distinct: 'TeamScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueTeam: { __type: 'Team', __args: { where: 'TeamWhereUniqueInput!' } },
    aggregateUser: {
      __type: 'AggregateUser',
      __args: {
        where: 'UserWhereInput',
        orderBy: '[UserOrderByInput]',
        cursor: 'UserWhereUniqueInput',
        distinct: 'UserScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyUserCount: {
      __type: 'Int!',
      __args: {
        where: 'UserWhereInput',
        orderBy: '[UserOrderByInput]',
        cursor: 'UserWhereUniqueInput',
        distinct: 'UserScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstUser: {
      __type: 'User',
      __args: {
        where: 'UserWhereInput',
        orderBy: '[UserOrderByInput]',
        cursor: 'UserWhereUniqueInput',
        distinct: 'UserScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyUser: {
      __type: '[User!]!',
      __args: {
        where: 'UserWhereInput',
        orderBy: '[UserOrderByInput]',
        cursor: 'UserWhereUniqueInput',
        distinct: 'UserScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueUser: { __type: 'User', __args: { where: 'UserWhereUniqueInput!' } },
    aggregateVerificationRequest: {
      __type: 'AggregateVerificationRequest',
      __args: {
        where: 'VerificationRequestWhereInput',
        orderBy: '[VerificationRequestOrderByInput]',
        cursor: 'VerificationRequestWhereUniqueInput',
        distinct: 'VerificationRequestScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyVerificationRequestCount: {
      __type: 'Int!',
      __args: {
        where: 'VerificationRequestWhereInput',
        orderBy: '[VerificationRequestOrderByInput]',
        cursor: 'VerificationRequestWhereUniqueInput',
        distinct: 'VerificationRequestScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findFirstVerificationRequest: {
      __type: 'VerificationRequest',
      __args: {
        where: 'VerificationRequestWhereInput',
        orderBy: '[VerificationRequestOrderByInput]',
        cursor: 'VerificationRequestWhereUniqueInput',
        distinct: 'VerificationRequestScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findManyVerificationRequest: {
      __type: '[VerificationRequest!]!',
      __args: {
        where: 'VerificationRequestWhereInput',
        orderBy: '[VerificationRequestOrderByInput]',
        cursor: 'VerificationRequestWhereUniqueInput',
        distinct: 'VerificationRequestScalarFieldEnum',
        skip: 'Int',
        take: 'Int',
      },
    },
    findUniqueVerificationRequest: {
      __type: 'VerificationRequest',
      __args: { where: 'VerificationRequestWhereUniqueInput!' },
    },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createOneAccount: { __type: 'Account!', __args: { data: 'AccountCreateInput!' } },
    deleteManyAccount: { __type: 'BatchPayload!', __args: { where: 'AccountWhereInput' } },
    deleteOneAccount: { __type: 'Account', __args: { where: 'AccountWhereUniqueInput!' } },
    updateManyAccount: {
      __type: 'BatchPayload!',
      __args: { where: 'AccountWhereInput', data: 'AccountUpdateManyMutationInput!' },
    },
    updateOneAccount: {
      __type: 'Account!',
      __args: { where: 'AccountWhereUniqueInput!', data: 'AccountUpdateInput!' },
    },
    upsertOneAccount: {
      __type: 'Account!',
      __args: {
        where: 'AccountWhereUniqueInput!',
        create: 'AccountCreateInput!',
        update: 'AccountUpdateInput!',
      },
    },
    createOneCoach: { __type: 'Coach!', __args: { data: 'CoachCreateInput!' } },
    deleteManyCoach: { __type: 'BatchPayload!', __args: { where: 'CoachWhereInput' } },
    deleteOneCoach: { __type: 'Coach', __args: { where: 'CoachWhereUniqueInput!' } },
    updateManyCoach: {
      __type: 'BatchPayload!',
      __args: { where: 'CoachWhereInput', data: 'CoachUpdateManyMutationInput!' },
    },
    updateOneCoach: {
      __type: 'Coach!',
      __args: { where: 'CoachWhereUniqueInput!', data: 'CoachUpdateInput!' },
    },
    upsertOneCoach: {
      __type: 'Coach!',
      __args: {
        where: 'CoachWhereUniqueInput!',
        create: 'CoachCreateInput!',
        update: 'CoachUpdateInput!',
      },
    },
    createOneColorScheme: { __type: 'ColorScheme!', __args: { data: 'ColorSchemeCreateInput!' } },
    deleteManyColorScheme: { __type: 'BatchPayload!', __args: { where: 'ColorSchemeWhereInput' } },
    deleteOneColorScheme: {
      __type: 'ColorScheme',
      __args: { where: 'ColorSchemeWhereUniqueInput!' },
    },
    updateManyColorScheme: {
      __type: 'BatchPayload!',
      __args: { where: 'ColorSchemeWhereInput', data: 'ColorSchemeUpdateManyMutationInput!' },
    },
    updateOneColorScheme: {
      __type: 'ColorScheme!',
      __args: { where: 'ColorSchemeWhereUniqueInput!', data: 'ColorSchemeUpdateInput!' },
    },
    upsertOneColorScheme: {
      __type: 'ColorScheme!',
      __args: {
        where: 'ColorSchemeWhereUniqueInput!',
        create: 'ColorSchemeCreateInput!',
        update: 'ColorSchemeUpdateInput!',
      },
    },
    createOneImage: { __type: 'Image!', __args: { data: 'ImageCreateInput!' } },
    deleteManyImage: { __type: 'BatchPayload!', __args: { where: 'ImageWhereInput' } },
    deleteOneImage: { __type: 'Image', __args: { where: 'ImageWhereUniqueInput!' } },
    updateManyImage: {
      __type: 'BatchPayload!',
      __args: { where: 'ImageWhereInput', data: 'ImageUpdateManyMutationInput!' },
    },
    updateOneImage: {
      __type: 'Image!',
      __args: { where: 'ImageWhereUniqueInput!', data: 'ImageUpdateInput!' },
    },
    upsertOneImage: {
      __type: 'Image!',
      __args: {
        where: 'ImageWhereUniqueInput!',
        create: 'ImageCreateInput!',
        update: 'ImageUpdateInput!',
      },
    },
    createOnePlayer: { __type: 'Player!', __args: { data: 'PlayerCreateInput!' } },
    deleteManyPlayer: { __type: 'BatchPayload!', __args: { where: 'PlayerWhereInput' } },
    deleteOnePlayer: { __type: 'Player', __args: { where: 'PlayerWhereUniqueInput!' } },
    updateManyPlayer: {
      __type: 'BatchPayload!',
      __args: { where: 'PlayerWhereInput', data: 'PlayerUpdateManyMutationInput!' },
    },
    updateOnePlayer: {
      __type: 'Player!',
      __args: { where: 'PlayerWhereUniqueInput!', data: 'PlayerUpdateInput!' },
    },
    upsertOnePlayer: {
      __type: 'Player!',
      __args: {
        where: 'PlayerWhereUniqueInput!',
        create: 'PlayerCreateInput!',
        update: 'PlayerUpdateInput!',
      },
    },
    createOneSession: { __type: 'Session!', __args: { data: 'SessionCreateInput!' } },
    deleteManySession: { __type: 'BatchPayload!', __args: { where: 'SessionWhereInput' } },
    deleteOneSession: { __type: 'Session', __args: { where: 'SessionWhereUniqueInput!' } },
    updateManySession: {
      __type: 'BatchPayload!',
      __args: { where: 'SessionWhereInput', data: 'SessionUpdateManyMutationInput!' },
    },
    updateOneSession: {
      __type: 'Session!',
      __args: { where: 'SessionWhereUniqueInput!', data: 'SessionUpdateInput!' },
    },
    upsertOneSession: {
      __type: 'Session!',
      __args: {
        where: 'SessionWhereUniqueInput!',
        create: 'SessionCreateInput!',
        update: 'SessionUpdateInput!',
      },
    },
    createOneTeam: { __type: 'Team!', __args: { data: 'TeamCreateInput!' } },
    deleteManyTeam: { __type: 'BatchPayload!', __args: { where: 'TeamWhereInput' } },
    deleteOneTeam: { __type: 'Team', __args: { where: 'TeamWhereUniqueInput!' } },
    updateManyTeam: {
      __type: 'BatchPayload!',
      __args: { where: 'TeamWhereInput', data: 'TeamUpdateManyMutationInput!' },
    },
    updateOneTeam: {
      __type: 'Team!',
      __args: { where: 'TeamWhereUniqueInput!', data: 'TeamUpdateInput!' },
    },
    upsertOneTeam: {
      __type: 'Team!',
      __args: {
        where: 'TeamWhereUniqueInput!',
        create: 'TeamCreateInput!',
        update: 'TeamUpdateInput!',
      },
    },
    createOneUser: { __type: 'User!', __args: { data: 'UserCreateInput!' } },
    deleteManyUser: { __type: 'BatchPayload!', __args: { where: 'UserWhereInput' } },
    deleteOneUser: { __type: 'User', __args: { where: 'UserWhereUniqueInput!' } },
    updateManyUser: {
      __type: 'BatchPayload!',
      __args: { where: 'UserWhereInput', data: 'UserUpdateManyMutationInput!' },
    },
    updateOneUser: {
      __type: 'User!',
      __args: { where: 'UserWhereUniqueInput!', data: 'UserUpdateInput!' },
    },
    upsertOneUser: {
      __type: 'User!',
      __args: {
        where: 'UserWhereUniqueInput!',
        create: 'UserCreateInput!',
        update: 'UserUpdateInput!',
      },
    },
    createOneVerificationRequest: {
      __type: 'VerificationRequest!',
      __args: { data: 'VerificationRequestCreateInput!' },
    },
    deleteManyVerificationRequest: {
      __type: 'BatchPayload!',
      __args: { where: 'VerificationRequestWhereInput' },
    },
    deleteOneVerificationRequest: {
      __type: 'VerificationRequest',
      __args: { where: 'VerificationRequestWhereUniqueInput!' },
    },
    updateManyVerificationRequest: {
      __type: 'BatchPayload!',
      __args: {
        where: 'VerificationRequestWhereInput',
        data: 'VerificationRequestUpdateManyMutationInput!',
      },
    },
    updateOneVerificationRequest: {
      __type: 'VerificationRequest!',
      __args: {
        where: 'VerificationRequestWhereUniqueInput!',
        data: 'VerificationRequestUpdateInput!',
      },
    },
    upsertOneVerificationRequest: {
      __type: 'VerificationRequest!',
      __args: {
        where: 'VerificationRequestWhereUniqueInput!',
        create: 'VerificationRequestCreateInput!',
        update: 'VerificationRequestUpdateInput!',
      },
    },
  },
  subscription: {},
  Account: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
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
  Coach: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
    team: { __type: 'Team' },
    imageId: { __type: 'String' },
    image: { __type: 'Image' },
  },
  ColorScheme: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
    team: { __type: 'Team' },
  },
  Image: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'Player' },
    coach: { __type: 'Coach' },
    team: { __type: 'Team' },
  },
  Player: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    teamId: { __type: 'String' },
    team: { __type: 'Team' },
    imageId: { __type: 'String' },
    image: { __type: 'Image' },
  },
  Session: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    userId: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    user: { __type: 'User!' },
  },
  Team: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
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
    coaches: {
      __type: '[Coach!]!',
      __args: {
        where: 'CoachWhereInput',
        orderBy: 'CoachOrderByInput',
        cursor: 'CoachWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CoachScalarFieldEnum',
      },
    },
    players: {
      __type: '[Player!]!',
      __args: {
        where: 'PlayerWhereInput',
        orderBy: 'PlayerOrderByInput',
        cursor: 'PlayerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PlayerScalarFieldEnum',
      },
    },
    colorSchemeId: { __type: 'String' },
    colorScheme: { __type: 'ColorScheme' },
    logoId: { __type: 'String' },
    logo: { __type: 'Image' },
  },
  User: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    accounts: {
      __type: '[Account!]!',
      __args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
    },
    sessions: {
      __type: '[Session!]!',
      __args: {
        where: 'SessionWhereInput',
        orderBy: 'SessionOrderByInput',
        cursor: 'SessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SessionScalarFieldEnum',
      },
    },
  },
  VerificationRequest: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    identifier: { __type: 'String!' },
    token: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
  },
  BatchPayload: { __typename: { __type: 'String!' }, count: { __type: 'Int!' } },
  AccountWhereInput: {
    AND: { __type: '[AccountWhereInput]' },
    OR: { __type: '[AccountWhereInput]' },
    NOT: { __type: '[AccountWhereInput]' },
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
  AccountWhereUniqueInput: {
    id: { __type: 'String' },
    providerId_providerAccountId: {
      __type: 'AccountProviderIdProviderAccountIdCompoundUniqueInput',
    },
  },
  AccountScalarWhereWithAggregatesInput: {
    AND: { __type: '[AccountScalarWhereWithAggregatesInput]' },
    OR: { __type: '[AccountScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[AccountScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    userId: { __type: 'StringWithAggregatesFilter' },
    providerType: { __type: 'StringWithAggregatesFilter' },
    providerId: { __type: 'StringWithAggregatesFilter' },
    providerAccountId: { __type: 'StringWithAggregatesFilter' },
    refreshToken: { __type: 'StringNullableWithAggregatesFilter' },
    accessToken: { __type: 'StringNullableWithAggregatesFilter' },
    accessTokenExpires: { __type: 'DateTimeNullableWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
  },
  SessionWhereInput: {
    AND: { __type: '[SessionWhereInput]' },
    OR: { __type: '[SessionWhereInput]' },
    NOT: { __type: '[SessionWhereInput]' },
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
  SessionWhereUniqueInput: {
    id: { __type: 'String' },
    sessionToken: { __type: 'String' },
    accessToken: { __type: 'String' },
  },
  SessionScalarWhereWithAggregatesInput: {
    AND: { __type: '[SessionScalarWhereWithAggregatesInput]' },
    OR: { __type: '[SessionScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[SessionScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    userId: { __type: 'StringWithAggregatesFilter' },
    expires: { __type: 'DateTimeWithAggregatesFilter' },
    sessionToken: { __type: 'StringWithAggregatesFilter' },
    accessToken: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
  },
  UserWhereInput: {
    AND: { __type: '[UserWhereInput]' },
    OR: { __type: '[UserWhereInput]' },
    NOT: { __type: '[UserWhereInput]' },
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
  UserWhereUniqueInput: { id: { __type: 'String' }, email: { __type: 'String' } },
  UserScalarWhereWithAggregatesInput: {
    AND: { __type: '[UserScalarWhereWithAggregatesInput]' },
    OR: { __type: '[UserScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[UserScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    name: { __type: 'StringNullableWithAggregatesFilter' },
    email: { __type: 'StringNullableWithAggregatesFilter' },
    emailVerified: { __type: 'DateTimeNullableWithAggregatesFilter' },
    image: { __type: 'StringNullableWithAggregatesFilter' },
    apple: { __type: 'StringNullableWithAggregatesFilter' },
    facebook: { __type: 'StringNullableWithAggregatesFilter' },
    github: { __type: 'StringNullableWithAggregatesFilter' },
    google: { __type: 'StringNullableWithAggregatesFilter' },
    twitter: { __type: 'StringNullableWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
  },
  VerificationRequestWhereInput: {
    AND: { __type: '[VerificationRequestWhereInput]' },
    OR: { __type: '[VerificationRequestWhereInput]' },
    NOT: { __type: '[VerificationRequestWhereInput]' },
    id: { __type: 'StringFilter' },
    identifier: { __type: 'StringFilter' },
    token: { __type: 'StringFilter' },
    expires: { __type: 'DateTimeFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
  },
  VerificationRequestOrderByInput: {
    id: { __type: 'SortOrder' },
    identifier: { __type: 'SortOrder' },
    token: { __type: 'SortOrder' },
    expires: { __type: 'SortOrder' },
    createdAt: { __type: 'SortOrder' },
    updatedAt: { __type: 'SortOrder' },
  },
  VerificationRequestWhereUniqueInput: {
    id: { __type: 'String' },
    token: { __type: 'String' },
    identifier_token: { __type: 'VerificationRequestIdentifierTokenCompoundUniqueInput' },
  },
  VerificationRequestScalarWhereWithAggregatesInput: {
    AND: { __type: '[VerificationRequestScalarWhereWithAggregatesInput]' },
    OR: { __type: '[VerificationRequestScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[VerificationRequestScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    identifier: { __type: 'StringWithAggregatesFilter' },
    token: { __type: 'StringWithAggregatesFilter' },
    expires: { __type: 'DateTimeWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
  },
  CoachWhereInput: {
    AND: { __type: '[CoachWhereInput]' },
    OR: { __type: '[CoachWhereInput]' },
    NOT: { __type: '[CoachWhereInput]' },
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
  CoachWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
  },
  CoachScalarWhereWithAggregatesInput: {
    AND: { __type: '[CoachScalarWhereWithAggregatesInput]' },
    OR: { __type: '[CoachScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[CoachScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
    handle: { __type: 'StringWithAggregatesFilter' },
    name: { __type: 'StringWithAggregatesFilter' },
    type: { __type: 'StringNullableWithAggregatesFilter' },
    isAssistant: { __type: 'StringNullableWithAggregatesFilter' },
    teamId: { __type: 'StringNullableWithAggregatesFilter' },
    imageId: { __type: 'StringNullableWithAggregatesFilter' },
  },
  PlayerWhereInput: {
    AND: { __type: '[PlayerWhereInput]' },
    OR: { __type: '[PlayerWhereInput]' },
    NOT: { __type: '[PlayerWhereInput]' },
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
  PlayerWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
  },
  PlayerScalarWhereWithAggregatesInput: {
    AND: { __type: '[PlayerScalarWhereWithAggregatesInput]' },
    OR: { __type: '[PlayerScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[PlayerScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
    handle: { __type: 'StringWithAggregatesFilter' },
    name: { __type: 'StringWithAggregatesFilter' },
    slug: { __type: 'StringWithAggregatesFilter' },
    height: { __type: 'StringWithAggregatesFilter' },
    weight: { __type: 'StringWithAggregatesFilter' },
    number: { __type: 'StringNullableWithAggregatesFilter' },
    position: { __type: 'StringNullableWithAggregatesFilter' },
    teamId: { __type: 'StringNullableWithAggregatesFilter' },
    imageId: { __type: 'StringNullableWithAggregatesFilter' },
  },
  ColorSchemeWhereInput: {
    AND: { __type: '[ColorSchemeWhereInput]' },
    OR: { __type: '[ColorSchemeWhereInput]' },
    NOT: { __type: '[ColorSchemeWhereInput]' },
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
  ColorSchemeWhereUniqueInput: { id: { __type: 'String' } },
  ColorSchemeScalarWhereWithAggregatesInput: {
    AND: { __type: '[ColorSchemeScalarWhereWithAggregatesInput]' },
    OR: { __type: '[ColorSchemeScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[ColorSchemeScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
    primary: { __type: 'StringWithAggregatesFilter' },
    secondary: { __type: 'StringWithAggregatesFilter' },
  },
  TeamWhereInput: {
    AND: { __type: '[TeamWhereInput]' },
    OR: { __type: '[TeamWhereInput]' },
    NOT: { __type: '[TeamWhereInput]' },
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
  TeamWhereUniqueInput: {
    id: { __type: 'String' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    abbreviation: { __type: 'String' },
  },
  TeamScalarWhereWithAggregatesInput: {
    AND: { __type: '[TeamScalarWhereWithAggregatesInput]' },
    OR: { __type: '[TeamScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[TeamScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
    handle: { __type: 'StringWithAggregatesFilter' },
    name: { __type: 'StringWithAggregatesFilter' },
    slug: { __type: 'StringWithAggregatesFilter' },
    city: { __type: 'StringWithAggregatesFilter' },
    abbreviation: { __type: 'StringWithAggregatesFilter' },
    wins: { __type: 'IntNullableWithAggregatesFilter' },
    losses: { __type: 'IntNullableWithAggregatesFilter' },
    winPercentage: { __type: 'FloatNullableWithAggregatesFilter' },
    conference: { __type: 'StringWithAggregatesFilter' },
    division: { __type: 'StringWithAggregatesFilter' },
    established: { __type: 'StringWithAggregatesFilter' },
    colorSchemeId: { __type: 'StringNullableWithAggregatesFilter' },
    logoId: { __type: 'StringNullableWithAggregatesFilter' },
  },
  ImageWhereInput: {
    AND: { __type: '[ImageWhereInput]' },
    OR: { __type: '[ImageWhereInput]' },
    NOT: { __type: '[ImageWhereInput]' },
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
  ImageWhereUniqueInput: { id: { __type: 'String' }, url: { __type: 'String' } },
  ImageScalarWhereWithAggregatesInput: {
    AND: { __type: '[ImageScalarWhereWithAggregatesInput]' },
    OR: { __type: '[ImageScalarWhereWithAggregatesInput]' },
    NOT: { __type: '[ImageScalarWhereWithAggregatesInput]' },
    id: { __type: 'StringWithAggregatesFilter' },
    createdAt: { __type: 'DateTimeWithAggregatesFilter' },
    updatedAt: { __type: 'DateTimeWithAggregatesFilter' },
    url: { __type: 'StringWithAggregatesFilter' },
    type: { __type: 'EnumImageTypeWithAggregatesFilter' },
  },
  AccountCreateInput: {
    id: { __type: 'String' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    user: { __type: 'UserCreateNestedOneWithoutAccountsInput!' },
  },
  AccountUncheckedCreateInput: {
    id: { __type: 'String' },
    userId: { __type: 'String!' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    user: { __type: 'UserUpdateOneRequiredWithoutAccountsInput' },
  },
  AccountUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    userId: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  AccountCreateManyInput: {
    id: { __type: 'String' },
    userId: { __type: 'String!' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  AccountUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    userId: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionCreateInput: {
    id: { __type: 'String' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    user: { __type: 'UserCreateNestedOneWithoutSessionsInput!' },
  },
  SessionUncheckedCreateInput: {
    id: { __type: 'String' },
    userId: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    user: { __type: 'UserUpdateOneRequiredWithoutSessionsInput' },
  },
  SessionUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    userId: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionCreateManyInput: {
    id: { __type: 'String' },
    userId: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    userId: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  UserCreateInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    accounts: { __type: 'AccountCreateNestedManyWithoutUserInput' },
    sessions: { __type: 'SessionCreateNestedManyWithoutUserInput' },
  },
  UserUncheckedCreateInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    accounts: { __type: 'AccountUncheckedCreateNestedManyWithoutUserInput' },
    sessions: { __type: 'SessionUncheckedCreateNestedManyWithoutUserInput' },
  },
  UserUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    accounts: { __type: 'AccountUpdateManyWithoutUserInput' },
    sessions: { __type: 'SessionUpdateManyWithoutUserInput' },
  },
  UserUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    accounts: { __type: 'AccountUncheckedUpdateManyWithoutUserInput' },
    sessions: { __type: 'SessionUncheckedUpdateManyWithoutUserInput' },
  },
  UserCreateManyInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  UserUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  UserUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  VerificationRequestCreateInput: {
    id: { __type: 'String' },
    identifier: { __type: 'String!' },
    token: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  VerificationRequestUncheckedCreateInput: {
    id: { __type: 'String' },
    identifier: { __type: 'String!' },
    token: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  VerificationRequestUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    identifier: { __type: 'StringFieldUpdateOperationsInput' },
    token: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  VerificationRequestUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    identifier: { __type: 'StringFieldUpdateOperationsInput' },
    token: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  VerificationRequestCreateManyInput: {
    id: { __type: 'String' },
    identifier: { __type: 'String!' },
    token: { __type: 'String!' },
    expires: { __type: 'DateTime!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  VerificationRequestUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    identifier: { __type: 'StringFieldUpdateOperationsInput' },
    token: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  VerificationRequestUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    identifier: { __type: 'StringFieldUpdateOperationsInput' },
    token: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  CoachCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    team: { __type: 'TeamCreateNestedOneWithoutCoachesInput' },
    image: { __type: 'ImageCreateNestedOneWithoutCoachInput' },
  },
  CoachUncheckedCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  CoachUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    team: { __type: 'TeamUpdateOneWithoutCoachesInput' },
    image: { __type: 'ImageUpdateOneWithoutCoachInput' },
  },
  CoachUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  CoachCreateManyInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
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
  CoachUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  PlayerCreateInput: {
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
    image: { __type: 'ImageCreateNestedOneWithoutPlayerInput' },
  },
  PlayerUncheckedCreateInput: {
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
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  PlayerUpdateInput: {
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
    image: { __type: 'ImageUpdateOneWithoutPlayerInput' },
  },
  PlayerUncheckedUpdateInput: {
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
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  PlayerCreateManyInput: {
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
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
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
  PlayerUncheckedUpdateManyInput: {
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
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  ColorSchemeCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
    team: { __type: 'TeamCreateNestedOneWithoutColorSchemeInput' },
  },
  ColorSchemeUncheckedCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
    team: { __type: 'TeamUncheckedCreateNestedOneWithoutColorSchemeInput' },
  },
  ColorSchemeUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
    team: { __type: 'TeamUpdateOneWithoutColorSchemeInput' },
  },
  ColorSchemeUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
    team: { __type: 'TeamUncheckedUpdateOneWithoutColorSchemeInput' },
  },
  ColorSchemeCreateManyInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
  },
  ColorSchemeUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
  },
  ColorSchemeUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
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
  TeamUncheckedCreateInput: {
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
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
    coaches: { __type: 'CoachUncheckedCreateNestedManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedCreateNestedManyWithoutTeamInput' },
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
  TeamUncheckedUpdateInput: {
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
    colorSchemeId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    logoId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUncheckedUpdateManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedUpdateManyWithoutTeamInput' },
  },
  TeamCreateManyInput: {
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
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
  },
  TeamUpdateManyMutationInput: {
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
  },
  TeamUncheckedUpdateManyInput: {
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
    colorSchemeId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    logoId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  ImageCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerCreateNestedOneWithoutImageInput' },
    coach: { __type: 'CoachCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamCreateNestedOneWithoutLogoInput' },
  },
  ImageUncheckedCreateInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerUncheckedCreateNestedOneWithoutImageInput' },
    coach: { __type: 'CoachUncheckedCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedCreateNestedOneWithoutLogoInput' },
  },
  ImageUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUpdateOneWithoutImageInput' },
    coach: { __type: 'CoachUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUpdateOneWithoutLogoInput' },
  },
  ImageUncheckedUpdateInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUncheckedUpdateOneWithoutImageInput' },
    coach: { __type: 'CoachUncheckedUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedUpdateOneWithoutLogoInput' },
  },
  ImageCreateManyInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
  },
  ImageUpdateManyMutationInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
  },
  ImageUncheckedUpdateManyInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
  },
  StringFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    mode: { __type: 'QueryMode' },
    not: { __type: 'NestedStringFilter' },
  },
  StringNullableFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
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
  DateTimeNullableFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableFilter' },
  },
  DateTimeFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeFilter' },
  },
  UserRelationFilter: { is: { __type: 'UserWhereInput' }, isNot: { __type: 'UserWhereInput' } },
  AccountProviderIdProviderAccountIdCompoundUniqueInput: {
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
  },
  StringWithAggregatesFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    mode: { __type: 'QueryMode' },
    not: { __type: 'NestedStringWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedStringFilter' },
    min: { __type: 'NestedStringFilter' },
    _max: { __type: 'NestedStringFilter' },
    max: { __type: 'NestedStringFilter' },
  },
  StringNullableWithAggregatesFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    mode: { __type: 'QueryMode' },
    not: { __type: 'NestedStringNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedStringNullableFilter' },
    min: { __type: 'NestedStringNullableFilter' },
    _max: { __type: 'NestedStringNullableFilter' },
    max: { __type: 'NestedStringNullableFilter' },
  },
  DateTimeNullableWithAggregatesFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedDateTimeNullableFilter' },
    min: { __type: 'NestedDateTimeNullableFilter' },
    _max: { __type: 'NestedDateTimeNullableFilter' },
    max: { __type: 'NestedDateTimeNullableFilter' },
  },
  DateTimeWithAggregatesFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedDateTimeFilter' },
    min: { __type: 'NestedDateTimeFilter' },
    _max: { __type: 'NestedDateTimeFilter' },
    max: { __type: 'NestedDateTimeFilter' },
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
  VerificationRequestIdentifierTokenCompoundUniqueInput: {
    identifier: { __type: 'String!' },
    token: { __type: 'String!' },
  },
  TeamRelationFilter: { is: { __type: 'TeamWhereInput' }, isNot: { __type: 'TeamWhereInput' } },
  ImageRelationFilter: { is: { __type: 'ImageWhereInput' }, isNot: { __type: 'ImageWhereInput' } },
  IntNullableFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int]' },
    notIn: { __type: '[Int]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableFilter' },
  },
  FloatNullableFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float]' },
    notIn: { __type: '[Float]' },
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
  ColorSchemeRelationFilter: {
    is: { __type: 'ColorSchemeWhereInput' },
    isNot: { __type: 'ColorSchemeWhereInput' },
  },
  IntNullableWithAggregatesFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int]' },
    notIn: { __type: '[Int]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _avg: { __type: 'NestedFloatNullableFilter' },
    avg: { __type: 'NestedFloatNullableFilter' },
    _sum: { __type: 'NestedIntNullableFilter' },
    sum: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedIntNullableFilter' },
    min: { __type: 'NestedIntNullableFilter' },
    _max: { __type: 'NestedIntNullableFilter' },
    max: { __type: 'NestedIntNullableFilter' },
  },
  FloatNullableWithAggregatesFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float]' },
    notIn: { __type: '[Float]' },
    lt: { __type: 'Float' },
    lte: { __type: 'Float' },
    gt: { __type: 'Float' },
    gte: { __type: 'Float' },
    not: { __type: 'NestedFloatNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _avg: { __type: 'NestedFloatNullableFilter' },
    avg: { __type: 'NestedFloatNullableFilter' },
    _sum: { __type: 'NestedFloatNullableFilter' },
    sum: { __type: 'NestedFloatNullableFilter' },
    _min: { __type: 'NestedFloatNullableFilter' },
    min: { __type: 'NestedFloatNullableFilter' },
    _max: { __type: 'NestedFloatNullableFilter' },
    max: { __type: 'NestedFloatNullableFilter' },
  },
  EnumImageTypeFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType]' },
    notIn: { __type: '[ImageType]' },
    not: { __type: 'NestedEnumImageTypeFilter' },
  },
  PlayerRelationFilter: {
    is: { __type: 'PlayerWhereInput' },
    isNot: { __type: 'PlayerWhereInput' },
  },
  CoachRelationFilter: { is: { __type: 'CoachWhereInput' }, isNot: { __type: 'CoachWhereInput' } },
  EnumImageTypeWithAggregatesFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType]' },
    notIn: { __type: '[ImageType]' },
    not: { __type: 'NestedEnumImageTypeWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedEnumImageTypeFilter' },
    min: { __type: 'NestedEnumImageTypeFilter' },
    _max: { __type: 'NestedEnumImageTypeFilter' },
    max: { __type: 'NestedEnumImageTypeFilter' },
  },
  UserCreateNestedOneWithoutAccountsInput: {
    create: { __type: 'UserUncheckedCreateWithoutAccountsInput' },
    connectOrCreate: { __type: 'UserCreateOrConnectWithoutAccountsInput' },
    connect: { __type: 'UserWhereUniqueInput' },
  },
  StringFieldUpdateOperationsInput: { set: { __type: 'String' } },
  NullableStringFieldUpdateOperationsInput: { set: { __type: 'String' } },
  NullableDateTimeFieldUpdateOperationsInput: { set: { __type: 'DateTime' } },
  DateTimeFieldUpdateOperationsInput: { set: { __type: 'DateTime' } },
  UserUpdateOneRequiredWithoutAccountsInput: {
    create: { __type: 'UserUncheckedCreateWithoutAccountsInput' },
    connectOrCreate: { __type: 'UserCreateOrConnectWithoutAccountsInput' },
    upsert: { __type: 'UserUpsertWithoutAccountsInput' },
    connect: { __type: 'UserWhereUniqueInput' },
    update: { __type: 'UserUncheckedUpdateWithoutAccountsInput' },
  },
  UserCreateNestedOneWithoutSessionsInput: {
    create: { __type: 'UserUncheckedCreateWithoutSessionsInput' },
    connectOrCreate: { __type: 'UserCreateOrConnectWithoutSessionsInput' },
    connect: { __type: 'UserWhereUniqueInput' },
  },
  UserUpdateOneRequiredWithoutSessionsInput: {
    create: { __type: 'UserUncheckedCreateWithoutSessionsInput' },
    connectOrCreate: { __type: 'UserCreateOrConnectWithoutSessionsInput' },
    upsert: { __type: 'UserUpsertWithoutSessionsInput' },
    connect: { __type: 'UserWhereUniqueInput' },
    update: { __type: 'UserUncheckedUpdateWithoutSessionsInput' },
  },
  AccountCreateNestedManyWithoutUserInput: {
    create: { __type: '[AccountCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[AccountCreateOrConnectWithoutUserInput]' },
    createMany: { __type: 'AccountCreateManyUserInputEnvelope' },
    connect: { __type: '[AccountWhereUniqueInput]' },
  },
  SessionCreateNestedManyWithoutUserInput: {
    create: { __type: '[SessionCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[SessionCreateOrConnectWithoutUserInput]' },
    createMany: { __type: 'SessionCreateManyUserInputEnvelope' },
    connect: { __type: '[SessionWhereUniqueInput]' },
  },
  AccountUncheckedCreateNestedManyWithoutUserInput: {
    create: { __type: '[AccountCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[AccountCreateOrConnectWithoutUserInput]' },
    createMany: { __type: 'AccountCreateManyUserInputEnvelope' },
    connect: { __type: '[AccountWhereUniqueInput]' },
  },
  SessionUncheckedCreateNestedManyWithoutUserInput: {
    create: { __type: '[SessionCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[SessionCreateOrConnectWithoutUserInput]' },
    createMany: { __type: 'SessionCreateManyUserInputEnvelope' },
    connect: { __type: '[SessionWhereUniqueInput]' },
  },
  AccountUpdateManyWithoutUserInput: {
    create: { __type: '[AccountCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[AccountCreateOrConnectWithoutUserInput]' },
    upsert: { __type: '[AccountUpsertWithWhereUniqueWithoutUserInput]' },
    createMany: { __type: 'AccountCreateManyUserInputEnvelope' },
    connect: { __type: '[AccountWhereUniqueInput]' },
    set: { __type: '[AccountWhereUniqueInput]' },
    disconnect: { __type: '[AccountWhereUniqueInput]' },
    delete: { __type: '[AccountWhereUniqueInput]' },
    update: { __type: '[AccountUpdateWithWhereUniqueWithoutUserInput]' },
    updateMany: { __type: '[AccountUpdateManyWithWhereWithoutUserInput]' },
    deleteMany: { __type: '[AccountScalarWhereInput]' },
  },
  SessionUpdateManyWithoutUserInput: {
    create: { __type: '[SessionCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[SessionCreateOrConnectWithoutUserInput]' },
    upsert: { __type: '[SessionUpsertWithWhereUniqueWithoutUserInput]' },
    createMany: { __type: 'SessionCreateManyUserInputEnvelope' },
    connect: { __type: '[SessionWhereUniqueInput]' },
    set: { __type: '[SessionWhereUniqueInput]' },
    disconnect: { __type: '[SessionWhereUniqueInput]' },
    delete: { __type: '[SessionWhereUniqueInput]' },
    update: { __type: '[SessionUpdateWithWhereUniqueWithoutUserInput]' },
    updateMany: { __type: '[SessionUpdateManyWithWhereWithoutUserInput]' },
    deleteMany: { __type: '[SessionScalarWhereInput]' },
  },
  AccountUncheckedUpdateManyWithoutUserInput: {
    create: { __type: '[AccountCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[AccountCreateOrConnectWithoutUserInput]' },
    upsert: { __type: '[AccountUpsertWithWhereUniqueWithoutUserInput]' },
    createMany: { __type: 'AccountCreateManyUserInputEnvelope' },
    connect: { __type: '[AccountWhereUniqueInput]' },
    set: { __type: '[AccountWhereUniqueInput]' },
    disconnect: { __type: '[AccountWhereUniqueInput]' },
    delete: { __type: '[AccountWhereUniqueInput]' },
    update: { __type: '[AccountUpdateWithWhereUniqueWithoutUserInput]' },
    updateMany: { __type: '[AccountUpdateManyWithWhereWithoutUserInput]' },
    deleteMany: { __type: '[AccountScalarWhereInput]' },
  },
  SessionUncheckedUpdateManyWithoutUserInput: {
    create: { __type: '[SessionCreateWithoutUserInput]' },
    connectOrCreate: { __type: '[SessionCreateOrConnectWithoutUserInput]' },
    upsert: { __type: '[SessionUpsertWithWhereUniqueWithoutUserInput]' },
    createMany: { __type: 'SessionCreateManyUserInputEnvelope' },
    connect: { __type: '[SessionWhereUniqueInput]' },
    set: { __type: '[SessionWhereUniqueInput]' },
    disconnect: { __type: '[SessionWhereUniqueInput]' },
    delete: { __type: '[SessionWhereUniqueInput]' },
    update: { __type: '[SessionUpdateWithWhereUniqueWithoutUserInput]' },
    updateMany: { __type: '[SessionUpdateManyWithWhereWithoutUserInput]' },
    deleteMany: { __type: '[SessionScalarWhereInput]' },
  },
  TeamCreateNestedOneWithoutCoachesInput: {
    create: { __type: 'TeamUncheckedCreateWithoutCoachesInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutCoachesInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  ImageCreateNestedOneWithoutCoachInput: {
    create: { __type: 'ImageUncheckedCreateWithoutCoachInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutCoachInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  TeamUpdateOneWithoutCoachesInput: {
    create: { __type: 'TeamUncheckedCreateWithoutCoachesInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutCoachesInput' },
    upsert: { __type: 'TeamUpsertWithoutCoachesInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutCoachesInput' },
  },
  ImageUpdateOneWithoutCoachInput: {
    create: { __type: 'ImageUncheckedCreateWithoutCoachInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutCoachInput' },
    upsert: { __type: 'ImageUpsertWithoutCoachInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUncheckedUpdateWithoutCoachInput' },
  },
  TeamCreateNestedOneWithoutPlayersInput: {
    create: { __type: 'TeamUncheckedCreateWithoutPlayersInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutPlayersInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  ImageCreateNestedOneWithoutPlayerInput: {
    create: { __type: 'ImageUncheckedCreateWithoutPlayerInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutPlayerInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  TeamUpdateOneWithoutPlayersInput: {
    create: { __type: 'TeamUncheckedCreateWithoutPlayersInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutPlayersInput' },
    upsert: { __type: 'TeamUpsertWithoutPlayersInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutPlayersInput' },
  },
  ImageUpdateOneWithoutPlayerInput: {
    create: { __type: 'ImageUncheckedCreateWithoutPlayerInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutPlayerInput' },
    upsert: { __type: 'ImageUpsertWithoutPlayerInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUncheckedUpdateWithoutPlayerInput' },
  },
  TeamCreateNestedOneWithoutColorSchemeInput: {
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutColorSchemeInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  TeamUncheckedCreateNestedOneWithoutColorSchemeInput: {
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutColorSchemeInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  TeamUpdateOneWithoutColorSchemeInput: {
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutColorSchemeInput' },
    upsert: { __type: 'TeamUpsertWithoutColorSchemeInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutColorSchemeInput' },
  },
  TeamUncheckedUpdateOneWithoutColorSchemeInput: {
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutColorSchemeInput' },
    upsert: { __type: 'TeamUpsertWithoutColorSchemeInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutColorSchemeInput' },
  },
  CoachCreateNestedManyWithoutTeamInput: {
    create: { __type: '[CoachCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput]' },
  },
  PlayerCreateNestedManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput]' },
  },
  ColorSchemeCreateNestedOneWithoutTeamInput: {
    create: { __type: 'ColorSchemeUncheckedCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ColorSchemeCreateOrConnectWithoutTeamInput' },
    connect: { __type: 'ColorSchemeWhereUniqueInput' },
  },
  ImageCreateNestedOneWithoutTeamInput: {
    create: { __type: 'ImageUncheckedCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutTeamInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
  },
  CoachUncheckedCreateNestedManyWithoutTeamInput: {
    create: { __type: '[CoachCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput]' },
  },
  PlayerUncheckedCreateNestedManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput]' },
  },
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
    create: { __type: '[CoachCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput]' },
    upsert: { __type: '[CoachUpsertWithWhereUniqueWithoutTeamInput]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput]' },
    set: { __type: '[CoachWhereUniqueInput]' },
    disconnect: { __type: '[CoachWhereUniqueInput]' },
    delete: { __type: '[CoachWhereUniqueInput]' },
    update: { __type: '[CoachUpdateWithWhereUniqueWithoutTeamInput]' },
    updateMany: { __type: '[CoachUpdateManyWithWhereWithoutTeamInput]' },
    deleteMany: { __type: '[CoachScalarWhereInput]' },
  },
  PlayerUpdateManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput]' },
    upsert: { __type: '[PlayerUpsertWithWhereUniqueWithoutTeamInput]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput]' },
    set: { __type: '[PlayerWhereUniqueInput]' },
    disconnect: { __type: '[PlayerWhereUniqueInput]' },
    delete: { __type: '[PlayerWhereUniqueInput]' },
    update: { __type: '[PlayerUpdateWithWhereUniqueWithoutTeamInput]' },
    updateMany: { __type: '[PlayerUpdateManyWithWhereWithoutTeamInput]' },
    deleteMany: { __type: '[PlayerScalarWhereInput]' },
  },
  ColorSchemeUpdateOneWithoutTeamInput: {
    create: { __type: 'ColorSchemeUncheckedCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ColorSchemeCreateOrConnectWithoutTeamInput' },
    upsert: { __type: 'ColorSchemeUpsertWithoutTeamInput' },
    connect: { __type: 'ColorSchemeWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ColorSchemeUncheckedUpdateWithoutTeamInput' },
  },
  ImageUpdateOneWithoutTeamInput: {
    create: { __type: 'ImageUncheckedCreateWithoutTeamInput' },
    connectOrCreate: { __type: 'ImageCreateOrConnectWithoutTeamInput' },
    upsert: { __type: 'ImageUpsertWithoutTeamInput' },
    connect: { __type: 'ImageWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'ImageUncheckedUpdateWithoutTeamInput' },
  },
  CoachUncheckedUpdateManyWithoutTeamInput: {
    create: { __type: '[CoachCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[CoachCreateOrConnectWithoutTeamInput]' },
    upsert: { __type: '[CoachUpsertWithWhereUniqueWithoutTeamInput]' },
    createMany: { __type: 'CoachCreateManyTeamInputEnvelope' },
    connect: { __type: '[CoachWhereUniqueInput]' },
    set: { __type: '[CoachWhereUniqueInput]' },
    disconnect: { __type: '[CoachWhereUniqueInput]' },
    delete: { __type: '[CoachWhereUniqueInput]' },
    update: { __type: '[CoachUpdateWithWhereUniqueWithoutTeamInput]' },
    updateMany: { __type: '[CoachUpdateManyWithWhereWithoutTeamInput]' },
    deleteMany: { __type: '[CoachScalarWhereInput]' },
  },
  PlayerUncheckedUpdateManyWithoutTeamInput: {
    create: { __type: '[PlayerCreateWithoutTeamInput]' },
    connectOrCreate: { __type: '[PlayerCreateOrConnectWithoutTeamInput]' },
    upsert: { __type: '[PlayerUpsertWithWhereUniqueWithoutTeamInput]' },
    createMany: { __type: 'PlayerCreateManyTeamInputEnvelope' },
    connect: { __type: '[PlayerWhereUniqueInput]' },
    set: { __type: '[PlayerWhereUniqueInput]' },
    disconnect: { __type: '[PlayerWhereUniqueInput]' },
    delete: { __type: '[PlayerWhereUniqueInput]' },
    update: { __type: '[PlayerUpdateWithWhereUniqueWithoutTeamInput]' },
    updateMany: { __type: '[PlayerUpdateManyWithWhereWithoutTeamInput]' },
    deleteMany: { __type: '[PlayerScalarWhereInput]' },
  },
  PlayerCreateNestedOneWithoutImageInput: {
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
  },
  CoachCreateNestedOneWithoutImageInput: {
    create: { __type: 'CoachUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
  },
  TeamCreateNestedOneWithoutLogoInput: {
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  PlayerUncheckedCreateNestedOneWithoutImageInput: {
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
  },
  CoachUncheckedCreateNestedOneWithoutImageInput: {
    create: { __type: 'CoachUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
  },
  TeamUncheckedCreateNestedOneWithoutLogoInput: {
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
  },
  EnumImageTypeFieldUpdateOperationsInput: { set: { __type: 'ImageType' } },
  PlayerUpdateOneWithoutImageInput: {
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'PlayerUpsertWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'PlayerUncheckedUpdateWithoutImageInput' },
  },
  CoachUpdateOneWithoutImageInput: {
    create: { __type: 'CoachUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'CoachUpsertWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'CoachUncheckedUpdateWithoutImageInput' },
  },
  TeamUpdateOneWithoutLogoInput: {
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    upsert: { __type: 'TeamUpsertWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutLogoInput' },
  },
  PlayerUncheckedUpdateOneWithoutImageInput: {
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'PlayerCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'PlayerUpsertWithoutImageInput' },
    connect: { __type: 'PlayerWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'PlayerUncheckedUpdateWithoutImageInput' },
  },
  CoachUncheckedUpdateOneWithoutImageInput: {
    create: { __type: 'CoachUncheckedCreateWithoutImageInput' },
    connectOrCreate: { __type: 'CoachCreateOrConnectWithoutImageInput' },
    upsert: { __type: 'CoachUpsertWithoutImageInput' },
    connect: { __type: 'CoachWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'CoachUncheckedUpdateWithoutImageInput' },
  },
  TeamUncheckedUpdateOneWithoutLogoInput: {
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput' },
    connectOrCreate: { __type: 'TeamCreateOrConnectWithoutLogoInput' },
    upsert: { __type: 'TeamUpsertWithoutLogoInput' },
    connect: { __type: 'TeamWhereUniqueInput' },
    disconnect: { __type: 'Boolean' },
    delete: { __type: 'Boolean' },
    update: { __type: 'TeamUncheckedUpdateWithoutLogoInput' },
  },
  NestedStringFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    not: { __type: 'NestedStringFilter' },
  },
  NestedStringNullableFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    not: { __type: 'NestedStringNullableFilter' },
  },
  NestedDateTimeNullableFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableFilter' },
  },
  NestedDateTimeFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeFilter' },
  },
  NestedStringWithAggregatesFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    not: { __type: 'NestedStringWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedStringFilter' },
    min: { __type: 'NestedStringFilter' },
    _max: { __type: 'NestedStringFilter' },
    max: { __type: 'NestedStringFilter' },
  },
  NestedIntFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int]' },
    notIn: { __type: '[Int]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntFilter' },
  },
  NestedStringNullableWithAggregatesFilter: {
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    notIn: { __type: '[String]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    contains: { __type: 'String' },
    startsWith: { __type: 'String' },
    endsWith: { __type: 'String' },
    not: { __type: 'NestedStringNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedStringNullableFilter' },
    min: { __type: 'NestedStringNullableFilter' },
    _max: { __type: 'NestedStringNullableFilter' },
    max: { __type: 'NestedStringNullableFilter' },
  },
  NestedIntNullableFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int]' },
    notIn: { __type: '[Int]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableFilter' },
  },
  NestedDateTimeNullableWithAggregatesFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedDateTimeNullableFilter' },
    min: { __type: 'NestedDateTimeNullableFilter' },
    _max: { __type: 'NestedDateTimeNullableFilter' },
    max: { __type: 'NestedDateTimeNullableFilter' },
  },
  NestedDateTimeWithAggregatesFilter: {
    equals: { __type: 'DateTime' },
    in: { __type: '[DateTime]' },
    notIn: { __type: '[DateTime]' },
    lt: { __type: 'DateTime' },
    lte: { __type: 'DateTime' },
    gt: { __type: 'DateTime' },
    gte: { __type: 'DateTime' },
    not: { __type: 'NestedDateTimeWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedDateTimeFilter' },
    min: { __type: 'NestedDateTimeFilter' },
    _max: { __type: 'NestedDateTimeFilter' },
    max: { __type: 'NestedDateTimeFilter' },
  },
  NestedFloatNullableFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float]' },
    notIn: { __type: '[Float]' },
    lt: { __type: 'Float' },
    lte: { __type: 'Float' },
    gt: { __type: 'Float' },
    gte: { __type: 'Float' },
    not: { __type: 'NestedFloatNullableFilter' },
  },
  NestedIntNullableWithAggregatesFilter: {
    equals: { __type: 'Int' },
    in: { __type: '[Int]' },
    notIn: { __type: '[Int]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    not: { __type: 'NestedIntNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _avg: { __type: 'NestedFloatNullableFilter' },
    avg: { __type: 'NestedFloatNullableFilter' },
    _sum: { __type: 'NestedIntNullableFilter' },
    sum: { __type: 'NestedIntNullableFilter' },
    _min: { __type: 'NestedIntNullableFilter' },
    min: { __type: 'NestedIntNullableFilter' },
    _max: { __type: 'NestedIntNullableFilter' },
    max: { __type: 'NestedIntNullableFilter' },
  },
  NestedFloatNullableWithAggregatesFilter: {
    equals: { __type: 'Float' },
    in: { __type: '[Float]' },
    notIn: { __type: '[Float]' },
    lt: { __type: 'Float' },
    lte: { __type: 'Float' },
    gt: { __type: 'Float' },
    gte: { __type: 'Float' },
    not: { __type: 'NestedFloatNullableWithAggregatesFilter' },
    _count: { __type: 'NestedIntNullableFilter' },
    count: { __type: 'NestedIntNullableFilter' },
    _avg: { __type: 'NestedFloatNullableFilter' },
    avg: { __type: 'NestedFloatNullableFilter' },
    _sum: { __type: 'NestedFloatNullableFilter' },
    sum: { __type: 'NestedFloatNullableFilter' },
    _min: { __type: 'NestedFloatNullableFilter' },
    min: { __type: 'NestedFloatNullableFilter' },
    _max: { __type: 'NestedFloatNullableFilter' },
    max: { __type: 'NestedFloatNullableFilter' },
  },
  NestedEnumImageTypeFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType]' },
    notIn: { __type: '[ImageType]' },
    not: { __type: 'NestedEnumImageTypeFilter' },
  },
  NestedEnumImageTypeWithAggregatesFilter: {
    equals: { __type: 'ImageType' },
    in: { __type: '[ImageType]' },
    notIn: { __type: '[ImageType]' },
    not: { __type: 'NestedEnumImageTypeWithAggregatesFilter' },
    _count: { __type: 'NestedIntFilter' },
    count: { __type: 'NestedIntFilter' },
    _min: { __type: 'NestedEnumImageTypeFilter' },
    min: { __type: 'NestedEnumImageTypeFilter' },
    _max: { __type: 'NestedEnumImageTypeFilter' },
    max: { __type: 'NestedEnumImageTypeFilter' },
  },
  UserCreateWithoutAccountsInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    sessions: { __type: 'SessionCreateNestedManyWithoutUserInput' },
  },
  UserUncheckedCreateWithoutAccountsInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    sessions: { __type: 'SessionUncheckedCreateNestedManyWithoutUserInput' },
  },
  UserCreateOrConnectWithoutAccountsInput: {
    where: { __type: 'UserWhereUniqueInput!' },
    create: { __type: 'UserUncheckedCreateWithoutAccountsInput!' },
  },
  UserUpsertWithoutAccountsInput: {
    update: { __type: 'UserUncheckedUpdateWithoutAccountsInput!' },
    create: { __type: 'UserUncheckedCreateWithoutAccountsInput!' },
  },
  UserUpdateWithoutAccountsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessions: { __type: 'SessionUpdateManyWithoutUserInput' },
  },
  UserUncheckedUpdateWithoutAccountsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessions: { __type: 'SessionUncheckedUpdateManyWithoutUserInput' },
  },
  UserCreateWithoutSessionsInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    accounts: { __type: 'AccountCreateNestedManyWithoutUserInput' },
  },
  UserUncheckedCreateWithoutSessionsInput: {
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    accounts: { __type: 'AccountUncheckedCreateNestedManyWithoutUserInput' },
  },
  UserCreateOrConnectWithoutSessionsInput: {
    where: { __type: 'UserWhereUniqueInput!' },
    create: { __type: 'UserUncheckedCreateWithoutSessionsInput!' },
  },
  UserUpsertWithoutSessionsInput: {
    update: { __type: 'UserUncheckedUpdateWithoutSessionsInput!' },
    create: { __type: 'UserUncheckedCreateWithoutSessionsInput!' },
  },
  UserUpdateWithoutSessionsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    accounts: { __type: 'AccountUpdateManyWithoutUserInput' },
  },
  UserUncheckedUpdateWithoutSessionsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'NullableStringFieldUpdateOperationsInput' },
    email: { __type: 'NullableStringFieldUpdateOperationsInput' },
    emailVerified: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    image: { __type: 'NullableStringFieldUpdateOperationsInput' },
    apple: { __type: 'NullableStringFieldUpdateOperationsInput' },
    facebook: { __type: 'NullableStringFieldUpdateOperationsInput' },
    github: { __type: 'NullableStringFieldUpdateOperationsInput' },
    google: { __type: 'NullableStringFieldUpdateOperationsInput' },
    twitter: { __type: 'NullableStringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    accounts: { __type: 'AccountUncheckedUpdateManyWithoutUserInput' },
  },
  AccountCreateWithoutUserInput: {
    id: { __type: 'String' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountUncheckedCreateWithoutUserInput: {
    id: { __type: 'String' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountCreateOrConnectWithoutUserInput: {
    where: { __type: 'AccountWhereUniqueInput!' },
    create: { __type: 'AccountUncheckedCreateWithoutUserInput!' },
  },
  AccountCreateManyUserInputEnvelope: {
    data: { __type: 'AccountCreateManyUserInput!' },
    skipDuplicates: { __type: 'Boolean' },
  },
  SessionCreateWithoutUserInput: {
    id: { __type: 'String' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionUncheckedCreateWithoutUserInput: {
    id: { __type: 'String' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionCreateOrConnectWithoutUserInput: {
    where: { __type: 'SessionWhereUniqueInput!' },
    create: { __type: 'SessionUncheckedCreateWithoutUserInput!' },
  },
  SessionCreateManyUserInputEnvelope: {
    data: { __type: 'SessionCreateManyUserInput!' },
    skipDuplicates: { __type: 'Boolean' },
  },
  AccountUpsertWithWhereUniqueWithoutUserInput: {
    where: { __type: 'AccountWhereUniqueInput!' },
    update: { __type: 'AccountUncheckedUpdateWithoutUserInput!' },
    create: { __type: 'AccountUncheckedCreateWithoutUserInput!' },
  },
  AccountUpdateWithWhereUniqueWithoutUserInput: {
    where: { __type: 'AccountWhereUniqueInput!' },
    data: { __type: 'AccountUncheckedUpdateWithoutUserInput!' },
  },
  AccountUpdateManyWithWhereWithoutUserInput: {
    where: { __type: 'AccountScalarWhereInput!' },
    data: { __type: 'AccountUncheckedUpdateManyWithoutAccountsInput!' },
  },
  AccountScalarWhereInput: {
    AND: { __type: '[AccountScalarWhereInput]' },
    OR: { __type: '[AccountScalarWhereInput]' },
    NOT: { __type: '[AccountScalarWhereInput]' },
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
  },
  SessionUpsertWithWhereUniqueWithoutUserInput: {
    where: { __type: 'SessionWhereUniqueInput!' },
    update: { __type: 'SessionUncheckedUpdateWithoutUserInput!' },
    create: { __type: 'SessionUncheckedCreateWithoutUserInput!' },
  },
  SessionUpdateWithWhereUniqueWithoutUserInput: {
    where: { __type: 'SessionWhereUniqueInput!' },
    data: { __type: 'SessionUncheckedUpdateWithoutUserInput!' },
  },
  SessionUpdateManyWithWhereWithoutUserInput: {
    where: { __type: 'SessionScalarWhereInput!' },
    data: { __type: 'SessionUncheckedUpdateManyWithoutSessionsInput!' },
  },
  SessionScalarWhereInput: {
    AND: { __type: '[SessionScalarWhereInput]' },
    OR: { __type: '[SessionScalarWhereInput]' },
    NOT: { __type: '[SessionScalarWhereInput]' },
    id: { __type: 'StringFilter' },
    userId: { __type: 'StringFilter' },
    expires: { __type: 'DateTimeFilter' },
    sessionToken: { __type: 'StringFilter' },
    accessToken: { __type: 'StringFilter' },
    createdAt: { __type: 'DateTimeFilter' },
    updatedAt: { __type: 'DateTimeFilter' },
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
  TeamUncheckedCreateWithoutCoachesInput: {
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
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
    players: { __type: 'PlayerUncheckedCreateNestedManyWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutCoachesInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutCoachesInput!' },
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
  ImageUncheckedCreateWithoutCoachInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerUncheckedCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedCreateNestedOneWithoutLogoInput' },
  },
  ImageCreateOrConnectWithoutCoachInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutCoachInput!' },
  },
  TeamUpsertWithoutCoachesInput: {
    update: { __type: 'TeamUncheckedUpdateWithoutCoachesInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutCoachesInput!' },
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
  TeamUncheckedUpdateWithoutCoachesInput: {
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
    colorSchemeId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    logoId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    players: { __type: 'PlayerUncheckedUpdateManyWithoutTeamInput' },
  },
  ImageUpsertWithoutCoachInput: {
    update: { __type: 'ImageUncheckedUpdateWithoutCoachInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutCoachInput!' },
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
  ImageUncheckedUpdateWithoutCoachInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUncheckedUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedUpdateOneWithoutLogoInput' },
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
  TeamUncheckedCreateWithoutPlayersInput: {
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
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
    coaches: { __type: 'CoachUncheckedCreateNestedManyWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutPlayersInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutPlayersInput!' },
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
  ImageUncheckedCreateWithoutPlayerInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    coach: { __type: 'CoachUncheckedCreateNestedOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedCreateNestedOneWithoutLogoInput' },
  },
  ImageCreateOrConnectWithoutPlayerInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutPlayerInput!' },
  },
  TeamUpsertWithoutPlayersInput: {
    update: { __type: 'TeamUncheckedUpdateWithoutPlayersInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutPlayersInput!' },
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
  TeamUncheckedUpdateWithoutPlayersInput: {
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
    colorSchemeId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    logoId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUncheckedUpdateManyWithoutTeamInput' },
  },
  ImageUpsertWithoutPlayerInput: {
    update: { __type: 'ImageUncheckedUpdateWithoutPlayerInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutPlayerInput!' },
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
  ImageUncheckedUpdateWithoutPlayerInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    coach: { __type: 'CoachUncheckedUpdateOneWithoutImageInput' },
    team: { __type: 'TeamUncheckedUpdateOneWithoutLogoInput' },
  },
  TeamCreateWithoutColorSchemeInput: {
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
    logo: { __type: 'ImageCreateNestedOneWithoutTeamInput' },
  },
  TeamUncheckedCreateWithoutColorSchemeInput: {
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
    logoId: { __type: 'String' },
    coaches: { __type: 'CoachUncheckedCreateNestedManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedCreateNestedManyWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutColorSchemeInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput!' },
  },
  TeamUpsertWithoutColorSchemeInput: {
    update: { __type: 'TeamUncheckedUpdateWithoutColorSchemeInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutColorSchemeInput!' },
  },
  TeamUpdateWithoutColorSchemeInput: {
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
    logo: { __type: 'ImageUpdateOneWithoutTeamInput' },
  },
  TeamUncheckedUpdateWithoutColorSchemeInput: {
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
    logoId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUncheckedUpdateManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedUpdateManyWithoutTeamInput' },
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
  CoachUncheckedCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  CoachCreateOrConnectWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    create: { __type: 'CoachUncheckedCreateWithoutTeamInput!' },
  },
  CoachCreateManyTeamInputEnvelope: {
    data: { __type: 'CoachCreateManyTeamInput!' },
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
  PlayerUncheckedCreateWithoutTeamInput: {
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
  PlayerCreateOrConnectWithoutTeamInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    create: { __type: 'PlayerUncheckedCreateWithoutTeamInput!' },
  },
  PlayerCreateManyTeamInputEnvelope: {
    data: { __type: 'PlayerCreateManyTeamInput!' },
    skipDuplicates: { __type: 'Boolean' },
  },
  ColorSchemeCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
  },
  ColorSchemeUncheckedCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
  },
  ColorSchemeCreateOrConnectWithoutTeamInput: {
    where: { __type: 'ColorSchemeWhereUniqueInput!' },
    create: { __type: 'ColorSchemeUncheckedCreateWithoutTeamInput!' },
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
  ImageUncheckedCreateWithoutTeamInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String!' },
    type: { __type: 'ImageType!' },
    player: { __type: 'PlayerUncheckedCreateNestedOneWithoutImageInput' },
    coach: { __type: 'CoachUncheckedCreateNestedOneWithoutImageInput' },
  },
  ImageCreateOrConnectWithoutTeamInput: {
    where: { __type: 'ImageWhereUniqueInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutTeamInput!' },
  },
  CoachUpsertWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    update: { __type: 'CoachUncheckedUpdateWithoutTeamInput!' },
    create: { __type: 'CoachUncheckedCreateWithoutTeamInput!' },
  },
  CoachUpdateWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    data: { __type: 'CoachUncheckedUpdateWithoutTeamInput!' },
  },
  CoachUpdateManyWithWhereWithoutTeamInput: {
    where: { __type: 'CoachScalarWhereInput!' },
    data: { __type: 'CoachUncheckedUpdateManyWithoutCoachesInput!' },
  },
  CoachScalarWhereInput: {
    AND: { __type: '[CoachScalarWhereInput]' },
    OR: { __type: '[CoachScalarWhereInput]' },
    NOT: { __type: '[CoachScalarWhereInput]' },
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
    update: { __type: 'PlayerUncheckedUpdateWithoutTeamInput!' },
    create: { __type: 'PlayerUncheckedCreateWithoutTeamInput!' },
  },
  PlayerUpdateWithWhereUniqueWithoutTeamInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    data: { __type: 'PlayerUncheckedUpdateWithoutTeamInput!' },
  },
  PlayerUpdateManyWithWhereWithoutTeamInput: {
    where: { __type: 'PlayerScalarWhereInput!' },
    data: { __type: 'PlayerUncheckedUpdateManyWithoutPlayersInput!' },
  },
  PlayerScalarWhereInput: {
    AND: { __type: '[PlayerScalarWhereInput]' },
    OR: { __type: '[PlayerScalarWhereInput]' },
    NOT: { __type: '[PlayerScalarWhereInput]' },
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
    update: { __type: 'ColorSchemeUncheckedUpdateWithoutTeamInput!' },
    create: { __type: 'ColorSchemeUncheckedCreateWithoutTeamInput!' },
  },
  ColorSchemeUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
  },
  ColorSchemeUncheckedUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    primary: { __type: 'StringFieldUpdateOperationsInput' },
    secondary: { __type: 'StringFieldUpdateOperationsInput' },
  },
  ImageUpsertWithoutTeamInput: {
    update: { __type: 'ImageUncheckedUpdateWithoutTeamInput!' },
    create: { __type: 'ImageUncheckedCreateWithoutTeamInput!' },
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
  ImageUncheckedUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    url: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'EnumImageTypeFieldUpdateOperationsInput' },
    player: { __type: 'PlayerUncheckedUpdateOneWithoutImageInput' },
    coach: { __type: 'CoachUncheckedUpdateOneWithoutImageInput' },
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
  PlayerUncheckedCreateWithoutImageInput: {
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
    teamId: { __type: 'String' },
  },
  PlayerCreateOrConnectWithoutImageInput: {
    where: { __type: 'PlayerWhereUniqueInput!' },
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput!' },
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
  CoachUncheckedCreateWithoutImageInput: {
    id: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
  },
  CoachCreateOrConnectWithoutImageInput: {
    where: { __type: 'CoachWhereUniqueInput!' },
    create: { __type: 'CoachUncheckedCreateWithoutImageInput!' },
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
  TeamUncheckedCreateWithoutLogoInput: {
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
    colorSchemeId: { __type: 'String' },
    coaches: { __type: 'CoachUncheckedCreateNestedManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedCreateNestedManyWithoutTeamInput' },
  },
  TeamCreateOrConnectWithoutLogoInput: {
    where: { __type: 'TeamWhereUniqueInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput!' },
  },
  PlayerUpsertWithoutImageInput: {
    update: { __type: 'PlayerUncheckedUpdateWithoutImageInput!' },
    create: { __type: 'PlayerUncheckedCreateWithoutImageInput!' },
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
  PlayerUncheckedUpdateWithoutImageInput: {
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
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  CoachUpsertWithoutImageInput: {
    update: { __type: 'CoachUncheckedUpdateWithoutImageInput!' },
    create: { __type: 'CoachUncheckedCreateWithoutImageInput!' },
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
  CoachUncheckedUpdateWithoutImageInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    teamId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  TeamUpsertWithoutLogoInput: {
    update: { __type: 'TeamUncheckedUpdateWithoutLogoInput!' },
    create: { __type: 'TeamUncheckedCreateWithoutLogoInput!' },
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
  TeamUncheckedUpdateWithoutLogoInput: {
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
    colorSchemeId: { __type: 'NullableStringFieldUpdateOperationsInput' },
    coaches: { __type: 'CoachUncheckedUpdateManyWithoutTeamInput' },
    players: { __type: 'PlayerUncheckedUpdateManyWithoutTeamInput' },
  },
  AccountCreateManyUserInput: {
    id: { __type: 'String' },
    providerType: { __type: 'String!' },
    providerId: { __type: 'String!' },
    providerAccountId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionCreateManyUserInput: {
    id: { __type: 'String' },
    expires: { __type: 'DateTime!' },
    sessionToken: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountUpdateWithoutUserInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  AccountUncheckedUpdateWithoutUserInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  AccountUncheckedUpdateManyWithoutAccountsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    providerType: { __type: 'StringFieldUpdateOperationsInput' },
    providerId: { __type: 'StringFieldUpdateOperationsInput' },
    providerAccountId: { __type: 'StringFieldUpdateOperationsInput' },
    refreshToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessToken: { __type: 'NullableStringFieldUpdateOperationsInput' },
    accessTokenExpires: { __type: 'NullableDateTimeFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionUpdateWithoutUserInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionUncheckedUpdateWithoutUserInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
  },
  SessionUncheckedUpdateManyWithoutSessionsInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    expires: { __type: 'DateTimeFieldUpdateOperationsInput' },
    sessionToken: { __type: 'StringFieldUpdateOperationsInput' },
    accessToken: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
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
  CoachUncheckedUpdateWithoutTeamInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  CoachUncheckedUpdateManyWithoutCoachesInput: {
    id: { __type: 'StringFieldUpdateOperationsInput' },
    createdAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    updatedAt: { __type: 'DateTimeFieldUpdateOperationsInput' },
    handle: { __type: 'StringFieldUpdateOperationsInput' },
    name: { __type: 'StringFieldUpdateOperationsInput' },
    type: { __type: 'NullableStringFieldUpdateOperationsInput' },
    isAssistant: { __type: 'NullableStringFieldUpdateOperationsInput' },
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
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
  PlayerUncheckedUpdateWithoutTeamInput: {
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
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  PlayerUncheckedUpdateManyWithoutPlayersInput: {
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
    imageId: { __type: 'NullableStringFieldUpdateOperationsInput' },
  },
  AggregateAccount: {
    __typename: { __type: 'String!' },
    _count: { __type: 'AccountCountAggregateOutputType' },
    count: { __type: 'AccountCountAggregateOutputType' },
    _min: { __type: 'AccountMinAggregateOutputType' },
    min: { __type: 'AccountMinAggregateOutputType' },
    _max: { __type: 'AccountMaxAggregateOutputType' },
    max: { __type: 'AccountMaxAggregateOutputType' },
  },
  AggregateSession: {
    __typename: { __type: 'String!' },
    _count: { __type: 'SessionCountAggregateOutputType' },
    count: { __type: 'SessionCountAggregateOutputType' },
    _min: { __type: 'SessionMinAggregateOutputType' },
    min: { __type: 'SessionMinAggregateOutputType' },
    _max: { __type: 'SessionMaxAggregateOutputType' },
    max: { __type: 'SessionMaxAggregateOutputType' },
  },
  AggregateUser: {
    __typename: { __type: 'String!' },
    _count: { __type: 'UserCountAggregateOutputType' },
    count: { __type: 'UserCountAggregateOutputType' },
    _min: { __type: 'UserMinAggregateOutputType' },
    min: { __type: 'UserMinAggregateOutputType' },
    _max: { __type: 'UserMaxAggregateOutputType' },
    max: { __type: 'UserMaxAggregateOutputType' },
  },
  AggregateVerificationRequest: {
    __typename: { __type: 'String!' },
    _count: { __type: 'VerificationRequestCountAggregateOutputType' },
    count: { __type: 'VerificationRequestCountAggregateOutputType' },
    _min: { __type: 'VerificationRequestMinAggregateOutputType' },
    min: { __type: 'VerificationRequestMinAggregateOutputType' },
    _max: { __type: 'VerificationRequestMaxAggregateOutputType' },
    max: { __type: 'VerificationRequestMaxAggregateOutputType' },
  },
  AggregateCoach: {
    __typename: { __type: 'String!' },
    _count: { __type: 'CoachCountAggregateOutputType' },
    count: { __type: 'CoachCountAggregateOutputType' },
    _min: { __type: 'CoachMinAggregateOutputType' },
    min: { __type: 'CoachMinAggregateOutputType' },
    _max: { __type: 'CoachMaxAggregateOutputType' },
    max: { __type: 'CoachMaxAggregateOutputType' },
  },
  AggregatePlayer: {
    __typename: { __type: 'String!' },
    _count: { __type: 'PlayerCountAggregateOutputType' },
    count: { __type: 'PlayerCountAggregateOutputType' },
    _min: { __type: 'PlayerMinAggregateOutputType' },
    min: { __type: 'PlayerMinAggregateOutputType' },
    _max: { __type: 'PlayerMaxAggregateOutputType' },
    max: { __type: 'PlayerMaxAggregateOutputType' },
  },
  AggregateColorScheme: {
    __typename: { __type: 'String!' },
    _count: { __type: 'ColorSchemeCountAggregateOutputType' },
    count: { __type: 'ColorSchemeCountAggregateOutputType' },
    _min: { __type: 'ColorSchemeMinAggregateOutputType' },
    min: { __type: 'ColorSchemeMinAggregateOutputType' },
    _max: { __type: 'ColorSchemeMaxAggregateOutputType' },
    max: { __type: 'ColorSchemeMaxAggregateOutputType' },
  },
  AggregateTeam: {
    __typename: { __type: 'String!' },
    _count: { __type: 'TeamCountAggregateOutputType' },
    count: { __type: 'TeamCountAggregateOutputType' },
    _avg: { __type: 'TeamAvgAggregateOutputType' },
    avg: { __type: 'TeamAvgAggregateOutputType' },
    _sum: { __type: 'TeamSumAggregateOutputType' },
    sum: { __type: 'TeamSumAggregateOutputType' },
    _min: { __type: 'TeamMinAggregateOutputType' },
    min: { __type: 'TeamMinAggregateOutputType' },
    _max: { __type: 'TeamMaxAggregateOutputType' },
    max: { __type: 'TeamMaxAggregateOutputType' },
  },
  AggregateImage: {
    __typename: { __type: 'String!' },
    _count: { __type: 'ImageCountAggregateOutputType' },
    count: { __type: 'ImageCountAggregateOutputType' },
    _min: { __type: 'ImageMinAggregateOutputType' },
    min: { __type: 'ImageMinAggregateOutputType' },
    _max: { __type: 'ImageMaxAggregateOutputType' },
    max: { __type: 'ImageMaxAggregateOutputType' },
  },
  AccountCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    userId: { __type: 'Int!' },
    providerType: { __type: 'Int!' },
    providerId: { __type: 'Int!' },
    providerAccountId: { __type: 'Int!' },
    refreshToken: { __type: 'Int!' },
    accessToken: { __type: 'Int!' },
    accessTokenExpires: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  AccountMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    userId: { __type: 'String' },
    providerType: { __type: 'String' },
    providerId: { __type: 'String' },
    providerAccountId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  AccountMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    userId: { __type: 'String' },
    providerType: { __type: 'String' },
    providerId: { __type: 'String' },
    providerAccountId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    accessTokenExpires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    userId: { __type: 'Int!' },
    expires: { __type: 'Int!' },
    sessionToken: { __type: 'Int!' },
    accessToken: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  SessionMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    userId: { __type: 'String' },
    expires: { __type: 'DateTime' },
    sessionToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  SessionMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    userId: { __type: 'String' },
    expires: { __type: 'DateTime' },
    sessionToken: { __type: 'String' },
    accessToken: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  UserCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    name: { __type: 'Int!' },
    email: { __type: 'Int!' },
    emailVerified: { __type: 'Int!' },
    image: { __type: 'Int!' },
    apple: { __type: 'Int!' },
    facebook: { __type: 'Int!' },
    github: { __type: 'Int!' },
    google: { __type: 'Int!' },
    twitter: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  UserMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  UserMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    name: { __type: 'String' },
    email: { __type: 'String' },
    emailVerified: { __type: 'DateTime' },
    image: { __type: 'String' },
    apple: { __type: 'String' },
    facebook: { __type: 'String' },
    github: { __type: 'String' },
    google: { __type: 'String' },
    twitter: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  VerificationRequestCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    identifier: { __type: 'Int!' },
    token: { __type: 'Int!' },
    expires: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  VerificationRequestMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    identifier: { __type: 'String' },
    token: { __type: 'String' },
    expires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  VerificationRequestMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    identifier: { __type: 'String' },
    token: { __type: 'String' },
    expires: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
  },
  CoachCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    handle: { __type: 'Int!' },
    name: { __type: 'Int!' },
    type: { __type: 'Int!' },
    isAssistant: { __type: 'Int!' },
    teamId: { __type: 'Int!' },
    imageId: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  CoachMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  CoachMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  PlayerCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    handle: { __type: 'Int!' },
    name: { __type: 'Int!' },
    slug: { __type: 'Int!' },
    height: { __type: 'Int!' },
    weight: { __type: 'Int!' },
    number: { __type: 'Int!' },
    position: { __type: 'Int!' },
    teamId: { __type: 'Int!' },
    imageId: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  PlayerMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    height: { __type: 'String' },
    weight: { __type: 'String' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  PlayerMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    height: { __type: 'String' },
    weight: { __type: 'String' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    teamId: { __type: 'String' },
    imageId: { __type: 'String' },
  },
  ColorSchemeCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    primary: { __type: 'Int!' },
    secondary: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  ColorSchemeMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String' },
    secondary: { __type: 'String' },
  },
  ColorSchemeMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    primary: { __type: 'String' },
    secondary: { __type: 'String' },
  },
  TeamCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    handle: { __type: 'Int!' },
    name: { __type: 'Int!' },
    slug: { __type: 'Int!' },
    city: { __type: 'Int!' },
    abbreviation: { __type: 'Int!' },
    wins: { __type: 'Int!' },
    losses: { __type: 'Int!' },
    winPercentage: { __type: 'Int!' },
    conference: { __type: 'Int!' },
    division: { __type: 'Int!' },
    established: { __type: 'Int!' },
    colorSchemeId: { __type: 'Int!' },
    logoId: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  TeamAvgAggregateOutputType: {
    __typename: { __type: 'String!' },
    wins: { __type: 'Float' },
    losses: { __type: 'Float' },
    winPercentage: { __type: 'Float' },
  },
  TeamSumAggregateOutputType: {
    __typename: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
  },
  TeamMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    city: { __type: 'String' },
    abbreviation: { __type: 'String' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String' },
    division: { __type: 'String' },
    established: { __type: 'String' },
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
  },
  TeamMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    handle: { __type: 'String' },
    name: { __type: 'String' },
    slug: { __type: 'String' },
    city: { __type: 'String' },
    abbreviation: { __type: 'String' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String' },
    division: { __type: 'String' },
    established: { __type: 'String' },
    colorSchemeId: { __type: 'String' },
    logoId: { __type: 'String' },
  },
  ImageCountAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
    url: { __type: 'Int!' },
    type: { __type: 'Int!' },
    _all: { __type: 'Int!' },
  },
  ImageMinAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String' },
    type: { __type: 'ImageType' },
  },
  ImageMaxAggregateOutputType: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String' },
    type: { __type: 'ImageType' },
  },
} as const

export interface Query {
  __typename: 'Query' | undefined
  aggregateAccount: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>
    cursor?: Maybe<AccountWhereUniqueInput>
    distinct?: Maybe<AccountScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateAccount>
  findManyAccountCount: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>
    cursor?: Maybe<AccountWhereUniqueInput>
    distinct?: Maybe<AccountScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstAccount: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>
    cursor?: Maybe<AccountWhereUniqueInput>
    distinct?: Maybe<AccountScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Account>
  findManyAccount: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>
    cursor?: Maybe<AccountWhereUniqueInput>
    distinct?: Maybe<AccountScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Account>
  findUniqueAccount: (args: { where: AccountWhereUniqueInput }) => Maybe<Account>
  aggregateCoach: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>
    cursor?: Maybe<CoachWhereUniqueInput>
    distinct?: Maybe<CoachScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateCoach>
  findManyCoachCount: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>
    cursor?: Maybe<CoachWhereUniqueInput>
    distinct?: Maybe<CoachScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstCoach: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>
    cursor?: Maybe<CoachWhereUniqueInput>
    distinct?: Maybe<CoachScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Coach>
  findManyCoach: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>
    cursor?: Maybe<CoachWhereUniqueInput>
    distinct?: Maybe<CoachScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Coach>
  findUniqueCoach: (args: { where: CoachWhereUniqueInput }) => Maybe<Coach>
  aggregateColorScheme: (args?: {
    where?: Maybe<ColorSchemeWhereInput>
    orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>
    cursor?: Maybe<ColorSchemeWhereUniqueInput>
    distinct?: Maybe<ColorSchemeScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateColorScheme>
  findManyColorSchemeCount: (args?: {
    where?: Maybe<ColorSchemeWhereInput>
    orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>
    cursor?: Maybe<ColorSchemeWhereUniqueInput>
    distinct?: Maybe<ColorSchemeScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstColorScheme: (args?: {
    where?: Maybe<ColorSchemeWhereInput>
    orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>
    cursor?: Maybe<ColorSchemeWhereUniqueInput>
    distinct?: Maybe<ColorSchemeScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<ColorScheme>
  findManyColorScheme: (args?: {
    where?: Maybe<ColorSchemeWhereInput>
    orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>
    cursor?: Maybe<ColorSchemeWhereUniqueInput>
    distinct?: Maybe<ColorSchemeScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<ColorScheme>
  findUniqueColorScheme: (args: { where: ColorSchemeWhereUniqueInput }) => Maybe<ColorScheme>
  aggregateImage: (args?: {
    where?: Maybe<ImageWhereInput>
    orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>
    cursor?: Maybe<ImageWhereUniqueInput>
    distinct?: Maybe<ImageScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateImage>
  findManyImageCount: (args?: {
    where?: Maybe<ImageWhereInput>
    orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>
    cursor?: Maybe<ImageWhereUniqueInput>
    distinct?: Maybe<ImageScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstImage: (args?: {
    where?: Maybe<ImageWhereInput>
    orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>
    cursor?: Maybe<ImageWhereUniqueInput>
    distinct?: Maybe<ImageScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Image>
  findManyImage: (args?: {
    where?: Maybe<ImageWhereInput>
    orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>
    cursor?: Maybe<ImageWhereUniqueInput>
    distinct?: Maybe<ImageScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Image>
  findUniqueImage: (args: { where: ImageWhereUniqueInput }) => Maybe<Image>
  aggregatePlayer: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>
    cursor?: Maybe<PlayerWhereUniqueInput>
    distinct?: Maybe<PlayerScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregatePlayer>
  findManyPlayerCount: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>
    cursor?: Maybe<PlayerWhereUniqueInput>
    distinct?: Maybe<PlayerScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstPlayer: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>
    cursor?: Maybe<PlayerWhereUniqueInput>
    distinct?: Maybe<PlayerScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Player>
  findManyPlayer: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>
    cursor?: Maybe<PlayerWhereUniqueInput>
    distinct?: Maybe<PlayerScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Player>
  findUniquePlayer: (args: { where: PlayerWhereUniqueInput }) => Maybe<Player>
  aggregateSession: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>
    cursor?: Maybe<SessionWhereUniqueInput>
    distinct?: Maybe<SessionScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateSession>
  findManySessionCount: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>
    cursor?: Maybe<SessionWhereUniqueInput>
    distinct?: Maybe<SessionScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstSession: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>
    cursor?: Maybe<SessionWhereUniqueInput>
    distinct?: Maybe<SessionScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Session>
  findManySession: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>
    cursor?: Maybe<SessionWhereUniqueInput>
    distinct?: Maybe<SessionScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Session>
  findUniqueSession: (args: { where: SessionWhereUniqueInput }) => Maybe<Session>
  aggregateTeam: (args?: {
    where?: Maybe<TeamWhereInput>
    orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>
    cursor?: Maybe<TeamWhereUniqueInput>
    distinct?: Maybe<TeamScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateTeam>
  findManyTeamCount: (args?: {
    where?: Maybe<TeamWhereInput>
    orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>
    cursor?: Maybe<TeamWhereUniqueInput>
    distinct?: Maybe<TeamScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstTeam: (args?: {
    where?: Maybe<TeamWhereInput>
    orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>
    cursor?: Maybe<TeamWhereUniqueInput>
    distinct?: Maybe<TeamScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<Team>
  findManyTeam: (args?: {
    where?: Maybe<TeamWhereInput>
    orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>
    cursor?: Maybe<TeamWhereUniqueInput>
    distinct?: Maybe<TeamScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<Team>
  findUniqueTeam: (args: { where: TeamWhereUniqueInput }) => Maybe<Team>
  aggregateUser: (args?: {
    where?: Maybe<UserWhereInput>
    orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>
    cursor?: Maybe<UserWhereUniqueInput>
    distinct?: Maybe<UserScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateUser>
  findManyUserCount: (args?: {
    where?: Maybe<UserWhereInput>
    orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>
    cursor?: Maybe<UserWhereUniqueInput>
    distinct?: Maybe<UserScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstUser: (args?: {
    where?: Maybe<UserWhereInput>
    orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>
    cursor?: Maybe<UserWhereUniqueInput>
    distinct?: Maybe<UserScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<User>
  findManyUser: (args?: {
    where?: Maybe<UserWhereInput>
    orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>
    cursor?: Maybe<UserWhereUniqueInput>
    distinct?: Maybe<UserScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<User>
  findUniqueUser: (args: { where: UserWhereUniqueInput }) => Maybe<User>
  aggregateVerificationRequest: (args?: {
    where?: Maybe<VerificationRequestWhereInput>
    orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>
    cursor?: Maybe<VerificationRequestWhereUniqueInput>
    distinct?: Maybe<VerificationRequestScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<AggregateVerificationRequest>
  findManyVerificationRequestCount: (args?: {
    where?: Maybe<VerificationRequestWhereInput>
    orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>
    cursor?: Maybe<VerificationRequestWhereUniqueInput>
    distinct?: Maybe<VerificationRequestScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => ScalarsEnums['Int']
  findFirstVerificationRequest: (args?: {
    where?: Maybe<VerificationRequestWhereInput>
    orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>
    cursor?: Maybe<VerificationRequestWhereUniqueInput>
    distinct?: Maybe<VerificationRequestScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Maybe<VerificationRequest>
  findManyVerificationRequest: (args?: {
    where?: Maybe<VerificationRequestWhereInput>
    orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>
    cursor?: Maybe<VerificationRequestWhereUniqueInput>
    distinct?: Maybe<VerificationRequestScalarFieldEnum>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
  }) => Array<VerificationRequest>
  findUniqueVerificationRequest: (args: {
    where: VerificationRequestWhereUniqueInput
  }) => Maybe<VerificationRequest>
}

export interface Mutation {
  __typename: 'Mutation' | undefined
  createOneAccount: (args: { data: AccountCreateInput }) => Account
  deleteManyAccount: (args?: { where?: Maybe<AccountWhereInput> }) => BatchPayload
  deleteOneAccount: (args: { where: AccountWhereUniqueInput }) => Maybe<Account>
  updateManyAccount: (args: {
    where?: Maybe<AccountWhereInput>
    data: AccountUpdateManyMutationInput
  }) => BatchPayload
  updateOneAccount: (args: { where: AccountWhereUniqueInput; data: AccountUpdateInput }) => Account
  upsertOneAccount: (args: {
    where: AccountWhereUniqueInput
    create: AccountCreateInput
    update: AccountUpdateInput
  }) => Account
  createOneCoach: (args: { data: CoachCreateInput }) => Coach
  deleteManyCoach: (args?: { where?: Maybe<CoachWhereInput> }) => BatchPayload
  deleteOneCoach: (args: { where: CoachWhereUniqueInput }) => Maybe<Coach>
  updateManyCoach: (args: {
    where?: Maybe<CoachWhereInput>
    data: CoachUpdateManyMutationInput
  }) => BatchPayload
  updateOneCoach: (args: { where: CoachWhereUniqueInput; data: CoachUpdateInput }) => Coach
  upsertOneCoach: (args: {
    where: CoachWhereUniqueInput
    create: CoachCreateInput
    update: CoachUpdateInput
  }) => Coach
  createOneColorScheme: (args: { data: ColorSchemeCreateInput }) => ColorScheme
  deleteManyColorScheme: (args?: { where?: Maybe<ColorSchemeWhereInput> }) => BatchPayload
  deleteOneColorScheme: (args: { where: ColorSchemeWhereUniqueInput }) => Maybe<ColorScheme>
  updateManyColorScheme: (args: {
    where?: Maybe<ColorSchemeWhereInput>
    data: ColorSchemeUpdateManyMutationInput
  }) => BatchPayload
  updateOneColorScheme: (args: {
    where: ColorSchemeWhereUniqueInput
    data: ColorSchemeUpdateInput
  }) => ColorScheme
  upsertOneColorScheme: (args: {
    where: ColorSchemeWhereUniqueInput
    create: ColorSchemeCreateInput
    update: ColorSchemeUpdateInput
  }) => ColorScheme
  createOneImage: (args: { data: ImageCreateInput }) => Image
  deleteManyImage: (args?: { where?: Maybe<ImageWhereInput> }) => BatchPayload
  deleteOneImage: (args: { where: ImageWhereUniqueInput }) => Maybe<Image>
  updateManyImage: (args: {
    where?: Maybe<ImageWhereInput>
    data: ImageUpdateManyMutationInput
  }) => BatchPayload
  updateOneImage: (args: { where: ImageWhereUniqueInput; data: ImageUpdateInput }) => Image
  upsertOneImage: (args: {
    where: ImageWhereUniqueInput
    create: ImageCreateInput
    update: ImageUpdateInput
  }) => Image
  createOnePlayer: (args: { data: PlayerCreateInput }) => Player
  deleteManyPlayer: (args?: { where?: Maybe<PlayerWhereInput> }) => BatchPayload
  deleteOnePlayer: (args: { where: PlayerWhereUniqueInput }) => Maybe<Player>
  updateManyPlayer: (args: {
    where?: Maybe<PlayerWhereInput>
    data: PlayerUpdateManyMutationInput
  }) => BatchPayload
  updateOnePlayer: (args: { where: PlayerWhereUniqueInput; data: PlayerUpdateInput }) => Player
  upsertOnePlayer: (args: {
    where: PlayerWhereUniqueInput
    create: PlayerCreateInput
    update: PlayerUpdateInput
  }) => Player
  createOneSession: (args: { data: SessionCreateInput }) => Session
  deleteManySession: (args?: { where?: Maybe<SessionWhereInput> }) => BatchPayload
  deleteOneSession: (args: { where: SessionWhereUniqueInput }) => Maybe<Session>
  updateManySession: (args: {
    where?: Maybe<SessionWhereInput>
    data: SessionUpdateManyMutationInput
  }) => BatchPayload
  updateOneSession: (args: { where: SessionWhereUniqueInput; data: SessionUpdateInput }) => Session
  upsertOneSession: (args: {
    where: SessionWhereUniqueInput
    create: SessionCreateInput
    update: SessionUpdateInput
  }) => Session
  createOneTeam: (args: { data: TeamCreateInput }) => Team
  deleteManyTeam: (args?: { where?: Maybe<TeamWhereInput> }) => BatchPayload
  deleteOneTeam: (args: { where: TeamWhereUniqueInput }) => Maybe<Team>
  updateManyTeam: (args: {
    where?: Maybe<TeamWhereInput>
    data: TeamUpdateManyMutationInput
  }) => BatchPayload
  updateOneTeam: (args: { where: TeamWhereUniqueInput; data: TeamUpdateInput }) => Team
  upsertOneTeam: (args: {
    where: TeamWhereUniqueInput
    create: TeamCreateInput
    update: TeamUpdateInput
  }) => Team
  createOneUser: (args: { data: UserCreateInput }) => User
  deleteManyUser: (args?: { where?: Maybe<UserWhereInput> }) => BatchPayload
  deleteOneUser: (args: { where: UserWhereUniqueInput }) => Maybe<User>
  updateManyUser: (args: {
    where?: Maybe<UserWhereInput>
    data: UserUpdateManyMutationInput
  }) => BatchPayload
  updateOneUser: (args: { where: UserWhereUniqueInput; data: UserUpdateInput }) => User
  upsertOneUser: (args: {
    where: UserWhereUniqueInput
    create: UserCreateInput
    update: UserUpdateInput
  }) => User
  createOneVerificationRequest: (args: {
    data: VerificationRequestCreateInput
  }) => VerificationRequest
  deleteManyVerificationRequest: (args?: {
    where?: Maybe<VerificationRequestWhereInput>
  }) => BatchPayload
  deleteOneVerificationRequest: (args: {
    where: VerificationRequestWhereUniqueInput
  }) => Maybe<VerificationRequest>
  updateManyVerificationRequest: (args: {
    where?: Maybe<VerificationRequestWhereInput>
    data: VerificationRequestUpdateManyMutationInput
  }) => BatchPayload
  updateOneVerificationRequest: (args: {
    where: VerificationRequestWhereUniqueInput
    data: VerificationRequestUpdateInput
  }) => VerificationRequest
  upsertOneVerificationRequest: (args: {
    where: VerificationRequestWhereUniqueInput
    create: VerificationRequestCreateInput
    update: VerificationRequestUpdateInput
  }) => VerificationRequest
}

export interface Subscription {
  __typename: 'Subscription' | undefined
}

export interface Account {
  __typename: 'Account' | undefined
  id: ScalarsEnums['String']
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

/**
 * Coach model
 */
export interface Coach {
  __typename: 'Coach' | undefined
  id: ScalarsEnums['String']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  type?: Maybe<ScalarsEnums['String']>
  isAssistant?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
  imageId?: Maybe<ScalarsEnums['String']>
  image?: Maybe<Image>
}

/**
 * Color scheme model
 */
export interface ColorScheme {
  __typename: 'ColorScheme' | undefined
  id: ScalarsEnums['String']
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
  __typename: 'Image' | undefined
  id: ScalarsEnums['String']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  url: ScalarsEnums['String']
  type: ScalarsEnums['ImageType']
  player?: Maybe<Player>
  coach?: Maybe<Coach>
  team?: Maybe<Team>
}

/**
 * Player model
 */
export interface Player {
  __typename: 'Player' | undefined
  id: ScalarsEnums['String']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  slug: ScalarsEnums['String']
  height: ScalarsEnums['String']
  weight: ScalarsEnums['String']
  number?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
  imageId?: Maybe<ScalarsEnums['String']>
  image?: Maybe<Image>
}

export interface Session {
  __typename: 'Session' | undefined
  id: ScalarsEnums['String']
  userId: ScalarsEnums['String']
  expires: ScalarsEnums['DateTime']
  sessionToken: ScalarsEnums['String']
  accessToken: ScalarsEnums['String']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  user: User
}

/**
 * Team model
 */
export interface Team {
  __typename: 'Team' | undefined
  id: ScalarsEnums['String']
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
  coaches: (args?: {
    where?: Maybe<CoachWhereInput>
    orderBy?: Maybe<CoachOrderByInput>
    cursor?: Maybe<CoachWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    distinct?: Maybe<CoachScalarFieldEnum>
  }) => Array<Coach>
  players: (args?: {
    where?: Maybe<PlayerWhereInput>
    orderBy?: Maybe<PlayerOrderByInput>
    cursor?: Maybe<PlayerWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    distinct?: Maybe<PlayerScalarFieldEnum>
  }) => Array<Player>
  colorSchemeId?: Maybe<ScalarsEnums['String']>
  colorScheme?: Maybe<ColorScheme>
  logoId?: Maybe<ScalarsEnums['String']>
  logo?: Maybe<Image>
}

export interface User {
  __typename: 'User' | undefined
  id: ScalarsEnums['String']
  name?: Maybe<ScalarsEnums['String']>
  email?: Maybe<ScalarsEnums['String']>
  emailVerified?: Maybe<ScalarsEnums['DateTime']>
  image?: Maybe<ScalarsEnums['String']>
  apple?: Maybe<ScalarsEnums['String']>
  facebook?: Maybe<ScalarsEnums['String']>
  github?: Maybe<ScalarsEnums['String']>
  google?: Maybe<ScalarsEnums['String']>
  twitter?: Maybe<ScalarsEnums['String']>
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  accounts: (args?: {
    where?: Maybe<AccountWhereInput>
    orderBy?: Maybe<AccountOrderByInput>
    cursor?: Maybe<AccountWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    distinct?: Maybe<AccountScalarFieldEnum>
  }) => Array<Account>
  sessions: (args?: {
    where?: Maybe<SessionWhereInput>
    orderBy?: Maybe<SessionOrderByInput>
    cursor?: Maybe<SessionWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    distinct?: Maybe<SessionScalarFieldEnum>
  }) => Array<Session>
}

export interface VerificationRequest {
  __typename: 'VerificationRequest' | undefined
  id: ScalarsEnums['String']
  identifier: ScalarsEnums['String']
  token: ScalarsEnums['String']
  expires: ScalarsEnums['DateTime']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
}

export interface BatchPayload {
  __typename: 'BatchPayload' | undefined
  count: ScalarsEnums['Int']
}

export interface AggregateAccount {
  __typename: 'AggregateAccount' | undefined
  _count?: Maybe<AccountCountAggregateOutputType>
  count?: Maybe<AccountCountAggregateOutputType>
  _min?: Maybe<AccountMinAggregateOutputType>
  min?: Maybe<AccountMinAggregateOutputType>
  _max?: Maybe<AccountMaxAggregateOutputType>
  max?: Maybe<AccountMaxAggregateOutputType>
}

export interface AggregateSession {
  __typename: 'AggregateSession' | undefined
  _count?: Maybe<SessionCountAggregateOutputType>
  count?: Maybe<SessionCountAggregateOutputType>
  _min?: Maybe<SessionMinAggregateOutputType>
  min?: Maybe<SessionMinAggregateOutputType>
  _max?: Maybe<SessionMaxAggregateOutputType>
  max?: Maybe<SessionMaxAggregateOutputType>
}

export interface AggregateUser {
  __typename: 'AggregateUser' | undefined
  _count?: Maybe<UserCountAggregateOutputType>
  count?: Maybe<UserCountAggregateOutputType>
  _min?: Maybe<UserMinAggregateOutputType>
  min?: Maybe<UserMinAggregateOutputType>
  _max?: Maybe<UserMaxAggregateOutputType>
  max?: Maybe<UserMaxAggregateOutputType>
}

export interface AggregateVerificationRequest {
  __typename: 'AggregateVerificationRequest' | undefined
  _count?: Maybe<VerificationRequestCountAggregateOutputType>
  count?: Maybe<VerificationRequestCountAggregateOutputType>
  _min?: Maybe<VerificationRequestMinAggregateOutputType>
  min?: Maybe<VerificationRequestMinAggregateOutputType>
  _max?: Maybe<VerificationRequestMaxAggregateOutputType>
  max?: Maybe<VerificationRequestMaxAggregateOutputType>
}

export interface AggregateCoach {
  __typename: 'AggregateCoach' | undefined
  _count?: Maybe<CoachCountAggregateOutputType>
  count?: Maybe<CoachCountAggregateOutputType>
  _min?: Maybe<CoachMinAggregateOutputType>
  min?: Maybe<CoachMinAggregateOutputType>
  _max?: Maybe<CoachMaxAggregateOutputType>
  max?: Maybe<CoachMaxAggregateOutputType>
}

export interface AggregatePlayer {
  __typename: 'AggregatePlayer' | undefined
  _count?: Maybe<PlayerCountAggregateOutputType>
  count?: Maybe<PlayerCountAggregateOutputType>
  _min?: Maybe<PlayerMinAggregateOutputType>
  min?: Maybe<PlayerMinAggregateOutputType>
  _max?: Maybe<PlayerMaxAggregateOutputType>
  max?: Maybe<PlayerMaxAggregateOutputType>
}

export interface AggregateColorScheme {
  __typename: 'AggregateColorScheme' | undefined
  _count?: Maybe<ColorSchemeCountAggregateOutputType>
  count?: Maybe<ColorSchemeCountAggregateOutputType>
  _min?: Maybe<ColorSchemeMinAggregateOutputType>
  min?: Maybe<ColorSchemeMinAggregateOutputType>
  _max?: Maybe<ColorSchemeMaxAggregateOutputType>
  max?: Maybe<ColorSchemeMaxAggregateOutputType>
}

export interface AggregateTeam {
  __typename: 'AggregateTeam' | undefined
  _count?: Maybe<TeamCountAggregateOutputType>
  count?: Maybe<TeamCountAggregateOutputType>
  _avg?: Maybe<TeamAvgAggregateOutputType>
  avg?: Maybe<TeamAvgAggregateOutputType>
  _sum?: Maybe<TeamSumAggregateOutputType>
  sum?: Maybe<TeamSumAggregateOutputType>
  _min?: Maybe<TeamMinAggregateOutputType>
  min?: Maybe<TeamMinAggregateOutputType>
  _max?: Maybe<TeamMaxAggregateOutputType>
  max?: Maybe<TeamMaxAggregateOutputType>
}

export interface AggregateImage {
  __typename: 'AggregateImage' | undefined
  _count?: Maybe<ImageCountAggregateOutputType>
  count?: Maybe<ImageCountAggregateOutputType>
  _min?: Maybe<ImageMinAggregateOutputType>
  min?: Maybe<ImageMinAggregateOutputType>
  _max?: Maybe<ImageMaxAggregateOutputType>
  max?: Maybe<ImageMaxAggregateOutputType>
}

export interface AccountCountAggregateOutputType {
  __typename: 'AccountCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  userId: ScalarsEnums['Int']
  providerType: ScalarsEnums['Int']
  providerId: ScalarsEnums['Int']
  providerAccountId: ScalarsEnums['Int']
  refreshToken: ScalarsEnums['Int']
  accessToken: ScalarsEnums['Int']
  accessTokenExpires: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface AccountMinAggregateOutputType {
  __typename: 'AccountMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  userId?: Maybe<ScalarsEnums['String']>
  providerType?: Maybe<ScalarsEnums['String']>
  providerId?: Maybe<ScalarsEnums['String']>
  providerAccountId?: Maybe<ScalarsEnums['String']>
  refreshToken?: Maybe<ScalarsEnums['String']>
  accessToken?: Maybe<ScalarsEnums['String']>
  accessTokenExpires?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface AccountMaxAggregateOutputType {
  __typename: 'AccountMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  userId?: Maybe<ScalarsEnums['String']>
  providerType?: Maybe<ScalarsEnums['String']>
  providerId?: Maybe<ScalarsEnums['String']>
  providerAccountId?: Maybe<ScalarsEnums['String']>
  refreshToken?: Maybe<ScalarsEnums['String']>
  accessToken?: Maybe<ScalarsEnums['String']>
  accessTokenExpires?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface SessionCountAggregateOutputType {
  __typename: 'SessionCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  userId: ScalarsEnums['Int']
  expires: ScalarsEnums['Int']
  sessionToken: ScalarsEnums['Int']
  accessToken: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface SessionMinAggregateOutputType {
  __typename: 'SessionMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  userId?: Maybe<ScalarsEnums['String']>
  expires?: Maybe<ScalarsEnums['DateTime']>
  sessionToken?: Maybe<ScalarsEnums['String']>
  accessToken?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface SessionMaxAggregateOutputType {
  __typename: 'SessionMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  userId?: Maybe<ScalarsEnums['String']>
  expires?: Maybe<ScalarsEnums['DateTime']>
  sessionToken?: Maybe<ScalarsEnums['String']>
  accessToken?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface UserCountAggregateOutputType {
  __typename: 'UserCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  name: ScalarsEnums['Int']
  email: ScalarsEnums['Int']
  emailVerified: ScalarsEnums['Int']
  image: ScalarsEnums['Int']
  apple: ScalarsEnums['Int']
  facebook: ScalarsEnums['Int']
  github: ScalarsEnums['Int']
  google: ScalarsEnums['Int']
  twitter: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface UserMinAggregateOutputType {
  __typename: 'UserMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  email?: Maybe<ScalarsEnums['String']>
  emailVerified?: Maybe<ScalarsEnums['DateTime']>
  image?: Maybe<ScalarsEnums['String']>
  apple?: Maybe<ScalarsEnums['String']>
  facebook?: Maybe<ScalarsEnums['String']>
  github?: Maybe<ScalarsEnums['String']>
  google?: Maybe<ScalarsEnums['String']>
  twitter?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface UserMaxAggregateOutputType {
  __typename: 'UserMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  email?: Maybe<ScalarsEnums['String']>
  emailVerified?: Maybe<ScalarsEnums['DateTime']>
  image?: Maybe<ScalarsEnums['String']>
  apple?: Maybe<ScalarsEnums['String']>
  facebook?: Maybe<ScalarsEnums['String']>
  github?: Maybe<ScalarsEnums['String']>
  google?: Maybe<ScalarsEnums['String']>
  twitter?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface VerificationRequestCountAggregateOutputType {
  __typename: 'VerificationRequestCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  identifier: ScalarsEnums['Int']
  token: ScalarsEnums['Int']
  expires: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface VerificationRequestMinAggregateOutputType {
  __typename: 'VerificationRequestMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  identifier?: Maybe<ScalarsEnums['String']>
  token?: Maybe<ScalarsEnums['String']>
  expires?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface VerificationRequestMaxAggregateOutputType {
  __typename: 'VerificationRequestMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  identifier?: Maybe<ScalarsEnums['String']>
  token?: Maybe<ScalarsEnums['String']>
  expires?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface CoachCountAggregateOutputType {
  __typename: 'CoachCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  handle: ScalarsEnums['Int']
  name: ScalarsEnums['Int']
  type: ScalarsEnums['Int']
  isAssistant: ScalarsEnums['Int']
  teamId: ScalarsEnums['Int']
  imageId: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface CoachMinAggregateOutputType {
  __typename: 'CoachMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['String']>
  isAssistant?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  imageId?: Maybe<ScalarsEnums['String']>
}

export interface CoachMaxAggregateOutputType {
  __typename: 'CoachMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['String']>
  isAssistant?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  imageId?: Maybe<ScalarsEnums['String']>
}

export interface PlayerCountAggregateOutputType {
  __typename: 'PlayerCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  handle: ScalarsEnums['Int']
  name: ScalarsEnums['Int']
  slug: ScalarsEnums['Int']
  height: ScalarsEnums['Int']
  weight: ScalarsEnums['Int']
  number: ScalarsEnums['Int']
  position: ScalarsEnums['Int']
  teamId: ScalarsEnums['Int']
  imageId: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface PlayerMinAggregateOutputType {
  __typename: 'PlayerMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  slug?: Maybe<ScalarsEnums['String']>
  height?: Maybe<ScalarsEnums['String']>
  weight?: Maybe<ScalarsEnums['String']>
  number?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  imageId?: Maybe<ScalarsEnums['String']>
}

export interface PlayerMaxAggregateOutputType {
  __typename: 'PlayerMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  slug?: Maybe<ScalarsEnums['String']>
  height?: Maybe<ScalarsEnums['String']>
  weight?: Maybe<ScalarsEnums['String']>
  number?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['String']>
  teamId?: Maybe<ScalarsEnums['String']>
  imageId?: Maybe<ScalarsEnums['String']>
}

export interface ColorSchemeCountAggregateOutputType {
  __typename: 'ColorSchemeCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  primary: ScalarsEnums['Int']
  secondary: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface ColorSchemeMinAggregateOutputType {
  __typename: 'ColorSchemeMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  primary?: Maybe<ScalarsEnums['String']>
  secondary?: Maybe<ScalarsEnums['String']>
}

export interface ColorSchemeMaxAggregateOutputType {
  __typename: 'ColorSchemeMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  primary?: Maybe<ScalarsEnums['String']>
  secondary?: Maybe<ScalarsEnums['String']>
}

export interface TeamCountAggregateOutputType {
  __typename: 'TeamCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  handle: ScalarsEnums['Int']
  name: ScalarsEnums['Int']
  slug: ScalarsEnums['Int']
  city: ScalarsEnums['Int']
  abbreviation: ScalarsEnums['Int']
  wins: ScalarsEnums['Int']
  losses: ScalarsEnums['Int']
  winPercentage: ScalarsEnums['Int']
  conference: ScalarsEnums['Int']
  division: ScalarsEnums['Int']
  established: ScalarsEnums['Int']
  colorSchemeId: ScalarsEnums['Int']
  logoId: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface TeamAvgAggregateOutputType {
  __typename: 'TeamAvgAggregateOutputType' | undefined
  wins?: Maybe<ScalarsEnums['Float']>
  losses?: Maybe<ScalarsEnums['Float']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
}

export interface TeamSumAggregateOutputType {
  __typename: 'TeamSumAggregateOutputType' | undefined
  wins?: Maybe<ScalarsEnums['Int']>
  losses?: Maybe<ScalarsEnums['Int']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
}

export interface TeamMinAggregateOutputType {
  __typename: 'TeamMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  slug?: Maybe<ScalarsEnums['String']>
  city?: Maybe<ScalarsEnums['String']>
  abbreviation?: Maybe<ScalarsEnums['String']>
  wins?: Maybe<ScalarsEnums['Int']>
  losses?: Maybe<ScalarsEnums['Int']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
  conference?: Maybe<ScalarsEnums['String']>
  division?: Maybe<ScalarsEnums['String']>
  established?: Maybe<ScalarsEnums['String']>
  colorSchemeId?: Maybe<ScalarsEnums['String']>
  logoId?: Maybe<ScalarsEnums['String']>
}

export interface TeamMaxAggregateOutputType {
  __typename: 'TeamMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  handle?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  slug?: Maybe<ScalarsEnums['String']>
  city?: Maybe<ScalarsEnums['String']>
  abbreviation?: Maybe<ScalarsEnums['String']>
  wins?: Maybe<ScalarsEnums['Int']>
  losses?: Maybe<ScalarsEnums['Int']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
  conference?: Maybe<ScalarsEnums['String']>
  division?: Maybe<ScalarsEnums['String']>
  established?: Maybe<ScalarsEnums['String']>
  colorSchemeId?: Maybe<ScalarsEnums['String']>
  logoId?: Maybe<ScalarsEnums['String']>
}

export interface ImageCountAggregateOutputType {
  __typename: 'ImageCountAggregateOutputType' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
  url: ScalarsEnums['Int']
  type: ScalarsEnums['Int']
  _all: ScalarsEnums['Int']
}

export interface ImageMinAggregateOutputType {
  __typename: 'ImageMinAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  url?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['ImageType']>
}

export interface ImageMaxAggregateOutputType {
  __typename: 'ImageMaxAggregateOutputType' | undefined
  id?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  url?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['ImageType']>
}

export interface SchemaObjectTypes {
  Query: Query
  Mutation: Mutation
  Subscription: Subscription
  Account: Account
  Coach: Coach
  ColorScheme: ColorScheme
  Image: Image
  Player: Player
  Session: Session
  Team: Team
  User: User
  VerificationRequest: VerificationRequest
  BatchPayload: BatchPayload
  AggregateAccount: AggregateAccount
  AggregateSession: AggregateSession
  AggregateUser: AggregateUser
  AggregateVerificationRequest: AggregateVerificationRequest
  AggregateCoach: AggregateCoach
  AggregatePlayer: AggregatePlayer
  AggregateColorScheme: AggregateColorScheme
  AggregateTeam: AggregateTeam
  AggregateImage: AggregateImage
  AccountCountAggregateOutputType: AccountCountAggregateOutputType
  AccountMinAggregateOutputType: AccountMinAggregateOutputType
  AccountMaxAggregateOutputType: AccountMaxAggregateOutputType
  SessionCountAggregateOutputType: SessionCountAggregateOutputType
  SessionMinAggregateOutputType: SessionMinAggregateOutputType
  SessionMaxAggregateOutputType: SessionMaxAggregateOutputType
  UserCountAggregateOutputType: UserCountAggregateOutputType
  UserMinAggregateOutputType: UserMinAggregateOutputType
  UserMaxAggregateOutputType: UserMaxAggregateOutputType
  VerificationRequestCountAggregateOutputType: VerificationRequestCountAggregateOutputType
  VerificationRequestMinAggregateOutputType: VerificationRequestMinAggregateOutputType
  VerificationRequestMaxAggregateOutputType: VerificationRequestMaxAggregateOutputType
  CoachCountAggregateOutputType: CoachCountAggregateOutputType
  CoachMinAggregateOutputType: CoachMinAggregateOutputType
  CoachMaxAggregateOutputType: CoachMaxAggregateOutputType
  PlayerCountAggregateOutputType: PlayerCountAggregateOutputType
  PlayerMinAggregateOutputType: PlayerMinAggregateOutputType
  PlayerMaxAggregateOutputType: PlayerMaxAggregateOutputType
  ColorSchemeCountAggregateOutputType: ColorSchemeCountAggregateOutputType
  ColorSchemeMinAggregateOutputType: ColorSchemeMinAggregateOutputType
  ColorSchemeMaxAggregateOutputType: ColorSchemeMaxAggregateOutputType
  TeamCountAggregateOutputType: TeamCountAggregateOutputType
  TeamAvgAggregateOutputType: TeamAvgAggregateOutputType
  TeamSumAggregateOutputType: TeamSumAggregateOutputType
  TeamMinAggregateOutputType: TeamMinAggregateOutputType
  TeamMaxAggregateOutputType: TeamMaxAggregateOutputType
  ImageCountAggregateOutputType: ImageCountAggregateOutputType
  ImageMinAggregateOutputType: ImageMinAggregateOutputType
  ImageMaxAggregateOutputType: ImageMaxAggregateOutputType
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'Account'
  | 'Coach'
  | 'ColorScheme'
  | 'Image'
  | 'Player'
  | 'Session'
  | 'Team'
  | 'User'
  | 'VerificationRequest'
  | 'BatchPayload'
  | 'AggregateAccount'
  | 'AggregateSession'
  | 'AggregateUser'
  | 'AggregateVerificationRequest'
  | 'AggregateCoach'
  | 'AggregatePlayer'
  | 'AggregateColorScheme'
  | 'AggregateTeam'
  | 'AggregateImage'
  | 'AccountCountAggregateOutputType'
  | 'AccountMinAggregateOutputType'
  | 'AccountMaxAggregateOutputType'
  | 'SessionCountAggregateOutputType'
  | 'SessionMinAggregateOutputType'
  | 'SessionMaxAggregateOutputType'
  | 'UserCountAggregateOutputType'
  | 'UserMinAggregateOutputType'
  | 'UserMaxAggregateOutputType'
  | 'VerificationRequestCountAggregateOutputType'
  | 'VerificationRequestMinAggregateOutputType'
  | 'VerificationRequestMaxAggregateOutputType'
  | 'CoachCountAggregateOutputType'
  | 'CoachMinAggregateOutputType'
  | 'CoachMaxAggregateOutputType'
  | 'PlayerCountAggregateOutputType'
  | 'PlayerMinAggregateOutputType'
  | 'PlayerMaxAggregateOutputType'
  | 'ColorSchemeCountAggregateOutputType'
  | 'ColorSchemeMinAggregateOutputType'
  | 'ColorSchemeMaxAggregateOutputType'
  | 'TeamCountAggregateOutputType'
  | 'TeamAvgAggregateOutputType'
  | 'TeamSumAggregateOutputType'
  | 'TeamMinAggregateOutputType'
  | 'TeamMaxAggregateOutputType'
  | 'ImageCountAggregateOutputType'
  | 'ImageMinAggregateOutputType'
  | 'ImageMaxAggregateOutputType'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  AccountScalarFieldEnum: AccountScalarFieldEnum | undefined
  SessionScalarFieldEnum: SessionScalarFieldEnum | undefined
  UserScalarFieldEnum: UserScalarFieldEnum | undefined
  VerificationRequestScalarFieldEnum: VerificationRequestScalarFieldEnum | undefined
  CoachScalarFieldEnum: CoachScalarFieldEnum | undefined
  PlayerScalarFieldEnum: PlayerScalarFieldEnum | undefined
  ColorSchemeScalarFieldEnum: ColorSchemeScalarFieldEnum | undefined
  TeamScalarFieldEnum: TeamScalarFieldEnum | undefined
  ImageScalarFieldEnum: ImageScalarFieldEnum | undefined
  SortOrder: SortOrder | undefined
  QueryMode: QueryMode | undefined
  ImageType: ImageType | undefined
}
