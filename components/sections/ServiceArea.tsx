import { MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const MAP_SRC =
  "https://maps.google.com/maps?saddr=Sunshine+Coast+QLD&daddr=Gold+Coast+QLD&output=embed";

export default function ServiceArea() {
  return (
    <Reveal delay={0.45}>
      <div className="rounded-2xl border border-line bg-white/50 p-6 shadow-sm backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember">
            <MapPin size={20} />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-wide text-ember uppercase">
              Service Area
            </p>
            <p className="mt-1 text-charcoal">Sunshine Coast to Gold Coast</p>
          </div>
        </div>

        <div className="relative mt-4 aspect-4/3 w-full overflow-hidden rounded-xl ring-1 ring-line">
          <iframe
            src={MAP_SRC}
            title="Map of our service area, from the Sunshine Coast through Brisbane to the Gold Coast"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </Reveal>
  );
}
