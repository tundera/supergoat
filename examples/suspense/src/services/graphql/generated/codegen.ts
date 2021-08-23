export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  userId: Scalars['String'];
  providerType: Scalars['String'];
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
};

export type AccountOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>;
};



/** Coach model */
export type Coach = {
  __typename?: 'Coach';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  image?: Maybe<Image>;
};

export type CoachCreateManyTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
};

export type CoachCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<CoachCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CoachCreateNestedManyWithoutTeamInput = {
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>;
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
  connect?: Maybe<Array<CoachWhereUniqueInput>>;
};

export type CoachCreateNestedOneWithoutImageInput = {
  create?: Maybe<CoachCreateWithoutImageInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  connect?: Maybe<CoachWhereUniqueInput>;
};

export type CoachCreateOrConnectWithoutImageInput = {
  where: CoachWhereUniqueInput;
  create: CoachCreateWithoutImageInput;
};

export type CoachCreateOrConnectWithoutTeamInput = {
  where: CoachWhereUniqueInput;
  create: CoachCreateWithoutTeamInput;
};

export type CoachCreateWithoutImageInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>;
};

export type CoachCreateWithoutTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>;
};

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>;
  some?: Maybe<CoachWhereInput>;
  none?: Maybe<CoachWhereInput>;
};

export type CoachOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  isAssistant?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  imageId?: Maybe<SortOrder>;
};

export type CoachScalarWhereInput = {
  AND?: Maybe<Array<CoachScalarWhereInput>>;
  OR?: Maybe<Array<CoachScalarWhereInput>>;
  NOT?: Maybe<Array<CoachScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<StringNullableFilter>;
  isAssistant?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  imageId?: Maybe<StringNullableFilter>;
};

export type CoachUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CoachUpdateManyWithWhereWithoutTeamInput = {
  where: CoachScalarWhereInput;
  data: CoachUpdateManyMutationInput;
};

export type CoachUpdateManyWithoutTeamInput = {
  create?: Maybe<Array<CoachCreateWithoutTeamInput>>;
  connectOrCreate?: Maybe<Array<CoachCreateOrConnectWithoutTeamInput>>;
  upsert?: Maybe<Array<CoachUpsertWithWhereUniqueWithoutTeamInput>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
  connect?: Maybe<Array<CoachWhereUniqueInput>>;
  set?: Maybe<Array<CoachWhereUniqueInput>>;
  disconnect?: Maybe<Array<CoachWhereUniqueInput>>;
  delete?: Maybe<Array<CoachWhereUniqueInput>>;
  update?: Maybe<Array<CoachUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<CoachUpdateManyWithWhereWithoutTeamInput>>;
  deleteMany?: Maybe<Array<CoachScalarWhereInput>>;
};

export type CoachUpdateOneWithoutImageInput = {
  create?: Maybe<CoachCreateWithoutImageInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  upsert?: Maybe<CoachUpsertWithoutImageInput>;
  connect?: Maybe<CoachWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CoachUpdateWithoutImageInput>;
};

export type CoachUpdateWithWhereUniqueWithoutTeamInput = {
  where: CoachWhereUniqueInput;
  data: CoachUpdateWithoutTeamInput;
};

export type CoachUpdateWithoutImageInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>;
};

export type CoachUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutCoachInput>;
};

export type CoachUpsertWithWhereUniqueWithoutTeamInput = {
  where: CoachWhereUniqueInput;
  update: CoachUpdateWithoutTeamInput;
  create: CoachCreateWithoutTeamInput;
};

export type CoachUpsertWithoutImageInput = {
  update: CoachUpdateWithoutImageInput;
  create: CoachCreateWithoutImageInput;
};

export type CoachWhereInput = {
  AND?: Maybe<Array<CoachWhereInput>>;
  OR?: Maybe<Array<CoachWhereInput>>;
  NOT?: Maybe<Array<CoachWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<StringNullableFilter>;
  isAssistant?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  imageId?: Maybe<StringNullableFilter>;
  image?: Maybe<ImageWhereInput>;
};

