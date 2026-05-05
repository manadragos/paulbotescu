import Image from "next/image";

const works = [
  {
    category: "Triptice",
    title: "Triptice",
    description: "-",
    image: "/images/album-triptice.jpg",
    imageAlt: "Triptice",
  },
  {
    category: "Troite",
    title: "Troita de hotar",
    description: "-",
    image: "/images/album-troite.jpg",
    imageAlt: "Troita de hotar",
  },
  {
    category: "Cruce model Sapanta",
    title: "Cruce model Sapanta",
    description: "-",
    image: "/images/album-cruce-model-sapanta.jpg",
    imageAlt: "Cruce model Sapanta",
  },
  {
    category: "Axionita Prodromita",
    title: "Axionita Prodromita",
    description: "-",
    image: "/images/album-axionita-prodromita.jpg",
    imageAlt: "Axionita Prodromita",
  },
  {
    category: "Icoane",
    title: "Icoane",
    description: "-",
    image: "/images/album-icoane.jpg",
    imageAlt: "Icoane",
  },
  {
    category: "Icoane pe usi",
    title: "Icoane pe usi",
    description: "-",
    image: "/images/album-icoane-pe-usi.jpg",
    imageAlt: "Icoane pe usi",
  },
  {
    category: "Iconostas",
    title: "Iconostas",
    description: "-",
    image: "/images/album-iconostas.jpg",
    imageAlt: "Iconostas",
  },
  {
    category: "Ingeri",
    title: "Ingeri",
    description: "-",
    image: "/images/album-ingeri.jpg",
    imageAlt: "Ingeri",
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
              <article key={work.title} className="group">
                <FramedImage
                  src={work.image}
                  alt={work.imageAlt}
                  className="aspect-[4/3] w-full shadow-[0_10px_26px_rgba(74,46,31,0.12)] transition duration-300 group-hover:translate-y-[-2px] group-hover:shadow-[0_14px_30px_rgba(74,46,31,0.16)]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--accent-red)]">
                  {work.category}
                </p>
                <h3 className="font-heading mt-2 text-3xl text-[var(--wood-dark)]">
                  {work.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-main)]/85">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </section>

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
