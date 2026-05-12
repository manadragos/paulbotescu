"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FramedImage } from "@/components/FramedImage";
import { works, type AlbumImage, type Work } from "@/components/lucrari-data";

const PAGE_SIZE = 10;

function lucrariListHref(page: number) {
  if (page <= 1) return "/lucrari#lucrari";
  return `/lucrari?page=${page}#lucrari`;
}

export function LucrariGallery() {
  const searchParams = useSearchParams();
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

  const totalPages = Math.max(1, Math.ceil(works.length / PAGE_SIZE));
  const currentPage = useMemo(() => {
    const raw = Number.parseInt(searchParams.get("page") ?? "1", 10);
    if (!Number.isFinite(raw) || raw < 1) return 1;
    if (raw > totalPages) return totalPages;
    return raw;
  }, [searchParams, totalPages]);

  const pageWorks = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return works.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const rangeStart = (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, works.length);

  useEffect(() => {
    setSelectedWork(null);
    setSelectedPhotoIndex(0);
    setCarouselStartIndex(0);
    setIsFullscreenOpen(false);
  }, [currentPage]);

  return (
    <>
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

          {totalPages > 1 ? (
            <p className="mt-3 text-sm text-[var(--wood-mid)]">
              Afisare {rangeStart}–{rangeEnd} din {works.length} albume (pagina{" "}
              {currentPage} din {totalPages}).
            </p>
          ) : null}

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {pageWorks.map((work, index) => (
              <article
                key={work.category || `work-${(currentPage - 1) * PAGE_SIZE + index}`}
              >
                <button
                  type="button"
                  onClick={() => openAlbum(work)}
                  className="group block w-full text-left"
                  aria-label={`Deschide albumul ${work.title || work.category}`}
                  style={{
                    cursor:
                      "url('/images/chisel_cursor_large.png') 7 4, pointer",
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

          {totalPages > 1 ? (
            <nav
              className="mt-14 flex flex-col items-center gap-5 border-t border-[var(--border-soft)]/80 pt-10"
              aria-label="Paginare galerie lucrari"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--wood-mid)]">
                Pagini
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {currentPage > 1 ? (
                  <Link
                    href={lucrariListHref(currentPage - 1)}
                    className="rounded-sm border border-[var(--wood-mid)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--wood-dark)] transition hover:bg-[var(--panel)]"
                  >
                    Anterioara
                  </Link>
                ) : (
                  <span className="rounded-sm border border-[var(--border-soft)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--wood-mid)]/50">
                    Anterioara
                  </span>
                )}
                <div className="mx-1 flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      href={lucrariListHref(n)}
                      className={
                        n === currentPage
                          ? "min-w-[2.25rem] rounded-sm border border-[var(--wood-dark)] bg-[var(--panel)] px-2.5 py-2 text-center text-sm font-semibold text-[var(--wood-dark)]"
                          : "min-w-[2.25rem] rounded-sm border border-[var(--border-soft)] px-2.5 py-2 text-center text-sm text-[var(--wood-dark)] transition hover:border-[var(--wood-mid)] hover:bg-[color:rgba(255,252,246,0.55)]"
                      }
                      aria-current={n === currentPage ? "page" : undefined}
                    >
                      {n}
                    </Link>
                  ))}
                </div>
                {currentPage < totalPages ? (
                  <Link
                    href={lucrariListHref(currentPage + 1)}
                    className="rounded-sm border border-[var(--wood-mid)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--wood-dark)] transition hover:bg-[var(--panel)]"
                  >
                    Urmatoarea
                  </Link>
                ) : (
                  <span className="rounded-sm border border-[var(--border-soft)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--wood-mid)]/50">
                    Urmatoarea
                  </span>
                )}
              </div>
            </nav>
          ) : null}
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
                    {selectedWork.category}
                  </p>
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
                        cursor:
                          "url('/images/chisel_cursor_large.png') 7 4, pointer",
                      }}
                    >
                      <FramedImage
                        src={
                          activeAlbumImages[selectedPhotoIndex]?.thumbnailSrc
                        }
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
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        aria-hidden="true"
                      >
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
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        aria-hidden="true"
                      >
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
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
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
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
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
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
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
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
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
    </>
  );
}