export type CoachWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Color scheme model */
export type ColorScheme = {
  __typename?: 'ColorScheme';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  team?: Maybe<Team>;
};

export type ColorSchemeCreateNestedOneWithoutTeamInput = {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>;
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>;
  connect?: Maybe<ColorSchemeWhereUniqueInput>;
};

export type ColorSchemeCreateOrConnectWithoutTeamInput = {
  where: ColorSchemeWhereUniqueInput;
  create: ColorSchemeCreateWithoutTeamInput;
};

export type ColorSchemeCreateWithoutTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  primary: Scalars['String'];
  secondary: Scalars['String'];
};

export type ColorSchemeOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  primary?: Maybe<SortOrder>;
  secondary?: Maybe<SortOrder>;
};

export type ColorSchemeUpdateOneWithoutTeamInput = {
  create?: Maybe<ColorSchemeCreateWithoutTeamInput>;
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>;
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>;
  connect?: Maybe<ColorSchemeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ColorSchemeUpdateWithoutTeamInput>;
};

export type ColorSchemeUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ColorSchemeUpsertWithoutTeamInput = {
  update: ColorSchemeUpdateWithoutTeamInput;
  create: ColorSchemeCreateWithoutTeamInput;
};

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<ColorSchemeWhereInput>>;
  OR?: Maybe<Array<ColorSchemeWhereInput>>;
  NOT?: Maybe<Array<ColorSchemeWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  primary?: Maybe<StringFilter>;
  secondary?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
};

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};


export type EnumImageTypeFieldUpdateOperationsInput = {
  set?: Maybe<ImageType>;
};

export type EnumImageTypeFilter = {
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<ImageType>>;
  notIn?: Maybe<Array<ImageType>>;
  not?: Maybe<NestedEnumImageTypeFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

/** Image for NBA team, player, or coach */
export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  type: ImageType;
  player?: Maybe<Player>;
  coach?: Maybe<Coach>;
  team?: Maybe<Team>;
};

export type ImageCreateNestedOneWithoutCoachInput = {
  create?: Maybe<ImageCreateWithoutCoachInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
};

export type ImageCreateNestedOneWithoutPlayerInput = {
  create?: Maybe<ImageCreateWithoutPlayerInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
};

export type ImageCreateNestedOneWithoutTeamInput = {
  create?: Maybe<ImageCreateWithoutTeamInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
};

export type ImageCreateOrConnectWithoutCoachInput = {
  where: ImageWhereUniqueInput;
  create: ImageCreateWithoutCoachInput;
};

export type ImageCreateOrConnectWithoutPlayerInput = {
  where: ImageWhereUniqueInput;
  create: ImageCreateWithoutPlayerInput;
};

export type ImageCreateOrConnectWithoutTeamInput = {
  where: ImageWhereUniqueInput;
  create: ImageCreateWithoutTeamInput;
};

export type ImageCreateWithoutCoachInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  type: ImageType;
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>;
};

export type ImageCreateWithoutPlayerInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  type: ImageType;
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>;
};

export type ImageCreateWithoutTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  type: ImageType;
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>;
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>;
};

export type ImageOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export enum ImageType {
  Logo = 'LOGO',
  Headshot = 'HEADSHOT'
}

export type ImageUpdateOneWithoutCoachInput = {
  create?: Maybe<ImageCreateWithoutCoachInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>;
  upsert?: Maybe<ImageUpsertWithoutCoachInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUpdateWithoutCoachInput>;
};

export type ImageUpdateOneWithoutPlayerInput = {
  create?: Maybe<ImageCreateWithoutPlayerInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>;
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUpdateWithoutPlayerInput>;
};

export type ImageUpdateOneWithoutTeamInput = {
  create?: Maybe<ImageCreateWithoutTeamInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>;
  upsert?: Maybe<ImageUpsertWithoutTeamInput>;
  connect?: Maybe<ImageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUpdateWithoutTeamInput>;
};

export type ImageUpdateWithoutCoachInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUpdateOneWithoutLogoInput>;
};

export type ImageUpdateWithoutPlayerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  coach?: Maybe<CoachUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUpdateOneWithoutLogoInput>;
};

export type ImageUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneWithoutImageInput>;
  coach?: Maybe<CoachUpdateOneWithoutImageInput>;
};

export type ImageUpsertWithoutCoachInput = {
  update: ImageUpdateWithoutCoachInput;
  create: ImageCreateWithoutCoachInput;
};

export type ImageUpsertWithoutPlayerInput = {
  update: ImageUpdateWithoutPlayerInput;
  create: ImageCreateWithoutPlayerInput;
};

export type ImageUpsertWithoutTeamInput = {
  update: ImageUpdateWithoutTeamInput;
  create: ImageCreateWithoutTeamInput;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>;
  OR?: Maybe<Array<ImageWhereInput>>;
  NOT?: Maybe<Array<ImageWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  url?: Maybe<StringFilter>;
  type?: Maybe<EnumImageTypeFilter>;
  player?: Maybe<PlayerWhereInput>;
  coach?: Maybe<CoachWhereInput>;
  team?: Maybe<TeamWhereInput>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  contains: Scalars['Int'];
  endsWith: Scalars['Int'];
  equals: Scalars['Int'];
  gt: Scalars['Int'];
  gte: Scalars['Int'];
  in: Array<Scalars['Int']>;
  lt: Scalars['Int'];
  lte: Scalars['Int'];
  notIn: Array<Scalars['Int']>;
  startsWith: Scalars['Int'];
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createOneTeam: Team;
  updateOneTeam?: Maybe<Team>;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedEnumImageTypeFilter = {
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<ImageType>>;
  notIn?: Maybe<Array<ImageType>>;
  not?: Maybe<NestedEnumImageTypeFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

/** Player model */
export type Player = {
  __typename?: 'Player';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  image?: Maybe<Image>;
};

export type PlayerCreateManyTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
};

export type PlayerCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<PlayerCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PlayerCreateNestedManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>;
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerCreateNestedOneWithoutImageInput = {
  create?: Maybe<PlayerCreateWithoutImageInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
};

export type PlayerCreateOrConnectWithoutImageInput = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateWithoutImageInput;
};

export type PlayerCreateOrConnectWithoutTeamInput = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateWithoutTeamInput;
};

export type PlayerCreateWithoutImageInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>;
};

export type PlayerCreateWithoutTeamInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>;
};

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>;
  some?: Maybe<PlayerWhereInput>;
  none?: Maybe<PlayerWhereInput>;
};

export type PlayerOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  imageId?: Maybe<SortOrder>;
};

export type PlayerScalarWhereInput = {
  AND?: Maybe<Array<PlayerScalarWhereInput>>;
  OR?: Maybe<Array<PlayerScalarWhereInput>>;
  NOT?: Maybe<Array<PlayerScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  height?: Maybe<StringFilter>;
  weight?: Maybe<StringFilter>;
  number?: Maybe<StringNullableFilter>;
  position?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  imageId?: Maybe<StringNullableFilter>;
};

export type PlayerUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyWithWhereWithoutTeamInput = {
  where: PlayerScalarWhereInput;
  data: PlayerUpdateManyMutationInput;
};

export type PlayerUpdateManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>;
  connectOrCreate?: Maybe<Array<PlayerCreateOrConnectWithoutTeamInput>>;
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutTeamInput>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
  set?: Maybe<Array<PlayerWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>;
  delete?: Maybe<Array<PlayerWhereUniqueInput>>;
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereWithoutTeamInput>>;
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>;
};

export type PlayerUpdateOneWithoutImageInput = {
  create?: Maybe<PlayerCreateWithoutImageInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  upsert?: Maybe<PlayerUpsertWithoutImageInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerUpdateWithoutImageInput>;
};

export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput;
  data: PlayerUpdateWithoutTeamInput;
};

export type PlayerUpdateWithoutImageInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>;
};

export type PlayerUpdateWithoutTeamInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>;
};

export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput;
  update: PlayerUpdateWithoutTeamInput;
  create: PlayerCreateWithoutTeamInput;
};

export type PlayerUpsertWithoutImageInput = {
  update: PlayerUpdateWithoutImageInput;
  create: PlayerCreateWithoutImageInput;
};

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>;
  OR?: Maybe<Array<PlayerWhereInput>>;
  NOT?: Maybe<Array<PlayerWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  height?: Maybe<StringFilter>;
  weight?: Maybe<StringFilter>;
  number?: Maybe<StringNullableFilter>;
  position?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  imageId?: Maybe<StringNullableFilter>;
  image?: Maybe<ImageWhereInput>;
};

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  player?: Maybe<Player>;
  players: Array<Player>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  coach?: Maybe<Coach>;
  coaches: Array<Coach>;
  colorScheme?: Maybe<ColorScheme>;
  colorSchemes: Array<ColorScheme>;
  image?: Maybe<Image>;
  images: Array<Image>;
  user?: Maybe<User>;
  users: Array<User>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>;
  orderBy?: Maybe<Array<AccountOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AccountWhereUniqueInput>;
  after?: Maybe<AccountWhereUniqueInput>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PlayerWhereUniqueInput>;
  after?: Maybe<PlayerWhereUniqueInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TeamWhereUniqueInput>;
  after?: Maybe<TeamWhereUniqueInput>;
};


export type QueryCoachArgs = {
  where: CoachWhereUniqueInput;
};


export type QueryCoachesArgs = {
  where?: Maybe<CoachWhereInput>;
  orderBy?: Maybe<Array<CoachOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CoachWhereUniqueInput>;
  after?: Maybe<CoachWhereUniqueInput>;
};


export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput;
};


export type QueryColorSchemesArgs = {
  where?: Maybe<ColorSchemeWhereInput>;
  orderBy?: Maybe<Array<ColorSchemeOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ColorSchemeWhereUniqueInput>;
  after?: Maybe<ColorSchemeWhereUniqueInput>;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  where?: Maybe<ImageWhereInput>;
  orderBy?: Maybe<Array<ImageOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ImageWhereUniqueInput>;
  after?: Maybe<ImageWhereUniqueInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<Array<SessionOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<SessionWhereUniqueInput>;
  after?: Maybe<SessionWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Session = {
  __typename?: 'Session';
  id: Scalars['ID'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
};

export type SessionOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  expires?: Maybe<DateTimeFilter>;
  sessionToken?: Maybe<StringFilter>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains: Scalars['String'];
  endsWith: Scalars['String'];
  equals: Scalars['String'];
  gt: Scalars['String'];
  gte: Scalars['String'];
  in: Array<Scalars['String']>;
  lt: Scalars['String'];
  lte: Scalars['String'];
  notIn: Array<Scalars['String']>;
  startsWith: Scalars['String'];
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

/** Team model */
export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  coaches: Array<Coach>;
  players: Array<Player>;
  colorScheme?: Maybe<ColorScheme>;
  logo?: Maybe<Image>;
};

export type TeamCreateInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
};

export type TeamCreateNestedOneWithoutCoachesInput = {
  create?: Maybe<TeamCreateWithoutCoachesInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
};

export type TeamCreateNestedOneWithoutLogoInput = {
  create?: Maybe<TeamCreateWithoutLogoInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
};

export type TeamCreateNestedOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
};

export type TeamCreateOrConnectWithoutCoachesInput = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutCoachesInput;
};

export type TeamCreateOrConnectWithoutLogoInput = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutLogoInput;
};

export type TeamCreateOrConnectWithoutPlayersInput = {
  where: TeamWhereUniqueInput;
  create: TeamCreateWithoutPlayersInput;
};

export type TeamCreateWithoutCoachesInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
};

export type TeamCreateWithoutLogoInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
};

export type TeamCreateWithoutPlayersInput = {
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  city: Scalars['String'];
  abbreviation: Scalars['String'];
  wins?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  conference: Scalars['String'];
  division: Scalars['String'];
  established: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
};

