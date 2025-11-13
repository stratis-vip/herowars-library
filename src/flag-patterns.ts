import type { FlagPatterns } from "./types/index.ts";

export const allFlagPatterns: FlagPatterns[] = [
  { id: 0, name: "No Pattern", short: "###" },
  { id: 1, name: "Magic Attack", short: "MA" },
  { id: 6, name: "Magic Defense", short: "MD" },
  { id: 2, name: "Physical Attack", short: "PA" },
  { id: 3, name: "Armor", short: "AI" },
  { id: 4, name: "Accuracy", short: "AC" },
  { id: 5, name: "Armor Penetration", short: "AP" },
  { id: 10, name: "Critical Hit Defense", short: "CH" },
  { id: 7, name: "Magic Penetration", short: "MP" },
  { id: 8, name: "Magic Mastery", short: "MM" },
  { id: 9, name: "Health", short: "HI" },
];
