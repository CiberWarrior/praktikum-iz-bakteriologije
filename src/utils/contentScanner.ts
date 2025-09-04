import { searchIndexer } from './searchIndexer';

// Content Scanner - TypeScript modul

// Glavna klasa za skeniranje sadržaja
export class ContentScanner {
  private static instance: ContentScanner;
  private isIndexed = false;

  private constructor() {}

  static getInstance(): ContentScanner {
    if (!ContentScanner.instance) {
      ContentScanner.instance = new ContentScanner();
    }
    return ContentScanner.instance;
  }

  // Glavna metoda za indeksiranje cijelog sadržaja
  async indexAllContent(): Promise<void> {
    if (this.isIndexed) {
      console.log('Sadržaj je već indeksiran');
      return;
    }

    console.log('Započinjem indeksiranje sadržaja...');
    
    try {
      // 1. Indeksiraj poglavlja
      await this.indexPoglavlja();
      
      // 2. Indeksiraj vježbe
      await this.indexVjezbe();
      
      // 3. Indeksiraj kvizove
      await this.indexKvizove();
      
      // 4. Indeksiraj rječnik
      await this.indexRjecnik();
      
      // 5. Indeksiraj ostale stranice
      await this.indexOstaleStranice();
      
      this.isIndexed = true;
      console.log(`Indeksiranje završeno. Ukupno indeksirano: ${searchIndexer.getIndexSize()} stavki`);
      
    } catch (error) {
      console.error('Greška tijekom indeksiranja:', error);
    }
  }

