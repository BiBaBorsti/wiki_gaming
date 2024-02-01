import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Wiki von Marcel Wolf',
    customCss: ['/src/tailwind.css'],
    sidebar: [{
      label: 'React',
      collapsed: false,
      autogenerate: {
        directory: 'react',
          label: 'Hooks',
          collapsed: false,
          autogenerate: {
            directory: 'Hooks'
          }
      }
    }, {
      label: 'Laravel',
      collapsed: false,
      autogenerate: {
        directory: 'laravel'
      }
    }, {
      label: 'VSCode',
      collapsed: false,
      autogenerate: {
        directory: 'vscode'
      }
    }, {
      label: 'Git & Github',
      collapsed: false,
      autogenerate: {
        directory: 'git'
      }
    }, {
      label: 'Mermaid',
      collapsed: false,
      autogenerate: {
        directory: 'mermaid'
      }
    }, {
      label: 'Linux',
      collapsed: false,
      autogenerate: {
        directory: 'linux'
      }
    }, {
      label: '101',
      collapsed: false,
      autogenerate: {
        directory: '101'
      }
    }, {
      label: 'Apps',
      collapsed: false,
      autogenerate: {
        directory: 'apps'
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react({
    experimentalReactChildren: true,
    include: ['**/react/*'],
  }),
  ],
});