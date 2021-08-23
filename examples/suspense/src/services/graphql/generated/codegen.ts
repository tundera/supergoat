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
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type AccountCountAggregateOutputType = {
  __typename?: 'AccountCountAggregateOutputType';
  _all: Scalars['Int'];
  accessToken: Scalars['Int'];
  accessTokenExpires: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  providerId: Scalars['Int'];
  providerType: Scalars['Int'];
  refreshToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCreateInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: AccountCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountUncheckedCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
};

export type AccountMaxAggregateOutputType = {
  __typename?: 'AccountMaxAggregateOutputType';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMinAggregateOutputType = {
  __typename?: 'AccountMinAggregateOutputType';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountOrderByInput = {
  accessToken?: Maybe<SortOrder>;
  accessTokenExpires?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  providerId?: Maybe<SortOrder>;
  providerType?: Maybe<SortOrder>;
  refreshToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'accessToken',
  AccessTokenExpires = 'accessTokenExpires',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProviderAccountId = 'providerAccountId',
  ProviderId = 'providerId',
  ProviderType = 'providerType',
  RefreshToken = 'refreshToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: Maybe<Array<Maybe<AccountScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AccountScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<AccountScalarWhereInput>>>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<AccountScalarWhereWithAggregatesInput>>>;
  accessToken?: Maybe<StringNullableWithAggregatesFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  providerAccountId?: Maybe<StringWithAggregatesFilter>;
  providerId?: Maybe<StringWithAggregatesFilter>;
  providerType?: Maybe<StringWithAggregatesFilter>;
  refreshToken?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type AccountUncheckedCreateInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type AccountUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountUncheckedCreateWithoutUserInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountUncheckedUpdateInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyWithoutAccountsInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AccountScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<AccountUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AccountUncheckedUpdateWithoutUserInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAccountsInput>;
};

export type AccountUpdateManyMutationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUncheckedUpdateManyWithoutAccountsInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<AccountCreateWithoutUserInput>>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<AccountScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AccountWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<AccountUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUncheckedUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountUncheckedCreateWithoutUserInput;
  update: AccountUncheckedUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<Maybe<AccountWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AccountWhereInput>>>;
  OR?: Maybe<Array<Maybe<AccountWhereInput>>>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>;
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _count?: Maybe<AccountCountAggregateOutputType>;
  _max?: Maybe<AccountMaxAggregateOutputType>;
  _min?: Maybe<AccountMinAggregateOutputType>;
  count?: Maybe<AccountCountAggregateOutputType>;
  max?: Maybe<AccountMaxAggregateOutputType>;
  min?: Maybe<AccountMinAggregateOutputType>;
};

export type AggregateCoach = {
  __typename?: 'AggregateCoach';
  _count?: Maybe<CoachCountAggregateOutputType>;
  _max?: Maybe<CoachMaxAggregateOutputType>;
  _min?: Maybe<CoachMinAggregateOutputType>;
  count?: Maybe<CoachCountAggregateOutputType>;
  max?: Maybe<CoachMaxAggregateOutputType>;
  min?: Maybe<CoachMinAggregateOutputType>;
};

export type AggregateColorScheme = {
  __typename?: 'AggregateColorScheme';
  _count?: Maybe<ColorSchemeCountAggregateOutputType>;
  _max?: Maybe<ColorSchemeMaxAggregateOutputType>;
  _min?: Maybe<ColorSchemeMinAggregateOutputType>;
  count?: Maybe<ColorSchemeCountAggregateOutputType>;
  max?: Maybe<ColorSchemeMaxAggregateOutputType>;
  min?: Maybe<ColorSchemeMinAggregateOutputType>;
};

export type AggregateImage = {
  __typename?: 'AggregateImage';
  _count?: Maybe<ImageCountAggregateOutputType>;
  _max?: Maybe<ImageMaxAggregateOutputType>;
  _min?: Maybe<ImageMinAggregateOutputType>;
  count?: Maybe<ImageCountAggregateOutputType>;
  max?: Maybe<ImageMaxAggregateOutputType>;
  min?: Maybe<ImageMinAggregateOutputType>;
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _count?: Maybe<PlayerCountAggregateOutputType>;
  _max?: Maybe<PlayerMaxAggregateOutputType>;
  _min?: Maybe<PlayerMinAggregateOutputType>;
  count?: Maybe<PlayerCountAggregateOutputType>;
  max?: Maybe<PlayerMaxAggregateOutputType>;
  min?: Maybe<PlayerMinAggregateOutputType>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregateOutputType>;
  _max?: Maybe<SessionMaxAggregateOutputType>;
  _min?: Maybe<SessionMinAggregateOutputType>;
  count?: Maybe<SessionCountAggregateOutputType>;
  max?: Maybe<SessionMaxAggregateOutputType>;
  min?: Maybe<SessionMinAggregateOutputType>;
};

export type AggregateTeam = {
  __typename?: 'AggregateTeam';
  _avg?: Maybe<TeamAvgAggregateOutputType>;
  _count?: Maybe<TeamCountAggregateOutputType>;
  _max?: Maybe<TeamMaxAggregateOutputType>;
  _min?: Maybe<TeamMinAggregateOutputType>;
  _sum?: Maybe<TeamSumAggregateOutputType>;
  avg?: Maybe<TeamAvgAggregateOutputType>;
  count?: Maybe<TeamCountAggregateOutputType>;
  max?: Maybe<TeamMaxAggregateOutputType>;
  min?: Maybe<TeamMinAggregateOutputType>;
  sum?: Maybe<TeamSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
};

export type AggregateVerificationRequest = {
  __typename?: 'AggregateVerificationRequest';
  _count?: Maybe<VerificationRequestCountAggregateOutputType>;
  _max?: Maybe<VerificationRequestMaxAggregateOutputType>;
  _min?: Maybe<VerificationRequestMinAggregateOutputType>;
  count?: Maybe<VerificationRequestCountAggregateOutputType>;
  max?: Maybe<VerificationRequestMaxAggregateOutputType>;
  min?: Maybe<VerificationRequestMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


/** Coach model */
export type Coach = {
  __typename?: 'Coach';
  createdAt: Scalars['DateTime'];
  handle: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CoachCountAggregateOutputType = {
  __typename?: 'CoachCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  handle: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  isAssistant: Scalars['Int'];
  name: Scalars['Int'];
  teamId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CoachCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachCreateManyTeamInputEnvelope = {
  data: CoachCreateManyTeamInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CoachCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
};

export type CoachCreateNestedOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>;
};

export type CoachCreateOrConnectWithoutImageInput = {
  create: CoachUncheckedCreateWithoutImageInput;
  where: CoachWhereUniqueInput;
};

export type CoachCreateOrConnectWithoutTeamInput = {
  create: CoachUncheckedCreateWithoutTeamInput;
  where: CoachWhereUniqueInput;
};

export type CoachCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutCoachesInput>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<ImageCreateNestedOneWithoutCoachInput>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>;
  none?: Maybe<CoachWhereInput>;
  some?: Maybe<CoachWhereInput>;
};

export type CoachMaxAggregateOutputType = {
  __typename?: 'CoachMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachMinAggregateOutputType = {
  __typename?: 'CoachMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imageId?: Maybe<SortOrder>;
  isAssistant?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CoachRelationFilter = {
  is?: Maybe<CoachWhereInput>;
  isNot?: Maybe<CoachWhereInput>;
};

export enum CoachScalarFieldEnum {
  CreatedAt = 'createdAt',
  Handle = 'handle',
  Id = 'id',
  ImageId = 'imageId',
  IsAssistant = 'isAssistant',
  Name = 'name',
  TeamId = 'teamId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type CoachScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CoachScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CoachScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CoachScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  imageId?: Maybe<StringNullableFilter>;
  isAssistant?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  teamId?: Maybe<StringNullableFilter>;
  type?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CoachScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CoachScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  handle?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  imageId?: Maybe<StringNullableWithAggregatesFilter>;
  isAssistant?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  teamId?: Maybe<StringNullableWithAggregatesFilter>;
  type?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CoachUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachUncheckedCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
};

export type CoachUncheckedCreateNestedOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>;
};

export type CoachUncheckedCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachUncheckedCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUncheckedUpdateManyWithoutCoachesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUncheckedUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CoachScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CoachUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<CoachUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<CoachUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type CoachUncheckedUpdateOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CoachUncheckedUpdateWithoutImageInput>;
  upsert?: Maybe<CoachUpsertWithoutImageInput>;
};

export type CoachUncheckedUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUncheckedUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutCoachInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUpdateManyWithWhereWithoutTeamInput = {
  data: CoachUncheckedUpdateManyWithoutCoachesInput;
  where: CoachScalarWhereInput;
};

export type CoachUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CoachCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<CoachCreateWithoutTeamInput>>>;
  createMany?: Maybe<CoachCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CoachScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CoachWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CoachUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<CoachUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<CoachUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type CoachUpdateOneWithoutImageInput = {
  connect?: Maybe<CoachWhereUniqueInput>;
  connectOrCreate?: Maybe<CoachCreateOrConnectWithoutImageInput>;
  create?: Maybe<CoachUncheckedCreateWithoutImageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CoachUncheckedUpdateWithoutImageInput>;
  upsert?: Maybe<CoachUpsertWithoutImageInput>;
};

export type CoachUpdateWithWhereUniqueWithoutTeamInput = {
  data: CoachUncheckedUpdateWithoutTeamInput;
  where: CoachWhereUniqueInput;
};

export type CoachUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutCoachesInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutCoachInput>;
  isAssistant?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CoachUpsertWithWhereUniqueWithoutTeamInput = {
  create: CoachUncheckedCreateWithoutTeamInput;
  update: CoachUncheckedUpdateWithoutTeamInput;
  where: CoachWhereUniqueInput;
};

export type CoachUpsertWithoutImageInput = {
  create: CoachUncheckedCreateWithoutImageInput;
  update: CoachUncheckedUpdateWithoutImageInput;
};

export type CoachWhereInput = {
  AND?: Maybe<Array<Maybe<CoachWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CoachWhereInput>>>;
  OR?: Maybe<Array<Maybe<CoachWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<ImageWhereInput>;
  imageId?: Maybe<StringNullableFilter>;
  isAssistant?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  type?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CoachWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Color scheme model */
export type ColorScheme = {
  __typename?: 'ColorScheme';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  team?: Maybe<Team>;
  updatedAt: Scalars['DateTime'];
};

export type ColorSchemeCountAggregateOutputType = {
  __typename?: 'ColorSchemeCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  primary: Scalars['Int'];
  secondary: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ColorSchemeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutColorSchemeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeCreateNestedOneWithoutTeamInput = {
  connect?: Maybe<ColorSchemeWhereUniqueInput>;
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>;
  create?: Maybe<ColorSchemeUncheckedCreateWithoutTeamInput>;
};

export type ColorSchemeCreateOrConnectWithoutTeamInput = {
  create: ColorSchemeUncheckedCreateWithoutTeamInput;
  where: ColorSchemeWhereUniqueInput;
};

export type ColorSchemeCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeMaxAggregateOutputType = {
  __typename?: 'ColorSchemeMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeMinAggregateOutputType = {
  __typename?: 'ColorSchemeMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  primary?: Maybe<SortOrder>;
  secondary?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ColorSchemeRelationFilter = {
  is?: Maybe<ColorSchemeWhereInput>;
  isNot?: Maybe<ColorSchemeWhereInput>;
};

export enum ColorSchemeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Primary = 'primary',
  Secondary = 'secondary',
  UpdatedAt = 'updatedAt'
}

export type ColorSchemeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ColorSchemeScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  primary?: Maybe<StringWithAggregatesFilter>;
  secondary?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ColorSchemeUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutColorSchemeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeUncheckedCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSchemeUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUncheckedUpdateOneWithoutColorSchemeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUncheckedUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutColorSchemeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUpdateOneWithoutTeamInput = {
  connect?: Maybe<ColorSchemeWhereUniqueInput>;
  connectOrCreate?: Maybe<ColorSchemeCreateOrConnectWithoutTeamInput>;
  create?: Maybe<ColorSchemeUncheckedCreateWithoutTeamInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ColorSchemeUncheckedUpdateWithoutTeamInput>;
  upsert?: Maybe<ColorSchemeUpsertWithoutTeamInput>;
};

export type ColorSchemeUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  primary?: Maybe<StringFieldUpdateOperationsInput>;
  secondary?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorSchemeUpsertWithoutTeamInput = {
  create: ColorSchemeUncheckedCreateWithoutTeamInput;
  update: ColorSchemeUncheckedUpdateWithoutTeamInput;
};

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>;
  OR?: Maybe<Array<Maybe<ColorSchemeWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  primary?: Maybe<StringFilter>;
  secondary?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeNullableFilter>;
  min?: Maybe<NestedDateTimeNullableFilter>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type EnumImageTypeFieldUpdateOperationsInput = {
  set?: Maybe<ImageType>;
};

export type EnumImageTypeFilter = {
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<Maybe<ImageType>>>;
  not?: Maybe<NestedEnumImageTypeFilter>;
  notIn?: Maybe<Array<Maybe<ImageType>>>;
};

export type EnumImageTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumImageTypeFilter>;
  _min?: Maybe<NestedEnumImageTypeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<Maybe<ImageType>>>;
  max?: Maybe<NestedEnumImageTypeFilter>;
  min?: Maybe<NestedEnumImageTypeFilter>;
  not?: Maybe<NestedEnumImageTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ImageType>>>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedFloatNullableFilter>;
  _min?: Maybe<NestedFloatNullableFilter>;
  _sum?: Maybe<NestedFloatNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  max?: Maybe<NestedFloatNullableFilter>;
  min?: Maybe<NestedFloatNullableFilter>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sum?: Maybe<NestedFloatNullableFilter>;
};

/** Image for NBA team, player, or coach */
export type Image = {
  __typename?: 'Image';
  coach?: Maybe<Coach>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  player?: Maybe<Player>;
  team?: Maybe<Team>;
  type: ImageType;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ImageCountAggregateOutputType = {
  __typename?: 'ImageCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
};

export type ImageCreateInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateNestedOneWithoutCoachInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>;
  create?: Maybe<ImageUncheckedCreateWithoutCoachInput>;
};

export type ImageCreateNestedOneWithoutPlayerInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>;
  create?: Maybe<ImageUncheckedCreateWithoutPlayerInput>;
};

export type ImageCreateNestedOneWithoutTeamInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>;
  create?: Maybe<ImageUncheckedCreateWithoutTeamInput>;
};

