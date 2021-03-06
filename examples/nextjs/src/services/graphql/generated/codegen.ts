export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** An arbitrary-precision Decimal type */
  Decimal: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any
}

export type Account = {
  __typename?: 'Account'
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  providerAccountId: Scalars['String']
  providerId: Scalars['String']
  providerType: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  user: User
  userId: Scalars['String']
}

export type AccountCreateInput = {
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  providerAccountId: Scalars['String']
  providerId: Scalars['String']
  providerType: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserCreateNestedOneWithoutAccountsInput
}

export type AccountCreateManyUserInput = {
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  providerAccountId: Scalars['String']
  providerId: Scalars['String']
  providerType: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AccountCreateManyUserInputEnvelope = {
  data?: Maybe<Array<AccountCreateManyUserInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>
  create?: Maybe<Array<AccountCreateWithoutUserInput>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
}

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput
  where: AccountWhereUniqueInput
}

export type AccountCreateWithoutUserInput = {
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  providerAccountId: Scalars['String']
  providerId: Scalars['String']
  providerType: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>
  none?: Maybe<AccountWhereInput>
  some?: Maybe<AccountWhereInput>
}

export type AccountOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>
}

export type AccountOrderByWithRelationInput = {
  accessToken?: Maybe<SortOrder>
  accessTokenExpires?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  providerAccountId?: Maybe<SortOrder>
  providerId?: Maybe<SortOrder>
  providerType?: Maybe<SortOrder>
  refreshToken?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  user?: Maybe<UserOrderByWithRelationInput>
  userId?: Maybe<SortOrder>
}

export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
  providerAccountId: Scalars['String']
  providerId: Scalars['String']
}

export type AccountScalarWhereInput = {
  AND?: Maybe<Array<AccountScalarWhereInput>>
  NOT?: Maybe<Array<AccountScalarWhereInput>>
  OR?: Maybe<Array<AccountScalarWhereInput>>
  accessToken?: Maybe<StringNullableFilter>
  accessTokenExpires?: Maybe<DateTimeNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  providerAccountId?: Maybe<StringFilter>
  providerId?: Maybe<StringFilter>
  providerType?: Maybe<StringFilter>
  refreshToken?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
  userId?: Maybe<StringFilter>
}

export type AccountUpdateInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  user?: Maybe<UserUpdateOneRequiredWithoutAccountsInput>
}

export type AccountUpdateManyMutationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput
  where: AccountScalarWhereInput
}

export type AccountUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>
  create?: Maybe<Array<AccountCreateWithoutUserInput>>
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>
  delete?: Maybe<Array<AccountWhereUniqueInput>>
  deleteMany?: Maybe<Array<AccountScalarWhereInput>>
  disconnect?: Maybe<Array<AccountWhereUniqueInput>>
  set?: Maybe<Array<AccountWhereUniqueInput>>
  update?: Maybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>
  updateMany?: Maybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>
  upsert?: Maybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>
}

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput
  where: AccountWhereUniqueInput
}

export type AccountUpdateWithoutUserInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>
  providerId?: Maybe<StringFieldUpdateOperationsInput>
  providerType?: Maybe<StringFieldUpdateOperationsInput>
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput
  update: AccountUpdateWithoutUserInput
  where: AccountWhereUniqueInput
}

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>
  NOT?: Maybe<Array<AccountWhereInput>>
  OR?: Maybe<Array<AccountWhereInput>>
  accessToken?: Maybe<StringNullableFilter>
  accessTokenExpires?: Maybe<DateTimeNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  providerAccountId?: Maybe<StringFilter>
  providerId?: Maybe<StringFilter>
  providerType?: Maybe<StringFilter>
  refreshToken?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
  user?: Maybe<UserWhereInput>
  userId?: Maybe<StringFilter>
}

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>
}

/** Coach model */
export type Coach = {
  __typename?: 'Coach'
  createdAt: Scalars['DateTime']
  handle: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<Image>
  imageId?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  team?: Maybe<Team>
  teamId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type CoachCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  id: Scalars['String']
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CoachCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  id: Scalars['String']
  imageId?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CoachCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<CoachCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type CoachCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<CoachWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
}

export type CoachCreateNestedOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  create?: Maybe<CoachCreateWithoutImageInput>
}

export type CoachCreateOrConnectWithoutImageInput = {
  create: CoachCreateWithoutImageInput
  where: CoachWhereUniqueInput
}

