import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { NexusContext } from 'src/services/graphql/context';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type AccountWhereUniqueInput = {
  id: Scalars['String'];
};

export type AccuontOrderByInput = {
  name: SortOrder;
};


/** Coach model */
export type Coach = {
  __typename?: 'Coach';
  createdAt: Scalars['DateTime'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['String']>;
  isAssistant?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CoachOrderByInput = {
  name: SortOrder;
};

export type CoachWhereInput = {
  id: Scalars['String'];
  name: StringFilter;
};

export type CoachWhereUniqueInput = {
  id: Scalars['String'];
};

/** Color scheme model */
export type ColorScheme = {
  __typename?: 'ColorScheme';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  primary: Scalars['String'];
  secondary: Scalars['String'];
  team?: Maybe<Team>;
  updatedAt: Scalars['DateTime'];
};


/** Image for NBA team, player, or coach */
export type Image = {
  __typename?: 'Image';
  coach?: Maybe<Coach>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  player?: Maybe<Player>;
  team?: Maybe<Team>;
  type: ImageType;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum ImageType {
  Headshot = 'HEADSHOT',
  Logo = 'LOGO'
}

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


/** Player model */
export type Player = {
  __typename?: 'Player';
  createdAt: Scalars['DateTime'];
  handle: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['ID'];
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

export type PlayerOrderByInput = {
  name: SortOrder;
};

export type PlayerWhereInput = {
  id: Scalars['String'];
  name: StringFilter;
};

export type PlayerWhereUniqueInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts?: Maybe<Array<Maybe<Account>>>;
  allCoaches?: Maybe<Array<Maybe<Coach>>>;
  allPlayers?: Maybe<Array<Maybe<Player>>>;
  allTeams?: Maybe<Array<Maybe<Team>>>;
  coach?: Maybe<Coach>;
  colorScheme?: Maybe<ColorScheme>;
  colorSchemeByTeam?: Maybe<ColorScheme>;
  colorSchemes?: Maybe<Array<Maybe<ColorScheme>>>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Maybe<Image>>>;
  player?: Maybe<Player>;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Maybe<Session>>>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryAccountArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCoachArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryColorSchemeArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryColorSchemeByTeamArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryPlayerArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySessionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTeamArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  id: Scalars['ID'];
  sessionToken: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type SessionOrderByInput = {
  name: SortOrder;
};

export type SessionWhereUniqueInput = {
  id: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

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

/** Team model */
export type Team = {
  __typename?: 'Team';
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  coaches: Array<Coach>;
  colorScheme?: Maybe<ColorScheme>;
  conference: Scalars['String'];
  createdAt: Scalars['DateTime'];
  division: Scalars['String'];
  established: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  logo?: Maybe<Image>;
  losses?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  players: Array<Player>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  winPercentage?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamOrderByInput = {
  name: SortOrder;
};

export type TeamWhereInput = {
  id: Scalars['String'];
  name: StringFilter;
};

export type TeamWhereUniqueInput = {
  id: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  apple?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions: Array<Session>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserOrderByInput = {
  name: SortOrder;
};

export type UserWhereUniqueInput = {
  id: Scalars['String'];
};

export type PlayerProfileFragment = (
  { __typename?: 'Player' }
  & Pick<Player, 'id' | 'name' | 'height' | 'weight' | 'position' | 'number'>
);

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = (
  { __typename?: 'Query' }
  & { allTeams?: Maybe<Array<Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'city' | 'name' | 'slug' | 'wins' | 'losses'>
    & { logo?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id'>
    )> }
  )>>> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'image'>
  )>>> }
);

export type TeamQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'city' | 'name' | 'division' | 'conference' | 'wins' | 'losses'>
    & { colorScheme?: Maybe<(
      { __typename?: 'ColorScheme' }
      & Pick<ColorScheme, 'primary' | 'secondary'>
    )>, logo?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id'>
    )>, players: Array<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name' | 'position' | 'number' | 'height' | 'weight'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id'>
      )> }
    )>, coaches: Array<(
      { __typename?: 'Coach' }
      & Pick<Coach, 'id' | 'name' | 'type'>
    )> }
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccuontOrderByInput: AccuontOrderByInput;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Coach: ResolverTypeWrapper<Coach>;
  CoachOrderByInput: CoachOrderByInput;
  CoachWhereInput: CoachWhereInput;
  CoachWhereUniqueInput: CoachWhereUniqueInput;
  ColorScheme: ResolverTypeWrapper<ColorScheme>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Image: ResolverTypeWrapper<Image>;
  ImageType: ImageType;
  IntFilter: IntFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  Player: ResolverTypeWrapper<Player>;
  PlayerOrderByInput: PlayerOrderByInput;
  PlayerWhereInput: PlayerWhereInput;
  PlayerWhereUniqueInput: PlayerWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<Session>;
  SessionOrderByInput: SessionOrderByInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  SortOrder: SortOrder;
  StringFilter: StringFilter;
  Team: ResolverTypeWrapper<Team>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  TeamOrderByInput: TeamOrderByInput;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserOrderByInput: UserOrderByInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  ID: Scalars['ID'];
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccuontOrderByInput: AccuontOrderByInput;
  Bytes: Scalars['Bytes'];
  Coach: Coach;
  CoachOrderByInput: CoachOrderByInput;
  CoachWhereInput: CoachWhereInput;
  CoachWhereUniqueInput: CoachWhereUniqueInput;
  ColorScheme: ColorScheme;
  DateTime: Scalars['DateTime'];
  Image: Image;
  IntFilter: IntFilter;
  Int: Scalars['Int'];
  Json: Scalars['Json'];
  Player: Player;
  PlayerOrderByInput: PlayerOrderByInput;
  PlayerWhereInput: PlayerWhereInput;
  PlayerWhereUniqueInput: PlayerWhereUniqueInput;
  Query: {};
  Session: Session;
  SessionOrderByInput: SessionOrderByInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  StringFilter: StringFilter;
  Team: Team;
  Float: Scalars['Float'];
  TeamOrderByInput: TeamOrderByInput;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  Upload: Scalars['Upload'];
  User: User;
  UserOrderByInput: UserOrderByInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Boolean: Scalars['Boolean'];
};

export type AccountResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessTokenExpires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CoachResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Coach'] = ResolversParentTypes['Coach']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAssistant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSchemeResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['ColorScheme'] = ResolversParentTypes['ColorScheme']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  primary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ImageResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  coach?: Resolver<Maybe<ResolversTypes['Coach']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ImageType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type PlayerResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, never>>;
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  allCoaches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coach']>>>, ParentType, ContextType>;
  allPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  allTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  coach?: Resolver<Maybe<ResolversTypes['Coach']>, ParentType, ContextType, RequireFields<QueryCoachArgs, never>>;
  colorScheme?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType, RequireFields<QueryColorSchemeArgs, never>>;
  colorSchemeByTeam?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType, RequireFields<QueryColorSchemeByTeamArgs, never>>;
  colorSchemes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ColorScheme']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<QueryImageArgs, never>>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, never>>;
  session?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, RequireFields<QuerySessionArgs, never>>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type SessionResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coaches?: Resolver<Array<ResolversTypes['Coach']>, ParentType, ContextType>;
  colorScheme?: Resolver<Maybe<ResolversTypes['ColorScheme']>, ParentType, ContextType>;
  conference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  established?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['Player']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  winPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = NexusContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  apple?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions?: Resolver<Array<ResolversTypes['Session']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = NexusContext> = {
  Account?: AccountResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Coach?: CoachResolvers<ContextType>;
  ColorScheme?: ColorSchemeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = NexusContext> = Resolvers<ContextType>;