  // Indeksiranje poglavlja
  private async indexPoglavlja(): Promise<void> {
    const poglavlja = [
      {
        id: 'poglavlje-1',
        title: 'Uvod u bakteriološki praktikum',
        content: 'Aseptika, sterilizacija, sigurnost rada, osnovne tehnike bakteriološkog praktikuma, laboratorijski pribor, dezinfekcija, antisepsa, prva pomoć, pravila ponašanja, preuzimanje radnog mjesta, zbrinjavanje materijala, uredaji u laboratoriju, ekstrakti, hranjivi mediji, opće tehnike rada, osnovni pojmovi',
        type: 'poglavlje' as const,
        url: '/poglavlje-1/',
        tags: ['aseptika', 'sterilizacija', 'sigurnost', 'osnove', 'laboratorij', 'dezinfekcija', 'antisepsa', 'prva pomoć'],
        excerpt: 'Osnove aseptike, sterilizacije i sigurnosti rada u bakteriološkom laboratoriju'
      },
      {
        id: 'poglavlje-2',
        title: 'Sterilizacija',
        content: 'Sterilizacija, dezinfekcija, antisepsa, autoklaviranje, suha sterilizacija, UV sterilizacija, kemijska sterilizacija, kontrola sterilnosti, sterilizacija pribora, sterilizacija medija',
        type: 'poglavlje' as const,
        url: '/poglavlje-2/',
        tags: ['sterilizacija', 'dezinfekcija', 'antisepsa', 'autoklaviranje', 'kontrola', 'sterilnost'],
        excerpt: 'Tehnike sterilizacije i dezinfekcije u bakteriološkom laboratoriju'
      },
      {
        id: 'poglavlje-3',
        title: 'Bojenje bakterija',
        content: 'Gram bojenje, bojenje endospora, kapsule, flagela, negativno bojenje, fiksiranje, mikroskopija, diferencijalno bojenje, bojenje živih bakterija, bojenje mrtvih bakterija',
        type: 'poglavlje' as const,
        url: '/poglavlje-3/',
        tags: ['gram', 'bojenje', 'endospore', 'kapsule', 'flagele', 'mikroskopija', 'diferencijalno'],
        excerpt: 'Tehnike bojenja bakterija za mikroskopsku identifikaciju'
      },
      {
        id: 'poglavlje-4',
        title: 'Pokretljivost bakterija',
        content: 'Pokretljivost, flagele, bičevi, motorni aparat, pokretljivost testovi, semisolidni agar, pokretljivost bakterija, motorni enzimi',
        type: 'poglavlje' as const,
        url: '/poglavlje-4/',
        tags: ['pokretljivost', 'flagele', 'bičevi', 'motorni aparat', 'testovi'],
        excerpt: 'Ispitivanje pokretljivosti bakterija i motornih svojstava'
      },
      {
        id: 'poglavlje-5',
        title: 'Biokemijska svojstva bakterija',
        content: 'Biokemijski testovi, indol test, MR-VP test, katalaza, oksidaza, identifikacija bakterija, biokemijski profil, enzimi, metabolizam, fermentacija',
        type: 'poglavlje' as const,
        url: '/poglavlje-5/',
        tags: ['biokemijski', 'testovi', 'indol', 'katalaza', 'identifikacija', 'enzimi', 'metabolizam'],
        excerpt: 'Biokemijski testovi za identifikaciju bakterija'
      },
      {
        id: 'poglavlje-6',
        title: 'Određivanje broja bakterija u suspenziji',
        content: 'Brojanje bakterija, decimalno razrjeđenje, CFU, titar, statistika, hemacitometar, brojka, koncentracija, razrjeđenje, brojanje kolonija',
        type: 'poglavlje' as const,
        url: '/poglavlje-6/',
        tags: ['brojanje', 'cfu', 'titar', 'kvantitativno', 'statistika', 'razrjeđenje', 'hemacitometar'],
        excerpt: 'Metode kvantitativnog određivanja broja bakterija u suspenziji'
      },
      {
        id: 'poglavlje-7',
        title: 'Određivanje broja bakterija direktnim metodama',
        content: 'Direktne metode brojanja, mikroskopsko brojanje, hemacitometar, brojka, koncentracija, direktno brojanje, mikroskopija',
        type: 'poglavlje' as const,
        url: '/poglavlje-7/',
        tags: ['direktne metode', 'mikroskopsko brojanje', 'hemacitometar', 'brojka'],
        excerpt: 'Direktne metode brojanja bakterija mikroskopskim tehnikama'
      },
      {
        id: 'poglavlje-8',
        title: 'Bakterije indikatori sanitarnog stanja sredine',
        content: 'Sanitarni indikatori, fekalno zagađenje, E. coli, enterokoki, koliformi, analiza vode, sanitarni standardi, indikator bakterije',
        type: 'poglavlje' as const,
        url: '/poglavlje-8/',
        tags: ['sanitarni indikatori', 'fekalno zagađenje', 'e.coli', 'enterokoki', 'koliformi', 'voda'],
        excerpt: 'Bakterije kao indikatori sanitarnog stanja sredine'
      },
      {
        id: 'poglavlje-9',
        title: 'Sanitarna bakteriološka analiza vode',
        content: 'Analiza vode, sanitarni standardi, fekalno zagađenje, indikator bakterije, kvaliteta vode, sanitarna analiza, bakteriološka analiza',
        type: 'poglavlje' as const,
        url: '/poglavlje-9/',
        tags: ['analiza vode', 'sanitarni standardi', 'fekalno zagađenje', 'kvaliteta vode'],
        excerpt: 'Sanitarna bakteriološka analiza kvalitete vode'
      },
      {
        id: 'poglavlje-10',
        title: 'Termofilne bakterije',
        content: 'Termofilne bakterije, visoke temperature, termofili, toplinski otporni, termofilne aktivnosti, termofilni enzimi',
        type: 'poglavlje' as const,
        url: '/poglavlje-10/',
        tags: ['termofilne', 'visoke temperature', 'termofili', 'toplinski otporni'],
        excerpt: 'Bakterije koje rastu na visokim temperaturama'
      },
      {
        id: 'poglavlje-11',
        title: 'Aerobne sporogene bakterije',
        content: 'Aerobne bakterije, endospore, sporogene, Bacillus, aerobni rast, endospore, sporulacija, germinacija',
        type: 'poglavlje' as const,
        url: '/poglavlje-11/',
        tags: ['aerobne', 'endospore', 'sporogene', 'bacillus', 'sporulacija'],
        excerpt: 'Aerobne bakterije koje stvaraju endospore'
      },
      {
        id: 'poglavlje-12',
        title: 'Anaerobne bakterije',
        content: 'Anaerobne bakterije, anaerobni rast, anaerobni procesi, Clostridium, anaerobni mediji, anaerobne tehnike',
        type: 'poglavlje' as const,
        url: '/poglavlje-12/',
        tags: ['anaerobne', 'anaerobni rast', 'clostridium', 'anaerobni mediji'],
        excerpt: 'Bakterije koje rastu u anaerobnim uvjetima'
      },
      {
        id: 'poglavlje-13',
        title: 'Testovi osjetljivosti na antibiotike',
        content: 'Antibiotici, osjetljivost, rezistencija, disk difuzija, MIC, antibiogram, testovi osjetljivosti, rezistentne bakterije',
        type: 'poglavlje' as const,
        url: '/poglavlje-13/',
        tags: ['antibiotici', 'osjetljivost', 'rezistencija', 'disk difuzija', 'mic'],
        excerpt: 'Testovi osjetljivosti bakterija na antibiotike'
      },
      {
        id: 'poglavlje-14',
        title: 'Testovi osjetljivosti na bakteriofage',
        content: 'Bakteriofagi, fagi, osjetljivost na fage, fagotipizacija, fagovi, virusi bakterija, fag testovi',
        type: 'poglavlje' as const,
        url: '/poglavlje-14/',
        tags: ['bakteriofagi', 'fagi', 'osjetljivost', 'fagotipizacija'],
        excerpt: 'Testovi osjetljivosti bakterija na bakteriofage'
      },
      {
        id: 'poglavlje-15',
        title: 'Testovi za određivanje kvalitete mlijeka',
        content: 'Kvaliteta mlijeka, mliječni testovi, bakterije mlijeka, mliječna fermentacija, mliječni standardi, mliječna analiza',
        type: 'poglavlje' as const,
        url: '/poglavlje-15/',
        tags: ['kvaliteta mlijeka', 'mliječni testovi', 'bakterije mlijeka', 'fermentacija'],
        excerpt: 'Testovi za određivanje bakteriološke kvalitete mlijeka'
      },
      {
        id: 'poglavlje-16',
        title: 'Bakterije mliječne fermentacije',
        content: 'Mliječna fermentacija, mliječne bakterije, fermentacija, mlijeko, mliječni proizvodi, fermentacijski procesi',
        type: 'poglavlje' as const,
        url: '/poglavlje-16/',
        tags: ['mliječna fermentacija', 'mliječne bakterije', 'fermentacija', 'mlijeko'],
        excerpt: 'Bakterije koje sudjeluju u mliječnoj fermentaciji'
      },
      {
        id: 'poglavlje-17',
        title: 'Biogeokemijski ciklus ugljika',
        content: 'Biogeokemijski ciklus, ugljik, CO2, fotosinteza, respiracija, ugljikov ciklus, biogeokemijski procesi',
        type: 'poglavlje' as const,
        url: '/poglavlje-17/',
        tags: ['biogeokemijski ciklus', 'ugljik', 'co2', 'fotosinteza', 'respiracija'],
        excerpt: 'Biogeokemijski ciklus ugljika u prirodi'
      },
      {
        id: 'poglavlje-18',
        title: 'Biogeokemijski ciklus dušika',
        content: 'Biogeokemijski ciklus, dušik, nitrifikacija, denitrifikacija, fiksacija dušika, dušikov ciklus, biogeokemijski procesi',
        type: 'poglavlje' as const,
        url: '/poglavlje-18/',
        tags: ['biogeokemijski ciklus', 'dušik', 'nitrifikacija', 'denitrifikacija', 'fiksacija'],
        excerpt: 'Biogeokemijski ciklus dušika u prirodi'
      },
      {
        id: 'poglavlje-19',
        title: 'Biogeokemijski ciklus sumpora',
        content: 'Biogeokemijski ciklus, sumpor, sulfat redukcija, sulfat oksidacija, sumporovodik, biogeokemijski procesi',
        type: 'poglavlje' as const,
        url: '/poglavlje-19/',
        tags: ['biogeokemijski ciklus', 'sumpor', 'sulfat', 'sulfat redukcija', 'sumporovodik'],
        excerpt: 'Biogeokemijski ciklus sumpora u prirodi'
      },
      {
        id: 'poglavlje-20',
        title: 'Biogeokemijski ciklus fosfora',
        content: 'Biogeokemijski ciklus, fosfor, fosfat, fosfatna razgradnja, fosfatna asimilacija, biogeokemijski procesi',
        type: 'poglavlje' as const,
        url: '/poglavlje-20/',
        tags: ['biogeokemijski ciklus', 'fosfor', 'fosfat', 'razgradnja', 'asimilacija'],
        excerpt: 'Biogeokemijski ciklus fosfora u prirodi'
      },
      {
        id: 'poglavlje-21',
        title: 'Metoda otiska',
        content: 'Metoda otiska, otisci, uzorkovanje, otisci površina, otisci ruku, sanitarna kontrola, otisci bakterija',
        type: 'poglavlje' as const,
        url: '/poglavlje-21/',
        tags: ['metoda otiska', 'otisci', 'uzorkovanje', 'sanitarna kontrola'],
        excerpt: 'Metoda otiska za sanitarnu kontrolu površina'
      },
      {
        id: 'poglavlje-22',
        title: 'Streptomiceti',
        content: 'Actinomycetes, antibiotici, micelij, Czapekova podloga, razgradnja celuloze, aktinomiceti, celuloza, streptomiceti',
        type: 'poglavlje' as const,
        url: '/poglavlje-22/',
        tags: ['streptomiceti', 'antibiotici', 'micelij', 'czapek', 'celuloza', 'aktinomiceti'],
        excerpt: 'Identifikacija streptomiceta kao proizvođača antibiotika'
      },
      {
        id: 'poglavlje-23',
        title: 'Purpurne sumporne bakterije',
        content: 'Fototrofija, purpurne bakterije, zelene bakterije, fotosinteza, Winogradsky, anaerobna fototrofija, sumporne bakterije',
        type: 'poglavlje' as const,
        url: '/poglavlje-23/',
        tags: ['fototrofne', 'purpurne', 'zelene', 'fotosinteza', 'winogradsky', 'anaerobne', 'sumporne'],
        excerpt: 'Identifikacija purpurnih sumpornih bakterija'
      }
    ];

    poglavlja.forEach(poglavlje => {
      searchIndexer.addToIndex({
        ...poglavlje,
        lastModified: new Date()
      });
    });
  }