export type CoachCreateOrConnectWithoutTeamInput = {
  create: CoachCreateWithoutTeamInput
  where: CoachWhereUniqueInput
}

export type CoachCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  id: Scalars['String']
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CoachCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  id: Scalars['String']
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>
  none?: Maybe<CoachWhereInput>
  some?: Maybe<CoachWhereInput>
}

export type CoachOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>
}

export type CoachOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ImageOrderByWithRelationInput>
  imageId?: Maybe<SortOrder>
  isAssistant?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  team?: Maybe<TeamOrderByWithRelationInput>
  teamId?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type CoachScalarWhereInput = {
  AND?: Maybe<Array<CoachScalarWhereInput>>
  NOT?: Maybe<Array<CoachScalarWhereInput>>
  OR?: Maybe<Array<CoachScalarWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  imageId?: Maybe<StringNullableFilter>
  isAssistant?: Maybe<StringNullableFilter>
  name?: Maybe<StringFilter>
  teamId?: Maybe<StringNullableFilter>
  type?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type CoachUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutCoachInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type CoachUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type CoachUpdateManyWithWhereWithoutTeamInput = {
  data: CoachUpdateManyMutationInput
  where: CoachScalarWhereInput
}

export type CoachUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<CoachWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>
  delete?: Maybe<Array<CoachWhereUniqueInput>>
  deleteMany?: Maybe<Array<CoachScalarWhereInput>>
  disconnect?: Maybe<Array<CoachWhereUniqueInput>>
  set?: Maybe<Array<CoachWhereUniqueInput>>
  update?: Maybe<Array<CoachUpdateWithWhereUniqueWithoutTeamInput>>
  updateMany?: Maybe<Array<CoachUpdateManyWithWhereWithoutTeamInput>>
  upsert?: Maybe<Array<CoachUpsertWithWhereUniqueWithoutTeamInput>>
}

export type CoachUpdateOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>
  create?: Maybe<CoachCreateWithoutImageInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<CoachUpdateWithoutImageInput>
  upsert?: Maybe<CoachUpsertWithoutImageInput>
}

export type CoachUpdateWithWhereUniqueWithoutTeamInput = {
  data: CoachUpdateWithoutTeamInput
  where: CoachWhereUniqueInput
}

export type CoachUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type CoachUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutCoachInput>
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  type?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type CoachUpsertWithWhereUniqueWithoutTeamInput = {
  create: CoachCreateWithoutTeamInput
  update: CoachUpdateWithoutTeamInput
  where: CoachWhereUniqueInput
}

export type CoachUpsertWithoutImageInput = {
  create: CoachCreateWithoutImageInput
  update: CoachUpdateWithoutImageInput
}

export type CoachWhereInput = {
  AND?: Maybe<Array<CoachWhereInput>>
  NOT?: Maybe<Array<CoachWhereInput>>
  OR?: Maybe<Array<CoachWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ImageWhereInput>
  imageId?: Maybe<StringNullableFilter>
  isAssistant?: Maybe<StringNullableFilter>
  name?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  teamId?: Maybe<StringNullableFilter>
  type?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type CoachWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** Color scheme model */
export type ColorScheme = {
  __typename?: 'ColorScheme'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<Team>
  updatedAt: Scalars['DateTime']
}

export type ColorSchemeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutColorSchemeInput>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ColorSchemeCreateNestedOneWithoutTeamInput = {
  connect?: Maybe<ColorSchemeWhereUniqueInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
}

export type ColorSchemeCreateOrConnectWithoutTeamInput = {
  create: ColorSchemeCreateWithoutTeamInput
  where: ColorSchemeWhereUniqueInput
}

export type ColorSchemeCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  primary: Scalars['String']
  secondary: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ColorSchemeOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  primary?: Maybe<SortOrder>
  secondary?: Maybe<SortOrder>
  team?: Maybe<TeamOrderByWithRelationInput>
  updatedAt?: Maybe<SortOrder>
}

export type ColorSchemeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutColorSchemeInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type ColorSchemeUpdateOneWithoutTeamInput = {
  connect?: Maybe<ColorSchemeWhereUniqueInput>
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<ColorSchemeUpdateWithoutTeamInput>
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>
}

