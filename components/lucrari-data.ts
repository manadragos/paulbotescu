export type AlbumImage = {
  thumbnailSrc: string;
  fullSrc: string;
  alt: string;
};

export type Work = {
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

const troitaStejarAlbumImages: AlbumImage[] = Array.from(
  { length: 10 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/troita stejar/troitastejar${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Troita de stejar imagine ${n}`,
    };
  },
);

const cruceModelSapantaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc:
      "/images/cruce model sapanta/thumbnail_crucemodelsapanta1.jpg",
    fullSrc: "/images/cruce model sapanta/crucemodelsapanta1.jpg",
    alt: "Cruce model Sapanta imagine 1",
  },
  {
    thumbnailSrc:
      "/images/cruce model sapanta/thumbnail_crucemodelsapanta2.jpg",
    fullSrc: "/images/cruce model sapanta/crucemodelsapanta2.jpg",
    alt: "Cruce model Sapanta imagine 2",
  },
  {
    thumbnailSrc:
      "/images/cruce model sapanta/thumbnail_crucemodelsapanta3.jpg",
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

const raclaPetruVodaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda1.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda1.jpg",
    alt: "Racla Petru Voda imagine 1",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda2.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda2.jpg",
    alt: "Racla Petru Voda imagine 2",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda3.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda3.jpg",
    alt: "Racla Petru Voda imagine 3",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda4.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda4.jpg",
    alt: "Racla Petru Voda imagine 4",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda5.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda5.jpg",
    alt: "Racla Petru Voda imagine 5",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda6.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda6.jpg",
    alt: "Racla Petru Voda imagine 6",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda7.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda7.jpg",
    alt: "Racla Petru Voda imagine 7",
  },
  {
    thumbnailSrc: "/images/racla petru voda/thumbnail_raclapetruvoda8.jpg",
    fullSrc: "/images/racla petru voda/raclapetruvoda8.jpg",
    alt: "Racla Petru Voda imagine 8",
  },
];

const stranaArhiereascaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca1.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca1.jpg",
    alt: "Strana arhiereasca imagine 1",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca2.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca2.jpg",
    alt: "Strana arhiereasca imagine 2",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca3.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca3.jpg",
    alt: "Strana arhiereasca imagine 3",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca4.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca4.jpg",
    alt: "Strana arhiereasca imagine 4",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca5.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca5.jpg",
    alt: "Strana arhiereasca imagine 5",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca6.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca6.jpg",
    alt: "Strana arhiereasca imagine 6",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca7.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca7.jpg",
    alt: "Strana arhiereasca imagine 7",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca8.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca8.jpg",
    alt: "Strana arhiereasca imagine 8",
  },
  {
    thumbnailSrc: "/images/strana arhiereasca/thumbnail_stranaarhiereasca9.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca9.jpg",
    alt: "Strana arhiereasca imagine 9",
  },
  {
    thumbnailSrc:
      "/images/strana arhiereasca/thumbnail_stranaarhiereasca10.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca10.jpg",
    alt: "Strana arhiereasca imagine 10",
  },
  {
    thumbnailSrc:
      "/images/strana arhiereasca/thumbnail_stranaarhiereasca11.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca11.jpg",
    alt: "Strana arhiereasca imagine 11",
  },
  {
    thumbnailSrc:
      "/images/strana arhiereasca/thumbnail_stranaarhiereasca12.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca12.jpg",
    alt: "Strana arhiereasca imagine 12",
  },
  {
    thumbnailSrc:
      "/images/strana arhiereasca/thumbnail_stranaarhiereasca13.jpg",
    fullSrc: "/images/strana arhiereasca/stranaarhiereasca13.jpg",
    alt: "Strana arhiereasca imagine 13",
  },
];

const raclaDanionAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion1.jpg",
    fullSrc: "/images/racla danion/racladanion1.jpg",
    alt: "Racla Danion imagine 1",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion2.jpg",
    fullSrc: "/images/racla danion/racladanion2.jpg",
    alt: "Racla Danion imagine 2",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion3.jpg",
    fullSrc: "/images/racla danion/racladanion3.jpg",
    alt: "Racla Danion imagine 3",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion4.jpg",
    fullSrc: "/images/racla danion/racladanion4.jpg",
    alt: "Racla Danion imagine 4",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion5.jpg",
    fullSrc: "/images/racla danion/racladanion5.jpg",
    alt: "Racla Danion imagine 5",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion6.jpg",
    fullSrc: "/images/racla danion/racladanion6.jpg",
    alt: "Racla Danion imagine 6",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion7.jpg",
    fullSrc: "/images/racla danion/racladanion7.jpg",
    alt: "Racla Danion imagine 7",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion8.jpg",
    fullSrc: "/images/racla danion/racladanion8.jpg",
    alt: "Racla Danion imagine 8",
  },
  {
    thumbnailSrc: "/images/racla danion/thumbnail_racladanion9.jpg",
    fullSrc: "/images/racla danion/racladanion9.jpg",
    alt: "Racla Danion imagine 9",
  },
];

const raclaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/racla/thumbnail_racla1.jpg",
    fullSrc: "/images/racla/racla1.jpg",
    alt: "Racla imagine 1",
  },
  {
    thumbnailSrc: "/images/racla/thumbnail_racla2.jpg",
    fullSrc: "/images/racla/racla2.jpg",
    alt: "Racla imagine 2",
  },
  {
    thumbnailSrc: "/images/racla/thumbnail_racla3.jpg",
    fullSrc: "/images/racla/racla3.jpg",
    alt: "Racla imagine 3",
  },
  {
    thumbnailSrc: "/images/racla/thumbnail_racla4.jpg",
    fullSrc: "/images/racla/racla4.jpg",
    alt: "Racla imagine 4",
  },
  {
    thumbnailSrc: "/images/racla/thumbnail_racla5.jpg",
    fullSrc: "/images/racla/racla5.jpg",
    alt: "Racla imagine 5",
  },
  {
    thumbnailSrc: "/images/racla/thumbnail_racla6.jpg",
    fullSrc: "/images/racla/racla6.jpg",
    alt: "Racla imagine 6",
  },
];

const polipticeAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice1.jpg",
    fullSrc: "/images/poliptice/poliptice1.jpg",
    alt: "Poliptice imagine 1",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice2.jpg",
    fullSrc: "/images/poliptice/poliptice2.jpg",
    alt: "Poliptice imagine 2",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice3.jpg",
    fullSrc: "/images/poliptice/poliptice3.jpg",
    alt: "Poliptice imagine 3",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice4.jpg",
    fullSrc: "/images/poliptice/poliptice4.jpg",
    alt: "Poliptice imagine 4",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice5.jpg",
    fullSrc: "/images/poliptice/poliptice5.jpg",
    alt: "Poliptice imagine 5",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice6.jpg",
    fullSrc: "/images/poliptice/poliptice6.jpg",
    alt: "Poliptice imagine 6",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice7.jpg",
    fullSrc: "/images/poliptice/poliptice7.jpg",
    alt: "Poliptice imagine 7",
  },
  {
    thumbnailSrc: "/images/poliptice/thumbnail_poliptice8.jpg",
    fullSrc: "/images/poliptice/poliptice8.jpg",
    alt: "Poliptice imagine 8",
  },
];

const matritaLumanareAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/matrita lumanare/thumbnail_matritalumanare1.jpg",
    fullSrc: "/images/matrita lumanare/matritalumanare1.jpg",
    alt: "Matrita lumanare imagine 1",
  },
  {
    thumbnailSrc: "/images/matrita lumanare/thumbnail_matritalumanare2.jpg",
    fullSrc: "/images/matrita lumanare/matritalumanare2.jpg",
    alt: "Matrita lumanare imagine 2",
  },
  {
    thumbnailSrc: "/images/matrita lumanare/thumbnail_matritalumanare3.jpg",
    fullSrc: "/images/matrita lumanare/matritalumanare3.jpg",
    alt: "Matrita lumanare imagine 3",
  },
];

const sahDeGradinaAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/sah de gradina/thumbnail_sahdegradina1.jpg",
    fullSrc: "/images/sah de gradina/sahdegradina1.jpg",
    alt: "Sah de gradina imagine 1",
  },
  {
    thumbnailSrc: "/images/sah de gradina/thumbnail_sahdegradina2.jpg",
    fullSrc: "/images/sah de gradina/sahdegradina2.jpg",
    alt: "Sah de gradina imagine 2",
  },
  {
    thumbnailSrc: "/images/sah de gradina/thumbnail_sahdegradina3.jpg",
    fullSrc: "/images/sah de gradina/sahdegradina3.jpg",
    alt: "Sah de gradina imagine 3",
  },
];

const sahDaciiSiRomaniiAlbumImages: AlbumImage[] = Array.from(
  { length: 33 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/sah dacii si romanii/thumbnail_sahdaciisiromanii${imageNo}.jpg`,
      fullSrc: `/images/sah dacii si romanii/sahdaciisiromanii${imageNo}.jpg`,
      alt: `Sah dacii si romanii imagine ${imageNo}`,
    };
  },
);

const suportSticlaDacAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/suport sticla dac/thumbnail_suportsticladac1.jpg",
    fullSrc: "/images/suport sticla dac/suportsticladac1.jpg",
    alt: "Suport sticla Dac imagine 1",
  },
  {
    thumbnailSrc: "/images/suport sticla dac/thumbnail_suportsticladac2.jpg",
    fullSrc: "/images/suport sticla dac/suportsticladac2.jpg",
    alt: "Suport sticla Dac imagine 2",
  },
  {
    thumbnailSrc: "/images/suport sticla dac/thumbnail_suportsticladac3.jpg",
    fullSrc: "/images/suport sticla dac/suportsticladac3.jpg",
    alt: "Suport sticla Dac imagine 3",
  },
  {
    thumbnailSrc: "/images/suport sticla dac/thumbnail_suportsticladac4.jpg",
    fullSrc: "/images/suport sticla dac/suportsticladac4.jpg",
    alt: "Suport sticla Dac imagine 4",
  },
  {
    thumbnailSrc: "/images/suport sticla dac/thumbnail_suportsticladac5.jpg",
    fullSrc: "/images/suport sticla dac/suportsticladac5.jpg",
    alt: "Suport sticla Dac imagine 5",
  },
];

const rameAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/rame/thumbnail_rame1.jpg",
    fullSrc: "/images/rame/rame1.jpg",
    alt: "Rame imagine 1",
  },
  {
    thumbnailSrc: "/images/rame/thumbnail_rame2.jpg",
    fullSrc: "/images/rame/rame2.jpg",
    alt: "Rame imagine 2",
  },
  {
    thumbnailSrc: "/images/rame/thumbnail_rame3.jpg",
    fullSrc: "/images/rame/rame3.jpg",
    alt: "Rame imagine 3",
  },
];

const masaSculptataAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/masa sculptata/thumbnail_masasculptata1.jpg",
    fullSrc: "/images/masa sculptata/masasculptata1.jpg",
    alt: "Masa sculptata imagine 1",
  },
  {
    thumbnailSrc: "/images/masa sculptata/thumbnail_masasculptata2.jpg",
    fullSrc: "/images/masa sculptata/masasculptata2.jpg",
    alt: "Masa sculptata imagine 2",
  },
  {
    thumbnailSrc: "/images/masa sculptata/thumbnail_masasculptata3.jpg",
    fullSrc: "/images/masa sculptata/masasculptata3.jpg",
    alt: "Masa sculptata imagine 3",
  },
];

const frunzeAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/frunze/thumbnail_frunze1.jpg",
    fullSrc: "/images/frunze/frunze1.jpg",
    alt: "Frunze imagine 1",
  },
  {
    thumbnailSrc: "/images/frunze/thumbnail_frunze2.jpg",
    fullSrc: "/images/frunze/frunze2.jpg",
    alt: "Frunze imagine 2",
  },
];

const cruciuliteCuSecreterAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc:
      "/images/cruciulita cu secreter/thumbnail_cruciulitacusecreter1.jpg",
    fullSrc: "/images/cruciulita cu secreter/cruciulitacusecreter1.jpg",
    alt: "Cruciulite cu secreter imagine 1",
  },
  {
    thumbnailSrc:
      "/images/cruciulita cu secreter/thumbnail_cruciulitacusecreter2.jpg",
    fullSrc: "/images/cruciulita cu secreter/cruciulitacusecreter2.jpg",
    alt: "Cruciulite cu secreter imagine 2",
  },
  {
    thumbnailSrc:
      "/images/cruciulita cu secreter/thumbnail_cruciulitacusecreter3.jpg",
    fullSrc: "/images/cruciulita cu secreter/cruciulitacusecreter3.jpg",
    alt: "Cruciulite cu secreter imagine 3",
  },
  {
    thumbnailSrc:
      "/images/cruciulita cu secreter/thumbnail_cruciulitacusecreter4.jpg",
    fullSrc: "/images/cruciulita cu secreter/cruciulitacusecreter4.jpg",
    alt: "Cruciulite cu secreter imagine 4",
  },
  {
    thumbnailSrc:
      "/images/cruciulita cu secreter/thumbnail_cruciulitacusecreter5.jpg",
    fullSrc: "/images/cruciulita cu secreter/cruciulitacusecreter5.jpg",
    alt: "Cruciulite cu secreter imagine 5",
  },
];

