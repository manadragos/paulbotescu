"use client";

import Image from "next/image";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FramedImage } from "@/components/FramedImage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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

/** Foto in modalul CV — sursa 1936×1296; chenar+latura afisare ~660px (+20 fata de 640). */
const CV_CATAPETESMA_SRC = "/images/catapeteasma.jpg";
const CV_CATAPETESMA_W = 660;
const CV_CATAPETESMA_H = Math.round((1296 * 660) / 1936);

/** Markeri din `public/cv.md` pentru pozitionare imagine / video in flux. */
const CV_MD_BODY_START = "**Data nașterii:**";
const CV_MD_TEATRU_LINE =
  "Teatrul Național București. Expoziție Icoana-credință și tradiție (15 decembrie 2016 - 12 ianuarie 2017) <br />";

function splitCvMarkdownForLayout(raw: string):
  | { mode: "split"; intro: string; main: string; tail: string }
  | { mode: "fallback"; full: string } {
  const iBody = raw.indexOf(CV_MD_BODY_START);
  if (iBody === -1) {
    return { mode: "fallback", full: raw };
  }
  const intro = raw.slice(0, iBody);
  const fromBody = raw.slice(iBody);
  const iTeatru = fromBody.indexOf(CV_MD_TEATRU_LINE);
  if (iTeatru === -1) {
    return { mode: "split", intro, main: fromBody, tail: "" };
  }
  const main = fromBody.slice(0, iTeatru + CV_MD_TEATRU_LINE.length);
  const tail = fromBody.slice(iTeatru + CV_MD_TEATRU_LINE.length);
  return { mode: "split", intro, main, tail };
}

const cvModalMarkdownComponents = {
  h1: ({ ...props }) => (
    <h1
      className="font-heading mb-3 text-[length:clamp(1.375rem,0.92rem+1.9vw,1.875rem)] text-[var(--wood-dark)] sm:mb-4"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mt-5 mb-2 text-[length:clamp(1.125rem,0.82rem+1.15vw,1.5rem)] font-semibold text-[var(--wood-dark)] sm:mt-7 sm:mb-3"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mt-4 mb-2 text-[length:clamp(1rem,0.78rem+0.85vw,1.25rem)] font-semibold text-[var(--wood-dark)] sm:mt-5"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="mb-2 text-[length:clamp(0.8125rem,0.74rem+0.55vw,1.02875rem)] leading-[1.55] lg:leading-8"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul
      className="mb-4 list-disc space-y-1 pl-4 sm:pl-6"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      className="mb-4 list-decimal space-y-1 pl-4 sm:pl-6"
      {...props}
    />
  ),
  li: ({ ...props }) => (
    <li
      className="text-[length:clamp(0.8125rem,0.74rem+0.55vw,1.02875rem)] leading-[1.45] lg:leading-7"
      {...props}
    />
  ),
  strong: ({ ...props }) => (
    <strong
      className="font-semibold text-[var(--wood-dark)]"
      {...props}
    />
  ),
};