export type ColorSchemeUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  primary?: Maybe<StringFieldUpdateOperationsInput>
  secondary?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type ColorSchemeUpsertWithoutTeamInput = {
  create: ColorSchemeCreateWithoutTeamInput
  update: ColorSchemeUpdateWithoutTeamInput
}

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<ColorSchemeWhereInput>>
  NOT?: Maybe<Array<ColorSchemeWhereInput>>
  OR?: Maybe<Array<ColorSchemeWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  primary?: Maybe<StringFilter>
  secondary?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  updatedAt?: Maybe<DateTimeFilter>
}

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type EnumImageTypeFieldUpdateOperationsInput = {
  set?: Maybe<ImageType>
}

export type EnumImageTypeFilter = {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
  notIn?: Maybe<Array<ImageType>>
}

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
  notIn?: Maybe<Array<Scalars['Float']>>
}

/** Image for NBA team, player, or coach */
export type Image = {
  __typename?: 'Image'
  coach?: Maybe<Coach>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  player?: Maybe<Player>
  team?: Maybe<Team>
  type: ImageType
  updatedAt: Scalars['DateTime']
  url: Scalars['String']
}

export type ImageCreateInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
  type: ImageType
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
}

export type ImageCreateNestedOneWithoutCoachInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  create?: Maybe<ImageCreateWithoutCoachInput>
}

export type ImageCreateNestedOneWithoutPlayerInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  create?: Maybe<ImageCreateWithoutPlayerInput>
}

export type ImageCreateNestedOneWithoutTeamInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  create?: Maybe<ImageCreateWithoutTeamInput>
}

export type ImageCreateOrConnectWithoutCoachInput = {
  create: ImageCreateWithoutCoachInput
  where: ImageWhereUniqueInput
}

export type ImageCreateOrConnectWithoutPlayerInput = {
  create: ImageCreateWithoutPlayerInput
  where: ImageWhereUniqueInput
}

export type ImageCreateOrConnectWithoutTeamInput = {
  create: ImageCreateWithoutTeamInput
  where: ImageWhereUniqueInput
}

export type ImageCreateWithoutCoachInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
  type: ImageType
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
}

export type ImageCreateWithoutPlayerInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>
  type: ImageType
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
}

export type ImageCreateWithoutTeamInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>
  type: ImageType
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
}

export type ImageOrderByWithRelationInput = {
  coach?: Maybe<CoachOrderByWithRelationInput>
  createdAt?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  player?: Maybe<PlayerOrderByWithRelationInput>
  team?: Maybe<TeamOrderByWithRelationInput>
  type?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
}

export enum ImageType {
  Headshot = 'HEADSHOT',
  Logo = 'LOGO',
}

export type ImageUpdateInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
}

export type ImageUpdateOneWithoutCoachInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>
  create?: Maybe<ImageCreateWithoutCoachInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutCoachInput>
  upsert?: Maybe<ImageUpsertWithoutCoachInput>
}

export type ImageUpdateOneWithoutPlayerInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>
  create?: Maybe<ImageCreateWithoutPlayerInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutPlayerInput>
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>
}

export type ImageUpdateOneWithoutTeamInput = {
  connect?: Maybe<ImageWhereUniqueInput>
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>
  create?: Maybe<ImageCreateWithoutTeamInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<ImageUpdateWithoutTeamInput>
  upsert?: Maybe<ImageUpsertWithoutTeamInput>
}

export type ImageUpdateWithoutCoachInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
}

export type ImageUpdateWithoutPlayerInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutLogoInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
}

export type ImageUpdateWithoutTeamInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  player?: Maybe<PlayerUpdateOneWithoutImageInput>
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  url?: Maybe<StringFieldUpdateOperationsInput>
}

export type ImageUpsertWithoutCoachInput = {
  create: ImageCreateWithoutCoachInput
  update: ImageUpdateWithoutCoachInput
}

export type ImageUpsertWithoutPlayerInput = {
  create: ImageCreateWithoutPlayerInput
  update: ImageUpdateWithoutPlayerInput
}

export type ImageUpsertWithoutTeamInput = {
  create: ImageCreateWithoutTeamInput
  update: ImageUpdateWithoutTeamInput
}

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>
  NOT?: Maybe<Array<ImageWhereInput>>
  OR?: Maybe<Array<ImageWhereInput>>
  coach?: Maybe<CoachWhereInput>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  player?: Maybe<PlayerWhereInput>
  team?: Maybe<TeamWhereInput>
  type?: Maybe<EnumImageTypeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  url?: Maybe<StringFilter>
}

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
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

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  createOneAccount: Account
  createOneCoach: Coach
  createOneColorScheme: ColorScheme
  createOneImage: Image
  createOnePlayer: Player
  createOneSession: Session
  createOneTeam: Team
  createOneUser: User
  updateOneAccount?: Maybe<Account>
  updateOneCoach?: Maybe<Coach>
  updateOneColorScheme?: Maybe<ColorScheme>
  updateOneImage?: Maybe<Image>
  updateOnePlayer?: Maybe<Player>
  updateOneSession?: Maybe<Session>
  updateOneTeam?: Maybe<Team>
  updateOneUser?: Maybe<User>
}