const altarAlbumImages: AlbumImage[] = [
  {
    thumbnailSrc: "/images/altar/thumbnail_altar1.jpg",
    fullSrc: "/images/altar/altar1.jpg",
    alt: "Altar imagine 1",
  },
  {
    thumbnailSrc: "/images/altar/thumbnail_altar2.jpg",
    fullSrc: "/images/altar/altar2.jpg",
    alt: "Altar imagine 2",
  },
];

const dulapuriLemnDeNucAlbumImages: AlbumImage[] = Array.from(
  { length: 15 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/dulapuri lemn de nuc/thumbnail_dulapurilemndenuc${imageNo}.jpg`,
      fullSrc: `/images/dulapuri lemn de nuc/dulapurilemndenuc${imageNo}.jpg`,
      alt: `Dulapuri lemn de nuc imagine ${imageNo}`,
    };
  },
);

const capDeLeuAlbumImages: AlbumImage[] = Array.from(
  { length: 12 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/cap de leu/thumbnail_capdeleu${imageNo}.jpg`,
      fullSrc: `/images/cap de leu/capdeleu${imageNo}.jpg`,
      alt: `Cap de leu imagine ${imageNo}`,
    };
  },
);

const cruciAlbumImages: AlbumImage[] = Array.from(
  { length: 45 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/cruci/thumbnail_cruci${imageNo}.jpg`,
      fullSrc: `/images/cruci/cruci${imageNo}.jpg`,
      alt: `Cruci imagine ${imageNo}`,
    };
  },
);

const copertaSfantaEvanghelieAlbumImages: AlbumImage[] = Array.from(
  { length: 10 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/coperta sfanta evanghelie/thumbnail_copertasfantaevanghelie${imageNo}.jpg`,
      fullSrc: `/images/coperta sfanta evanghelie/copertasfantaevanghelie${imageNo}.jpg`,
      alt: `Coperta sfanta evanghelie imagine ${imageNo}`,
    };
  },
);

