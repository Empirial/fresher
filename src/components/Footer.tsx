import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="border-b border-border bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to get started?
          </h2>
          <a
            href={`#about`}
            className="shrink-0 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            About
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="text-xl font-bold tracking-tight">
              Fresher
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Naturally refreshing beverages for every moment.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`#services`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Our Drinks
                  </a>
                </li>
                <li>
                  <a
                    href={`#contact`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:hello@fresher.com`}
                  className="transition-colors hover:text-foreground"
                >
                  hello@fresher.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:651859143`}
                  className="transition-colors hover:text-foreground"
                >
                  651859143
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Limpopo Makhado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Fresher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}