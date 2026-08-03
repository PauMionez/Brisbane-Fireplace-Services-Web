export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "chimney-cleaning",
    title: "Chimney & Flue Cleaning",
    summary:
      "Regular sweeps clear creosote and debris build-up so your fireplace runs safely and efficiently.",
  },
  {
    slug: "fireplace-installation",
    title: "Fireplace Installation",
    summary:
      "Supply and installation, or installation only — fitted correctly the first time.",
  },
  {
    slug: "chimney-cleaning",
    title: "Repairs & Maintenance",
    summary:
      "From worn door seals to broken baffles, we fix the issues that stop your fireplace running well.",
  },
  {
    slug: "chimney-cleaning",
    title: "Safety Checks",
    summary:
      "Complete visual inspections to catch problems before they become costly repairs.",
  },
  {
    slug: "chimney-cleaning",
    title: "Flue Extensions & Top Caps",
    summary:
      "Extend flues and fit top caps to improve draw and keep animals and debris out.",
  },
  {
    slug: "fireplace-installation",
    title: "Chimney Dampers & Mesh",
    summary:
      "Install dampers and possum/bird mesh to keep your chimney pest-free and draught-free.",
  },
];

export const commonIssues: string[] = [
  "Broken baffles or top plate",
  "Broken door glass",
  "Worn door or window seals",
  "Birds nesting in the flue or firebox",
  "Blowback — smoke coming back into the room",
  "Sticky air slides",
  "Broken door knobs",
  "Scratched or worn paint on the flue",
  "Worn out air tubes",
  "Water leaking onto the fire",
];