export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput
}

export type MutationCreateOneCoachArgs = {
  data: CoachCreateInput
}

export type MutationCreateOneColorSchemeArgs = {
  data: ColorSchemeCreateInput
}

export type MutationCreateOneImageArgs = {
  data: ImageCreateInput
}

export type MutationCreateOnePlayerArgs = {
  data: PlayerCreateInput
}

export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput
}

export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput
}

export type MutationCreateOneUserArgs = {
  data: UserCreateInput
}

export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput
  where: AccountWhereUniqueInput
}

export type MutationUpdateOneCoachArgs = {
  data: CoachUpdateInput
  where: CoachWhereUniqueInput
}

export type MutationUpdateOneColorSchemeArgs = {
  data: ColorSchemeUpdateInput
  where: ColorSchemeWhereUniqueInput
}

export type MutationUpdateOneImageArgs = {
  data: ImageUpdateInput
  where: ImageWhereUniqueInput
}

export type MutationUpdateOnePlayerArgs = {
  data: PlayerUpdateInput
  where: PlayerWhereUniqueInput
}

export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput
  where: SessionWhereUniqueInput
}

export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput
  where: TeamWhereUniqueInput
}

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeNullableFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type NestedEnumImageTypeFilter = {
  equals?: Maybe<ImageType>
  in?: Maybe<Array<ImageType>>
  not?: Maybe<NestedEnumImageTypeFilter>
  notIn?: Maybe<Array<ImageType>>
}

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
  notIn?: Maybe<Array<Scalars['Float']>>
}

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>
}

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>
  divide?: Maybe<Scalars['Float']>
  increment?: Maybe<Scalars['Float']>
  multiply?: Maybe<Scalars['Float']>
  set?: Maybe<Scalars['Float']>
}

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>
  divide?: Maybe<Scalars['Int']>
  increment?: Maybe<Scalars['Int']>
  multiply?: Maybe<Scalars['Int']>
  set?: Maybe<Scalars['Int']>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>
}

/** Player model */
export type Player = {
  __typename?: 'Player'
  createdAt: Scalars['DateTime']
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<Image>
  imageId?: Maybe<Scalars['String']>
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  team?: Maybe<Team>
  teamId?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  weight: Scalars['String']
}

export type PlayerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['String']
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>
  updatedAt?: Maybe<Scalars['DateTime']>
  weight: Scalars['String']
}

export type PlayerCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['String']
  imageId?: Maybe<Scalars['String']>
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  weight: Scalars['String']
}

export type PlayerCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<PlayerCreateManyTeamInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type PlayerCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<PlayerWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
}

export type PlayerCreateNestedOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  create?: Maybe<PlayerCreateWithoutImageInput>
}

export type PlayerCreateOrConnectWithoutImageInput = {
  create: PlayerCreateWithoutImageInput
  where: PlayerWhereUniqueInput
}

export type PlayerCreateOrConnectWithoutTeamInput = {
  create: PlayerCreateWithoutTeamInput
  where: PlayerWhereUniqueInput
}

export type PlayerCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>
  updatedAt?: Maybe<Scalars['DateTime']>
  weight: Scalars['String']
}

export type PlayerCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['String']
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  weight: Scalars['String']
}

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>
  none?: Maybe<PlayerWhereInput>
  some?: Maybe<PlayerWhereInput>
}

export type PlayerOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>
}

export type PlayerOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ImageOrderByWithRelationInput>
  imageId?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  number?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  team?: Maybe<TeamOrderByWithRelationInput>
  teamId?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
}

export type PlayerScalarWhereInput = {
  AND?: Maybe<Array<PlayerScalarWhereInput>>
  NOT?: Maybe<Array<PlayerScalarWhereInput>>
  OR?: Maybe<Array<PlayerScalarWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  height?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  imageId?: Maybe<StringNullableFilter>
  name?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  slug?: Maybe<StringFilter>
  teamId?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
  weight?: Maybe<StringFilter>
}

export type PlayerUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
}

export type PlayerUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
}

