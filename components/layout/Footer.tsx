import { site } from "@/data/site";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Monogram size={28} />
          <p className="text-sm text-mist">
            © {new Date().getFullYear()} {site.name}. Designed and built from scratch.
          </p>
        </div>
        <p className="kicker text-fog">Next.js · TypeScript · Tailwind CSS · Visca Barça</p>
      </div>
    </footer>
  );
}
