import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Gaming-Wiki',
    editLink: {
      baseUrl: 'https://github.com/BiBaBorsti/wiki_gaming/tree/main/',
    },
    social: {      
      github: 'https://github.com/BiBaBorsti/wiki_gaming',
    },
    // logo: {
    //   light: './src/assets/light-logo.svg',
    //   dark: './src/assets/dark-logo.svg',
    //   replacesTitle: true,
    // },
    customCss: ['/src/tailwind.css'],
    sidebar: [{
      label: 'Disney Speedstorm',
      collapsed: false,
      autogenerate: {
        directory: 'speedstorm',
          label: 'Subtitle1',
          collapsed: false,
          autogenerate: {
            directory: 'sub1'
          }
      }
    }, {
      label: 'Snowrunner',
      collapsed: false,
      autogenerate: {
        directory: 'snowrunner'
      }
    }, {
      label: 'Pioneers of Pagonia',
      collapsed: false,
      autogenerate: {
        directory: 'pagonia'
      }
    }, {
      label: 'Warframe',
      collapsed: false,
      autogenerate: {
        directory: 'warframe'
      }
    }
  ]
  }), tailwind({
    applyBaseStyles: false
  }), react({
    experimentalReactChildren: true,
    include: ['**/react/*'],
  }),
  ],
});