export const site = {
  name: 'Let’s Play Guitar Center',
  webshop: 'https://webshop.letsplayguitarcenter.nl/',
  phone: '040 – 879 61 77',
  phoneHref: 'tel:+31408796177',
  email: 'info@letsplayguitarcenter.nl',
  address: 'Tongelresestraat 445a',
  city: '5641 AW Eindhoven',
  maps: 'https://www.google.com/maps/search/?api=1&query=Lets+Play+Guitar+Center+Tongelresestraat+445a+Eindhoven',
  instagram: 'https://www.instagram.com/letsplayguitarcenter/',
  facebook: 'https://nl-nl.facebook.com/letsplayguitarcentereindhoven/',
};

export const navigation = [
  { label: 'De winkel', href: '/de-winkel/' },
  { label: 'Muziekles', href: '/muziekschool/' },
  { label: 'Reparaties', href: '/gitaar-reparatie/' },
  { label: 'Let’s Play Live', href: '/lets-play-live/' },
  { label: 'Contact', href: '/contact/' },
];

export const hours = [
  { day: 'Maandag', shop: '13:00 – 18:00', school: '13:00 – 22:00' },
  { day: 'Dinsdag', shop: '11:00 – 18:00', school: '11:00 – 22:00' },
  { day: 'Woensdag', shop: '11:00 – 18:00', school: '11:00 – 22:00' },
  { day: 'Donderdag', shop: '11:00 – 18:00', school: '11:00 – 22:00' },
  { day: 'Vrijdag', shop: '11:00 – 21:00', school: '11:00 – 22:00' },
  { day: 'Zaterdag', shop: '11:00 – 17:00', school: '11:00 – 17:00' },
  { day: 'Zondag', shop: 'Gesloten', school: 'Gesloten' },
];

export const services = [
  {
    number: '01',
    title: 'Vind je volgende gitaar.',
    tag: 'DE WINKEL',
    image: 'shop',
    alt: 'Gitaren en versterkers in de winkel van Let’s Play',
    text: 'Nieuw, vintage of die ene onverwachte vondst. Kom kijken, voelen en vooral: spelen.',
    href: '/de-winkel/',
    cta: 'Ontdek de winkel',
  },
  {
    number: '02',
    title: 'Speel wat in je zit.',
    tag: 'DE MUZIEKSCHOOL',
    image: 'lessons',
    alt: 'Een docent geeft persoonlijk gitaarles bij Let’s Play',
    text: 'Je eerste akkoord of je volgende solo. Gitaar-, bas- en zangles op jouw niveau.',
    href: '/muziekschool/',
    cta: 'Ontdek onze lessen',
  },
  {
    number: '03',
    title: 'Geef je gear liefde.',
    tag: 'REPARATIE & ONDERHOUD',
    image: 'guitar-repair',
    alt: 'De professionele gitaarwerkplaats van Let’s Play',
    text: 'Van een fijne afstelling tot een grote reparatie. Jouw instrument is in goede handen.',
    href: '/gitaar-reparatie/',
    cta: 'Naar de werkplaats',
  },
];

export interface ServicePage {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  accent: string;
  intro: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
  bodyTitle: string;
  paragraphs: string[];
  features: { title: string; text: string }[];
  related: { title: string; href: string; label: string };
  trial?: boolean;
}

