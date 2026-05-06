"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type AlbumImage = {
  thumbnailSrc: string;
  fullSrc: string;
  alt: string;
};

type Work = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  albumImages?: AlbumImage[];
};

const tripticeAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice1.jpg",
    fullSrc: "/images/triptice/triptice1.jpg",
    alt: "Triptice imagine 1",
  },
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice2.jpg",
    fullSrc: "/images/triptice/triptice2.jpg",
    alt: "Triptice imagine 2",
  },
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice3.jpg",
    fullSrc: "/images/triptice/triptice3.jpg",
    alt: "Triptice imagine 3",
  },
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice4.jpg",
    fullSrc: "/images/triptice/triptice4.jpg",
    alt: "Triptice imagine 4",
  },
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice5.jpg",
    fullSrc: "/images/triptice/triptice5.jpg",
    alt: "Triptice imagine 5",
  },
  {
    thumbnailSrc: "/images/triptice/thumbnail_triptice6.jpg",
    fullSrc: "/images/triptice/triptice6.jpg",
    alt: "Triptice imagine 6",
  },
];

const troitaDeHotarAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/troita de hotar/thumbnail_troitadehotar1.jpg",
    fullSrc: "/images/troita de hotar/troitadehotar1.jpg",
    alt: "Troita de hotar imagine 1",
  },
  {
    thumbnailSrc: "/images/troita de hotar/thumbnail_troitadehotar2.jpg",
    fullSrc: "/images/troita de hotar/troitadehotar2.jpg",
    alt: "Troita de hotar imagine 2",
  },
];

const cruceModelSapantaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/cruce model sapanta/thumbnail_crucemodelsapanta1.jpg",
    fullSrc: "/images/cruce model sapanta/crucemodelsapanta1.jpg",
    alt: "Cruce model Sapanta imagine 1",
  },
  {
    thumbnailSrc: "/images/cruce model sapanta/thumbnail_crucemodelsapanta2.jpg",
    fullSrc: "/images/cruce model sapanta/crucemodelsapanta2.jpg",
    alt: "Cruce model Sapanta imagine 2",
  },
  {
    thumbnailSrc: "/images/cruce model sapanta/thumbnail_crucemodelsapanta3.jpg",
    fullSrc: "/images/cruce model sapanta/crucemodelsapanta3.jpg",
    alt: "Cruce model Sapanta imagine 3",
  },
];

const axionitaProdromitaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita1.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita1.jpg",
    alt: "Axionita Prodromita imagine 1",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita2.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita2.jpg",
    alt: "Axionita Prodromita imagine 2",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita3.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita3.jpg",
    alt: "Axionita Prodromita imagine 3",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita4.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita4.jpg",
    alt: "Axionita Prodromita imagine 4",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita5.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita5.jpg",
    alt: "Axionita Prodromita imagine 5",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita6.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita6.jpg",
    alt: "Axionita Prodromita imagine 6",
  },
  {
    thumbnailSrc:
      "/images/axionita prodromita/thumbnail_axionitaprodromita7.jpg",
    fullSrc: "/images/axionita prodromita/axionitaprodromita7.jpg",
    alt: "Axionita Prodromita imagine 7",
  },
];

const icoaneAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane1.jpg",
    fullSrc: "/images/icoane/icoane1.jpg",
    alt: "Icoane imagine 1",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane2.jpg",
    fullSrc: "/images/icoane/icoane2.jpg",
    alt: "Icoane imagine 2",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane3.jpg",
    fullSrc: "/images/icoane/icoane3.jpg",
    alt: "Icoane imagine 3",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane4.jpg",
    fullSrc: "/images/icoane/icoane4.jpg",
    alt: "Icoane imagine 4",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane5.jpg",
    fullSrc: "/images/icoane/icoane5.jpg",
    alt: "Icoane imagine 5",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane6.jpg",
    fullSrc: "/images/icoane/icoane6.jpg",
    alt: "Icoane imagine 6",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane7.jpg",
    fullSrc: "/images/icoane/icoane7.jpg",
    alt: "Icoane imagine 7",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane8.jpg",
    fullSrc: "/images/icoane/icoane8.jpg",
    alt: "Icoane imagine 8",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane9.jpg",
    fullSrc: "/images/icoane/icoane9.jpg",
    alt: "Icoane imagine 9",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane10.jpg",
    fullSrc: "/images/icoane/icoane10.jpg",
    alt: "Icoane imagine 10",
  },
  {
    thumbnailSrc: "/images/icoane/thumbnail_icoane11.jpg",
    fullSrc: "/images/icoane/icoane11.jpg",
    alt: "Icoane imagine 11",
  },
];

const iconostasAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/iconostas/thumbnail_iconostas1.jpg",
    fullSrc: "/images/iconostas/iconostas1.jpg",
    alt: "Iconostas imagine 1",
  },
  {
    thumbnailSrc: "/images/iconostas/thumbnail_iconostas2.jpg",
    fullSrc: "/images/iconostas/iconostas2.jpg",
    alt: "Iconostas imagine 2",
  },
  {
    thumbnailSrc: "/images/iconostas/thumbnail_iconostas3.jpg",
    fullSrc: "/images/iconostas/iconostas3.jpg",
    alt: "Iconostas imagine 3",
  },
];

const icoanePeUsiAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi1.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi1.jpg",
    alt: "Icoane pe usi imagine 1",
  },
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi2.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi2.jpg",
    alt: "Icoane pe usi imagine 2",
  },
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi3.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi3.jpg",
    alt: "Icoane pe usi imagine 3",
  },
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi4.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi4.jpg",
    alt: "Icoane pe usi imagine 4",
  },
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi5.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi5.jpg",
    alt: "Icoane pe usi imagine 5",
  },
  {
    thumbnailSrc: "/images/icoane pe usi/thumbnail_icoanepeusi6.jpg",
    fullSrc: "/images/icoane pe usi/icoanepeusi6.jpg",
    alt: "Icoane pe usi imagine 6",
  },
];

const ingeriAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri1.jpg",
    fullSrc: "/images/ingeri/ingeri1.jpg",
    alt: "Ingeri imagine 1",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri2.jpg",
    fullSrc: "/images/ingeri/ingeri2.jpg",
    alt: "Ingeri imagine 2",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri3.jpg",
    fullSrc: "/images/ingeri/ingeri3.jpg",
    alt: "Ingeri imagine 3",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri4.jpg",
    fullSrc: "/images/ingeri/ingeri4.jpg",
    alt: "Ingeri imagine 4",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri5.jpg",
    fullSrc: "/images/ingeri/ingeri5.jpg",
    alt: "Ingeri imagine 5",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri6.jpg",
    fullSrc: "/images/ingeri/ingeri6.jpg",
    alt: "Ingeri imagine 6",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri7.jpg",
    fullSrc: "/images/ingeri/ingeri7.jpg",
    alt: "Ingeri imagine 7",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri8.jpg",
    fullSrc: "/images/ingeri/ingeri8.jpg",
    alt: "Ingeri imagine 8",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri9.jpg",
    fullSrc: "/images/ingeri/ingeri9.jpg",
    alt: "Ingeri imagine 9",
  },
  {
    thumbnailSrc: "/images/ingeri/thumbnail_ingeri10.jpg",
    fullSrc: "/images/ingeri/ingeri10.jpg",
    alt: "Ingeri imagine 10",
  },
];