const axionitaAlbumImages: AlbumImage[] = Array.from(
  { length: 23 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/axionita/thumbnail_axionita${imageNo}.jpg`,
      fullSrc: `/images/axionita/axionita${imageNo}.jpg`,
      alt: `Axionita imagine ${imageNo}`,
    };
  },
);

const potirSiSfantulDiscAlbumImages: AlbumImage[] = Array.from(
  { length: 6 },
  (_, index) => {
    const imageNo = index + 1;
    return {
      thumbnailSrc: `/images/potir si sfantul disc/thumbnail_potirsisfantuldisc${imageNo}.jpg`,
      fullSrc: `/images/potir si sfantul disc/potirsisfantuldisc${imageNo}.jpg`,
      alt: `Potir si sfantul disc imagine ${imageNo}`,
    };
  },
);

const masaStejarMasivAlbumImages: AlbumImage[] = Array.from(
  { length: 5 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/Masa 14 persoane stejar masiv/Masa14persoanestejarmasiv${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Masa stejar masiv imagine ${n}`,
    };
  },
);

const raclaSfantulLucaCrimeeiAlbumImages: AlbumImage[] = Array.from(
  { length: 29 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/Racla Sfantului Luca al Crimeei/RaclaSfantuluiLucaalCrimeei${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Racla Sfantului Luca al Crimeei imagine ${n}`,
    };
  },
);

const birouNucSiZebranoAlbumImages: AlbumImage[] = Array.from(
  { length: 6 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/Birou nuc si zebrano/Birounucsizebrano${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Birou nuc si zebrano imagine ${n}`,
    };
  },
);

