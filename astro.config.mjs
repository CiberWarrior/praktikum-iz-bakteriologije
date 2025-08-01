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
          items: [{ label: 'Predgovor', slug: 'predgovor' }],
        },
        {
          label: 'Poglavlje 1: Uvod u bakteriološki praktikum',
          items: [
            { label: 'Preuzimanje radnog mjesta', slug: 'preuzimanje-radnog-mjesta' },
            { label: 'Pravila reda i ponašanja', slug: 'pravila-ponasanja' },
            { label: 'Opće tehnike rada', slug: 'opce-tehnike-rada' },
            { label: 'Dezinfekcija i antisepsa', slug: 'dezinfekcija-i-antisepsa' },
            { label: 'Prva pomoć', slug: 'prva-pomoc' },
            { label: 'Zbrinjavanje materijala', slug: 'zbrinjavanje-materijala' },
            { label: 'Uređaji u laboratoriju', slug: 'uredaji-u-laboratoriju' },
            { label: 'Pribor u laboratoriju', slug: 'laboratorijski-pribor' },
            {
              label: 'Hranjive podloge',
              items: [
                { label: 'Sastav i vrste', slug: 'hranjive-podloge' },
                { label: 'Ekstrakti', slug: 'ekstrakti' },
              ]
            },
            { label: 'Osnovni pojmovi u bakteriologiji', slug: 'osnovni-pojmovi' },
            { label: 'Bakteriološke tehnike rada', slug: 'bakterioloske-tehnike-rada' },
            {
              label: 'Vježbe',
              items: [
                { label: '1. Sveprisutnost mikroba', slug: 'vjezbe-1' },
                { label: '2. Izolacija iz suspenzije', slug: 'vjezba-2' },
                { label: '3. Izolacija iz Petrijeve zdjelice', slug: 'vjezba-3' },
                { label: '5. Inokulacija bujona', slug: 'vjezba-5' }
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



