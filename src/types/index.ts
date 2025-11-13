export interface InfoProps {
  message?: string;
}

export interface IHero {
  id: number;
  name: string;
}

export interface ITeam {
  id: number;
  name: string;
  heroes: Hero[];
}

export interface TeamsProps {
  teams: ITeam[];
}

/**
 * @description Represents a news item with optional place and points.
 *
 * @interface News
 * @property {string} date - The date of the news item.
 * @property {string} text - The text content of the news item.
 * @property {number} [place] - The optional place ranking of the news item.
 * @property {number} [points] - The optional points associated with the news item.
 */
export interface News {
  date: string;
  text: string;
  place: null | number;
  points: null | number;
}

export interface CountersByIndex {
  [key: string]: number[];
}
// export interface Counters { [key: string]: string[] }
//common types needed by all parts
/** Represents the league of a team.
 *
 * Possible values:
 * - "bronze": Represents the bronze league.
 * - "silver": Represents the silver league.
 * - "gold": Represents the gold league.
 */
export type League = "bronze" | "silver" | "gold";

/**  Represents a team in a league.
 */
export interface TeamForProgramInput {
  /**
   * The name of the team.
   */
  name: string;

  /**
   * The position of the team in the league standings.
   */
  position: number;

  /**
   * The league to which the team belongs.
   */
  league: League;
}

/** A function type that defines a sorting function for objects of type T.
 *
 * @template T - The type of objects to be sorted.
 *
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 *
 * @returns A negative number if `a` should come before `b`, a positive number if `a` should come after `b`, or zero if they are considered equal.
 */
export type sortObjectByProperty<T> = (a: T, b: T) => number;

export interface Info {
  date: string;
  id: number;
  name: string;
  power: number;
}

export interface TeamAttacker {
  hero: Hero;
  pet: Pet;
}

export interface ResultHero {
  attacker: HeroTeamForWar;
  defender: HeroTeamForWar;
  points: number;
}

export interface WarRecord {
  [key: string]: ResultHero[];
}

interface HeroTeamForWar {
  id: number;
  name: string;
  power: number;
  team: Team;
}

export interface HeroTeamForWarWithDate extends HeroTeamForWar {
  date: string;
}

interface Team {
  pet: number;
  heros: number[];
  patronage: number[];
}

export interface Tip {
  id: number;
  tip: string;
  category: string;
}

export type BattleRecord<T extends BaseTeam> = {
  date: number;
  records: Battle<T>[]; // Replace `any` with your actual battle record type
};

export interface Battle<T extends BaseTeam> {
  date: number;
  attacker: T;
  defender: T;
  points: number;
}

export interface TotemFusion {
  skill: string | null;
  level: number | null;
}

export interface TotemWithNoFusion {
  totemType?: string;
  stars: number;
  level: number;
}

export interface Totem extends TotemWithNoFusion {
  fusion: TotemFusion[];
}

export interface BaseTeam {
  id: number;
  name: string;
  power: number;
}

export interface HeroTeam extends BaseTeam {
  heroLineUp: string[];
  petLineUP: string[];
  pet: string;
  flag: WarFlag;
}

export interface TitanTeam extends BaseTeam {
  titanLineUp: string[];
  totem: Totem[];
}

export interface DescribeEntityWithShortName {
  id: number;
  name: string;
  short: string;
}

export interface Hero extends DescribeEntityWithShortName {}
export interface Pet extends DescribeEntityWithShortName {}
export interface Fusion extends DescribeEntityWithShortName {}
export interface Flag extends DescribeEntityWithShortName {}
export interface FlagPatterns extends DescribeEntityWithShortName {}
export interface Titan extends DescribeEntityWithShortName {}

export interface WarFlag {
  short: string;
  patterns: string[];
}
export interface Adventure {
  id: number;
  name: string;
  images: {
    thumb: string;
    solution: string;
  };
  paths: Paths[];
  notes?: Notes[];
}

export interface Notes {
  id: number;
  description: string;
}

export interface Paths {
  colour: string;
  numbers: string;
}

export interface ChampionTips {
  id: number;
  text: string;
  link?: string;
}

export interface Question {
  question: {
    text: string[];
    img?: string;
  };
  answer: {
    text?: string[];
    img?: string;
  };
  confirmed?: boolean;
}

/**
 * Represents a rule with an identifier, title, and explanation.
 *
 * @interface Rule
 * @property {number} id - The unique identifier for the rule.
 * @property {string} title - The title of the rule.
 * @property {string} explanation - The explanation of the rule.
 *
 */
export interface Rule {
  id: number;
  title: string;
  explanation: string;
}

import { DateTime } from "luxon";

/** Represents a user with various properties.
 *
 * @interface User
 * @property {number} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {boolean} active - Indicates if the user is currently active.
 * @property {boolean} isArchived - Indicates if the user is archived.
 * @property {string} timeZone - The time zone of the user.
 * @property {string | null} notes - Additional notes about the user.
 * @property {Object} [dates] - Optional dates related to the user.
 * @property {string | null} [dates.joined] - The date the user joined.
 * @property {string | null} [dates.left] - The date the user left.
 */
export interface User {
  id: number;
  name: string;
  active: boolean;
  isArchived: boolean;
  timeZone: string;
  notes?: string;
  dates?: {
    joined?: string;
    left?: string;
  };
}

/** Extends the User interface to include a DateTime property.
 *
 * @interface TimeUser
 * @extends User
 * @property {DateTime} dt - The DateTime object representing the user's time.
 */
export interface TimeUser extends User {
  dt: DateTime<true> | DateTime<false>;
}

/** Sorts the users by date and time.
 *
 * @param {TimeUser} a - A TimeUser object.
 * @param {TimeUser} b - A TimeUser object.
 * @returns {number} The difference between the two dates.
 * @example
 * const sortF: SortFunction = (a,b) => {
 * 	return (
 * 	 	Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"))
 * 	);
 */
