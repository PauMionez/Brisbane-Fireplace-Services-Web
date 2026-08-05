export type Service = {
  slug: string;
  title: string;
  summary: string;
  anchor?: string;
  detail?: string;
  points?: string[];
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
    anchor: "repairs-and-maintenance",
    summary:
      "From worn door seals to broken baffles, we fix the issues that stop your fireplace running well.",
    detail:
      "Most fireplace complaints aren't the appliance failing — they're a consumable part reaching the end of its life. Door rope seals harden and stop sealing, baffles and top plates warp after years of heat, secondary air tubes burn through, and air slides seize with ash and corrosion. Each one quietly makes the fire worse: harder to light, harder to control, more soot on the glass and more creosote up the flue. We carry the common parts, so most of these are sorted on the same visit.",
    points: [
      "Door and window rope seals replaced",
      "Warped baffles and top plates renewed",
      "Cracked or blackened door glass swapped out",
      "Seized air slides and burnt-out air tubes replaced",
      "Broken door handles and latches refitted",
    ],
  },
  {
    slug: "chimney-cleaning",
    title: "Safety Checks",
    anchor: "safety-checks",
    summary:
      "Complete visual inspections to catch problems before they become costly repairs.",
    detail:
      "A safety check is a full visual inspection of the appliance and the flue — the parts you can't see from the living room. We go over the firebox and its liners, the flue joins and the section passing through the roof, the flashing and cap above it, and the clearances around the appliance. The point is to find the cheap problem before it becomes the expensive one: a hairline crack, a loosening flue joint or a nest starting in the cowl is a small job now and a serious one after another winter.",
    points: [
      "Firebox, baffle and liner condition",
      "Flue joints, roof penetration and flashing",
      "Draw tested and blockages cleared",
      "Clearances to nearby combustible surfaces",
      "A plain-English rundown of anything we find",
    ],
  },
  {
    slug: "chimney-cleaning",
    title: "Flue Extensions & Top Caps",
    anchor: "flue-extensions-and-top-caps",
    summary:
      "Extend flues and fit top caps to improve draw and keep animals and debris out.",
    detail:
      "If a fire is slow to catch, puffs smoke back into the room on a windy day, or never quite gets going, the cause is often the flue rather than the fire. A flue that's too short for the roofline — or that sits in the turbulence off a nearby roof, wall or tree — won't pull properly. Extending it lifts the outlet up into cleaner air. A top cap handles the other half of the job, keeping rain, leaves, embers, birds and possums out of what is otherwise an open pipe into your house.",
    points: [
      "Flue extensions to improve draw",
      "Top caps and cowls fitted or replaced",
      "Anti-downdraught cowls for windy, exposed sites",
      "Rain, debris and animal entry sealed off",
    ],
  },
  {
    slug: "fireplace-installation",
    title: "Chimney Dampers & Mesh",
    anchor: "dampers-and-mesh",
    summary:
      "Install dampers and possum/bird mesh to keep your chimney pest-free and draught-free.",
    detail:
      "An open flue works in both directions. Out of season it's a draught pulling heated or cooled air straight out of the room, and it's an open invitation to nesting birds and possums — one of the most common callouts we get, and easily the messiest. A damper gives you a plate you can close when the fire isn't in use. Mesh at the outlet stops anything moving in. Both are quick to fit, and both are cheaper than clearing out a nest and repairing what got in.",
    points: [
      "Dampers fitted to control heat loss and draughts",
      "Possum and bird mesh installed at the flue outlet",
      "Existing nests and debris cleared before sealing",
      "Sized to suit your flue and appliance",
    ],
  },
];

/** Services with their own write-up section on the given service page. */
export function detailedServicesFor(slug: string) {
  return services.filter((service) => service.slug === slug && service.detail);
}

/**
 * Where a service card should link to — the service page, jumping straight to
 * that service's section when it has one. Use this everywhere service cards
 * are rendered so they can't drift apart.
 */
export function serviceHref(service: Service) {
  return `/services/${service.slug}${service.anchor ? `#${service.anchor}` : ""}`;
}

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
