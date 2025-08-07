import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

export default defineConfig({
  site: 'https://ciberwarrior.github.io',
  base: process.env.NODE_ENV === 'production' ? '/praktikum-iz-bakteriologije' : '/',
  integrations: [
    starlight({
      title: 'Mrežni udžbenik iz bakteriologije',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/CiberWarrior/praktikum-iz-bakteriologije',
        },
      ],
      sidebar: [
        {
          label: 'Predgovor',
          items: [{ label: 'Predgovor', slug: 'predgovor' }],
        },
        {
          label: 'Poglavlje 1: Uvod u bakteriološki praktikum',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-1' },
            { label: 'Preuzimanje radnog mjesta', slug: 'poglavlje-1/preuzimanje-radnog-mjesta' },
            { label: 'Pravila reda i ponašanja', slug: 'poglavlje-1/pravila-ponasanja' },
            { label: 'Prva pomoć', slug: 'poglavlje-1/prva-pomoc' },
            { label: 'Dezinfekcija i antisepsa', slug: 'poglavlje-1/dezinfekcija-i-antisepsa' },
            { label: 'Zbrinjavanje materijala', slug: 'poglavlje-1/zbrinjavanje-materijala' },
            { label: 'Osnovni pojmovi u bakteriologiji', slug: 'poglavlje-1/osnovni-pojmovi' },
            { label: 'Uređaji u laboratoriju', slug: 'poglavlje-1/uredaji-u-laboratoriju' },
            { label: 'Pribor u laboratoriju', slug: 'poglavlje-1/laboratorijski-pribor' },
            {
              label: 'Hranjive podloge',
              items: [
                { label: 'Sastav i vrste', slug: 'poglavlje-1/hranjivi-mediji' },
                { label: 'Ekstrakti', slug: 'poglavlje-1/ekstrakti' },
              ]
            },
            { label: 'Opće tehnike rada', slug: 'poglavlje-1/opce-tehnike-rada' },
            { label: 'Bakteriološke tehnike rada', slug: 'poglavlje-1/bakterioloske-tehnike-rada' },
            {
              label: 'Vježbe',
              items: [
                { label: '1. Sveprisutnost mikroba', slug: 'poglavlje-1/vjezbe-1' },
                { label: '2. Izolacija iz suspenzije', slug: 'poglavlje-1/vjezba-2' },
                { label: '3. Izolacija iz Petrijeve zdjelice', slug: 'poglavlje-1/vjezba-3' },
                { label: '4. Precjepljivanje na kosi agar', slug: 'poglavlje-1/vjezba-4' },
                { label: '5. Inokulacija bujona', slug: 'poglavlje-1/vjezba-5' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 2: Sterilizacija',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-2' },
            { label: 'Sterilizacija - osnovni pojmovi', slug: 'poglavlje-2/sterilizacija' },
            {
              label: 'Fizička sterilizacija',
              items: [
                { label: 'Pregled metoda', slug: 'poglavlje-2/fizicka-sterilizacija' },
                { label: 'Spaljivanje', slug: 'poglavlje-2/spaljivanje' },
                { label: 'Žarenje', slug: 'poglavlje-2/zarenje' },
                { label: 'Opaljivanje', slug: 'poglavlje-2/opaljivanje' },
                { label: 'Flambiranje (flambaža)', slug: 'poglavlje-2/flambiranje' },
                { label: 'Suha sterilizacija', slug: 'poglavlje-2/suha-sterilizacija' },
                { label: 'Pasterizacija', slug: 'poglavlje-2/pasterizacija' },
                { label: 'Kuhanje', slug: 'poglavlje-2/kuhanje' },
                { label: 'Frakciona sterilizacija (tindalizacija)', slug: 'poglavlje-2/frakciona-sterilizacija' },
                { label: 'Autoklaviranje', slug: 'poglavlje-2/autoklaviranje' }
              ]
            },
            { label: 'Kemijska sterilizacija', slug: 'poglavlje-2/kemijska-sterilizacija' },
            { label: 'Sterilizacija zračenjem', slug: 'poglavlje-2/sterilizacija-zracenjem' },
            { label: 'Sterilizacija ultrazvukom', slug: 'poglavlje-2/sterilizacija-ultrazvukom' },
            { label: 'Hladna sterilizacija (membranska filtracija)', slug: 'poglavlje-2/hladna-sterilizacija' },
            {
              label: 'Vježbe 2',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-2/vjezbe-2' },
                { label: '1. Učinak vremena kuhanja na bakterije', slug: 'poglavlje-2/vjezba-2-1' },
                { label: '2. Učinak dezinficijensa na bakterije', slug: 'poglavlje-2/vjezba-2-2' },
                { label: '3. Učinak antiseptika na bakterije', slug: 'poglavlje-2/vjezba-2-3' },
                { label: '4. Membranska filtracija', slug: 'poglavlje-2/vjezba-2-4' },
                { label: '5. Priprema kosog agara', slug: 'poglavlje-2/vjezba-2-5' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 3: Bojenje bakterija',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-3' },
            { label: 'Metode bojenja bakterija', slug: 'poglavlje-3/metode-bojenja-bakterija' },
            { label: 'Osnovne otopine boja', slug: 'poglavlje-3/osnovne-otopine-boja' },
            { label: 'Složena bojenja', slug: 'poglavlje-3/slozena-bojanja' },
            { label: 'Test s kalijevom lužinom', slug: 'poglavlje-3/test-s-kalijevom-luzinom' },
            { label: 'Bojenje acidorezistentnih bakterija po Ziehl-Neelsenu', slug: 'poglavlje-3/bojenje-acidorezistentnih-bakterija-po-ziehl-neelsenu' },
            { label: 'Bojenje bakterijskih endospora po Schäffer-Fultonu', slug: 'poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu' },
            { label: 'Negativna bojenja', slug: 'poglavlje-3/negativna-bojenja' },
            {
              label: 'Vježbe 3',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-3/vjezbe-3' },
                { label: '1. Bojenje bakterija karbolfuksinom', slug: 'poglavlje-3/vjezba-3-1' },
                { label: '2. Bojenje bakterija gencijanom violet', slug: 'poglavlje-3/vjezba-3-2' },
                { label: '3. Bojenje bakterija metilenskim plavim', slug: 'poglavlje-3/vjezba-3-3' },
                { label: '4. Bojenje bakterija po Gramu', slug: 'poglavlje-3/vjezba-3-4' },
                { label: '5. Test s KOH-om', slug: 'poglavlje-3/vjezba-3-5' },
                { label: '6. Bojenje acidorezistentnih bakterija po Ziehl-Neelsenu', slug: 'poglavlje-3/vjezba-3-6' },
                { label: '7. Bojenje bakterijskih endospora', slug: 'poglavlje-3/vjezba-3-7' },
                { label: '8. Negativno bojenje kapsula', slug: 'poglavlje-3/vjezba-3-8' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 4: Pokretljivost bakterija',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-4' },
            { label: 'Vježbe 4', slug: 'poglavlje-4/vjezbe-4' }
          ]
        },
        {
          label: 'Poglavlje 5: Biokemijska svojstva bakterija',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-5' },
            { label: 'Biokemijska svojstva bakterija', slug: 'poglavlje-5/biokemijska-svojstva-bakterija' },
            { label: 'Razgradnja ugljikohidrata', slug: 'poglavlje-5/razgradnja-ugljikohidrata' },
            { label: 'Razgradnja ureje', slug: 'poglavlje-5/razgradnja-ureje' },
            { label: 'Stvaranje amonijaka', slug: 'poglavlje-5/stvaranje-amonijaka' },
            { label: 'Stvaranje indola', slug: 'poglavlje-5/stvaranje-indola' },
            { label: 'Stvaranje sumporovodika', slug: 'poglavlje-5/stvaranje-sumporovodika' },
            { label: 'Redukcija nitrata do nitrita', slug: 'poglavlje-5/redukcija-nitrata-do-nitrita' },
            { label: 'Metilno crvenilo i VP test', slug: 'poglavlje-5/metilno-crvenilo-i-voges-proskauerov-test' },
            { label: 'Uporaba citrata', slug: 'poglavlje-5/uporaba-citrata' },
            { label: 'Test na Kliglerovu dvostrukom šećeru', slug: 'poglavlje-5/test-na-kliglerovu-dvostrukom-seceru' },
            { label: 'Katalaza test', slug: 'poglavlje-5/katalaza-test' },
            { label: 'Oksidaza test', slug: 'poglavlje-5/oksidaza-test' },
            { label: 'Testovi za koliformne bakterije', slug: 'poglavlje-5/vazni-testovi-u-determinaciji-koliformnih-bakterija' },
            { label: 'Vježbe 5', slug: 'poglavlje-5/vjezbe-5' }
          ]
        },
        {
          label: 'Poglavlje 6: Određivanje broja bakterija u suspenziji',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-6' },
            { label: 'Titar bakterija', slug: 'poglavlje-6/titar-bakterija' },
            { label: 'Broj kolonija bakterija', slug: 'poglavlje-6/broj-kolonija-bakterija' },
            { label: 'Vježbe 6', slug: 'poglavlje-6/vjezbe-6' }
          ]
        },
        {
          label: 'Poglavlje 7: Određivanje broja bakterija direktnim metodama',
          items: [
            { label: 'Direktne metode', slug: 'poglavlje-7' },
            { label: 'Vježbe 7', slug: 'poglavlje-7/vjezbe-7' }
          ]
        },
        {
          label: 'Poglavlje 8: Bakterije indikatori sanitarnog stanja sredine',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-8' },
            { label: 'Koliformne bakterije', slug: 'poglavlje-8/koliformne-bakterije' },
            { label: 'Fekalni streptokoki', slug: 'poglavlje-8/fekalni-streptokoki' },
            {
              label: 'Vježbe 8',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-8/vjezbe-8' },
                { label: '1. Koliformne bakterije na selektivnim podlogama', slug: 'poglavlje-8/vjezbe/vjezba-8-1' },
                { label: '2. Titar koliformnih bakterija u EC-bujonu', slug: 'poglavlje-8/vjezbe/vjezba-8-2' },
                { label: '3. Broj fekalnih streptokoka', slug: 'poglavlje-8/vjezbe/vjezba-8-3' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 9: Sanitarna bakteriološka analiza vode',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-9' },
            { label: 'Saprofitske bakterije', slug: 'poglavlje-9/saprofitske-bakterije' },
            { label: 'Koliformne bakterije u sanitarnoj analizi', slug: 'poglavlje-9/koliformne-bakterije' },
            { label: 'Prethodni test', slug: 'poglavlje-9/prethodni-test' },
            { label: 'Izračunavanje MPN koliformnih bakterija', slug: 'poglavlje-9/izracunavanje-najvjerojatnijeg-broja-ukupnih-i-fekalnih-koliformnih-bakterija' },
            { label: 'Potvrdni test', slug: 'poglavlje-9/potvrdni-test' },
            { label: 'Završni test', slug: 'poglavlje-9/zavrsni-test' },
            {
              label: 'Vježbe 9',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-9/vjezbe-9' },
                { label: '1. Prethodni test u sanitarnoj analizi vode', slug: 'poglavlje-9/vjezbe/vjezba-9-1' },
                { label: '2. Potvrdni test u sanitarnoj analizi vode', slug: 'poglavlje-9/vjezbe/vjezba-9-2' },
                { label: '3. Završni test u sanitarnoj analizi vode', slug: 'poglavlje-9/vjezbe/vjezba-9-3' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 10: Termofilne bakterije',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-10' },
            { label: 'Termofilne bakterije', slug: 'poglavlje-10/termofilne-bakterije' },
            {
              label: 'Vježbe 10',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-10/vjezbe-10' },
                { label: '1. Određivanje broja kolonija termofilnih bakterija', slug: 'poglavlje-10/vjezbe/vjezba-10-1' },
                { label: '2. Određivanje gnojenja tala stajskim gnojem', slug: 'poglavlje-10/vjezbe/vjezba-10-2' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 11: Aerobne sporogene bakterije',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-11' },
            {
              label: 'Vježbe 11',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-11/vjezbe-11' },
                { label: '1. Izolacija sporogenih bakterija iz površinskih voda', slug: 'poglavlje-11/vjezbe/vjezba-11-1' },
                { label: '2. Izolacija sporogenih bakterija iz tla', slug: 'poglavlje-11/vjezbe/vjezba-11-2' }
              ]
            }
          ]
        }
      ],
      customCss: ['@/styles/global.css'],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});