const citelnitaCantaretiAlbumImages: AlbumImage[] = Array.from(
  { length: 15 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/Citelnita cantareti/Citelnitacantareti${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Citelniță cântăreți imagine ${n}`,
    };
  },
);

const stativSfEvanghelieAlbumImages: AlbumImage[] = Array.from(
  { length: 15 },
  (_, index) => {
    const n = index + 1;
    const base = `/images/Stativ Sf. Evanghelie/StativSfEvanghelie${n}.jpg`;
    return {
      thumbnailSrc: base,
      fullSrc: base,
      alt: `Stativ Sf. Evanghelie imagine ${n}`,
    };
  },
);

const catapeteasmaAlbumFileNames = [
  "catepeteasma0.jpg",
  "catepeteasma01.jpg",
  "catepeteasma02.jpg",
  "catepeteasma03.jpg",
  "catepeteasma04.jpg",
  "catepeteasma05.jpg",
  "catepeteasma06.jpg",
  "catepeteasma07.jpg",
  "catepeteasma08.jpg",
  "catepeteasma09.jpg",
  "catepeteasma10.jpg",
  "catepeteasma12.jpg",
  "catepeteasma13.jpg",
  "catepeteasma14.jpg",
  "catepeteasma15.jpg",
  "catepeteasma16.jpg",
  "catepeteasma17.jpg",
] as const;

const catapeteasmaAlbumImages: AlbumImage[] = catapeteasmaAlbumFileNames.map(
  (file, index) => ({
    thumbnailSrc: `/images/catapeteasma/${file}`,
    fullSrc: `/images/catapeteasma/${file}`,
    alt: `Catapeteasma imagine ${index + 1}`,
  }),
);

export const works: Work[] = [
  {
    category: "Citelniță cântăreți",
    title: "",
    description: "",
    image: "/images/Citelnita cantareti/Citelnitacantareti15.jpg",
    imageAlt: "Citelniță cântăreți",
    albumImages: citelnitaCantaretiAlbumImages,
  },
  {
    category: "Stativ Sf. Evanghelie",
    title: "",
    description: "",
    image: "/images/Stativ Sf. Evanghelie/StativSfEvanghelie11.jpg",
    imageAlt: "Stativ Sf. Evanghelie",
    albumImages: stativSfEvanghelieAlbumImages,
  },
  {
    category: "Birou nuc si zebrano",
    title: "",
    description: "",
    image: "/images/Birou nuc si zebrano/Birounucsizebrano1.jpg",
    imageAlt: "Birou nuc si zebrano",
    albumImages: birouNucSiZebranoAlbumImages,
  },
  {
    category: "Racla Sfantului Luca al Crimeei",
    title: "",
    description: "",
    image:
      "/images/Racla Sfantului Luca al Crimeei/RaclaSfantuluiLucaalCrimeei1.jpg",
    imageAlt: "Racla Sfantului Luca al Crimeei",
    albumImages: raclaSfantulLucaCrimeeiAlbumImages,
  },
  {
    category: "Masa stejar masiv",
    title: "",
    description: "",
    image: "/images/Masa 14 persoane stejar masiv/Masa14persoanestejarmasiv1.jpg",
    imageAlt: "Masa stejar masiv",
    albumImages: masaStejarMasivAlbumImages,
  },
  {
    category: "Troita de stejar",
    title: "",
    description: "",
    image: "/images/troita stejar/troitastejar1.jpg",
    imageAlt: "Troita de stejar",
    albumImages: troitaStejarAlbumImages,
  },
  {
    category: "Catapeteasma",
    title: "",
    description: "",
    image: "/images/catapeteasma/catepeteasma08.jpg",
    imageAlt: "Catapeteasma",
    albumImages: catapeteasmaAlbumImages,
  },
  {
    category: "Triptice",
    title: "",
    description: "",
    image: "/images/album-triptice.jpg",
    imageAlt: "Triptice",
    albumImages: tripticeAlbumImages,
  },
  {
    category: "Troite",
    title: "",
    description: "",
    image: "/images/album-troite.jpg",
    imageAlt: "Troita de hotar",
    albumImages: troitaDeHotarAlbumImages,
  },
  {
    category: "Cruce model Sapanta",
    title: "",
    description: "",
    image: "/images/album-cruce-model-sapanta.jpg",
    imageAlt: "Cruce model Sapanta",
    albumImages: cruceModelSapantaAlbumImages,
  },
  {
    category: "Axionita Prodromita",
    title: "",
    description: "",
    image: "/images/album-axionita-prodromita.jpg",
    imageAlt: "Axionita Prodromita",
    albumImages: axionitaProdromitaAlbumImages,
  },
  {
    category: "Icoane",
    title: "",
    description: "",
    image: "/images/album-icoane.jpg",
    imageAlt: "Icoane",
    albumImages: icoaneAlbumImages,
  },
  {
    category: "Icoane pe usi",
    title: "",
    description: "",
    image: "/images/album-icoane-pe-usi.jpg",
    imageAlt: "Icoane pe usi",
    albumImages: icoanePeUsiAlbumImages,
  },
  {
    category: "Iconostas",
    title: "",
    description: "",
    image: "/images/album-iconostas.jpg",
    imageAlt: "Iconostas",
    albumImages: iconostasAlbumImages,
  },
  {
    category: "Ingeri",
    title: "",
    description: "",
    image: "/images/album-ingeri.jpg",
    imageAlt: "Ingeri",
    albumImages: ingeriAlbumImages,
  },
  {
    category: "Racla Petru Voda",
    title: "",
    description: "",
    image: "/images/album-racla-petru-voda.jpg",
    imageAlt: "Racla Petru Voda",
    albumImages: raclaPetruVodaAlbumImages,
  },
  {
    category: "Strana arhiereasca",
    title: "",
    description: "",
    image: "/images/album-strana-arhiereasca.jpg",
    imageAlt: "Strana arhiereasca",
    albumImages: stranaArhiereascaAlbumImages,
  },
  {
    category: "Racla Danion",
    title: "",
    description: "",
    image: "/images/album-racla-danion.jpg",
    imageAlt: "Racla Danion",
    albumImages: raclaDanionAlbumImages,
  },
  {
    category: "Racla",
    title: "",
    description: "",
    image: "/images/album-racla.jpg",
    imageAlt: "Racla",
    albumImages: raclaAlbumImages,
  },
  {
    category: "Poliptice",
    title: "",
    description: "",
    image: "/images/album-poliptice.jpg",
    imageAlt: "Poliptice",
    albumImages: polipticeAlbumImages,
  },
  {
    category: "Matrita lumanare",
    title: "",
    description: "",
    image: "/images/album-matrita-lumanare.jpg",
    imageAlt: "Matrita lumanare",
    albumImages: matritaLumanareAlbumImages,
  },
  {
    category: "Sah de gradina",
    title: "",
    description: "",
    image: "/images/album-sah-gradina.jpg",
    imageAlt: "Sah de gradina",
    albumImages: sahDeGradinaAlbumImages,
  },
  {
    category: "Sah dacii si romanii",
    title: "",
    description: "",
    image: "/images/album-sah-dacii-romanii.jpg",
    imageAlt: "Sah dacii si romanii",
    albumImages: sahDaciiSiRomaniiAlbumImages,
  },
  {
    category: "Suport sticla Dac",
    title: "",
    description: "",
    image: "/images/album-suport-sticla-dac.jpg",
    imageAlt: "Suport sticla Dac",
    albumImages: suportSticlaDacAlbumImages,
  },
  {
    category: "Rame",
    title: "",
    description: "",
    image: "/images/album-rame.jpg",
    imageAlt: "Rame",
    albumImages: rameAlbumImages,
  },
  {
    category: "Masa sculptata",
    title: "",
    description: "",
    image: "/images/masa sculptata/masasculptata1.jpg",
    imageAlt: "Masa sculptata",
    albumImages: masaSculptataAlbumImages,
  },
  {
    category: "Frunze",
    title: "",
    description: "",
    image: "/images/frunze/frunze1.jpg",
    imageAlt: "Frunze",
    albumImages: frunzeAlbumImages,
  },
  {
    category: "Cruciulite cu secreter",
    title: "",
    description: "",
    image: "/images/cruciulita cu secreter/cruciulitacusecreter1.jpg",
    imageAlt: "Cruciulite cu secreter",
    albumImages: cruciuliteCuSecreterAlbumImages,
  },
  {
    category: "Altar",
    title: "",
    description: "",
    image: "/images/altar/altar1.jpg",
    imageAlt: "Altar",
    albumImages: altarAlbumImages,
  },
  {
    category: "Dulapuri lemn de nuc",
    title: "",
    description: "",
    image: "/images/dulapuri lemn de nuc/dulapurilemndenuc1.jpg",
    imageAlt: "Dulapuri lemn de nuc",
    albumImages: dulapuriLemnDeNucAlbumImages,
  },
  {
    category: "Cap de leu",
    title: "",
    description: "",
    image: "/images/cap de leu/capdeleu1.jpg",
    imageAlt: "Cap de leu",
    albumImages: capDeLeuAlbumImages,
  },
  {
    category: "Cruci",
    title: "",
    description: "",
    image: "/images/cruci/cruci1.jpg",
    imageAlt: "Cruci",
    albumImages: cruciAlbumImages,
  },
  {
    category: "Coperta sfanta evanghelie",
    title: "",
    description: "",
    image: "/images/coperta sfanta evanghelie/copertasfantaevanghelie1.jpg",
    imageAlt: "Coperta sfanta evanghelie",
    albumImages: copertaSfantaEvanghelieAlbumImages,
  },
  {
    category: "Axionita",
    title: "",
    description: "",
    image: "/images/axionita/axionita1.jpg",
    imageAlt: "Axionita",
    albumImages: axionitaAlbumImages,
  },
  {
    category: "Potir si sfantul disc",
    title: "",
    description: "",
    image: "/images/potir si sfantul disc/potirsisfantuldisc1.jpg",
    imageAlt: "Potir si sfantul disc",
    albumImages: potirSiSfantulDiscAlbumImages,
  },
];