  // Indeksiranje vježbi
  private async indexVjezbe(): Promise<void> {
    const vjezbe = [
      {
        id: 'vjezba-1',
        title: 'Vježbe iz aseptike i sterilizacije',
        content: 'Autoklaviranje, suha sterilizacija, aseptički rad, kontrola sterilnosti, sterilizacija pribora, aseptičke tehnike',
        type: 'vjezba' as const,
        url: '/poglavlje-1/vjezba-1/',
        tags: ['aseptika', 'sterilizacija', 'autoklaviranje', 'kontrola', 'sterilnost'],
        excerpt: 'Praktične vježbe iz aseptike i sterilizacije'
      },
      {
        id: 'vjezba-2',
        title: 'Vježbe bojenja bakterija',
        content: 'Gram bojenje, bojenje endospora, negativno bojenje, mikroskopija, tehnike bojenja, mikroskopski pregled',
        type: 'vjezba' as const,
        url: '/poglavlje-2/vjezba-2/',
        tags: ['bojenje', 'gram', 'endospore', 'mikroskopija', 'tehnike'],
        excerpt: 'Praktične vježbe iz bojenja bakterija'
      },
      {
        id: 'vjezba-22',
        title: 'Vježbe s aktinomicetima',
        content: 'Izolacija streptomiceta, testiranje antibiotika, micelijski rast, aktinomiceti, antibiotici, izolacija',
        type: 'vjezba' as const,
        url: '/poglavlje-22/vjezba-22/',
        tags: ['aktinomiceti', 'antibiotici', 'streptomiceti', 'izolacija', 'micelij'],
        excerpt: 'Praktične vježbe s aktinomicetima i testiranjem antibiotika'
      },
      {
        id: 'vjezba-23',
        title: 'Vježbe s fototrofnim bakterijama',
        content: 'Winogradsky stupci, anaerobna fototrofija, purpurne bakterije, fotosinteza, anaerobni procesi',
        type: 'vjezba' as const,
        url: '/poglavlje-23/vjezba-23/',
        tags: ['fototrofne', 'winogradsky', 'anaerobne', 'purpurne', 'fotosinteza'],
        excerpt: 'Praktične vježbe s fototrofnim bakterijama'
      }
    ];

    vjezbe.forEach(vjezba => {
      searchIndexer.addToIndex({
        ...vjezba,
        lastModified: new Date()
      });
    });
  }

