"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-soft)]/80 bg-[color:rgba(244,237,228,0.88)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="block">
          <p className="font-heading text-2xl text-[var(--wood-dark)]">
            Paul Botescu
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--wood-mid)]">
            Sculptura in lemn
          </p>
        </Link>
        <nav
          className="hidden gap-7 text-sm text-[var(--wood-dark)] md:flex"
          aria-label="Navigare principala"
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
    </header>
  );
}