export type PlayerUpdateManyWithWhereWithoutTeamInput = {
  data: PlayerUpdateManyMutationInput
  where: PlayerScalarWhereInput
}

export type PlayerUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<PlayerWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>
  delete?: Maybe<Array<PlayerWhereUniqueInput>>
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>
  set?: Maybe<Array<PlayerWhereUniqueInput>>
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutTeamInput>>
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereWithoutTeamInput>>
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutTeamInput>>
}

export type PlayerUpdateOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>
  create?: Maybe<PlayerCreateWithoutImageInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<PlayerUpdateWithoutImageInput>
  upsert?: Maybe<PlayerUpsertWithoutImageInput>
}

export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
  data: PlayerUpdateWithoutTeamInput
  where: PlayerWhereUniqueInput
}

export type PlayerUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
}

export type PlayerUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  height?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  number?: Maybe<NullableStringFieldUpdateOperationsInput>
  position?: Maybe<NullableStringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  weight?: Maybe<StringFieldUpdateOperationsInput>
}

export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
  create: PlayerCreateWithoutTeamInput
  update: PlayerUpdateWithoutTeamInput
  where: PlayerWhereUniqueInput
}

export type PlayerUpsertWithoutImageInput = {
  create: PlayerCreateWithoutImageInput
  update: PlayerUpdateWithoutImageInput
}

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>
  NOT?: Maybe<Array<PlayerWhereInput>>
  OR?: Maybe<Array<PlayerWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  height?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ImageWhereInput>
  imageId?: Maybe<StringNullableFilter>
  name?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  slug?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  teamId?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
  weight?: Maybe<StringFilter>
}

export type PlayerWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  imageId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  account?: Maybe<Account>
  accounts: Array<Account>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  colorScheme?: Maybe<ColorScheme>
  colorSchemes: Array<ColorScheme>
  image?: Maybe<Image>
  images: Array<Image>
  player?: Maybe<Player>
  players: Array<Player>
  session?: Maybe<Session>
  sessions: Array<Session>
  team?: Maybe<Team>
  teams: Array<Team>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryAccountArgs = {
  where: AccountWhereUniqueInput
}

export type QueryAccountsArgs = {
  after?: Maybe<AccountWhereUniqueInput>
  before?: Maybe<AccountWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<AccountOrderByWithRelationInput>>
  where?: Maybe<AccountWhereInput>
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  after?: Maybe<CoachWhereUniqueInput>
  before?: Maybe<CoachWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<CoachOrderByWithRelationInput>>
  where?: Maybe<CoachWhereInput>
}

export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput
}

export type QueryColorSchemesArgs = {
  after?: Maybe<ColorSchemeWhereUniqueInput>
  before?: Maybe<ColorSchemeWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<ColorSchemeOrderByWithRelationInput>>
  where?: Maybe<ColorSchemeWhereInput>
}

export type QueryImageArgs = {
  where: ImageWhereUniqueInput
}

export type QueryImagesArgs = {
  after?: Maybe<ImageWhereUniqueInput>
  before?: Maybe<ImageWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<ImageOrderByWithRelationInput>>
  where?: Maybe<ImageWhereInput>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  after?: Maybe<PlayerWhereUniqueInput>
  before?: Maybe<PlayerWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<PlayerOrderByWithRelationInput>>
  where?: Maybe<PlayerWhereInput>
}

export type QuerySessionArgs = {
  where: SessionWhereUniqueInput
}

export type QuerySessionsArgs = {
  after?: Maybe<SessionWhereUniqueInput>
  before?: Maybe<SessionWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<SessionOrderByWithRelationInput>>
  where?: Maybe<SessionWhereInput>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  after?: Maybe<TeamWhereUniqueInput>
  before?: Maybe<TeamWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<TeamOrderByWithRelationInput>>
  where?: Maybe<TeamWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>
  before?: Maybe<UserWhereUniqueInput>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>
  where?: Maybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Session = {
  __typename?: 'Session'
  accessToken: Scalars['String']
  createdAt: Scalars['DateTime']
  expires: Scalars['DateTime']
  id: Scalars['ID']
  sessionToken: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
  userId: Scalars['String']
}

export type SessionCreateInput = {
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  expires: Scalars['DateTime']
  id?: Maybe<Scalars['String']>
  sessionToken: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserCreateNestedOneWithoutSessionsInput
}

export type SessionCreateManyUserInput = {
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  expires: Scalars['DateTime']
  id?: Maybe<Scalars['String']>
  sessionToken: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SessionCreateManyUserInputEnvelope = {
  data?: Maybe<Array<SessionCreateManyUserInput>>
  skipDuplicates?: Maybe<Scalars['Boolean']>
}

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>
  create?: Maybe<Array<SessionCreateWithoutUserInput>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
}

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput
  where: SessionWhereUniqueInput
}

