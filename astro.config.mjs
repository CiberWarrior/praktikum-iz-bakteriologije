import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Mrežni udžbenik iz bakteriologije',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Predgovor',
          items: [{ label: 'Predgovor', slug: 'poglavlje-1/predgovor' }],
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