export type ImageCreateOrConnectWithoutCoachInput = {
  create: ImageUncheckedCreateWithoutCoachInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutPlayerInput = {
  create: ImageUncheckedCreateWithoutPlayerInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutTeamInput = {
  create: ImageUncheckedCreateWithoutTeamInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutCoachInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateWithoutPlayerInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateWithoutTeamInput = {
  coach?: Maybe<CoachCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerCreateNestedOneWithoutImageInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageMaxAggregateOutputType = {
  __typename?: 'ImageMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ImageType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageMinAggregateOutputType = {
  __typename?: 'ImageMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ImageType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ImageRelationFilter = {
  is?: Maybe<ImageWhereInput>;
  isNot?: Maybe<ImageWhereInput>;
};

export enum ImageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type ImageScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  type?: Maybe<EnumImageTypeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export enum ImageType {
  Headshot = 'HEADSHOT',
  Logo = 'LOGO'
}

export type ImageUncheckedCreateInput = {
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateWithoutCoachInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>;
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateWithoutPlayerInput = {
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  team?: Maybe<TeamUncheckedCreateNestedOneWithoutLogoInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateWithoutTeamInput = {
  coach?: Maybe<CoachUncheckedCreateNestedOneWithoutImageInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  player?: Maybe<PlayerUncheckedCreateNestedOneWithoutImageInput>;
  type: ImageType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedUpdateInput = {
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateWithoutCoachInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateWithoutPlayerInput = {
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUncheckedUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateWithoutTeamInput = {
  coach?: Maybe<CoachUncheckedUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUncheckedUpdateOneWithoutImageInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateOneWithoutCoachInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutCoachInput>;
  create?: Maybe<ImageUncheckedCreateWithoutCoachInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUncheckedUpdateWithoutCoachInput>;
  upsert?: Maybe<ImageUpsertWithoutCoachInput>;
};

export type ImageUpdateOneWithoutPlayerInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutPlayerInput>;
  create?: Maybe<ImageUncheckedCreateWithoutPlayerInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUncheckedUpdateWithoutPlayerInput>;
  upsert?: Maybe<ImageUpsertWithoutPlayerInput>;
};

export type ImageUpdateOneWithoutTeamInput = {
  connect?: Maybe<ImageWhereUniqueInput>;
  connectOrCreate?: Maybe<ImageCreateOrConnectWithoutTeamInput>;
  create?: Maybe<ImageUncheckedCreateWithoutTeamInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ImageUncheckedUpdateWithoutTeamInput>;
  upsert?: Maybe<ImageUpsertWithoutTeamInput>;
};

export type ImageUpdateWithoutCoachInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneWithoutImageInput>;
  team?: Maybe<TeamUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutPlayerInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutLogoInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutTeamInput = {
  coach?: Maybe<CoachUpdateOneWithoutImageInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneWithoutImageInput>;
  type?: Maybe<EnumImageTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpsertWithoutCoachInput = {
  create: ImageUncheckedCreateWithoutCoachInput;
  update: ImageUncheckedUpdateWithoutCoachInput;
};

export type ImageUpsertWithoutPlayerInput = {
  create: ImageUncheckedCreateWithoutPlayerInput;
  update: ImageUncheckedUpdateWithoutPlayerInput;
};

export type ImageUpsertWithoutTeamInput = {
  create: ImageUncheckedCreateWithoutTeamInput;
  update: ImageUncheckedUpdateWithoutTeamInput;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<Maybe<ImageWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ImageWhereInput>>>;
  coach?: Maybe<CoachWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  player?: Maybe<PlayerWhereInput>;
  team?: Maybe<TeamWhereInput>;
  type?: Maybe<EnumImageTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  url?: Maybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createOneAccount: Account;
  createOneCoach: Coach;
  createOneColorScheme: ColorScheme;
  createOneImage: Image;
  createOnePlayer: Player;
  createOneSession: Session;
  createOneTeam: Team;
  createOneUser: User;
  createOneVerificationRequest: VerificationRequest;
  deleteManyAccount: BatchPayload;
  deleteManyCoach: BatchPayload;
  deleteManyColorScheme: BatchPayload;
  deleteManyImage: BatchPayload;
  deleteManyPlayer: BatchPayload;
  deleteManySession: BatchPayload;
  deleteManyTeam: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyVerificationRequest: BatchPayload;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCoach?: Maybe<Coach>;
  deleteOneColorScheme?: Maybe<ColorScheme>;
  deleteOneImage?: Maybe<Image>;
  deleteOnePlayer?: Maybe<Player>;
  deleteOneSession?: Maybe<Session>;
  deleteOneTeam?: Maybe<Team>;
  deleteOneUser?: Maybe<User>;
  deleteOneVerificationRequest?: Maybe<VerificationRequest>;
  updateManyAccount: BatchPayload;
  updateManyCoach: BatchPayload;
  updateManyColorScheme: BatchPayload;
  updateManyImage: BatchPayload;
  updateManyPlayer: BatchPayload;
  updateManySession: BatchPayload;
  updateManyTeam: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyVerificationRequest: BatchPayload;
  updateOneAccount: Account;
  updateOneCoach: Coach;
  updateOneColorScheme: ColorScheme;
  updateOneImage: Image;
  updateOnePlayer: Player;
  updateOneSession: Session;
  updateOneTeam: Team;
  updateOneUser: User;
  updateOneVerificationRequest: VerificationRequest;
  upsertOneAccount: Account;
  upsertOneCoach: Coach;
  upsertOneColorScheme: ColorScheme;
  upsertOneImage: Image;
  upsertOnePlayer: Player;
  upsertOneSession: Session;
  upsertOneTeam: Team;
  upsertOneUser: User;
  upsertOneVerificationRequest: VerificationRequest;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateOneCoachArgs = {
  data: CoachCreateInput;
};


export type MutationCreateOneColorSchemeArgs = {
  data: ColorSchemeCreateInput;
};


export type MutationCreateOneImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateOnePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneVerificationRequestArgs = {
  data: VerificationRequestCreateInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};


export type MutationDeleteManyCoachArgs = {
  where?: Maybe<CoachWhereInput>;
};


export type MutationDeleteManyColorSchemeArgs = {
  where?: Maybe<ColorSchemeWhereInput>;
};


export type MutationDeleteManyImageArgs = {
  where?: Maybe<ImageWhereInput>;
};


export type MutationDeleteManyPlayerArgs = {
  where?: Maybe<PlayerWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: Maybe<SessionWhereInput>;
};


export type MutationDeleteManyTeamArgs = {
  where?: Maybe<TeamWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationRequestArgs = {
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneCoachArgs = {
  where: CoachWhereUniqueInput;
};


export type MutationDeleteOneColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput;
};


export type MutationDeleteOneImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteOnePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: Maybe<AccountWhereInput>;
};


export type MutationUpdateManyCoachArgs = {
  data: CoachUpdateManyMutationInput;
  where?: Maybe<CoachWhereInput>;
};


export type MutationUpdateManyColorSchemeArgs = {
  data: ColorSchemeUpdateManyMutationInput;
  where?: Maybe<ColorSchemeWhereInput>;
};


export type MutationUpdateManyImageArgs = {
  data: ImageUpdateManyMutationInput;
  where?: Maybe<ImageWhereInput>;
};


export type MutationUpdateManyPlayerArgs = {
  data: PlayerUpdateManyMutationInput;
  where?: Maybe<PlayerWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};


export type MutationUpdateManyTeamArgs = {
  data: TeamUpdateManyMutationInput;
  where?: Maybe<TeamWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationRequestArgs = {
  data: VerificationRequestUpdateManyMutationInput;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneCoachArgs = {
  data: CoachUpdateInput;
  where: CoachWhereUniqueInput;
};


export type MutationUpdateOneColorSchemeArgs = {
  data: ColorSchemeUpdateInput;
  where: ColorSchemeWhereUniqueInput;
};


export type MutationUpdateOneImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateOnePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVerificationRequestArgs = {
  data: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneCoachArgs = {
  create: CoachCreateInput;
  update: CoachUpdateInput;
  where: CoachWhereUniqueInput;
};


export type MutationUpsertOneColorSchemeArgs = {
  create: ColorSchemeCreateInput;
  update: ColorSchemeUpdateInput;
  where: ColorSchemeWhereUniqueInput;
};


export type MutationUpsertOneImageArgs = {
  create: ImageCreateInput;
  update: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpsertOnePlayerArgs = {
  create: PlayerCreateInput;
  update: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneTeamArgs = {
  create: TeamCreateInput;
  update: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVerificationRequestArgs = {
  create: VerificationRequestCreateInput;
  update: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeNullableFilter>;
  min?: Maybe<NestedDateTimeNullableFilter>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumImageTypeFilter = {
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<Maybe<ImageType>>>;
  not?: Maybe<NestedEnumImageTypeFilter>;
  notIn?: Maybe<Array<Maybe<ImageType>>>;
};

export type NestedEnumImageTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumImageTypeFilter>;
  _min?: Maybe<NestedEnumImageTypeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<ImageType>;
  in?: Maybe<Array<Maybe<ImageType>>>;
  max?: Maybe<NestedEnumImageTypeFilter>;
  min?: Maybe<NestedEnumImageTypeFilter>;
  not?: Maybe<NestedEnumImageTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ImageType>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedFloatNullableFilter>;
  _min?: Maybe<NestedFloatNullableFilter>;
  _sum?: Maybe<NestedFloatNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  max?: Maybe<NestedFloatNullableFilter>;
  min?: Maybe<NestedFloatNullableFilter>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sum?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

/** Player model */
export type Player = {
  __typename?: 'Player';
  createdAt: Scalars['DateTime'];
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  weight: Scalars['String'];
};

export type PlayerCountAggregateOutputType = {
  __typename?: 'PlayerCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  handle: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  name: Scalars['Int'];
  number: Scalars['Int'];
  position: Scalars['Int'];
  slug: Scalars['Int'];
  teamId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weight: Scalars['Int'];
};

export type PlayerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerCreateManyTeamInputEnvelope = {
  data: PlayerCreateManyTeamInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PlayerCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
};

export type PlayerCreateNestedOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>;
};

export type PlayerCreateOrConnectWithoutImageInput = {
  create: PlayerUncheckedCreateWithoutImageInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutTeamInput = {
  create: PlayerUncheckedCreateWithoutTeamInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutPlayersInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<ImageCreateNestedOneWithoutPlayerInput>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>;
  none?: Maybe<PlayerWhereInput>;
  some?: Maybe<PlayerWhereInput>;
};

export type PlayerMaxAggregateOutputType = {
  __typename?: 'PlayerMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
};

export type PlayerMinAggregateOutputType = {
  __typename?: 'PlayerMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
};

export type PlayerOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imageId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
};

export type PlayerRelationFilter = {
  is?: Maybe<PlayerWhereInput>;
  isNot?: Maybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Handle = 'handle',
  Height = 'height',
  Id = 'id',
  ImageId = 'imageId',
  Name = 'name',
  Number = 'number',
  Position = 'position',
  Slug = 'slug',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type PlayerScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  height?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  imageId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  number?: Maybe<StringNullableFilter>;
  position?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringFilter>;
  teamId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  weight?: Maybe<StringFilter>;
};

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PlayerScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  handle?: Maybe<StringWithAggregatesFilter>;
  height?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  imageId?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  number?: Maybe<StringNullableWithAggregatesFilter>;
  position?: Maybe<StringNullableWithAggregatesFilter>;
  slug?: Maybe<StringWithAggregatesFilter>;
  teamId?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  weight?: Maybe<StringWithAggregatesFilter>;
};

export type PlayerUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
};

export type PlayerUncheckedCreateNestedOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>;
};

export type PlayerUncheckedCreateWithoutImageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerUncheckedCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['String'];
};

export type PlayerUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUncheckedUpdateManyWithoutPlayersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUncheckedUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PlayerUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<PlayerUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<PlayerUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type PlayerUncheckedUpdateOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerUncheckedUpdateWithoutImageInput>;
  upsert?: Maybe<PlayerUpsertWithoutImageInput>;
};

export type PlayerUncheckedUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUncheckedUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  imageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyWithWhereWithoutTeamInput = {
  data: PlayerUncheckedUpdateManyWithoutPlayersInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PlayerCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<PlayerCreateWithoutTeamInput>>>;
  createMany?: Maybe<PlayerCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PlayerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PlayerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PlayerUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<PlayerUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<PlayerUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type PlayerUpdateOneWithoutImageInput = {
  connect?: Maybe<PlayerWhereUniqueInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutImageInput>;
  create?: Maybe<PlayerUncheckedCreateWithoutImageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerUncheckedUpdateWithoutImageInput>;
  upsert?: Maybe<PlayerUpsertWithoutImageInput>;
};

export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
  data: PlayerUncheckedUpdateWithoutTeamInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithoutImageInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutPlayersInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<ImageUpdateOneWithoutPlayerInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<NullableStringFieldUpdateOperationsInput>;
  position?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
  create: PlayerUncheckedCreateWithoutTeamInput;
  update: PlayerUncheckedUpdateWithoutTeamInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithoutImageInput = {
  create: PlayerUncheckedCreateWithoutImageInput;
  update: PlayerUncheckedUpdateWithoutImageInput;
};

export type PlayerWhereInput = {
  AND?: Maybe<Array<Maybe<PlayerWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PlayerWhereInput>>>;
  OR?: Maybe<Array<Maybe<PlayerWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  handle?: Maybe<StringFilter>;
  height?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<ImageWhereInput>;
  imageId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  number?: Maybe<StringNullableFilter>;
  position?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  weight?: Maybe<StringFilter>;
};

export type PlayerWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAccount?: Maybe<AggregateAccount>;
  aggregateCoach?: Maybe<AggregateCoach>;
  aggregateColorScheme?: Maybe<AggregateColorScheme>;
  aggregateImage?: Maybe<AggregateImage>;
  aggregatePlayer?: Maybe<AggregatePlayer>;
  aggregateSession?: Maybe<AggregateSession>;
  aggregateTeam?: Maybe<AggregateTeam>;
  aggregateUser?: Maybe<AggregateUser>;
  aggregateVerificationRequest?: Maybe<AggregateVerificationRequest>;
  findFirstAccount?: Maybe<Account>;
  findFirstCoach?: Maybe<Coach>;
  findFirstColorScheme?: Maybe<ColorScheme>;
  findFirstImage?: Maybe<Image>;
  findFirstPlayer?: Maybe<Player>;
  findFirstSession?: Maybe<Session>;
  findFirstTeam?: Maybe<Team>;
  findFirstUser?: Maybe<User>;
  findFirstVerificationRequest?: Maybe<VerificationRequest>;
  findManyAccount: Array<Account>;
  findManyAccountCount: Scalars['Int'];
  findManyCoach: Array<Coach>;
  findManyCoachCount: Scalars['Int'];
  findManyColorScheme: Array<ColorScheme>;
  findManyColorSchemeCount: Scalars['Int'];
  findManyImage: Array<Image>;
  findManyImageCount: Scalars['Int'];
  findManyPlayer: Array<Player>;
  findManyPlayerCount: Scalars['Int'];
  findManySession: Array<Session>;
  findManySessionCount: Scalars['Int'];
  findManyTeam: Array<Team>;
  findManyTeamCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findManyVerificationRequest: Array<VerificationRequest>;
  findManyVerificationRequestCount: Scalars['Int'];
  findUniqueAccount?: Maybe<Account>;
  findUniqueCoach?: Maybe<Coach>;
  findUniqueColorScheme?: Maybe<ColorScheme>;
  findUniqueImage?: Maybe<Image>;
  findUniquePlayer?: Maybe<Player>;
  findUniqueSession?: Maybe<Session>;
  findUniqueTeam?: Maybe<Team>;
  findUniqueUser?: Maybe<User>;
  findUniqueVerificationRequest?: Maybe<VerificationRequest>;
};


export type QueryAggregateAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<AccountScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryAggregateCoachArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>;
  distinct?: Maybe<CoachScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CoachWhereInput>;
};


export type QueryAggregateColorSchemeArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>;
  distinct?: Maybe<ColorSchemeScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ColorSchemeWhereInput>;
};


export type QueryAggregateImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryAggregatePlayerArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>;
  distinct?: Maybe<PlayerScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlayerWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<SessionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryAggregateTeamArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<TeamScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryAggregateVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<VerificationRequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<AccountScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryFindFirstCoachArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>;
  distinct?: Maybe<CoachScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CoachWhereInput>;
};


export type QueryFindFirstColorSchemeArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>;
  distinct?: Maybe<ColorSchemeScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ColorSchemeWhereInput>;
};


export type QueryFindFirstImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindFirstPlayerArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>;
  distinct?: Maybe<PlayerScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlayerWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<SessionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryFindFirstTeamArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<TeamScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<VerificationRequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryFindManyAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<AccountScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryFindManyAccountCountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<AccountScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AccountOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryFindManyCoachArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>;
  distinct?: Maybe<CoachScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CoachWhereInput>;
};


export type QueryFindManyCoachCountArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>;
  distinct?: Maybe<CoachScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CoachOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CoachWhereInput>;
};


export type QueryFindManyColorSchemeArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>;
  distinct?: Maybe<ColorSchemeScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ColorSchemeWhereInput>;
};


export type QueryFindManyColorSchemeCountArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>;
  distinct?: Maybe<ColorSchemeScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ColorSchemeOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ColorSchemeWhereInput>;
};


export type QueryFindManyImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindManyImageCountArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindManyPlayerArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>;
  distinct?: Maybe<PlayerScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlayerWhereInput>;
};


export type QueryFindManyPlayerCountArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>;
  distinct?: Maybe<PlayerScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PlayerOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlayerWhereInput>;
};


export type QueryFindManySessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<SessionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryFindManySessionCountArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<SessionScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<SessionOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryFindManyTeamArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<TeamScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryFindManyTeamCountArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<TeamScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<VerificationRequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryFindManyVerificationRequestCountArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<VerificationRequestScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<VerificationRequestOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryFindUniqueAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryFindUniqueCoachArgs = {
  where: CoachWhereUniqueInput;
};


export type QueryFindUniqueColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput;
};


