export interface Teacher {
  slug: string;
  name: string;
  specialty: string;
  intro: string;
  paragraphs: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  listedOnSchool: boolean;
}

// Images stay on the existing website, as requested. Biographies are based on
// the published profiles; only the live school's roster is featured there.
export const teachers: Teacher[] = [
  {
    slug: 'levi-smeets',
    name: 'Levi Smeets',
    specialty: 'Gitaar · songwriting · productie',
    listedOnSchool: true,
    intro:
      'Gitarist, songwriter en producer met een achtergrond aan de Rockacademie in Tilburg.',
    paragraphs: [
      'Levi studeerde in 2019 af aan de Rockacademie. Naast gitaar ontwikkelde hij zich in songwriting en productie. Zijn werk bij ISEK Studio in Eindhoven brengt muziek maken, opnemen en schrijven samen.',
      'Met Disco Didn’t Die schrijft, produceert en speelt hij eigen muziek. Bij This is LOVSKI is hij betrokken bij de live-act en synthesizers. Die ervaring deelt hij graag tijdens zijn gitaarlessen.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2020/11/Levi.png',
  },
  {
    slug: 'mathias-lang-2',
    name: 'Mathias Lang',
    specialty: 'Gitaar · rock · pop · blues · jazz',
    listedOnSchool: true,
    intro:
      'Een gitarist met jarenlange studio- en podiumervaring en een brede muzikale achtergrond.',
    paragraphs: [
      'Mathias groeide op in Wenen en speelde vanaf zijn veertiende in rock-, pop- en bluesbands. Na zijn verhuizing naar Nederland in 1999 volgde hij jazzopleidingen in Utrecht en Amsterdam.',
      'Naast zijn werk als componist en gitarist bij kindertheatergroep Vanillewijs geeft Mathias gitaarles aan kinderen en volwassenen. Neem contact op om de beschikbare lestijden te bespreken.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Matthias-Lang-1.jpg',
  },
  {
    slug: 'simone-van-straten',
    name: 'Simone van Straten',
    specialty: 'Gitaar · techniek · songwriting',
    listedOnSchool: true,
    intro:
      'Van leerling bij Let’s Play naar gitarist en docent met een flinke dosis rock ’n’ roll.',
    paragraphs: [
      'Simone begon op haar veertiende met gitaarles bij Let’s Play. Ze rondde de opleiding Metal Factory af en bouwde podiumervaring op met Sisters of Suffocation en invalwerk bij Nervosa en Burning Witches.',
      'In haar lessen werkt ze energiek en speels aan jouw doelen. Dat kan techniek of songwriting zijn, maar net zo goed het spelen van je favoriete kampvuurliedjes.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Simone-van-Straten-1.jpg',
  },
  {
    slug: 'evelin-szilagyi',
    name: 'Evelin Szilágyi',
    specialty: 'Zang · vocal coaching',
    listedOnSchool: true,
    intro:
      'Zangdocent en vocalcoach met een achtergrond bij Metal Factory en het Universal Voice Institute.',
    paragraphs: [
      'Evelin, ook bekend als Evi, begon op jonge leeftijd met zanglessen. Na jaren koor, lessen en optredens studeerde ze af als zangeres aan Metal Factory. Daarna behaalde ze haar Master Teacher-certificaat bij het Universal Voice Institute.',
      'Samen werk je aan zangtechniek en jouw muzikale doelen. Evelin helpt je onderzoeken wat je wilt leren en welke begeleiding daarbij past.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2025/03/20250325_190545-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'jip-vanes',
    name: 'Jip van Es',
    specialty: 'Gitaar · bas · zang · productie',
    listedOnSchool: true,
    intro:
      'Gitarist, bassist, vocalist en producer. In de les staan jouw favoriete muziek en doelen centraal.',
    paragraphs: [
      'Jip studeerde in 2022 als gitarist af aan de Rockacademie. Zijn podiumervaring omvat Hard2Get, De Maalstroom en Noek. Voor zijn eigen act JOYAH schrijft en produceert hij de muziek zelf.',
      'Tijdens de lessen kies je samen nummers die je gaaf vindt. Aan de hand daarvan werk je aan techniek en muziektheorie. Naast gitaar kun je bij Jip terecht voor bas en beginnende zang.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Jip-van-Es.png',
  },
  {
    slug: 'xavier-elbersen',
    name: 'Xavier Elbersen',
    specialty: 'Gitaar · songwriting · studio',
    listedOnSchool: true,
    intro:
      'Een enthousiaste docent die muziek maken, schrijven en opnemen graag met elkaar verbindt.',
    paragraphs: [
      'Xavier begon op zijn elfde met muziek maken en schreef al vroeg muziek voor bands. Sinds 2010 geeft hij les. Daarnaast begeleidt hij singer-songwriters en bands in zijn studio bij productie, opnames en mixwerk.',
      'Of je nu eenvoudige liedjes wilt leren spelen of aan eigen nummers werkt: Xavier denkt mee over jouw volgende stap. Zijn lessen richten zich op beginners en ervaren muzikanten, jong en oud.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2021/01/Xavier.jpg',
  },
  {
    slug: 'stef-gubbels',
    name: 'Stef Gubbels',
    specialty: 'Bas · bandcoaching',
    listedOnSchool: true,
    intro:
      'Bassist en docent met ervaring in rock, metal, funk, soul en hiphop.',
    paragraphs: [
      'Geïnspireerd door grunge, punk en metal begon Stef op zijn dertiende met basgitaar. Zijn muzikale ervaring verbreedde zich daarna naar onder meer funk, soul en hiphop.',
      'Stef speelt in ¡Pendejo! en geeft basles en bandcoaching bij Rock City Institute en Metal Factory. In zijn lessen is ruimte voor verschillende stijlen, van muziektheorie tot gewoon lekker nummers spelen.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2023/02/Stef-Gubbels-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'djaimini-sahti',
    name: 'Djaimini Sahti',
    specialty: 'Bandcoaching · bas · drums',
    listedOnSchool: true,
    intro:
      'Een bandcoach die zijn ervaring met verschillende instrumenten en muziekstijlen graag deelt.',
    paragraphs: [
      'Djaimini speelt bas en drums, maakt eigen composities en speelt daarnaast toetsen. Zijn muzikale achtergrond loopt van pop en funk tot fusion, jazz en ritmes uit verschillende tradities.',
      'Tijdens bandcoaching helpt hij muzikanten om hun ervaring uit te breiden en samen muziek te maken. Nieuwe ideeën ontdekken en blijven leren staan daarbij centraal.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Djaimini-Sahti-600x600.jpg',
    imageWidth: 600,
    imageHeight: 600,
  },
  {
    slug: 'wessel-speelman',
    name: 'Wessel Speelman',
    specialty: 'Gitaar · progressieve metal',
    listedOnSchool: true,
    intro:
      'Een gitarist die samen met jou zoekt naar energie en plezier in het instrument.',
    paragraphs: [
      'Wessel begon op zijn veertiende met gitaar, geïnspireerd door onder anderen Alex Lifeson, Adam Jones en Fredrik Thordendal. Na zijn afstuderen aan Metal Factory in 2022 vervolgde hij zijn opleiding aan het conservatorium in Utrecht.',
      'Hij speelt in de progressieve metalband ENMA en heeft ervaring met verschillende projecten. In de lessen draait het om ontdekken hoe jij het meeste plezier en energie uit gitaarspelen haalt.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/10/foto-progpower-1024x683.jpeg',
    imageWidth: 1024,
    imageHeight: 683,
  },
  {
    slug: 'ozzy-voskuilen',
    name: 'Ozzy Voskuilen',
    specialty: 'Gitaar · rock · metal · blues',
    listedOnSchool: true,
    intro:
      'Een gitarist voor wie groeien als muzikant begint met plezier in het spelen.',
    paragraphs: [
      'Ozzy begon met drums en stapte op zijn veertiende over op gitaar. Hij volgde de opleiding Metal Factory in Eindhoven en deed podiumervaring op met Inferum en de Top 2000 Hoogland Live-band.',
      'Naast rock en metal verkende hij country, blues, pop en jazz. In zijn lessen staat speelplezier centraal: je ontwikkelt je techniek en ontdekt wat je enthousiast maakt over je instrument.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Ozzy-Voskuilen-1-600x600.jpg',
    imageWidth: 600,
    imageHeight: 600,
  },
  {
    slug: 'ray-stepien',
    name: 'Ray Stepien',
    specialty: 'Gitaar · blues · rock · songwriting',
    listedOnSchool: true,
    intro:
      'Een multi-instrumentalist uit Eindhoven, bekend als gitarist en frontman van The Ray Stepien Trio.',
    paragraphs: [
      'Met invloeden van Stevie Ray Vaughan en Jimi Hendrix ontwikkelde Ray zich als bluesgitarist. Zijn muzikale interesse omvat ook country en pop. Naast optreden schrijft en produceert hij eigen muziek.',
      'Tijdens de les werk je aan jouw ambities: van de eerste beginselen en fingerpicking tot blues, rock en het schrijven van eigen songs.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2026/06/image2-1-460x460.jpeg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'wessel-van-de-broek',
    name: 'Wessel van de Broek',
    specialty: 'Gitaar · audio-engineering · productie',
    listedOnSchool: false,
    intro:
      'Een gitarist en audio-engineer met een brede interesse in muziek maken en produceren.',
    paragraphs: [
      'Wessel studeerde in 2018 af aan de Rockacademie in Tilburg als gitarist en audio-engineer. Daarna begon hij met muziekles geven. Als gitarist bij To Adelaide schrijft en produceert hij ook muziek.',
      'Daarnaast maakt hij beats, neemt hij albums op en mixt hij muziek voor artiesten. Zijn interesse in verschillende projecten en underground muziek voedt zijn brede muzikale aanpak.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2020/11/69684302_1283612688497075_1833050969160548352_n-230x230.jpg',
    imageWidth: 230,
    imageHeight: 230,
  },
  {
    slug: 'glenn-de-roo',
    name: 'Glenn de Roo',
    specialty: 'Docentprofiel',
    listedOnSchool: false,
    intro:
      'Bekijk het profiel van Glenn de Roo bij Let’s Play Guitar Center in Eindhoven.',
    paragraphs: [
      'Wil je meer weten over de muzieklessen bij Let’s Play? Neem contact op met de muziekschool. We bespreken graag je ervaring, muzieksmaak en de mogelijkheden voor een passende les.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Glenn-de-Roo-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'johan-marsman',
    name: 'Johan Marsman',
    specialty: 'Docentprofiel',
    listedOnSchool: false,
    intro:
      'Bekijk het profiel van Johan Marsman bij Let’s Play Guitar Center in Eindhoven.',
    paragraphs: [
      'Wil je meer weten over de muzieklessen bij Let’s Play? Neem contact op met de muziekschool. We bespreken graag je ervaring, muzieksmaak en de mogelijkheden voor een passende les.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/04/Johan-Marsman-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'roel-driessen',
    name: 'Roel Driessen',
    specialty: 'Gitaar · jazz · pop · rock',
    listedOnSchool: false,
    intro:
      'Een gitaardocent die jouw wensen en het ontwikkelen van een eigen muzieksmaak belangrijk vindt.',
    paragraphs: [
      'Roel begon op de middelbare school met gitaar. Aan Rock City Institute in Eindhoven ontwikkelde hij zich door in verschillende bands te spelen. Daarna studeerde hij Jazz & Pop aan ArtEZ in Arnhem.',
      'Zijn ervaring omvat jazz, pop, wereldmuziek, rock en improvisatie. In de lessen stemt hij zijn aanpak af op de leerling en stimuleert hij het ontdekken van een eigen muzikale smaak.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/11/220602-erol-142-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'tom-wullems',
    name: 'Tom Wullems',
    specialty: 'Gitaar · songwriting',
    listedOnSchool: false,
    intro:
      'Gitarist, songwriter, zanger en producer met een achtergrond aan de Rockacademie.',
    paragraphs: [
      'Tom studeerde in 2022 af aan de Rockacademie. Hij werkt als songwriter, speelt gitaar bij Snelle en heeft ervaring als gitaar- en audiotechnicus. Voor zijn eigen act Tom Watts schrijft en arrangeert hij de muziek zelf.',
      'Zijn lessen sluiten aan bij jouw niveau en favoriete nummers. Je kunt werken aan pop, rock, blues, country en fingerpicking. Bij songwriting ligt de aandacht op teksten, akkoorden, songstructuur en creativiteit.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2024/12/Tom-Wullems-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    slug: 'kane-van-diepen',
    name: 'Kane van Diepen',
    specialty: 'Bas · gitaar',
    listedOnSchool: false,
    intro:
      'Een bassist en gitarist met aandacht voor jouw comfort, leerstijl en muzikale interesses.',
    paragraphs: [
      'Kane begon op zijn veertiende met bas en gitaar. Hij studeerde in 2022 af aan Metal Factory en startte de bands Torn From Oblivion en SAPPHYR. Naast metal verdiept hij zich graag in funk, indie, R&B en pop.',
      'In zijn bas- en gitaarlessen staat een prettige leeromgeving centraal. Hij stemt zijn aandacht af op wat jij nodig hebt, zodat je op jouw manier verder kunt groeien.',
    ],
    image:
      'https://www.letsplayguitarcenter.nl/wp-content/uploads/2025/10/0b06f38b-9d4c-4e55-b628-04110124f130-460x460.jpg',
    imageWidth: 460,
    imageHeight: 460,
  },
];
