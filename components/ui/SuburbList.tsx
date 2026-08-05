import Link from "next/link";
import { serviceAreas } from "@/lib/data/service-areas";

/**
 * Loose match so "Upper Mount Gravatt" from the Wikipedia list finds the
 * existing "Upper Mt Gravatt" page rather than sitting there as dead text.
 */
function normalise(name: string): string {
  return name
    .toLowerCase()
    .replace(/\bmt\b/g, "mount")
    .replace(/[^a-z]/g, "");
}

const pageBySuburb = new Map(
  serviceAreas.map((area) => [normalise(area.name), area.slug])
);

/**
 * Every suburb serviced in a region, as readable text. The handful that have
 * their own page become links — which is also the internal linking that helps
 * Google find those pages in the first place.
 */
export default function SuburbList({
  suburbs,
  currentSlug,
}: {
  suburbs: string[];
  currentSlug?: string;
}) {
  return (
    <ul className="mt-8 flex flex-wrap gap-x-1 gap-y-2 text-mist leading-relaxed">
      {suburbs.map((suburb, index) => {
        const match = pageBySuburb.get(normalise(suburb));
        const slug = match === currentSlug ? undefined : match;
        const comma = index < suburbs.length - 1 ? "," : "";

        return (
          <li key={suburb}>
            {slug ? (
              <Link
                href={`/service-areas/${slug}`}
                className="font-medium text-charcoal underline decoration-line underline-offset-4 transition-colors hover:text-ember hover:decoration-ember"
              >
                {suburb}
              </Link>
            ) : (
              suburb
            )}
            {comma}
          </li>
        );
      })}
    </ul>
  );
}
