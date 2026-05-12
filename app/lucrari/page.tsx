import type { Metadata } from "next";
import { Suspense } from "react";
import { LucrariGallery } from "@/components/LucrariGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Lucrari | Paul Botescu",
  description:
    "Galerie de sculptura in lemn: porti, troite, icoane, iconostas si lucrari la comanda.",
};

export default function LucrariPage() {
  return (
    <div className="grain-bg min-h-screen">
      <SiteHeader />
      <main>
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-5 py-18 md:px-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
                Lucrari
              </p>
              <h2 className="font-heading mt-3 text-4xl text-[var(--wood-dark)]">
                Piese care lasa lemnul sa vorbeasca
              </h2>
              <p className="mt-8 text-sm text-[var(--wood-mid)]">
                Se incarca galeria...
              </p>
            </div>
          }
        >
          <LucrariGallery />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