export default function Home() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [cvContent, setCvContent] = useState("");
  const [isCvLoading, setIsCvLoading] = useState(false);
  const [cvError, setCvError] = useState("");
  const cvLayout = useMemo(() => splitCvMarkdownForLayout(cvContent), [cvContent]);

  useEffect(() => {
    if (!isCvOpen || cvContent || isCvLoading) return;

    const loadCv = async () => {
      setIsCvLoading(true);
      setCvError("");
      try {
        const response = await fetch("/cv.md");
        if (!response.ok) {
          throw new Error("Nu am putut incarca CV-ul.");
        }
        setCvContent(await response.text());
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "A aparut o eroare la incarcarea CV-ului.";
        setCvError(message);
      } finally {
        setIsCvLoading(false);
      }
    };

    void loadCv();
  }, [isCvOpen, cvContent, isCvLoading]);

  return (
    <div className="grain-bg min-h-screen">
      <SiteHeader />

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
              <Link
                href="/lucrari"
                className="rounded-sm bg-[var(--wood-dark)] px-6 py-3 text-sm font-medium text-[var(--background-soft)] transition hover:opacity-90"
              >
                Vezi lucrarile
              </Link>
              <a
                href="#contact"
                className="rounded-sm border border-[var(--wood-mid)] px-6 py-3 text-sm font-medium text-[var(--wood-dark)] transition hover:bg-[var(--background-soft)]"
              >
                Solicita o lucrare
              </a>
            </div>
          </div>
        </section>

        {isCvOpen && (
          <div className="fixed inset-0 z-[65] flex items-center justify-center bg-[rgba(25,16,10,0.82)] p-4 sm:p-6 md:p-8">
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default"
              onClick={() => setIsCvOpen(false)}
              aria-label="Inchide CV"
            />
            <div className="relative z-10 flex w-[min(100%,96vw)] max-w-[760px] flex-col overflow-y-auto rounded-sm border border-[var(--border-soft)] bg-[var(--background-soft)] px-3 pb-6 pt-4 shadow-[0_24px_52px_rgba(22,14,9,0.5)] sm:max-h-[92svh] sm:px-5 sm:pt-5 md:px-7 md:pt-7 lg:px-10 lg:pt-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-red)]">
                    Curriculum Vitae
                  </p>
                  <h3 className="font-heading mt-2 text-3xl text-[var(--wood-dark)] md:text-4xl">
                    Paul Botescu
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCvOpen(false)}
                  className="rounded-sm border border-[var(--wood-mid)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--wood-dark)] transition hover:bg-[var(--panel)]"
                >
                  Inchide
                </button>
              </div>

              <div className="mt-6 min-w-0 w-full rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-3 sm:p-5 md:p-6">
                {isCvLoading ? (
                  <p className="text-sm text-[var(--wood-mid)]">
                    Se incarca CV-ul...
                  </p>
                ) : cvError ? (
                  <p className="text-sm text-[var(--accent-red)]">
                    {cvError}
                  </p>
                ) : (
                  <div className="min-w-0 max-w-full break-words text-[var(--text-main)]/90">
                    {cvLayout.mode === "fallback" ? (
                      <>
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          components={cvModalMarkdownComponents}
                        >
                          {cvLayout.full}
                        </ReactMarkdown>
                        <div className="mx-auto mt-1 w-full max-w-[660px] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-[5px]">
                          <Image
                            src={CV_CATAPETESMA_SRC}
                            alt="Catapeteasma — lucrare sculptata in lemn"
                            width={CV_CATAPETESMA_W}
                            height={CV_CATAPETESMA_H}
                            className="h-auto w-full rounded-sm object-contain"
                            sizes="(min-width: 1024px) 660px, min(96vw, 660px)"
                          />
                        </div>
                        <div className="mx-auto mt-6 w-full max-w-[660px] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-[5px]">
                          <iframe
                            src="https://www.youtube.com/embed/_E0hffH4dUA"
                            width="100%"
                            height={540}
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="aspect-video w-full rounded-sm lg:aspect-auto lg:h-[540px]"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {cvLayout.intro.trim() ? (
                          <div
                            className="mt-[40px] [&_p]:mx-auto [&_p]:max-w-[660px] [&_p]:text-center [&_em]:block [&_em]:font-heading [&_em]:text-[length:clamp(1.05rem,0.9rem+0.52vw,1.38rem)] [&_em]:leading-snug [&_em]:text-[var(--wood-dark)] [&_em]:italic"
                          >
                            <ReactMarkdown
                              rehypePlugins={[rehypeRaw]}
                              components={cvModalMarkdownComponents}
                            >
                              {cvLayout.intro}
                            </ReactMarkdown>
                          </div>
                        ) : null}
                        <div className="mx-auto -mt-[24px] w-full max-w-[660px] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-[5px]">
                          <Image
                            src={CV_CATAPETESMA_SRC}
                            alt="Catapeteasma — lucrare sculptata in lemn"
                            width={CV_CATAPETESMA_W}
                            height={CV_CATAPETESMA_H}
                            className="h-auto w-full rounded-sm object-contain"
                            sizes="(min-width: 1024px) 660px, min(96vw, 660px)"
                          />
                        </div>
                        {cvLayout.main.trim() ? (
                          <div className="pt-[40px]">
                            <ReactMarkdown
                              rehypePlugins={[rehypeRaw]}
                              components={cvModalMarkdownComponents}
                            >
                              {cvLayout.main}
                            </ReactMarkdown>
                          </div>
                        ) : null}
                        <div className="mx-auto mt-6 w-full max-w-[660px] overflow-hidden rounded-sm border border-[var(--border-soft)] bg-[color:rgba(255,252,246,0.6)] p-[5px]">
                          <iframe
                            src="https://www.youtube.com/embed/_E0hffH4dUA"
                            width="100%"
                            height={540}
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="aspect-video w-full rounded-sm lg:aspect-auto lg:h-[540px]"
                          />
                        </div>
                        {cvLayout.tail.trim() ? (
                          <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={cvModalMarkdownComponents}
                          >
                            {cvLayout.tail}
                          </ReactMarkdown>
                        ) : null}
                      </>
                    )}
                  </div>
                )}
              </div>
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
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="font-semibold text-[var(--accent-red)] underline decoration-[var(--accent-gold)] decoration-2 underline-offset-4 transition hover:text-[var(--wood-dark)]"
              >
                Paul Botescu
              </button>{" "}
              este sculptor in lemn cu practica dedicata lucrarilor
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
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="group relative block w-full text-left"
              aria-label="Deschide CV-ul lui Paul Botescu"
              style={{
                cursor: "url('/images/chisel_cursor_large.png') 7 4, pointer",
              }}
            >
              <FramedImage
                src="/images/hero-facebook.jpg"
                alt="Atelier Paul Botescu — detaliu lucrare sculptata in lemn"
                className="h-[460px] w-full shadow-[0_16px_30px_rgba(74,46,31,0.18)]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-sm bg-[rgba(25,16,10,0.38)] opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-heading text-3xl italic tracking-[0.04em] text-[var(--background-soft)] drop-shadow-[0_3px_10px_rgba(8,5,3,0.55)] md:text-4xl">
                  Despre mine
                </span>
              </span>
            </button>
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
                <span className="font-semibold">Telefon:</span> 0722 686 328
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                paulbotescu@yahoo.com
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> 0722 686 328
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

      <SiteFooter />
    </div>
  );
}