export type QueryFindUniqueImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryFindUniquePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryFindUniqueSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryFindUniqueTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUniqueVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Session = {
  __typename?: 'Session';
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type SessionCountAggregateOutputType = {
  __typename?: 'SessionCountAggregateOutputType';
  _all: Scalars['Int'];
  accessToken: Scalars['Int'];
  createdAt: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCreateInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: SessionCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionUncheckedCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
};

export type SessionMaxAggregateOutputType = {
  __typename?: 'SessionMaxAggregateOutputType';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMinAggregateOutputType = {
  __typename?: 'SessionMinAggregateOutputType';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionOrderByInput = {
  accessToken?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  AccessToken = 'accessToken',
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: Maybe<Array<Maybe<SessionScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<SessionScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<SessionScalarWhereInput>>>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<SessionScalarWhereWithAggregatesInput>>>;
  accessToken?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  sessionToken?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type SessionUncheckedCreateInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SessionUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionUncheckedCreateWithoutUserInput = {
  accessToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SessionUncheckedUpdateInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyWithoutSessionsInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<SessionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<SessionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type SessionUncheckedUpdateWithoutUserInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type SessionUpdateManyMutationInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUncheckedUpdateManyWithoutSessionsInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<SessionCreateWithoutUserInput>>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<SessionScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<SessionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<SessionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUncheckedUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionUncheckedCreateWithoutUserInput;
  update: SessionUncheckedUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<Maybe<SessionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<SessionWhereInput>>>;
  OR?: Maybe<Array<Maybe<SessionWhereInput>>>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  accessToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

/** Team model */
export type Team = {
  __typename?: 'Team';
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches: Array<Coach>;
  colorScheme?: Maybe<ColorScheme>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt: Scalars['DateTime'];
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logo?: Maybe<Image>;
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players: Array<Player>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};


/** Team model */
export type TeamCoachesArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>;
  distinct?: Maybe<CoachScalarFieldEnum>;
  orderBy?: Maybe<CoachOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CoachWhereInput>;
};


/** Team model */
export type TeamPlayersArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>;
  distinct?: Maybe<PlayerScalarFieldEnum>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlayerWhereInput>;
};

export type TeamAvgAggregateOutputType = {
  __typename?: 'TeamAvgAggregateOutputType';
  losses?: Maybe<Scalars['Float']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

export type TeamCountAggregateOutputType = {
  __typename?: 'TeamCountAggregateOutputType';
  _all: Scalars['Int'];
  abbreviation: Scalars['Int'];
  city: Scalars['Int'];
  colorSchemeId: Scalars['Int'];
  conference: Scalars['Int'];
  createdAt: Scalars['Int'];
  division: Scalars['Int'];
  established: Scalars['Int'];
  handle: Scalars['Int'];
  id: Scalars['Int'];
  logoId: Scalars['Int'];
  losses: Scalars['Int'];
  name: Scalars['Int'];
  slug: Scalars['Int'];
  updatedAt: Scalars['Int'];
  winPercentage: Scalars['Int'];
  wins: Scalars['Int'];
};

export type TeamCreateInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamCreateManyInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamCreateNestedOneWithoutCoachesInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>;
  create?: Maybe<TeamUncheckedCreateWithoutCoachesInput>;
};

export type TeamCreateNestedOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>;
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>;
};

export type TeamCreateNestedOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>;
};

export type TeamCreateNestedOneWithoutPlayersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>;
  create?: Maybe<TeamUncheckedCreateWithoutPlayersInput>;
};

