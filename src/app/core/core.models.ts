export interface ConcerthallsData {
  id_localhall: number;
  full_name: string;
  address: string;
  description?: string;
  website?: string;
  phone_number?: number;
  lat: number;
  lng: number;
  distance: number;
}

export interface ConcertsData {
  id_localhall: number;
  id_concert: number;
  full_name: string;
  date: Date;
  tickets?: string;
  band: string;
  style?: string;
  description?: string;
  website?: any;
  distance: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface SearchData {
  concerthallsData: ConcerthallsData[];
  concertsData: ConcertsData[];
  coordinates: Coordinates;
}

export interface AuthInfo {
  accessToken: string;
  expiresIn: number;
};

export interface OrganizationData {
  full_name: string;
  avatar?: any;
  email: string;
  id_organization: number;
}

export interface UserData {
  organizationData: OrganizationData[];
  concerthallsData: ConcerthallsData[];
  concertsData: ConcertsData[];
}