export type SessionCreateWithoutUserInput = {
  accessToken: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  expires: Scalars['DateTime']
  id?: Maybe<Scalars['String']>
  sessionToken: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>
  none?: Maybe<SessionWhereInput>
  some?: Maybe<SessionWhereInput>
}

export type SessionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>
}

export type SessionOrderByWithRelationInput = {
  accessToken?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  expires?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  sessionToken?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  user?: Maybe<UserOrderByWithRelationInput>
  userId?: Maybe<SortOrder>
}

export type SessionScalarWhereInput = {
  AND?: Maybe<Array<SessionScalarWhereInput>>
  NOT?: Maybe<Array<SessionScalarWhereInput>>
  OR?: Maybe<Array<SessionScalarWhereInput>>
  accessToken?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  expires?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  sessionToken?: Maybe<StringFilter>
  updatedAt?: Maybe<DateTimeFilter>
  userId?: Maybe<StringFilter>
}

export type SessionUpdateInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  user?: Maybe<UserUpdateOneRequiredWithoutSessionsInput>
}

export type SessionUpdateManyMutationInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput
  where: SessionScalarWhereInput
}

export type SessionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>
  create?: Maybe<Array<SessionCreateWithoutUserInput>>
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>
  delete?: Maybe<Array<SessionWhereUniqueInput>>
  deleteMany?: Maybe<Array<SessionScalarWhereInput>>
  disconnect?: Maybe<Array<SessionWhereUniqueInput>>
  set?: Maybe<Array<SessionWhereUniqueInput>>
  update?: Maybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>
  updateMany?: Maybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>
  upsert?: Maybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>
}

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput
  where: SessionWhereUniqueInput
}

export type SessionUpdateWithoutUserInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput
  update: SessionUpdateWithoutUserInput
  where: SessionWhereUniqueInput
}

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>
  NOT?: Maybe<Array<SessionWhereInput>>
  OR?: Maybe<Array<SessionWhereInput>>
  accessToken?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  expires?: Maybe<DateTimeFilter>
  id?: Maybe<StringFilter>
  sessionToken?: Maybe<StringFilter>
  updatedAt?: Maybe<DateTimeFilter>
  user?: Maybe<UserWhereInput>
  userId?: Maybe<StringFilter>
}

export type SessionWhereUniqueInput = {
  accessToken?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  sessionToken?: Maybe<Scalars['String']>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>
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

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

/** Team model */
export type Team = {
  __typename?: 'Team'
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches: Array<Coach>
  colorScheme?: Maybe<ColorScheme>
  conference: Scalars['String']
  createdAt: Scalars['DateTime']
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['ID']
  logo?: Maybe<Image>
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players: Array<Player>
  slug: Scalars['String']
  updatedAt: Scalars['DateTime']
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCreateInput = {
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  conference: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['String']
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCreateNestedOneWithoutCoachesInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  create?: Maybe<TeamCreateWithoutCoachesInput>
}

export type TeamCreateNestedOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  create?: Maybe<TeamCreateWithoutColorSchemeInput>
}

export type TeamCreateNestedOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  create?: Maybe<TeamCreateWithoutLogoInput>
}

export type TeamCreateNestedOneWithoutPlayersInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  create?: Maybe<TeamCreateWithoutPlayersInput>
}

export type TeamCreateOrConnectWithoutCoachesInput = {
  create: TeamCreateWithoutCoachesInput
  where: TeamWhereUniqueInput
}

export type TeamCreateOrConnectWithoutColorSchemeInput = {
  create: TeamCreateWithoutColorSchemeInput
  where: TeamWhereUniqueInput
}

export type TeamCreateOrConnectWithoutLogoInput = {
  create: TeamCreateWithoutLogoInput
  where: TeamWhereUniqueInput
}

export type TeamCreateOrConnectWithoutPlayersInput = {
  create: TeamCreateWithoutPlayersInput
  where: TeamWhereUniqueInput
}