export type TeamCreateOrConnectWithoutCoachesInput = {
  create: TeamUncheckedCreateWithoutCoachesInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutColorSchemeInput = {
  create: TeamUncheckedCreateWithoutColorSchemeInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutLogoInput = {
  create: TeamUncheckedCreateWithoutLogoInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutPlayersInput = {
  create: TeamUncheckedCreateWithoutPlayersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutCoachesInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutColorSchemeInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutLogoInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutPlayersInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachCreateNestedManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeCreateNestedOneWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logo?: Maybe<ImageCreateNestedOneWithoutTeamInput>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamMaxAggregateOutputType = {
  __typename?: 'TeamMaxAggregateOutputType';
  abbreviation?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  division?: Maybe<Scalars['String']>;
  established?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamMinAggregateOutputType = {
  __typename?: 'TeamMinAggregateOutputType';
  abbreviation?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  division?: Maybe<Scalars['String']>;
  established?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamOrderByInput = {
  abbreviation?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  colorSchemeId?: Maybe<SortOrder>;
  conference?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  division?: Maybe<SortOrder>;
  established?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  losses?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  winPercentage?: Maybe<SortOrder>;
  wins?: Maybe<SortOrder>;
};

export type TeamRelationFilter = {
  is?: Maybe<TeamWhereInput>;
  isNot?: Maybe<TeamWhereInput>;
};

export enum TeamScalarFieldEnum {
  Abbreviation = 'abbreviation',
  City = 'city',
  ColorSchemeId = 'colorSchemeId',
  Conference = 'conference',
  CreatedAt = 'createdAt',
  Division = 'division',
  Established = 'established',
  Handle = 'handle',
  Id = 'id',
  LogoId = 'logoId',
  Losses = 'losses',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt',
  WinPercentage = 'winPercentage',
  Wins = 'wins'
}

export type TeamScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  abbreviation?: Maybe<StringWithAggregatesFilter>;
  city?: Maybe<StringWithAggregatesFilter>;
  colorSchemeId?: Maybe<StringNullableWithAggregatesFilter>;
  conference?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  division?: Maybe<StringWithAggregatesFilter>;
  established?: Maybe<StringWithAggregatesFilter>;
  handle?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  logoId?: Maybe<StringNullableWithAggregatesFilter>;
  losses?: Maybe<IntNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  slug?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  winPercentage?: Maybe<FloatNullableWithAggregatesFilter>;
  wins?: Maybe<IntNullableWithAggregatesFilter>;
};

export type TeamSumAggregateOutputType = {
  __typename?: 'TeamSumAggregateOutputType';
  losses?: Maybe<Scalars['Int']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedCreateInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedCreateNestedOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>;
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>;
};

export type TeamUncheckedCreateNestedOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>;
};

export type TeamUncheckedCreateWithoutCoachesInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedCreateWithoutColorSchemeInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedCreateWithoutLogoInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players?: Maybe<PlayerUncheckedCreateNestedManyWithoutTeamInput>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedCreateWithoutPlayersInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches?: Maybe<CoachUncheckedCreateNestedManyWithoutTeamInput>;
  colorSchemeId?: Maybe<Scalars['String']>;
  conference: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  logoId?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamUncheckedUpdateInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>;
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateManyInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>;
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutColorSchemeInput>;
  upsert?: Maybe<TeamUpsertWithoutColorSchemeInput>;
};

export type TeamUncheckedUpdateOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutLogoInput>;
  upsert?: Maybe<TeamUpsertWithoutLogoInput>;
};

export type TeamUncheckedUpdateWithoutCoachesInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateWithoutColorSchemeInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateWithoutLogoInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>;
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUncheckedUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateWithoutPlayersInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUncheckedUpdateManyWithoutTeamInput>;
  colorSchemeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateManyMutationInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateOneWithoutCoachesInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCoachesInput>;
  create?: Maybe<TeamUncheckedCreateWithoutCoachesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutCoachesInput>;
  upsert?: Maybe<TeamUpsertWithoutCoachesInput>;
};

export type TeamUpdateOneWithoutColorSchemeInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutColorSchemeInput>;
  create?: Maybe<TeamUncheckedCreateWithoutColorSchemeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutColorSchemeInput>;
  upsert?: Maybe<TeamUpsertWithoutColorSchemeInput>;
};

export type TeamUpdateOneWithoutLogoInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutLogoInput>;
  create?: Maybe<TeamUncheckedCreateWithoutLogoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutLogoInput>;
  upsert?: Maybe<TeamUpsertWithoutLogoInput>;
};

export type TeamUpdateOneWithoutPlayersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutPlayersInput>;
  create?: Maybe<TeamUncheckedCreateWithoutPlayersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUncheckedUpdateWithoutPlayersInput>;
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>;
};

export type TeamUpdateWithoutCoachesInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutColorSchemeInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutLogoInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutPlayersInput = {
  abbreviation?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  coaches?: Maybe<CoachUpdateManyWithoutTeamInput>;
  colorScheme?: Maybe<ColorSchemeUpdateOneWithoutTeamInput>;
  conference?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<StringFieldUpdateOperationsInput>;
  established?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  logo?: Maybe<ImageUpdateOneWithoutTeamInput>;
  losses?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  winPercentage?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  wins?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutCoachesInput = {
  create: TeamUncheckedCreateWithoutCoachesInput;
  update: TeamUncheckedUpdateWithoutCoachesInput;
};

export type TeamUpsertWithoutColorSchemeInput = {
  create: TeamUncheckedCreateWithoutColorSchemeInput;
  update: TeamUncheckedUpdateWithoutColorSchemeInput;
};

export type TeamUpsertWithoutLogoInput = {
  create: TeamUncheckedCreateWithoutLogoInput;
  update: TeamUncheckedUpdateWithoutLogoInput;
};

export type TeamUpsertWithoutPlayersInput = {
  create: TeamUncheckedCreateWithoutPlayersInput;
  update: TeamUncheckedUpdateWithoutPlayersInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<Maybe<TeamWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeamWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeamWhereInput>>>;
  abbreviation?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  coaches?: Maybe<CoachListRelationFilter>;
  colorScheme?: Maybe<ColorSchemeWhereInput>;
  colorSchemeId?: Maybe<StringNullableFilter>;
  conference?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  division?: Maybe<StringFilter>;
  established?: Maybe<StringFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  logo?: Maybe<ImageWhereInput>;
  logoId?: Maybe<StringNullableFilter>;
  losses?: Maybe<IntNullableFilter>;
  name?: Maybe<StringFilter>;
  players?: Maybe<PlayerListRelationFilter>;
  slug?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  winPercentage?: Maybe<FloatNullableFilter>;
  wins?: Maybe<IntNullableFilter>;
};

export type TeamWhereUniqueInput = {
  abbreviation?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  apple?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions: Array<Session>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type UserAccountsArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<AccountScalarFieldEnum>;
  orderBy?: Maybe<AccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<SessionScalarFieldEnum>;
  orderBy?: Maybe<SessionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  apple: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  facebook: Scalars['Int'];
  github: Scalars['Int'];
  google: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  name: Scalars['Int'];
  twitter: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: Maybe<UserUncheckedCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: Maybe<UserUncheckedCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserUncheckedCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserUncheckedCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  apple?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  facebook?: Maybe<SortOrder>;
  github?: Maybe<SortOrder>;
  google?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  twitter?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Apple = 'apple',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Facebook = 'facebook',
  Github = 'github',
  Google = 'google',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Twitter = 'twitter',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  apple?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringNullableWithAggregatesFilter>;
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>;
  facebook?: Maybe<StringNullableWithAggregatesFilter>;
  github?: Maybe<StringNullableWithAggregatesFilter>;
  google?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  twitter?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  accounts?: Maybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutAccountsInput = {
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutSessionsInput = {
  accounts?: Maybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  apple?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  accounts?: Maybe<AccountUncheckedUpdateManyWithoutUserInput>;
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUncheckedUpdateManyWithoutUserInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutAccountsInput = {
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUncheckedUpdateManyWithoutUserInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutSessionsInput = {
  accounts?: Maybe<AccountUncheckedUpdateManyWithoutUserInput>;
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>;
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: Maybe<UserUncheckedCreateWithoutAccountsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutAccountsInput>;
  upsert?: Maybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: Maybe<UserUncheckedCreateWithoutSessionsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutSessionsInput>;
  upsert?: Maybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateWithoutAccountsInput = {
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>;
  apple?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  github?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserUncheckedCreateWithoutAccountsInput;
  update: UserUncheckedUpdateWithoutAccountsInput;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserUncheckedCreateWithoutSessionsInput;
  update: UserUncheckedUpdateWithoutSessionsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  accounts?: Maybe<AccountListRelationFilter>;
  apple?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  facebook?: Maybe<StringNullableFilter>;
  github?: Maybe<StringNullableFilter>;
  google?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  sessions?: Maybe<SessionListRelationFilter>;
  twitter?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type VerificationRequest = {
  __typename?: 'VerificationRequest';
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VerificationRequestCountAggregateOutputType = {
  __typename?: 'VerificationRequestCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type VerificationRequestCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestMaxAggregateOutputType = {
  __typename?: 'VerificationRequestMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestMinAggregateOutputType = {
  __typename?: 'VerificationRequestMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum VerificationRequestScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  Identifier = 'identifier',
  Token = 'token',
  UpdatedAt = 'updatedAt'
}

export type VerificationRequestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<VerificationRequestScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  identifier?: Maybe<StringWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type VerificationRequestUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VerificationRequestUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationRequestWhereInput = {
  AND?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>;
  NOT?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>;
  OR?: Maybe<Array<Maybe<VerificationRequestWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  identifier?: Maybe<StringFilter>;
  token?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type VerificationRequestWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  identifier_token?: Maybe<VerificationRequestIdentifierTokenCompoundUniqueInput>;
  token?: Maybe<Scalars['String']>;
};

export type PlayerProfileFragment = { __typename?: 'Player', id: string, name: string, height: string, weight: string, position?: Maybe<string>, number?: Maybe<string> };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'Query', findManyTeam: Array<{ __typename?: 'Team', id: string, city: string, name: string, slug: string, wins?: Maybe<number>, losses?: Maybe<number>, logo?: Maybe<{ __typename?: 'Image', id: string }> }> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string, name?: Maybe<string>, image?: Maybe<string> }> };

export type TeamQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeamQuery = { __typename?: 'Query', findUniqueTeam?: Maybe<{ __typename?: 'Team', id: string, city: string, name: string, division: string, conference: string, wins?: Maybe<number>, losses?: Maybe<number>, colorScheme?: Maybe<{ __typename?: 'ColorScheme', primary: string, secondary: string }>, logo?: Maybe<{ __typename?: 'Image', id: string }>, players: Array<{ __typename?: 'Player', id: string, name: string, position?: Maybe<string>, number?: Maybe<string>, height: string, weight: string, image?: Maybe<{ __typename?: 'Image', id: string }> }>, coaches: Array<{ __typename?: 'Coach', id: string, name: string, type?: Maybe<string> }> }> };
