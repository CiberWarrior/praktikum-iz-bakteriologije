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
          label: 'Uvod',
          items: [{ label: 'Dobrodošli', slug: '' }],
        },
        {
          label: 'Poglavlja',
          items: [{ label: 'Bakteriološki praktikum', slug: 'poglavlje-1' }],
        },
        {
          label: 'Vodiči',
          items: [{ label: 'Primjer vodiča', slug: 'guides/example' }],
        },
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