export const servicePages: ServicePage[] = [
  {
    slug: 'de-winkel',
    title: 'De gitaarwinkel',
    eyebrow: 'GITAREN, VERSTERKERS & TOEBEHOREN',
    heading: 'Jouw volgende',
    accent: 'grote liefde.',
    intro:
      'Een muur vol gitaren. Een hoofd vol mogelijkheden. Vind het instrument dat bij jou past, hier in Eindhoven.',
    image: 'shop',
    alt: 'Het interieur van de gitaarwinkel, met gitaren aan beide wanden',
    cta: 'Ga naar de webshop',
    href: site.webshop,
    bodyTitle: 'Een gitaar kies je met je oren. En je gevoel.',
    paragraphs: [
      'Bij Let’s Play komen gitaar en gitarist samen. Je vindt bij ons nieuwe en vintage gitaren, van akoestisch en klassiek tot elektrisch en bas. En natuurlijk versterkers en alles wat je nodig hebt om jouw sound compleet te maken.',
      'Een instrument moet je ervaren. Kom binnen, neem de tijd en probeer het zelf. We denken graag met je mee, of je nu je eerste gitaar zoekt of je verzameling wilt uitbreiden.',
    ],
    features: [
      {
        title: 'Gitaren met karakter',
        text: 'Akoestisch, klassiek, elektrisch en bas. Nieuw én vintage.',
      },
      {
        title: 'Maak je sound compleet',
        text: 'Versterkers en toebehoren voor jouw setup.',
      },
      {
        title: 'Kom zelf spelen',
        text: 'Persoonlijk advies en ruimte om instrumenten te proberen.',
      },
    ],
    related: {
      title: 'Je gitaar gevonden? Nu jouw sound.',
      href: '/muziekschool/',
      label: 'Ontdek onze muzieklessen',
    },
  },
  {
    slug: 'muziekschool',
    title: 'De muziekschool',
    eyebrow: 'GITAARLES · BASLES · ZANGLES',
    heading: 'Het begint met',
    accent: 'één akkoord.',
    intro:
      'Van je allereerste noot tot die solo die je altijd al wilde spelen. Ontdek wat jij in je hebt, met lessen die bij je passen.',
    image: 'lessons',
    alt: 'Persoonlijke gitaarles met een docent in de muziekschool',
    cta: 'Vraag een gratis proefles aan',
    href: '#proefles',
    bodyTitle: 'Jouw muziek. Jouw tempo.',
    paragraphs: [
      'Leren spelen moet vooral leuk zijn. In onze muziekschool in Eindhoven combineren docenten theorie en praktijk, met aandacht voor jouw niveau, smaak en ambities. Je kunt bij ons terecht voor gitaarles, basles en zangles.',
      'Of je nu begint of al jaren speelt: samen werk je aan techniek, ritme en muzikaliteit. Maak kennis met de muziekschool tijdens een gratis proefles.',
    ],
    features: [
      {
        title: 'Gitaarles',
        text: 'Van akkoorden en begeleiding tot techniek en solo’s.',
      },
      {
        title: 'Basles',
        text: 'Werk aan je groove, timing en jouw plek in de muziek.',
      },
      {
        title: 'Zangles',
        text: 'Ontdek je stem en ontwikkel je techniek en expressie.',
      },
    ],
    related: {
      title: 'Muziek klinkt nog beter samen.',
      href: '/bandlessen/',
      label: 'Ontdek de bandlessen',
    },
    trial: true,
  },
  {
    slug: 'bandlessen',
    title: 'Bandlessen',
    eyebrow: 'SAMEN SPELEN. SAMEN GROEIEN.',
    heading: 'Van slaapkamer',
    accent: 'naar het podium.',
    intro:
      'Maak muziek met anderen. Wij regelen de ruimte, de apparatuur en een gedreven bandcoach. Jij brengt de energie.',
    image: 'band',
    alt: 'Het podium met drumstel en versterkers bij Let’s Play',
    cta: 'Vraag een gratis proefles aan',
    href: '#proefles',
    bodyTitle: 'Vind je band. Laat je horen.',
    paragraphs: [
      'Lijkt het je te gek om in een band te spelen? Tijdens onze bandlessen in Eindhoven maak je samen met andere muzikanten muziek, onder begeleiding van een bandcoach. Je leert luisteren, samenspelen en als band groeien.',
      'De lessen zijn er voor verschillende leeftijden, niveaus en muziekgenres. We zoeken een passende groep op basis van jouw ervaring, leeftijd en muzieksmaak. Neem contact op om de mogelijkheden te bespreken.',
    ],
    features: [
      {
        title: 'Een passende groep',
        text: 'Samenspelen met muzikanten die bij jouw niveau en smaak passen.',
      },
      {
        title: 'Professionele begeleiding',
        text: 'Een gedreven bandcoach helpt jullie vooruit.',
      },
      {
        title: 'Alles staat klaar',
        text: 'Een lesruimte met de apparatuur die jullie nodig hebben.',
      },
    ],
    related: {
      title: 'Werk ook aan je eigen skills.',
      href: '/muziekschool/',
      label: 'Naar de muziekschool',
    },
    trial: true,
  },
  {
    slug: 'gitaar-reparatie',
    title: 'Gitaarreparatie',
    eyebrow: 'DE WERKPLAATS',
    heading: 'Jouw gitaar.',
    accent: 'Weer in topvorm.',
    intro:
      'Je gitaar verdient aandacht. Van afstellen en onderhoud tot specialistische reparaties: we helpen je weer lekker spelen.',
    image: 'guitar-repair',
    alt: 'De werkbank en gereedschappen in de gitaarwerkplaats',
    cta: 'Bespreek je reparatie',
    href: 'mailto:' + site.email + '?subject=Gitaarreparatie',
    bodyTitle: 'Vakmanschap voor jouw instrument.',
    paragraphs: [
      'Onze gitaarwerkplaats in Eindhoven heeft ruime ervaring met akoestische en elektrische gitaren. Je kunt bij ons terecht voor afstellen, fretwerk, defecte elektronica, een nieuwe topkam of brug, pickups vervangen en herstel van een gebroken hals.',
      'Neem contact op of kom met je instrument langs in de winkel. We bekijken wat er nodig is om je gitaar weer in topconditie te krijgen en te houden.',
    ],
    features: [
      {
        title: 'Afstellen & onderhoud',
        text: 'Een prettig spelende gitaar begint bij een goede afstelling.',
      },
      {
        title: 'Fretwerk & herstel',
        text: 'Van slijtage aan frets tot reparaties aan hals, topkam en brug.',
      },
      {
        title: 'Elektronica & pickups',
        text: 'Laat defecte elektronica herstellen of je pickups vervangen.',
      },
    ],
    related: {
      title: 'Je versterker heeft ook aandacht nodig?',
      href: '/versterker-reparatie/',
      label: 'Bekijk versterkerreparatie',
    },
  },
  {
    slug: 'versterker-reparatie',
    title: 'Versterkerreparatie',
    eyebrow: 'VERSTERKERS & GELUIDSAPPARATUUR',
    heading: 'Breng je sound',
    accent: 'weer tot leven.',
    intro:
      'Een brom, een kraak of helemaal geen geluid? We herstellen versterkers, mengtafels en randapparatuur.',
    image: 'amplifier-repair',
    alt: 'Elektronische componenten van een versterker tijdens een reparatie',
    cta: 'Bespreek je reparatie',
    href: 'mailto:' + site.email + '?subject=Versterkerreparatie',
    bodyTitle: 'Voor alles tussen je gitaar en je publiek.',
    paragraphs: [
      'Bij Let’s Play in Eindhoven kun je terecht voor reparaties aan gitaarversterkers, mengtafels en andere geluidsapparatuur. Ook buizen vervangen, biasing en modificaties behoren tot de mogelijkheden.',
      'Breng je apparatuur naar de winkel aan de Tongelresestraat. Kun je niet tijdens de reguliere openingstijden? Bel of mail ons, dan bespreken we een geschikt moment.',
    ],
    features: [
      {
        title: 'Duidelijke afspraken',
        text: 'Komt een reparatie boven € 75? Dan bespreken we dat eerst met je.',
      },
      {
        title: 'Doorgaans binnen twee weken',
        text: 'De gebruikelijke reparatietijd volgens onze servicevoorwaarden.',
      },
      {
        title: 'Twee maanden garantie',
        text: 'Op het uitgevoerde reparatiewerk krijg je twee maanden garantie.',
      },
    ],
    related: {
      title: 'Ook je gitaar weer in topconditie.',
      href: '/gitaar-reparatie/',
      label: 'Bekijk gitaarreparatie',
    },
  },
  {
    slug: 'lets-play-live',
    title: 'Let’s Play Live',
    eyebrow: 'MUZIEKCAFÉ · LIVE PODIUM · VERHUUR',
    heading: 'Dicht op de muziek.',
    accent: 'Midden in de avond.',
    intro:
      'Een intiem podium, een bijzonder muziekcafé en een plek waar artiesten en muziekliefhebbers samenkomen.',
    image: 'live',
    alt: 'Het sfeervol verlichte muziekcafé Let’s Play Live',
    cta: 'Bekijk de live agenda',
    href: site.facebook,
    bodyTitle: 'Goede muziek. Mooie avonden.',
    paragraphs: [
      'Welkom bij Let’s Play Live, ons muziekcafé en live podium in Eindhoven. Een plek voor concerten van gevestigde namen én voor nieuw talent dat zijn muziek wil laten horen. Geniet van de intieme sfeer en een drankje aan de bar.',
      'Iets te vieren? Onze ruimte is ook te huur voor privéfeesten en evenementen. We bespreken graag de mogelijkheden voor licht, geluid, bar, catering en live muziek. Mail ons voor een kennismaking op locatie.',
    ],
    features: [
      {
        title: 'Live muziek',
        text: 'Bekijk onze socials voor de geplande evenementen en openingstijden.',
      },
      {
        title: 'Een eigen feest',
        text: 'Een bijzondere locatie voor jouw privéfeest of evenement.',
      },
      {
        title: 'Alles voor het podium',
        text: 'Bespreek de mogelijkheden voor backline en professionele geluidstechniek.',
      },
    ],
    related: {
      title: 'Jouw avond bij Let’s Play Live?',
      href:
        'mailto:' +
        site.email +
        '?subject=Verhuur%20Let%E2%80%99s%20Play%20Live',
      label: 'Informeer naar verhuur',
    },
  },
];
