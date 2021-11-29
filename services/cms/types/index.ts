export interface ColorSchemeTableData {
  id: string
  createdAt: string
  updatedAt: string
  primary: string
  secondary: string
}

export interface ImageTableData {
  id: string
  createdAt: string
  updatedAt: string
  url: string
  type: string
  player: string | null
  team: string | null
}

export interface CoachTableData {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  handle: string
  type: string
  isAssistant: string
  team: string | null
  image: string | null
}

export interface PlayerTableData {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  handle: string
  slug: string
  height: string
  weight: string
  number: string | null
  position: string | null
  team: string | null
}

export interface TeamTableData {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  handle: string
  slug: string
  city: string
  abbreviation: string
  conference: string
  division: string
  established: string
  wins: number
  losses: number
  winPercentage: number
  colorScheme: string | null
}
