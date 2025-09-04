import { defineConfig } from 'astro/config';
import accessibility from './src/integrations/accessibility.js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import path from 'path';

// Detect deploy target to set correct site/base
const isVercel = !!process.env.VERCEL;
const siteUrl = isVercel && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://ciberwarrior.github.io';

export default defineConfig({
  site: siteUrl,
  base: '/',
  output: 'hybrid',
  adapter: vercel(),
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