  // Indeksiranje kvizova
  private async indexKvizove(): Promise<void> {
    const kvizovi = [
      {
        id: 'kviz-opci',
        title: 'Opći kviz iz bakteriologije',
        content: '24 pitanja iz svih poglavlja, sterilizacija, bojenje, identifikacija, testiranje znanja, provjera',
        type: 'kviz' as const,
        url: '/provjeri-znanje/',
        tags: ['kviz', 'test', 'pitanja', 'provjera', 'znanje', 'opći'],
        excerpt: 'Opći kviz za provjeru znanja iz cijelog udžbenika'
      },
      {
        id: 'kviz-1',
        title: 'Kviz: Uvod u bakteriološki praktikum',
        content: 'Pitanja o aseptici, sterilizaciji, sigurnosti rada, osnovama, laboratoriju',
        type: 'kviz' as const,
        url: '/poglavlje-1/quiz-1/',
        tags: ['kviz', 'aseptika', 'sterilizacija', 'sigurnost', 'osnove'],
        excerpt: 'Kviz iz prvog poglavlja - osnove aseptike i sterilizacije'
      },
      {
        id: 'kviz-2',
        title: 'Kviz: Bojenje bakterija',
        content: 'Pitanja o Gram bojenju, endosporama, kapsulama, tehnikama bojenja, mikroskopiji',
        type: 'kviz' as const,
        url: '/poglavlje-2/quiz-2/',
        tags: ['kviz', 'bojenje', 'gram', 'endospore', 'kapsule', 'mikroskopija'],
        excerpt: 'Kviz iz drugog poglavlja - tehnike bojenja bakterija'
      }
    ];

    kvizovi.forEach(kviz => {
      searchIndexer.addToIndex({
        ...kviz,
        lastModified: new Date()
      });
    });
  }

