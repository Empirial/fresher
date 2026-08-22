import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </a>
        </nav>

        <a
          href="/"
          className="mx-auto shrink-0 text-xl font-bold text-foreground md:mx-8"
        >
          Dr. P
        </a>

        <nav className="hidden flex-1 items-center justify-start gap-8 md:flex">
          <a
            href="#testimonials"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Reviews
          </a>
          <a
            href="tel:651859143"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Free Call
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              About
            </a>
            <a
              href="#services"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Reviews
            </a>
            <a
              href="tel:651859143"
              className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Free Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}