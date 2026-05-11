"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[color:rgba(234,217,198,0.7)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-heading text-2xl text-[var(--wood-dark)]">
            Paul Botescu
          </p>
          <p className="text-sm text-[var(--text-main)]/80">
            Sculptura in lemn, lucrata manual cu respect pentru traditie.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-5 text-sm text-[var(--wood-dark)]"
          aria-label="Navigare subsol"
        >
          <Link href="/#lucrari" className="hover:text-[var(--accent-red)]">
            Lucrari
          </Link>
          <Link href="/in-atelier" className="hover:text-[var(--accent-red)]">
            In atelier
          </Link>
          <Link href="/#proces" className="hover:text-[var(--accent-red)]">
            Proces
          </Link>
          <Link href="/#contact" className="hover:text-[var(--accent-red)]">
            Contact
          </Link>
        </nav>
      </div>
      <p className="pb-6 text-center text-xs text-[var(--text-main)]/70">
        © {new Date().getFullYear()} Atelier Paul Botescu. Toate drepturile
        rezervate.
      </p>
    </footer>
  );
}