  // Indeksiranje rječnika
  private async indexRjecnik(): Promise<void> {
    const pojmovi = [
      {
        id: 'agar',
        title: 'Agar',
        content: 'Gel substanca iz algi za čvrste podloge, sterilizacija, priprava medija, hranjive podloge, gel',
        type: 'pojam' as const,
        url: '/rječnik/#A',
        tags: ['agar', 'podloge', 'gel', 'medij', 'hranjive'],
        excerpt: 'Gel substanca iz algi za pripremu čvrstih hranjivih podloga'
      },
      {
        id: 'aseptika',
        title: 'Aseptika',
        content: 'Postupci rada koji sprječavaju kontaminaciju, sterilnost, čistoća, aseptički rad, kontaminacija',
        type: 'pojam' as const,
        url: '/rječnik/#A',
        tags: ['aseptika', 'sterilnost', 'kontaminacija', 'čistoća', 'postupci'],
        excerpt: 'Postupci rada koji sprječavaju kontaminaciju materijala'
      },
      {
        id: 'gram-bojenje',
        title: 'Gram bojenje',
        content: 'Osnovno diferencijalno bojenje, gram pozitivne i negativne bakterije, diferencijalno bojenje, klasifikacija',
        type: 'pojam' as const,
        url: '/rječnik/#B',
        tags: ['gram', 'bojenje', 'diferencijalno', 'pozitivne', 'negativne', 'klasifikacija'],
        excerpt: 'Osnovno diferencijalno bojenje za klasifikaciju bakterija'
      },
      {
        id: 'cfu',
        title: 'CFU (Colony Forming Unit)',
        content: 'Jedinica brojanja bakterija, broj kolonija, kvantitativna mikrobiologija, brojanje, kolonije',
        type: 'pojam' as const,
        url: '/rječnik/#C',
        tags: ['cfu', 'brojanje', 'kolonije', 'kvantitativno', 'jedinica'],
        excerpt: 'Jedinica za brojanje bakterija - Colony Forming Unit'
      },
      {
        id: 'e-coli',
        title: 'E. coli (Escherichia coli)',
        content: 'Gram negativna bakterija, indikator fekalnog zagađenja, analiza vode, fekalno zagađenje, indikator',
        type: 'pojam' as const,
        url: '/rječnik/#E',
        tags: ['e.coli', 'escherichia', 'gram negativne', 'voda', 'fekalno', 'indikator'],
        excerpt: 'Escherichia coli kao indikator fekalnog zagađenja vode'
      }
    ];

    pojmovi.forEach(pojam => {
      searchIndexer.addToIndex({
        ...pojam,
        lastModified: new Date()
      });
    });
  }

