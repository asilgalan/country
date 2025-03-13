export interface RESTCountry{
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  eng?: EngEnum;
  nld?: string;
  pap?: string;
  sot?: string;
  swe?: string;
  mah?: string;
  deu?: string;
  fra?: Fra;
  ltz?: string;
  ara?: Ara;
  tir?: string;
  swa?: string;
  nep?: string;
  ita?: string;
  urd?: string;
  por?: string;
  spa?: SPA;
  hmo?: string;
  tpi?: string;
  bel?: string;
  rus?: string;
  pau?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  ssw?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  fil?: string;
  som?: string;
  div?: string;
  bjz?: string;
  dzo?: string;
  aym?: string;
  que?: string;
  khm?: string;
  zdj?: string;
  msa?: string;
  heb?: string;
  cat?: string;
  eus?: string;
  glc?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export enum Fra {
  French = "French",
}

export enum SPA {
  Spanish = "Spanish",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
