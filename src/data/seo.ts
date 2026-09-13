import { teachers } from './teachers';

export interface SeoPage {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  parent?: { name: string; path: string };
}

export const seoPages: Record<string, SeoPage> = {
  '/': {
    name: 'Home',
    title: 'Gitaarwinkel & muziekschool Eindhoven | Let’s Play',
    description:
      'Ontdek Let’s Play Guitar Center in Eindhoven: nieuwe en vintage gitaren, versterkers, gitaarles, reparaties en live muziek. Kom langs aan de Tongelresestraat.',
    image: '/images/guitar-wall.webp',
    imageAlt: 'De gitaarwand bij Let’s Play Guitar Center in Eindhoven',
    imageWidth: 1919,
    imageHeight: 791,
  },
  '/de-winkel/': {
    name: 'De gitaarwinkel',
    title: 'Gitaarwinkel Eindhoven: nieuw & vintage | Let’s Play',
    description:
      'Vind jouw gitaar bij Let’s Play in Eindhoven. Ontdek nieuwe en vintage akoestische, elektrische en basgitaren, versterkers en toebehoren. Kom zelf spelen.',
    image: '/images/shop.webp',
    imageAlt: 'Nieuwe en vintage gitaren in de winkel van Let’s Play',
    imageWidth: 960,
    imageHeight: 720,
  },
  '/muziekschool/': {
    name: 'De muziekschool',
    title: 'Gitaarles, basles & zangles Eindhoven | Let’s Play',
    description:
      'Leer gitaar spelen, bas spelen of zingen bij Let’s Play in Eindhoven. Persoonlijke muzieklessen voor beginners en ervaren muzikanten. Vraag een gratis proefles aan.',
    image: '/images/lessons.webp',
    imageAlt: 'Een docent geeft gitaarles bij Let’s Play in Eindhoven',
    imageWidth: 1024,
    imageHeight: 768,
  },
  '/bandlessen/': {
    name: 'Bandlessen',
    title: 'Bandlessen in Eindhoven | Let’s Play Guitar Center',
    description:
      'Speel samen in een band bij Let’s Play in Eindhoven. Bandlessen met een bandcoach, lesruimte en apparatuur, passend bij je niveau en muzieksmaak. Vraag een proefles aan.',
    image: '/images/band.webp',
    imageAlt: 'Het podium met drumstel en versterkers bij Let’s Play',
    imageWidth: 1188,
    imageHeight: 992,
  },
  '/gitaar-reparatie/': {
    name: 'Gitaarreparatie',
    title: 'Gitaarreparatie & afstellen Eindhoven | Let’s Play',
    description:
      'Laat je gitaar afstellen of repareren bij Let’s Play in Eindhoven. Onze werkplaats helpt met onderhoud, fretwerk, pickups en elektronica. Bespreek je reparatie.',
    image: '/images/guitar-repair.webp',
    imageAlt: 'De professionele gitaarwerkplaats van Let’s Play',
    imageWidth: 1440,
    imageHeight: 1080,
  },
  '/versterker-reparatie/': {
    name: 'Versterkerreparatie',
    title: 'Versterkerreparatie in Eindhoven | Let’s Play',
    description:
      'Versterker laten repareren in Eindhoven? Let’s Play herstelt gitaarversterkers, mengtafels en randapparatuur. Ook voor buizen vervangen, biasing en modificaties.',
    image: '/images/amplifier-repair.webp',
    imageAlt: 'De elektronica van een versterker tijdens een reparatie',
    imageWidth: 1153,
    imageHeight: 1004,
  },
  '/lets-play-live/': {
    name: 'Let’s Play Live',
    title: 'Live muziek & zaalverhuur Eindhoven | Let’s Play Live',
    description:
      'Ontdek Let’s Play Live in Eindhoven: een intiem live podium en sfeervol muziekcafé. Bekijk de agenda of bespreek zaalverhuur voor jouw feest of evenement.',
    image: '/images/live.webp',
    imageAlt: 'Het sfeervol verlichte muziekcafé Let’s Play Live',
    imageWidth: 1920,
    imageHeight: 1280,
  },
  '/contact/': {
    name: 'Contact',
    title: 'Contact & openingstijden | Let’s Play Eindhoven',
    description:
      'Bezoek Let’s Play Guitar Center aan de Tongelresestraat 445a in Eindhoven. Bekijk openingstijden, plan je route of bel 040 – 879 61 77 voor advies.',
    image: '/images/guitar-wall.webp',
    imageAlt: 'Het interieur van Let’s Play Guitar Center in Eindhoven',
    imageWidth: 1919,
    imageHeight: 791,
  },
  '/docenten/': {
    name: 'Docentprofielen',
    title: 'Muziekdocenten in Eindhoven | Let’s Play',
    description:
      'Maak kennis met de muziekdocenten en hun muzikale achtergrond bij Let’s Play in Eindhoven. Ontdek gitaarles, basles, zangles en bandcoaching.',
    image: '/images/lessons.webp',
    imageAlt: 'Persoonlijke gitaarles bij Let’s Play',
    imageWidth: 1024,
    imageHeight: 768,
    parent: { name: 'De muziekschool', path: '/muziekschool/' },
  },
  '/les-tarieven/': {
    name: 'Lestarieven',
    title: 'Tarieven gitaarles & zangles Eindhoven | Let’s Play',
    description:
      'Bekijk de tarieven voor gitaarles en zangles bij Let’s Play in Eindhoven. Kies individuele of duolessen en betaal via automatische incasso of een lespakket.',
    image: '/images/lessons.webp',
    imageAlt: 'Gitaarles in de muziekschool van Let’s Play',
    imageWidth: 1024,
    imageHeight: 768,
    parent: { name: 'De muziekschool', path: '/muziekschool/' },
  },
  '/prijslijst-gitaar-reparatie/': {
    name: 'Prijslijst gitaarreparatie',
    title: 'Prijslijst gitaarreparatie Eindhoven | Let’s Play',
    description:
      'Bekijk de prijzen voor besnaren, afstellen, fretwerk en elektronica bij Let’s Play in Eindhoven. Bij inname van je gitaar bespreken we een prijsindicatie.',
    image: '/images/guitar-repair.webp',
    imageAlt: 'De gitaarwerkplaats van Let’s Play in Eindhoven',
    imageWidth: 1440,
    imageHeight: 1080,
    parent: { name: 'Gitaarreparatie', path: '/gitaar-reparatie/' },
  },
  '/algemene-voorwaarden/': {
    name: 'Algemene voorwaarden',
    title: 'Voorwaarden muzieklessen | Let’s Play Guitar Center',
    description:
      'Lees de algemene voorwaarden voor muzieklessen bij Let’s Play: lesplanning, afmelden, betaling, lespakketten en opzeggen. Neem contact op bij vragen.',
    image: '/images/lessons.webp',
    imageAlt: 'De muziekschool van Let’s Play',
    imageWidth: 1024,
    imageHeight: 768,
    parent: { name: 'De muziekschool', path: '/muziekschool/' },
  },
  ...Object.fromEntries(
    teachers.map((teacher) => [
      `/${teacher.slug}/`,
      {
        name: teacher.name,
        title: `${teacher.name} | Docentprofiel Let’s Play`,
        description: `${teacher.intro} Ontdek muziekles bij Let’s Play in Eindhoven.`,
        image: teacher.image,
        imageAlt: `Portret van ${teacher.name}`,
        imageWidth: teacher.imageWidth,
        imageHeight: teacher.imageHeight,
        parent: { name: 'De muziekschool', path: '/muziekschool/' },
      },
    ]),
  ),
};
