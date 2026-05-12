import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "In atelier | Paul Botescu",
  description:
    "Atelierul Paul Botescu — sculptura traditionala in lemn, lucrata manual.",
};

/** Clipuri YouTube — raport 16:9 (landscape). */
const FILM_1_ID = "U_HBQesT374"; // https://youtu.be/U_HBQesT374
const FILM_2_ID = "3UjtgxSL84o"; // https://youtu.be/3UjtgxSL84o
const FILM_3_ID = "3vpa5H4PsIA"; // https://youtu.be/3vpa5H4PsIA
const FILM_4_ID = "6AlEEo_dD1o"; // https://youtu.be/6AlEEo_dD1o
const FILM_5_ID = "r0Y-G3-VHcg"; // https://youtu.be/r0Y-G3-VHcg
const FILM_6_ID = "LFlnCtnCAIY"; // https://youtu.be/LFlnCtnCAIY
const FILM_7_ID = "M9KqU7dhorI"; // https://youtu.be/M9KqU7dhorI
const FILM_8_ID = "_-BI8ndkdjU"; // https://youtu.be/_-BI8ndkdjU
const FILM_9_ID = "esyFLk0Cqcg"; // https://youtu.be/esyFLk0Cqcg
const FILM_10_ID = "f2eiI_PFRYQ"; // https://youtu.be/f2eiI_PFRYQ
const FILM_11_ID = "EISsOdKSfSI"; // https://youtu.be/EISsOdKSfSI
const FILM_12_ID = "iBfXYoPoZn4"; // https://youtu.be/iBfXYoPoZn4
const FILM_13_ID = "-pM2g8ahwLM"; // https://youtu.be/-pM2g8ahwLM
const FILM_14_ID = "i7O8G8ziIqk"; // https://youtu.be/i7O8G8ziIqk
const FILM_15_ID = "Vd1WihDNPE4"; // https://youtu.be/Vd1WihDNPE4
const FILM_16_ID = "sME8iE3pVqA"; // https://youtu.be/sME8iE3pVqA
const FILM_17_ID = "pRelvWMhSOc"; // https://youtu.be/pRelvWMhSOc
const FILM_18_ID = "4r8OxX__K1s"; // https://youtu.be/4r8OxX__K1s
const FILM_19_ID = "o-z-f1csT94"; // https://youtu.be/o-z-f1csT94
const FILM_20_ID = "BefHhebMKvw"; // https://youtu.be/BefHhebMKvw
const FILM_21_ID = "vr6fiJljY6I"; // https://youtu.be/vr6fiJljY6I
const FILM_22_ID = "0nDk0dmtfuU"; // https://youtu.be/0nDk0dmtfuU
const FILM_23_ID = "g5GyJeoid14"; // https://youtu.be/g5GyJeoid14

const TRINITAS_FB_VIDEO_HREF =
  "https://www.facebook.com/trinitastv/videos/1114605440405032/";

/** `public/images/in atelier.jpg` — sursa 1512×2016; afisare la 50%. */
const IN_ATELIER_IMAGE_SRC = "/images/in%20atelier.jpg";
const IN_ATELIER_IMAGE_HALF_W = 756;
const IN_ATELIER_IMAGE_HALF_H = 1008;

function AtelierYouTubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="w-full max-w-[min(100%,520px)] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          width="560"
          height="315"
          style={{ border: "none" }}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

export default function InAtelierPage() {
  return (
    <div className="grain-bg flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <h1 className="font-heading text-center text-[length:clamp(1.35rem,2.8vw,2.25rem)] leading-snug text-[var(--wood-dark)] md:leading-tight">
            Atelierul, locul unde timpul lucreaza impreuna cu mana
          </h1>

          <div className="mx-auto mt-10 w-full max-w-[min(100%,756px)]">
            <Image
              src={IN_ATELIER_IMAGE_SRC}
              alt="In atelier — Paul Botescu"
              width={IN_ATELIER_IMAGE_HALF_W}
              height={IN_ATELIER_IMAGE_HALF_H}
              className="h-auto w-full rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] object-contain"
              sizes="(max-width: 768px) 100vw, 756px"
              priority
            />
          </div>

          <div className="mx-auto mt-8 w-full max-w-[min(100%,620px)] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] px-2 pt-2 pb-0">
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(TRINITAS_FB_VIDEO_HREF)}&show_text=false&t=0&width=620`}
              width="100%"
              height={360}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="block aspect-[620/360] w-full lg:aspect-auto lg:h-[360px]"
              title="Restaurarea catapetesmei Brâncovenești — Trinitas TV"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:gap-x-16">
            <AtelierYouTubeVideo videoId={FILM_1_ID} title="Film 1 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_2_ID} title="Film 2 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_3_ID} title="Film 3 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_4_ID} title="Film 4 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_5_ID} title="Film 5 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_6_ID} title="Film 6 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_7_ID} title="Film 7 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_8_ID} title="Film 8 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_9_ID} title="Film 9 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_10_ID} title="Film 10 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_11_ID} title="Film 11 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_12_ID} title="Film 12 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_13_ID} title="Film 13 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_14_ID} title="Film 14 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_15_ID} title="Film 15 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_16_ID} title="Film 16 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_17_ID} title="Film 17 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_18_ID} title="Film 18 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_19_ID} title="Film 19 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_20_ID} title="Film 20 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_21_ID} title="Film 21 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_22_ID} title="Film 22 — In atelier" />
            <AtelierYouTubeVideo videoId={FILM_23_ID} title="Film 23 — In atelier" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
