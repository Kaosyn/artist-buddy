import { Link } from "@tanstack/react-router";
import { ModeButton } from "../shared/ModeButton.tsx";
import MultiNav from "./components/multi-nav.tsx";

const items = [
  { to: "/inventory", label: "Inventory" },
  { to: "/catalog", label: "Catalog" },
  { to: "/events", label: "Events" },
] as const;

export function StartPage() {
  return (
    <section>
      <MultiNav>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Artist Buddy
          </h1>
          <p className="text-sm text-muted-foreground">
            Local-first tools for conventions and inventory.
          </p>
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="block">
              <ModeButton>
                <span className="block w-full text-left">{item.label}</span>
              </ModeButton>
            </Link>
          ))}
        </div>
      </MultiNav>
    </section>
  );
}
