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
            { label: 'Preuzimanje radnog mjesta', slug: 'poglavlje-1/preuzimanje-radnog-mjesta' },
            { label: 'Pravila reda i ponašanja', slug: 'poglavlje-1/pravila-ponašanja' },
            { label: 'Opće tehnike rada', slug: 'poglavlje-1/opce-tehnike' },
            { label: 'Dezinfekcija i antisepsa', slug: 'poglavlje-1/dezinfekcija-antisepsa' },
            { label: 'Prva pomoć', slug: 'poglavlje-1/prva-pomoc' },
            { label: 'Zbrinjavanje materijala', slug: 'poglavlje-1/zbrinjavanje' },
            { label: 'Uređaji u laboratoriju', slug: 'poglavlje-1/uredaji' },
            { label: 'Pribor u laboratoriju', slug: 'poglavlje-1/pribor' },
            {
              label: 'Hranjive podloge',
              items: [
                { label: 'Sastav i vrste', slug: 'poglavlje-1/hranjive-podloge' },
                { label: 'Ekstrakti', slug: 'poglavlje-1/ekstrakti' },
              ]
            },
            { label: 'Osnovni pojmovi u bakteriologiji', slug: 'poglavlje-1/osnovni-pojmovi' },
            { label: 'Bakteriološke tehnike rada', slug: 'poglavlje-1/bakterioloske-tehnike-rada' },
            {
              label: 'Vježbe',
              items: [
                { label: '1. Sveprisutnost mikroba', slug: 'poglavlje-1/1-dokazivanje-mikroba' },
                { label: '2. Izolacija iz suspenzije', slug: 'poglavlje-1/2-izolacija-suspenzija' },
                { label: '3. Izolacija iz Petrijeve zdjelice', slug: 'poglavlje-1/3-izolacija-petrijevka' },
                { label: '4. Precjepljivanje na kosi agar', slug: 'poglavlje-1/4-precjepljivanje' },
                { label: '5. Inokulacija bujona', slug: 'poglavlje-1/5-inokulacija-bujona' }
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


