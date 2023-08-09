const map_names = [
  // { map_code: "mirage", map_full_name: "Mirage" },
  { map_code: "inferno", map_full_name: "Inferno" },
  // { map_code: "overpass", map_full_name: "Overpass" },
  { map_code: "dust2", map_full_name: "Dust II" },
  { map_code: "ancient", map_full_name: "Ancient" },
  // { map_code: "anubis", map_full_name: "Anubis" },
  // { map_code: "nuke", map_full_name: "Nuke" },
  // { map_code: "tuscan", map_full_name: "Tuscan" },
  // { map_code: "cache", map_full_name: "Cache" },
  // { map_code: "cbble", map_full_name: "Cobblestone" },
  // { map_code: "train", map_full_name: "Train" },
];

const sides = [
  { side_code: "t_side", side_full_name: "Terrorists" },
  { side_code: "ct_side", side_full_name: "Counter Terrorists" },
];

const grenade_types = [
  {
    grenade_code: "smoke",
    grenade_full_name: "Smoke",
  },
  {
    grenade_code: "flash",
    grenade_full_name: "Flash",
  },
  {
    grenade_code: "molotov",

    grenade_full_name: "Molotov",
  },
  {
    grenade_code: "he",
    grenade_full_name: "High Explosive",
  },
  {
    grenade_code: "one_way_smoke",
    grenade_full_name: "One Way Smoke",
  },
];

export { grenade_types, map_names, sides };