  // Indeksiranje ostalih stranica
  private async indexOstaleStranice(): Promise<void> {
    const stranice = [
      {
        id: 'sadrzaj',
        title: 'Sadržaj udžbenika',
        content: 'Pregled svih poglavlja, vježbi, kvizova i dodatnih materijala, sadržaj, pregled, navigacija',
        type: 'stranica' as const,
        url: '/sadrzaj/',
        tags: ['sadržaj', 'pregled', 'navigacija', 'poglavlja', 'vježbe'],
        excerpt: 'Pregled cijelog sadržaja udžbenika'
      },
      {
        id: 'predgovor',
        title: 'Predgovor',
        content: 'Uvod u udžbenik, ciljevi, metodologija, predgovor, uvod, ciljevi, metodologija',
        type: 'stranica' as const,
        url: '/predgovor/',
        tags: ['predgovor', 'uvod', 'ciljevi', 'metodologija'],
        excerpt: 'Predgovor i uvod u udžbenik'
      },
      {
        id: 'o-nama',
        title: 'O nama',
        content: 'Informacije o timu, projektu, autorima, kontakt, tim, projekt, autori',
        type: 'stranica' as const,
        url: '/o-nama/',
        tags: ['o nama', 'tim', 'projekt', 'autori', 'kontakt'],
        excerpt: 'Informacije o timu i projektu'
      },
      {
        id: 'kontakt',
        title: 'Kontakt',
        content: 'Kontakt informacije, podrška, pitanja, kontakt, podrška, informacije',
        type: 'stranica' as const,
        url: '/kontakt/',
        tags: ['kontakt', 'podrška', 'pitanja', 'informacije'],
        excerpt: 'Kontakt informacije i podrška'
      }
    ];

    stranice.forEach(stranica => {
      searchIndexer.addToIndex({
        ...stranica,
        lastModified: new Date()
      });
    });
  }

  // Osvježavanje indeksa
  async refreshIndex(): Promise<void> {
    console.log('Osvježavam indeks...');
    searchIndexer.clearIndex();
    this.isIndexed = false;
    await this.indexAllContent();
  }

  // Dohvaćanje statistike indeksa
  getIndexStats() {
    return {
      totalItems: searchIndexer.getIndexSize(),
      isIndexed: this.isIndexed,
      popularTerms: searchIndexer.getPopularTerms()
    };
  }
}

// Export singleton instance
export const contentScanner = ContentScanner.getInstance();
