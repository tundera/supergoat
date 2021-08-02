export interface TeamData {
  teamInfoCommon: TeamInfoCommon[];
  teamSeasonRanks: TeamSeasonRank[];
  availableSeasons: AvailableSeason[];
}

export interface AvailableSeason {
  seasonId: string;
}

export interface TeamSeasonRank {
  leagueId: string;
  seasonId: string;
  teamId: number;
  ptsRank: number;
  ptsPg: number;
  rebRank: number;
  rebPg: number;
  astRank: number;
  astPg: number;
  oppPtsRank: number;
  oppPtsPg: number;
}

export interface TeamInfoCommon {
  teamId: number;
  seasonYear: string;
  teamCity: string;
  teamName: string;
  teamAbbreviation: string;
  teamConference: string;
  teamDivision: string;
  teamCode: string;
  teamSlug: string;
  w: number;
  l: number;
  pct: number;
  confRank: number;
  divRank: number;
  minYear: string;
  maxYear: string;
}

export interface TeamRoster {
  commonTeamRoster: PlayerData[];
  coaches: CoachData[];
}

export interface CoachData {
  teamId: number;
  season: string;
  coachId: number;
  firstName: string;
  lastName: string;
  coachName: string;
  isAssistant: number;
  coachType: string;
  sortSequence?: any;
  subSortSequence: number;
}

export interface PlayerData {
  teamID: number;
  season: string;
  leagueID: string;
  player: string;
  playerSlug: string;
  num: string;
  position: string;
  height: string;
  weight: string;
  birthDate: string;
  age: number;
  exp: string;
  school: string;
  playerId: number;
}

export interface BackupTeamData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  handle: string;
  name: string;
  slug: string;
  city: string;
  abbreviation: string;
  wins: number | null;
  losses: number | null;
  winPercentage: number | null;
  conference: string;
  division: string;
  established: string;
  logoId: string | null;
  colorSchemeId: string | null;
}

export interface BackupPlayerData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  handle: string;
  name: string;
  slug: string;
  height: string;
  weight: string;
  number: string | null;
  position: string | null;
  teamId: string | null;
  imageId: string | null;
}

export interface BackupCoachData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  handle: string;
  name: string;
  type: string | null;
  isAssistant: string | null;
  teamId: string | null;
  imageId: string | null;
}

export interface BackupColorSchemeData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  primary: string;
  secondary: string;
}

export interface BackupImageData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  type: string;
}

export interface UpdatedTeamData extends TeamInfoCommon {
  players: PlayerData[];
  coaches: CoachData[];
}