export type TeamCreateWithoutCoachesInput = {
  abbreviation: Scalars['String']
  city: Scalars['String']
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  conference: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['String']
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCreateWithoutColorSchemeInput = {
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  conference: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['String']
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCreateWithoutLogoInput = {
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  conference: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['String']
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCreateWithoutPlayersInput = {
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>
  conference: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['String']
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamOrderByWithRelationInput = {
  abbreviation?: Maybe<SortOrder>
  city?: Maybe<SortOrder>
  coaches?: Maybe<CoachOrderByRelationAggregateInput>
  colorScheme?: Maybe<ColorSchemeOrderByWithRelationInput>
  colorSchemeId?: Maybe<SortOrder>
  conference?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  division?: Maybe<SortOrder>
  established?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  logo?: Maybe<ImageOrderByWithRelationInput>
  logoId?: Maybe<SortOrder>
  losses?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  players?: Maybe<PlayerOrderByRelationAggregateInput>
  slug?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  winPercentage?: Maybe<SortOrder>
  wins?: Maybe<SortOrder>
}

export type TeamUpdateInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
}

export type TeamUpdateOneWithoutCoachesInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>
  create?: Maybe<TeamCreateWithoutCoachesInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutCoachesInput>
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>
}

export type TeamUpdateOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>
  create?: Maybe<TeamCreateWithoutColorSchemeInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutColorSchemeInput>
  upsert?: Maybe<TeamUpsertWithoutColorSchemeInput>
}

export type TeamUpdateOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>
  create?: Maybe<TeamCreateWithoutLogoInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutLogoInput>
  upsert?: Maybe<TeamUpsertWithoutLogoInput>
}

export type TeamUpdateOneWithoutPlayersInput = {
  connect?: Maybe<TeamWhereUniqueInput>
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>
  create?: Maybe<TeamCreateWithoutPlayersInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<TeamUpdateWithoutPlayersInput>
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>
}

export type TeamUpdateWithoutCoachesInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
}

export type TeamUpdateWithoutColorSchemeInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
}

export type TeamUpdateWithoutLogoInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
}

export type TeamUpdateWithoutPlayersInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>
  city?: Maybe<StringFieldUpdateOperationsInput>
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>
  conference?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  division?: Maybe<StringFieldUpdateOperationsInput>
  established?: Maybe<StringFieldUpdateOperationsInput>
  handle?: Maybe<StringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  slug?: Maybe<StringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>
}

export type TeamUpsertWithoutCoachesInput = {
  create: TeamCreateWithoutCoachesInput
  update: TeamUpdateWithoutCoachesInput
}

export type TeamUpsertWithoutColorSchemeInput = {
  create: TeamCreateWithoutColorSchemeInput
  update: TeamUpdateWithoutColorSchemeInput
}

export type TeamUpsertWithoutLogoInput = {
  create: TeamCreateWithoutLogoInput
  update: TeamUpdateWithoutLogoInput
}

export type TeamUpsertWithoutPlayersInput = {
  create: TeamCreateWithoutPlayersInput
  update: TeamUpdateWithoutPlayersInput
}

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>
  NOT?: Maybe<Array<TeamWhereInput>>
  OR?: Maybe<Array<TeamWhereInput>>
  abbreviation?: Maybe<StringFilter>
  city?: Maybe<StringFilter>
  coaches?: Maybe<CoachListRelationFilter>
  colorScheme?: Maybe<ColorSchemeWhereInput>
  colorSchemeId?: Maybe<StringNullableFilter>
  conference?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  division?: Maybe<StringFilter>
  established?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  logo?: Maybe<ImageWhereInput>
  logoId?: Maybe<StringNullableFilter>
  losses?: Maybe<IntNullableFilter>
  name?: Maybe<StringFilter>
  players?: Maybe<PlayerListRelationFilter>
  slug?: Maybe<StringFilter>
  updatedAt?: Maybe<DateTimeFilter>
  winPercentage?: Maybe<FloatNullableFilter>
  wins?: Maybe<IntNullableFilter>
}

export type TeamWhereUniqueInput = {
  abbreviation?: Maybe<Scalars['String']>
  colorSchemeId?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  logoId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  accounts: Array<Account>
  apple?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sessions: Array<Session>
  twitter?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type UserCreateInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>
  apple?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>
  twitter?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>
  create?: Maybe<UserCreateWithoutAccountsInput>
}

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>
  create?: Maybe<UserCreateWithoutSessionsInput>
}

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput
  where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput
  where: UserWhereUniqueInput
}