export type TeamOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  abbreviation?: Maybe<SortOrder>;
  wins?: Maybe<SortOrder>;
  losses?: Maybe<SortOrder>;
  winPercentage?: Maybe<SortOrder>;
  conference?: Maybe<SortOrder>;
  division?: Maybe<SortOrder>;
  established?: Maybe<SortOrder>;
  colorSchemeId?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
};

export type TeamUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
};

export type TeamUpdateOneWithoutCoachesInput = {
  create?: Maybe<TeamCreateWithoutCoachesInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>;
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutCoachesInput>;
};

export type TeamUpdateOneWithoutLogoInput = {
  create?: Maybe<TeamCreateWithoutLogoInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  upsert?: Maybe<TeamUpsertWithoutLogoInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutLogoInput>;
};

export type TeamUpdateOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>;
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutPlayersInput>;
};

export type TeamUpdateWithoutCoachesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
};

export type TeamUpdateWithoutLogoInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
};

export type TeamUpdateWithoutPlayersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
};

export type TeamUpsertWithoutCoachesInput = {
  update: TeamUpdateWithoutCoachesInput;
  create: TeamCreateWithoutCoachesInput;
};

export type TeamUpsertWithoutLogoInput = {
  update: TeamUpdateWithoutLogoInput;
  create: TeamCreateWithoutLogoInput;
};

export type TeamUpsertWithoutPlayersInput = {
  update: TeamUpdateWithoutPlayersInput;
  create: TeamCreateWithoutPlayersInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  abbreviation?: Maybe<StringFilter>;
  wins?: Maybe<IntNullableFilter>;
  losses?: Maybe<IntNullableFilter>;
  winPercentage?: Maybe<FloatNullableFilter>;
  conference?: Maybe<StringFilter>;
  division?: Maybe<StringFilter>;
  established?: Maybe<StringFilter>;
  coaches?: Maybe<CoachListRelationFilter>;
  players?: Maybe<PlayerListRelationFilter>;
  colorSchemeId?: Maybe<StringNullableFilter>;
  colorScheme?: Maybe<ColorSchemeWhereInput>;
  logoId?: Maybe<StringNullableFilter>;
  logo?: Maybe<ImageWhereInput>;
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  apple?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  accounts: Array<Account>;
  sessions: Array<Session>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  apple?: Maybe<SortOrder>;
  facebook?: Maybe<SortOrder>;
  github?: Maybe<SortOrder>;
  google?: Maybe<SortOrder>;
  twitter?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  apple?: Maybe<StringNullableFilter>;
  facebook?: Maybe<StringNullableFilter>;
  github?: Maybe<StringNullableFilter>;
  google?: Maybe<StringNullableFilter>;
  twitter?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  accounts?: Maybe<AccountListRelationFilter>;
  sessions?: Maybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type PlayerProfileFragment = { __typename?: 'Player', id: string, name: string, height: string, weight: string, position?: Maybe<string>, number?: Maybe<string> };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: string, city: string, name: string, slug: string, wins?: Maybe<number>, losses?: Maybe<number>, logo?: Maybe<{ __typename?: 'Image', id: string }> }> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name?: Maybe<string>, image?: Maybe<string> }> };

export type TeamQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeamQuery = { __typename?: 'Query', team?: Maybe<{ __typename?: 'Team', id: string, city: string, name: string, division: string, conference: string, wins?: Maybe<number>, losses?: Maybe<number>, colorScheme?: Maybe<{ __typename?: 'ColorScheme', primary: string, secondary: string }>, logo?: Maybe<{ __typename?: 'Image', id: string }>, players: Array<{ __typename?: 'Player', id: string, name: string, position?: Maybe<string>, number?: Maybe<string>, height: string, weight: string, image?: Maybe<{ __typename?: 'Image', id: string }> }>, coaches: Array<{ __typename?: 'Coach', id: string, name: string, type?: Maybe<string> }> }> };
