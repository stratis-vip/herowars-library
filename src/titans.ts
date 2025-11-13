import type { Titan } from "./types/index.ts";

export const allTitans: Titan[] = [
  { id: 1, name: "Sigurd", short: "Sig" },
  { id: 2, name: "Nova", short: "Nov" },
  { id: 3, name: "Mairi", short: "Mai" },
  { id: 4, name: "Hyperion", short: "Hyp" },
  { id: 5, name: "Moloch", short: "Mol" },
  { id: 6, name: "Vulcan", short: "Vul" },
  { id: 7, name: "Ignis", short: "Ign" },
  { id: 8, name: "Araji", short: "Ara" },
  { id: 9, name: "Angus", short: "Ang" },
  { id: 10, name: "Sylva", short: "Syl" },
  { id: 11, name: "Avalon", short: "Ava" },
  { id: 12, name: "Eden", short: "Ede" },
  { id: 13, name: "Brustar", short: "Bru" },
  { id: 14, name: "Keros", short: "Ker" },
  { id: 15, name: "Mort", short: "Mor" },
  { id: 16, name: "Tenebris", short: "Ten" },
  { id: 17, name: "Rigel", short: "Rig" },
  { id: 18, name: "Amon", short: "Amo" },
  { id: 19, name: "Iyari", short: "Iya" },
  { id: 20, name: "Solaris", short: "Sol" },
  { id: 21, name: "Verdoc and Phyto", short: "Ver" },
].sort((a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
});