const works: Work[] = [
  {
    category: "Triptice",
    title: "Triptice",
    description: "-",
    image: "/images/album-triptice.jpg",
    imageAlt: "Triptice",
    albumImages: tripticeAlbumImages,
  },
  {
    category: "Troite",
    title: "Troita de hotar",
    description: "-",
    image: "/images/album-troite.jpg",
    imageAlt: "Troita de hotar",
    albumImages: troitaDeHotarAlbumImages,
  },
  {
    category: "Cruce model Sapanta",
    title: "Cruce model Sapanta",
    description: "-",
    image: "/images/album-cruce-model-sapanta.jpg",
    imageAlt: "Cruce model Sapanta",
    albumImages: cruceModelSapantaAlbumImages,
  },
  {
    category: "Axionita Prodromita",
    title: "Axionita Prodromita",
    description: "-",
    image: "/images/album-axionita-prodromita.jpg",
    imageAlt: "Axionita Prodromita",
    albumImages: axionitaProdromitaAlbumImages,
  },
  {
    category: "Icoane",
    title: "Icoane",
    description: "-",
    image: "/images/album-icoane.jpg",
    imageAlt: "Icoane",
    albumImages: icoaneAlbumImages,
  },
  {
    category: "Icoane pe usi",
    title: "Icoane pe usi",
    description: "-",
    image: "/images/album-icoane-pe-usi.jpg",
    imageAlt: "Icoane pe usi",
    albumImages: icoanePeUsiAlbumImages,
  },
  {
    category: "Iconostas",
    title: "Iconostas",
    description: "-",
    image: "/images/album-iconostas.jpg",
    imageAlt: "Iconostas",
    albumImages: iconostasAlbumImages,
  },
  {
    category: "Ingeri",
    title: "Ingeri",
    description: "-",
    image: "/images/album-ingeri.jpg",
    imageAlt: "Ingeri",
    albumImages: ingeriAlbumImages,
  },
  {
    category: "Racla Petru Voda",
    title: "Racla Petru Voda",
    description: "-",
    image: "/images/album-racla-petru-voda.jpg",
    imageAlt: "Racla Petru Voda",
  },
  {
    category: "Strana arhiereasca",
    title: "Strana arhiereasca",
    description: "-",
    image: "/images/album-strana-arhiereasca.jpg",
    imageAlt: "Strana arhiereasca",
  },
  {
    category: "Racla Danion",
    title: "Racla Danion",
    description: "-",
    image: "/images/album-racla-danion.jpg",
    imageAlt: "Racla Danion",
  },
  {
    category: "Racla",
    title: "Racla",
    description: "-",
    image: "/images/album-racla.jpg",
    imageAlt: "Racla",
  },
  {
    category: "Poliptice",
    title: "Poliptice",
    description: "-",
    image: "/images/album-poliptice.jpg",
    imageAlt: "Poliptice",
  },
  {
    category: "Matrita lumanare",
    title: "Matrita lumanare",
    description: "-",
    image: "/images/album-matrita-lumanare.jpg",
    imageAlt: "Matrita lumanare",
  },
  {
    category: "Sah de gradina",
    title: "Sah de gradina",
    description: "-",
    image: "/images/album-sah-gradina.jpg",
    imageAlt: "Sah de gradina",
  },
  {
    category: "Sah dacii si romanii",
    title: "Sah dacii si romanii",
    description: "-",
    image: "/images/album-sah-dacii-romanii.jpg",
    imageAlt: "Sah dacii si romanii",
  },
  {
    category: "Suport sticla Dac",
    title: "Suport sticla Dac",
    description: "-",
    image: "/images/album-suport-sticla-dac.jpg",
    imageAlt: "Suport sticla Dac",
  },
  {
    category: "Rame",
    title: "Rame",
    description: "-",
    image: "/images/album-rame.jpg",
    imageAlt: "Rame",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Alegerea lemnului",
    text: "Selectie atenta de esenta, fibra si umiditate, in functie de tipul lucrarii.",
  },
  {
    no: "02",
    title: "Schita si simbol",
    text: "Stabilirea compozitiei si a motivelor traditionale, in acord cu spatiul unde va sta piesa.",
  },
  {
    no: "03",
    title: "Sculptare manuala",
    text: "Modelare in etape, cu unelte clasice, rabdare si lucru atent pe detaliu.",
  },
  {
    no: "04",
    title: "Finisaj si patina",
    text: "Protectie, ton cald si textura naturala care lasa lemnul sa respire in timp.",
  },
];

function FramedImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[var(--panel)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const fallbackAlbumImages: AlbumImage[] = Array.from({ length: 4 }).map(
    (_, index) => ({
      thumbnailSrc: "/images/paul.jpg",
      fullSrc: "/images/paul.jpg",
      alt: `Imagine album ${index + 1}`,
    }),
  );
  const activeAlbumImages = selectedWork?.albumImages?.length
    ? selectedWork.albumImages
    : fallbackAlbumImages;
  const albumImageCount = activeAlbumImages.length;

  const openAlbum = (work: Work) => {
    setSelectedWork(work);
    setSelectedPhotoIndex(0);
    setCarouselStartIndex(0);
  };

  const closeAlbum = () => {
    setSelectedWork(null);
    setSelectedPhotoIndex(0);
    setCarouselStartIndex(0);
    setIsFullscreenOpen(false);
  };

  const maximizePhoto = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsFullscreenOpen(true);
  };

  const goToPrevPhoto = () => {
    setCarouselStartIndex((prev) => {
      const nextIndex = prev === 0 ? albumImageCount - 1 : prev - 1;
      setSelectedPhotoIndex(nextIndex);
      return nextIndex;
    });
  };

  const goToNextPhoto = () => {
    setCarouselStartIndex((prev) => {
      const nextIndex = prev === albumImageCount - 1 ? 0 : prev + 1;
      setSelectedPhotoIndex(nextIndex);
      return nextIndex;
    });
  };

  const handleTouchStart = (touchX: number) => {
    touchStartXRef.current = touchX;
  };

  const handleTouchEnd = (touchX: number) => {
    if (touchStartXRef.current === null) return;
    const swipeDistance = touchX - touchStartXRef.current;
    const swipeThreshold = 40;

    if (swipeDistance <= -swipeThreshold) {
      goToNextPhoto();
    } else if (swipeDistance >= swipeThreshold) {
      goToPrevPhoto();
    }

    touchStartXRef.current = null;
  };

  const desktopVisibleCount = Math.min(3, albumImageCount);
  const visibleDesktopIndexes = Array.from({ length: desktopVisibleCount }).map(
    (_, offset) => (carouselStartIndex + offset) % albumImageCount,
  );

  return (
    <div className="grain-bg min-h-screen">
      <header className="sticky top-0 z-30 border-b border-[var(--border-soft)]/80 bg-[color:rgba(244,237,228,0.88)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="font-heading text-2xl text-[var(--wood-dark)]">
              Paul Botescu
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--wood-mid)]">
              Sculptura in lemn
            </p>
          </div>
          <nav className="hidden gap-7 text-sm text-[var(--wood-dark)] md:flex">
            <a href="#lucrari" className="hover:text-[var(--accent-red)]">
              Lucrari
            </a>
            <a href="#despre" className="hover:text-[var(--accent-red)]">
              Despre
            </a>
            <a href="#proces" className="hover:text-[var(--accent-red)]">
              Proces
            </a>
            <a href="#contact" className="hover:text-[var(--accent-red)]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-18 pt-8 md:grid-cols-12 md:px-8 md:pt-10">
          <div className="md:col-span-7">
            <FramedImage
              src="/images/paul.jpg"
              alt="Paul Botescu, sculptor in lemn, in atelier"
              className="h-[58svh] min-h-[420px] w-full shadow-[0_14px_36px_rgba(74,46,31,0.18)]"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
            />
          </div>
          <div className="md:col-span-5 md:self-center">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
              Mestesug autentic romanesc
            </p>
            <h1 className="font-heading text-4xl leading-tight text-[var(--wood-dark)] md:text-5xl">
              Sculptura traditionala in lemn, facuta cu rabdare si respect
              pentru simbol.
            </h1>
            <p className="mt-6 text-[1.05rem] leading-8 text-[var(--text-main)]/90">
              Lucrari realizate manual in atelier, din lemn masiv: porti,
              troite, usi sculptate si piese ornamentale pentru case si spatii
              de cult.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#lucrari"
                className="rounded-sm bg-[var(--wood-dark)] px-6 py-3 text-sm font-medium text-[var(--background-soft)] transition hover:opacity-90"
              >
                Vezi lucrarile
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-[var(--wood-mid)] px-6 py-3 text-sm font-medium text-[var(--wood-dark)] transition hover:bg-[var(--background-soft)]"
              >
                Solicita o lucrare
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-6xl px-5 md:px-8" />

        <section id="lucrari" className="mx-auto max-w-6xl px-5 py-18 md:px-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
            Lucrari
          </p>
          <h2 className="font-heading mt-3 text-4xl text-[var(--wood-dark)]">
            Piese care lasa lemnul sa vorbeasca
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-[var(--text-main)]/85">
            Fiecare lucrare este gandita pentru locul ei, cu detalii sculptate
            curat si proportii stabile. Galeria de mai jos este pregatita pentru
            fotografii reale de atelier si de montaj.
          </p>

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {works.map((work) => (
              <article key={work.title}>
                <button
                  type="button"
                  onClick={() => openAlbum(work)}
                  className="group block w-full text-left"
                  aria-label={`Deschide albumul ${work.title}`}
                  style={{
                    cursor: "url('/images/chisel_cursor_large.png') 7 4, pointer",
                  }}
                >
                  <div
                    className="w-full p-0 transition duration-300 group-hover:translate-y-[-2px] group-hover:shadow-[0_0_0_1px_rgba(214,166,74,0.45),0_0_16px_rgba(214,166,74,0.28)] group-active:shadow-[0_0_0_1px_rgba(214,166,74,0.45),0_0_16px_rgba(214,166,74,0.28)] group-focus-visible:shadow-[0_0_0_1px_rgba(214,166,74,0.45),0_0_16px_rgba(214,166,74,0.28)]"
                    style={{
                      border: "3px solid transparent",
                      borderImage: "url('/images/rustic-border.svg') 16 round",
                    }}
                  >
                    <FramedImage
                      src={work.image}
                      alt={work.imageAlt}
                      className="aspect-[4/3] w-full shadow-[0_10px_26px_rgba(74,46,31,0.12)] transition duration-300 max-md:brightness-105 max-md:contrast-105 max-md:saturate-110 max-md:shadow-[0_0_14px_rgba(214,166,74,0.28),0_12px_24px_rgba(74,46,31,0.16)] group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-110 group-hover:shadow-[0_0_18px_rgba(214,166,74,0.35),0_14px_30px_rgba(74,46,31,0.2)] group-active:brightness-110 group-active:contrast-105 group-active:saturate-110 group-active:shadow-[0_0_18px_rgba(214,166,74,0.35),0_14px_30px_rgba(74,46,31,0.2)] group-focus-visible:brightness-110 group-focus-visible:contrast-105 group-focus-visible:saturate-110 group-focus-visible:shadow-[0_0_18px_rgba(214,166,74,0.35),0_14px_30px_rgba(74,46,31,0.2)]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--accent-red)]">
                    {work.category}
                  </p>
                  <h3 className="font-heading mt-2 text-3xl text-[var(--wood-dark)]">
                    {work.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--text-main)]/85">
                    {work.description}
                  </p>
                </button>
              </article>
            ))}
          </div>
        </section>

        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(25,16,10,0.82)] p-4 sm:p-6 md:p-8">
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default"
              onClick={closeAlbum}
              aria-label="Inchide albumul"
            />
            <div className="relative z-10 flex w-[96vw] max-w-6xl flex-col overflow-y-auto rounded-sm border border-[var(--border-soft)] bg-[var(--background-soft)] px-5 pb-[60px] pt-5 shadow-[0_24px_52px_rgba(22,14,9,0.5)] sm:max-h-[92svh] sm:px-7 sm:pt-7 md:px-10 md:pt-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-red)]">
                    Album lucrari
                  </p>
                  <h3 className="font-heading mt-2 text-3xl text-[var(--wood-dark)] md:text-4xl">
                    {selectedWork.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeAlbum}
                  className="rounded-sm border border-[var(--wood-mid)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--wood-dark)] transition hover:bg-[var(--panel)]"
                >
                  Inchide
                </button>
              </div>

              <div
                className="mt-4 md:mt-6"
                onTouchStart={(event) =>
                  handleTouchStart(event.changedTouches[0]?.clientX ?? 0)
                }
                onTouchEnd={(event) =>
                  handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
                }
              >
                <div className="mx-auto mb-5 flex min-h-[72px] w-full max-w-4xl items-center justify-center md:mb-6 md:min-h-[88px]">
                  <Image
                    src="/images/chisel_small_v3.png"
                    alt="Dalta"
                    width={96}
                    height={96}
                    className="h-16 w-16 bg-transparent object-contain mix-blend-multiply drop-shadow-[0_0_34px_rgba(214,166,74,0.95)] md:h-[72px] md:w-[72px]"
                    title="Dalta"
                  />
                </div>
                <div className="mx-auto block w-[74vw] max-w-[332px] md:hidden">
                  <div className="relative">
                  <button
                    type="button"
                    onClick={() => maximizePhoto(selectedPhotoIndex)}
                    className="relative w-full rounded-sm border border-[var(--accent-red)]/70 shadow-[0_0_0_2px_rgba(149,48,28,0.16)] transition hover:border-[var(--accent-red)]"
                    aria-label={`Alege imaginea ${selectedPhotoIndex + 1} din albumul ${selectedWork.title}`}
                    style={{
                      cursor: "url('/images/chisel_cursor_large.png') 7 4, pointer",
                    }}
                  >
                    <FramedImage
                      src={activeAlbumImages[selectedPhotoIndex]?.thumbnailSrc}
                      alt={
                        activeAlbumImages[selectedPhotoIndex]?.alt ??
                        `${selectedWork.title} - thumbnail ${selectedPhotoIndex + 1}`
                      }
                      className="aspect-[4/3] w-full"
                      sizes="(max-width: 768px) 75vw, 25vw"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={goToPrevPhoto}
                    className="absolute -left-[38px] top-1/2 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-[var(--wood-mid)] transition hover:text-[var(--accent-red)] hover:drop-shadow-[0_0_11px_rgba(214,166,74,0.72)]"
                    aria-label="Imagine anterioara"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                      <path
                        d="M14.5 5.5L8 12l6.5 6.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goToNextPhoto}
                    className="absolute -right-[38px] top-1/2 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-[var(--wood-mid)] transition hover:text-[var(--accent-red)] hover:drop-shadow-[0_0_11px_rgba(214,166,74,0.72)]"
                    aria-label="Imagine urmatoare"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                      <path
                        d="M9.5 5.5L16 12l-6.5 6.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  </div>
                </div>

                <div className="hidden items-center justify-center gap-5 md:flex">
                  <button
                    type="button"
                    onClick={goToPrevPhoto}
                    className="flex h-12 w-10 items-center justify-center text-[var(--wood-mid)] transition hover:text-[var(--accent-red)] hover:drop-shadow-[0_0_12px_rgba(214,166,74,0.72)]"
                    aria-label="Thumbnail anterior"
                  >
                    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                      <path
                        d="M14.5 5.5L8 12l6.5 6.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid w-[82vw] max-w-[1220px] gap-5 ${
                      desktopVisibleCount === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`}
                  >
                    {visibleDesktopIndexes.map((index) => (
                      <button
                        key={`${selectedWork.title}-desktop-thumb-${index}`}
                        type="button"
                        onClick={() => maximizePhoto(index)}
                        className={`w-full rounded-sm transition ${
                          selectedPhotoIndex === index
                            ? "border border-[var(--accent-red)]/80 shadow-[0_0_0_2px_rgba(149,48,28,0.18)]"
                            : "border border-[var(--border-soft)] hover:border-[var(--wood-mid)]"
                        }`}
                        aria-label={`Alege imaginea ${index + 1} din albumul ${selectedWork.title}`}
                        style={{
                          cursor:
                            "url('/images/chisel_cursor_large.png') 7 4, pointer",
                        }}
                      >
                        <FramedImage
                          src={activeAlbumImages[index]?.thumbnailSrc}
                          alt={
                            activeAlbumImages[index]?.alt ??
                            `${selectedWork.title} - thumbnail ${index + 1}`
                          }
                          className="aspect-[4/3] w-full"
                          sizes="(max-width: 1200px) 28vw, 380px"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goToNextPhoto}
                    className="flex h-12 w-10 items-center justify-center text-[var(--wood-mid)] transition hover:text-[var(--accent-red)] hover:drop-shadow-[0_0_12px_rgba(214,166,74,0.72)]"
                    aria-label="Thumbnail urmator"
                  >
                    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                      <path
                        d="M9.5 5.5L16 12l-6.5 6.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {selectedWork && isFullscreenOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(8,5,3,0.94)] p-3 sm:p-5">
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default"
              onClick={() => setIsFullscreenOpen(false)}
              aria-label="Inchide imaginea marita"
            />
            <div className="relative z-10 h-[95svh] w-[95vw]">
              <button
                type="button"
                onClick={() => setIsFullscreenOpen(false)}
                className="absolute right-0 top-0 z-20 rounded-sm border border-[var(--border-soft)] bg-[var(--background-soft)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--wood-dark)] transition hover:bg-[var(--panel)]"
              >
                Inchide
              </button>
              <button
                type="button"
                onClick={goToPrevPhoto}
                className="absolute left-2 top-1/2 z-20 flex h-14 w-12 -translate-y-1/2 items-center justify-center text-[color:rgba(248,239,223,0.95)] transition hover:text-[var(--accent-gold)] hover:drop-shadow-[0_0_14px_rgba(214,166,74,0.9)] md:left-5"
                aria-label="Imagine anterioara fullscreen"
              >
                <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                  <path
                    d="M14.5 5.5L8 12l6.5 6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNextPhoto}
                className="absolute right-2 top-1/2 z-20 flex h-14 w-12 -translate-y-1/2 items-center justify-center text-[color:rgba(248,239,223,0.95)] transition hover:text-[var(--accent-gold)] hover:drop-shadow-[0_0_14px_rgba(214,166,74,0.9)] md:right-5"
                aria-label="Imagine urmatoare fullscreen"
              >
                <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                  <path
                    d="M9.5 5.5L16 12l-6.5 6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Image
                src={activeAlbumImages[selectedPhotoIndex]?.fullSrc}
                alt={
                  activeAlbumImages[selectedPhotoIndex]?.alt ??
                  `${selectedWork.title} - imagine marita ${selectedPhotoIndex + 1}`
                }
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>
          </div>
        )}

        <section
          id="despre"
          className="mx-auto grid max-w-6xl gap-10 px-5 py-18 md:grid-cols-12 md:px-8"
        >
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
              Despre artist
            </p>
            <h2 className="font-heading mt-3 text-4xl text-[var(--wood-dark)]">
              Atelierul, locul unde timpul lucreaza impreuna cu mana
            </h2>
            <p className="mt-6 leading-8 text-[var(--text-main)]/90">
              Paul Botescu este sculptor in lemn cu practica dedicata lucrarilor
              traditionale. Fiecare piesa este lucrata manual, cu atentie pentru
              fibra, pentru simbol si pentru rostul pe care lucrarea il va avea.
            </p>
            <p className="mt-5 leading-8 text-[var(--text-main)]/90">
              In atelier, nimic nu este grabit. Forma se construieste treptat,
              prin observatie, disciplina si respect pentru material. Rezultatul
              este o lucrare care poarta urme vii de lucru, nu doar un obiect
              decorativ.
            </p>
            <blockquote className="mt-7 border-l-2 border-[var(--accent-gold)] pl-4 font-heading text-2xl text-[var(--wood-dark)]">
              &ldquo;Lemnul bun cere rabdare. In el ramane urma mainii, nu doar
              forma.&rdquo;
            </blockquote>
          </div>
          <div className="md:col-span-7 md:pt-8">
            <FramedImage
              src="/images/hero-facebook.jpg"
              alt="Atelier Paul Botescu — detaliu lucrare sculptata in lemn"
              className="h-[460px] w-full shadow-[0_16px_30px_rgba(74,46,31,0.18)]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </section>

        <section id="proces" className="mx-auto max-w-6xl px-5 py-18 md:px-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
            Proces
          </p>
          <h2 className="font-heading mt-3 text-4xl text-[var(--wood-dark)]">
            Cum ia nastere o lucrare
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.no}
                className="rounded-sm border border-[var(--border-soft)] bg-[var(--background-soft)] p-7 shadow-[0_8px_20px_rgba(74,46,31,0.08)]"
              >
                <p className="font-heading text-4xl text-[var(--accent-gold)]">
                  {step.no}
                </p>
                <h3 className="font-heading mt-2 text-2xl text-[var(--wood-dark)]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-main)]/85">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-18 md:px-8">
          <div className="rounded-sm border border-[var(--border-soft)] bg-[var(--wood-dark)] px-6 py-12 text-center shadow-[0_14px_28px_rgba(74,46,31,0.2)] md:px-14">
            <p className="font-heading text-3xl leading-relaxed text-[var(--background-soft)] md:text-4xl">
              &ldquo;Fiecare bucata de lemn isi poarta propria poveste.&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
              Atelier de sculptura traditionala
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-5 pb-18 pt-8 md:px-8"
        >
          <div className="rounded-sm border border-[var(--border-soft)] bg-[var(--background-soft)] p-8 shadow-[0_10px_22px_rgba(74,46,31,0.09)] md:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--wood-mid)]">
              Contact
            </p>
            <h2 className="font-heading mt-3 text-4xl text-[var(--wood-dark)]">
              Disponibil pentru lucrari personalizate
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--text-main)]/90">
              Pentru comenzi, dimensiuni speciale sau colaborari, puteti trimite
              un mesaj direct. Raspunsul vine cu propunere clara de executie si
              estimare de timp.
            </p>

            <div className="mt-8 grid gap-5 text-[var(--text-main)]/90 md:grid-cols-2">
              <p>
                <span className="font-semibold">Telefon:</span> 07xx xxx xxx
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                paulbotescu@yahoo.com
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> 07xx xxx xxx
              </p>
              <p>
                <span className="font-semibold">Atelier:</span> Romania,
                Bucuresti
              </p>
            </div>

            <a
              href="mailto:paulbotescu@yahoo.com"
              className="mt-8 inline-block rounded-sm bg-[var(--accent-red)] px-6 py-3 text-sm font-medium text-[var(--background-soft)] transition hover:opacity-90"
            >
              Trimite solicitare comanda
            </a>
          </div>
        </section>
      </main>

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
          <div className="flex flex-wrap gap-5 text-sm text-[var(--wood-dark)]">
            <a href="#lucrari" className="hover:text-[var(--accent-red)]">
              Lucrari
            </a>
            <a href="#despre" className="hover:text-[var(--accent-red)]">
              Despre
            </a>
            <a href="#proces" className="hover:text-[var(--accent-red)]">
              Proces
            </a>
            <a href="#contact" className="hover:text-[var(--accent-red)]">
              Contact
            </a>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-[var(--text-main)]/70">
          © {new Date().getFullYear()} Atelier Paul Botescu. Toate drepturile
          rezervate.
        </p>
      </footer>
    </div>
  );
}
