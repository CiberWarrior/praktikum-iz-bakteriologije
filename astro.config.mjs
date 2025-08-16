import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

// Detect deploy target to set correct site/base
const isVercel = !!process.env.VERCEL;
const siteUrl = isVercel && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://ciberwarrior.github.io';

export default defineConfig({
  site: siteUrl,
  base: '/',
  output: 'static',
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
        },
        {
          label: 'Poglavlje 12: Anaerobne bakterije',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-12' },
            {
              label: 'Vježbe 12',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-12/vjezbe-12' },
                { label: '1. Izolacija anaerobnih bakterija iz površinskih voda', slug: 'poglavlje-12/vjezbe/vjezba-12-1' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 13: Izrada antibiograma i aromatograma',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-13' },
            { label: 'Antibiogram', slug: 'poglavlje-13/antibiogram' },
            { label: 'Aromatogram', slug: 'poglavlje-13/aromatogram' },
            {
              label: 'Vježbe 13',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-13/vjezbe-13' },
                { label: '1. Izrada antibiograma s komercijalnim antibioticima', slug: 'poglavlje-13/vjezbe/vjezba-13-1' },
                { label: '2. Izrada aromatograma s različitim eteričnim uljima', slug: 'poglavlje-13/vjezbe/vjezba-13-2' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 14: Test toksičnosti s kvascem',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-14' },
            { label: 'Vježbe 14', slug: 'poglavlje-14/vjezbe-14' }
          ]
        },
        {
          label: 'Poglavlje 15: Bakteriološko ispitivanje kvalitete namirnica',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-15' },
            { label: 'Test s metilenskim modrilom', slug: 'poglavlje-15/test-s-metilenskim-modrilom' },
            { label: 'TTC test', slug: 'poglavlje-15/ttc-test' },
            { label: 'HIL test', slug: 'poglavlje-15/hil-test' },
            {
              label: 'Vježbe 15',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-15/vjezbe-15' },
                { label: '1. Izvedba testa s metilenskim modrilom', slug: 'poglavlje-15/vjezbe/vjezba-15-1' },
                { label: '2. Izvedba TTC-testa', slug: 'poglavlje-15/vjezbe/vjezba-15-2' },
                { label: '3. Izvedba HIL-testa', slug: 'poglavlje-15/vjezbe/vjezba-15-3' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 16: Bakterije mliječne fermentacije',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-16' },
            { label: 'Bakterije mliječne fermentacije', slug: 'poglavlje-16/bakterije-mlijecne-fermentacije' },
            {
              label: 'Vježbe 16',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-16/vjezbe-16' },
                { label: '1. Dokazivanje bakterija mliječne fermentacije u acidofilnom jogurtu', slug: 'poglavlje-16/vjezbe/vjezba-16-1' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 17: Određivanje broja kolonija oligokarbofilnih i polikarbofilnih saprofitskih bakterija',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-17' },
            {
              label: 'Vježbe 17',
              items: [
                { label: '1. Određivanje broja kolonija oligokarbofilnih i polikarbofilnih saprofitskih bakterija', slug: 'poglavlje-17/vjezba-17-1' },
                { label: '2. Određivanje postotka fiziološke skupine amilolitičkih bakterija unutar populacije ukupnih saprofitskih bakterija', slug: 'poglavlje-17/vjezba-17-2' }
              ]
            }
          ]
        },
        {
          label: 'Poglavlje 18: Biogeokemijski ciklus dušika',
          items: [
            { label: 'Uvod u poglavlje', slug: 'poglavlje-18' },
            { label: 'Biogeokemijski ciklus dušika', slug: 'poglavlje-18/biogeokemijski-ciklus-dusika' },
            { label: 'Nesimbiotski fiksatori dušika', slug: 'poglavlje-18/nesimbiotski-fiksatori-dusika' },
            { label: 'Proteolitičke želatinolitičke bakterije', slug: 'poglavlje-18/proteoliticke-zelatinolitiske-bakterije' },
            { label: 'Amonifikatori', slug: 'poglavlje-18/amonifikatori' },
            { label: 'Nitrifikatori', slug: 'poglavlje-18/nitrifikatori' },
            { label: 'Denitrifikatori', slug: 'poglavlje-18/denitrifikatori' },
            { label: 'Razgradnja ureje', slug: 'poglavlje-18/razgradnja-ureje' },
            {
              label: 'Vježbe 18',
              items: [
                { label: 'Pregled vježbi', slug: 'poglavlje-18/vjezbe-18' },
                { label: '1. Određivanje broja fertilnih zrnaca tla', slug: 'poglavlje-18/vjezbe/vjezba-18-1' },
                { label: '2. Određivanje broja kolonija Azotobacter chroococcum u tlu', slug: 'poglavlje-18/vjezbe/vjezba-18-2' },
                { label: '3. Određivanje titra Clostridium pasteurianum u tlu', slug: 'poglavlje-18/vjezbe/vjezba-18-3' },
                { label: '4. Negativno bojenje kapsula Azotobacter chroococcum', slug: 'poglavlje-18/vjezbe/vjezba-18-4' },
                { label: '5. Bojenje spora Clostridium pasteurianum', slug: 'poglavlje-18/vjezbe/vjezba-18-5' },
                { label: '6. Određivanje postotka želatinolitičkih bakterija', slug: 'poglavlje-18/vjezbe/vjezba-18-6' },
                { label: '7. Izolacija amonifikatora', slug: 'poglavlje-18/vjezbe/vjezba-18-7' },
                { label: '8. Amonifikacijska aktivnost', slug: 'poglavlje-18/vjezbe/vjezba-18-8' },
                { label: '9. Određivanje aktivnosti nitrifikatora prve faze', slug: 'poglavlje-18/vjezbe/vjezba-18-9' },
                { label: '10. Određivanje aktivnosti nitrifikatora druge faze', slug: 'poglavlje-18/vjezbe/vjezba-18-10' },
                { label: '11. Određivanje najvjerojatnijeg broja denitrifikatora', slug: 'poglavlje-18/vjezbe/vjezba-18-11' }
              ]
            }
          ]
        },
          {
            label: 'Poglavlje 19: Biogeokemijski ciklus sumpora',
            items: [
              { label: 'Uvod u poglavlje', slug: 'poglavlje-19' },
              { label: 'Biogeokemijski ciklus sumpora', slug: 'poglavlje-19/biogeokemijski-ciklus-sumpora' },
              { label: 'Proizvođači sumporovodika iz proteina', slug: 'poglavlje-19/proizvodaci-sumporovodika-iz-proteina' },
              { label: 'Sulfat/tiosulfat reducirajuće bakterije', slug: 'poglavlje-19/sulfat-i-tiosulfat-reducirajuce-bakterije' },
              { label: 'Sulfit reducirajuće klostridije', slug: 'poglavlje-19/sulfit-reducirajuce-klostridije' },
              {
                label: 'Vježbe 19',
                items: [
                  { label: 'Pregled vježbi', slug: 'poglavlje-19/vjezbe-19' },
                  { label: '1. Određivanje broja kolonija proizvođača H2S iz proteina', slug: 'poglavlje-19/vjezbe/vjezba-19-1' },
                  { label: '2. Određivanje broja kolonija sulfit reducirajućih klostridija', slug: 'poglavlje-19/vjezbe/vjezba-19-2' },
                  { label: '3. MPN sulfat/tiosulfat reducirajućih bakterija', slug: 'poglavlje-19/vjezbe/vjezba-19-3' },
                  { label: '4. Bojenje SRB skupine po Gramu', slug: 'poglavlje-19/vjezbe/vjezba-19-4' }
                ]
              }
            ]
          },
          {
            label: 'Poglavlje 20: Biogeokemijski ciklus fosfora',
            items: [
              { label: 'Uvod u poglavlje', slug: 'poglavlje-20' },
              { label: 'Biogeokemijski ciklus fosfora', slug: 'poglavlje-20/biogeokemijski-ciklus-fosfora' },
              { label: 'Fosfomobilizatori', slug: 'poglavlje-20/fosfomobilizatori' },
              { label: 'Fosfat-akumulirajuće bakterije', slug: 'poglavlje-20/fosfat-akumulirajuce-bakterije' }
            ]
          },
          {
            label: 'Poglavlje 21: Metoda otiska',
            items: [
              { label: 'Uvod u poglavlje', slug: 'poglavlje-21' },
              { label: 'Metoda otiska', slug: 'poglavlje-21/metoda-otiska' },
              { label: 'Vježbe 21', slug: 'poglavlje-21/vjezbe-21' },
              {
                label: 'Vježbe',
                items: [
                  { label: '1. Temperaturni optimum i temperaturna valencija', slug: 'poglavlje-21/vjezbe/vjezba-21-1' },
                  { label: '2. Zastupljenost fizioloških skupina', slug: 'poglavlje-21/vjezbe/vjezba-21-2' }
                ]
              }
            ]
          },
          {
            label: 'Poglavlje 22: Streptomiceti',
            items: [
              { label: 'Uvod u poglavlje', slug: 'poglavlje-22' },
              { label: 'Streptomiceti', slug: 'poglavlje-22/streptomiceti' },
              { label: 'Razgradnja celuloze', slug: 'poglavlje-22/razgradnja-celuloze' },
              { label: 'Određivanje antibiotskih svojstava streptomiceta', slug: 'poglavlje-22/antibiotska-svojstva-streptomiceta' },
              {
                label: 'Vježbe 22',
                items: [
                  { label: '1. Izolacija iz tla na Czapekovom agaru', slug: 'poglavlje-22/vjezbe/vjezba-22-1' },
                  { label: '2. Izolacija u čistoj kulturi', slug: 'poglavlje-22/vjezbe/vjezba-22-2' },
                  { label: '3. Mikroskopiranje streptomiceta', slug: 'poglavlje-22/vjezbe/vjezba-22-3' },
                  { label: '4. Antibiogram s antibioticima iz streptomiceta', slug: 'poglavlje-22/vjezbe/vjezba-22-4' },
                  { label: '5. Razgradnja celuloze', slug: 'poglavlje-22/vjezbe/vjezba-22-5' }
                ]
              }
            ]
          },
          {
            label: 'Poglavlje 23: Izolacija anaerobnih fototrofnih bakterija u stupcu po Vinogradskom',
            items: [
              { label: 'Uvod u poglavlje', slug: 'poglavlje-23' },
              { label: 'Purpurne sumporne bakterije', slug: 'poglavlje-23/purpurne-sumporne-bakterije' },
              { label: 'Vježbe 23', slug: 'poglavlje-23/vjezbe-23' }
            ]
          }
      ],
      customCss: ['@/styles/global.css', '@/styles/exercise.css'],
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


