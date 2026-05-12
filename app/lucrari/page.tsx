import type { Metadata } from "next";
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
        <LucrariGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