export type UserCreateWithoutAccountsInput = {
  apple?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>
  twitter?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserCreateWithoutSessionsInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>
  apple?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['DateTime']>
  facebook?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserOrderByWithRelationInput = {
  accounts?: Maybe<AccountOrderByRelationAggregateInput>
  apple?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  email?: Maybe<SortOrder>
  emailVerified?: Maybe<SortOrder>
  facebook?: Maybe<SortOrder>
  github?: Maybe<SortOrder>
  google?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  sessions?: Maybe<SessionOrderByRelationAggregateInput>
  twitter?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type UserUpdateInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateOneRequiredWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>
  create?: Maybe<UserCreateWithoutAccountsInput>
  update?: Maybe<UserUpdateWithoutAccountsInput>
  upsert?: Maybe<UserUpsertWithoutAccountsInput>
}

export type UserUpdateOneRequiredWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>
  create?: Maybe<UserCreateWithoutSessionsInput>
  update?: Maybe<UserUpdateWithoutSessionsInput>
  upsert?: Maybe<UserUpsertWithoutSessionsInput>
}

export type UserUpdateWithoutAccountsInput = {
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateWithoutSessionsInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  email?: Maybe<NullableStringFieldUpdateOperationsInput>
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>
  github?: Maybe<NullableStringFieldUpdateOperationsInput>
  google?: Maybe<NullableStringFieldUpdateOperationsInput>
  id?: Maybe<StringFieldUpdateOperationsInput>
  image?: Maybe<NullableStringFieldUpdateOperationsInput>
  name?: Maybe<NullableStringFieldUpdateOperationsInput>
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
}

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput
  update: UserUpdateWithoutAccountsInput
}

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput
  update: UserUpdateWithoutSessionsInput
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  accounts?: Maybe<AccountListRelationFilter>
  apple?: Maybe<StringNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  email?: Maybe<StringNullableFilter>
  emailVerified?: Maybe<DateTimeNullableFilter>
  facebook?: Maybe<StringNullableFilter>
  github?: Maybe<StringNullableFilter>
  google?: Maybe<StringNullableFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<StringNullableFilter>
  name?: Maybe<StringNullableFilter>
  sessions?: Maybe<SessionListRelationFilter>
  twitter?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type CoachInfoFragment = {
  __typename?: 'Coach'
  id: string
  name: string
  type?: string | null | undefined
}

export type PlayerInfoFragment = {
  __typename?: 'Player'
  id: string
  name: string
  position?: string | null | undefined
  number?: string | null | undefined
  height: string
  weight: string
  image?: { __typename?: 'Image'; id: string } | null | undefined
}

export type TeamInfoFragment = {
  __typename?: 'Team'
  id: string
  city: string
  name: string
  slug: string
  division: string
  conference: string
  wins?: number | null | undefined
  losses?: number | null | undefined
  colorScheme?:
    | { __typename?: 'ColorScheme'; primary: string; secondary: string }
    | null
    | undefined
  logo?: { __typename?: 'Image'; id: string } | null | undefined
}

export type AllTeamsQueryVariables = Exact<{ [key: string]: never }>

export type AllTeamsQuery = {
  __typename?: 'Query'
  teams: Array<{
    __typename?: 'Team'
    id: string
    city: string
    name: string
    slug: string
    division: string
    conference: string
    wins?: number | null | undefined
    losses?: number | null | undefined
    colorScheme?:
      | { __typename?: 'ColorScheme'; primary: string; secondary: string }
      | null
      | undefined
    logo?: { __typename?: 'Image'; id: string } | null | undefined
  }>
}

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>

export type AllUsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    id: string
    name?: string | null | undefined
    image?: string | null | undefined
  }>
}

export type TeamQueryVariables = Exact<{
  id: Scalars['String']
}>

export type TeamQuery = {
  __typename?: 'Query'
  team?:
    | {
        __typename?: 'Team'
        id: string
        city: string
        name: string
        slug: string
        division: string
        conference: string
        wins?: number | null | undefined
        losses?: number | null | undefined
        players: Array<{
          __typename?: 'Player'
          id: string
          name: string
          position?: string | null | undefined
          number?: string | null | undefined
          height: string
          weight: string
          image?: { __typename?: 'Image'; id: string } | null | undefined
        }>
        coaches: Array<{
          __typename?: 'Coach'
          id: string
          name: string
          type?: string | null | undefined
        }>
        colorScheme?:
          | { __typename?: 'ColorScheme'; primary: string; secondary: string }
          | null
          | undefined
        logo?: { __typename?: 'Image'; id: string } | null | undefined
      }
    | null
    | undefined
}
