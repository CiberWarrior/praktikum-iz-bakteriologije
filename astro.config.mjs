import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import accessibility from './src/integrations/accessibility.js';
import tailwind from '@astrojs/tailwind';
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
  redirects: {
    '/poglavlje/poglavlje-1/': '/poglavlje-1/',
    '/poglavlje/poglavlje-2/': '/poglavlje-2/',
    '/poglavlje/poglavlje-3/': '/poglavlje-3/',
    '/poglavlje/poglavlje-4/': '/poglavlje-4/',
    '/poglavlje/poglavlje-5/': '/poglavlje-5/',
    '/poglavlje-1/vjezbe-1/': '/poglavlje-1/vjezba-1/',
    '/poglavlje-1/vjezbe-2/': '/poglavlje-1/vjezba-2/',
    '/poglavlje-1/vjezbe-3/': '/poglavlje-1/vjezba-3/',
    '/poglavlje-1/vjezbe-4/': '/poglavlje-1/vjezba-4/',
    '/poglavlje-1/vjezbe-5/': '/poglavlje-1/vjezba-5/',
    '/poglavlje-2/vjezbe-2/': '/poglavlje-2/vjezba-2/',
    '/poglavlje-3/vjezbe-3/': '/poglavlje-3/vjezba-3/',
    '/poglavlje-4/vjezbe-4/': '/poglavlje-4/vjezba-4/',
    '/poglavlje-5/vjezbe-5/': '/poglavlje-5/vjezba-5/',
    '/poglavlje-6/vjezbe-6/': '/poglavlje-6/vjezba-6/',
    '/poglavlje-7/vjezbe-7/': '/poglavlje-7/vjezba-7/',
    '/poglavlje-8/vjezbe-8/': '/poglavlje-8/vjezba-8/',
    '/poglavlje-9/vjezbe-9/': '/poglavlje-9/vjezba-9/',
    '/poglavlje-10/vjezbe-10/': '/poglavlje-10/vjezba-10/',
    '/poglavlje-11/vjezbe-11/': '/poglavlje-11/vjezba-11/',
    '/poglavlje-12/vjezbe-12/': '/poglavlje-12/vjezba-12/',
    '/poglavlje-13/vjezbe-13/': '/poglavlje-13/vjezba-13/',
    '/poglavlje-14/vjezbe-14/': '/poglavlje-14/vjezba-14/',
    '/poglavlje-15/vjezbe-15/': '/poglavlje-15/vjezba-15/',
    '/poglavlje-16/vjezbe-16/': '/poglavlje-16/vjezba-16/',
    '/poglavlje-18/vjezbe-18/': '/poglavlje-18/vjezba-18/',
    '/poglavlje-19/vjezbe-19/': '/poglavlje-19/vjezba-19/',
    '/poglavlje-21/vjezbe-21/': '/poglavlje-21/vjezba-21/',
    '/poglavlje-22/vjezbe-22/': '/poglavlje-22/vjezba-22/',
    '/poglavlje-23/vjezbe-23/': '/poglavlje-23/vjezba-23/',
  },
  integrations: [
    accessibility(),
    tailwind(),
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
          link: '/poglavlje-1/',
        },
        {
          label: 'Poglavlje 2: Sterilizacija',
          link: '/poglavlje-2/',
        },
        {
          label: 'Poglavlje 3: Bojenje bakterija',
          link: '/poglavlje-3/',
        },
        {
          label: 'Poglavlje 4: Pokretljivost bakterija',
          link: '/poglavlje-4/',
        },
        {
          label: 'Poglavlje 5: Biokemijska svojstva bakterija',
          link: '/poglavlje-5/',
        },
        {
          label: 'Poglavlje 6: Određivanje broja bakterija u suspenziji',
          link: '/poglavlje-6/',
        },
        {
          label: 'Poglavlje 7: Određivanje broja bakterija direktnim metodama',
          link: '/poglavlje-7/',
        },
        {
          label: 'Poglavlje 8: Bakterije indikatori sanitarnog stanja sredine',
          link: '/poglavlje-8/',
        },
        {
          label: 'Poglavlje 9: Sanitarna bakteriološka analiza vode',
          link: '/poglavlje-9/',
        },
        {
          label: 'Poglavlje 10: Termofilne bakterije',
          link: '/poglavlje-10/',
        },
        {
          label: 'Poglavlje 11: Aerobne sporogene bakterije',
          link: '/poglavlje-11/',
        },
        {
          label: 'Poglavlje 12: Anaerobne bakterije',
          link: '/poglavlje-12/',
        },
        {
          label: 'Poglavlje 13: Testovi osjetljivosti na antibiotike',
          link: '/poglavlje-13/',
        },
        {
          label: 'Poglavlje 14: Testovi osjetljivosti na bakteriofage',
          link: '/poglavlje-14/',
        },
        {
          label: 'Poglavlje 15: Testovi za određivanje kvalitete mlijeka',
          link: '/poglavlje-15/',
        },
        {
          label: 'Poglavlje 16: Bakterije mliječne fermentacije',
          link: '/poglavlje-16/',
        },
        {
          label: 'Poglavlje 17: Biogeokemijski ciklus ugljika',
          link: '/poglavlje-17/',
        },
        {
          label: 'Poglavlje 18: Biogeokemijski ciklus dušika',
          link: '/poglavlje-18/',
        },
        {
          label: 'Poglavlje 19: Biogeokemijski ciklus sumpora',
          link: '/poglavlje-19/',
        },
        {
          label: 'Poglavlje 20: Biogeokemijski ciklus fosfora',
          link: '/poglavlje-20/',
        },
        {
          label: 'Poglavlje 21: Metoda otiska',
          link: '/poglavlje-21/',
        },
        {
          label: 'Poglavlje 22: Streptomiceti',
          link: '/poglavlje-22/',
        },
        {
          label: 'Poglavlje 23: Purpurne sumporne bakterije',
          link: '/poglavlje-23/',
        },
      ],
      customCss: ['@/styles/global.css', '@/styles/tailwind.css'],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '~': path.resolve('./src'),
      },
    },
  },
});


