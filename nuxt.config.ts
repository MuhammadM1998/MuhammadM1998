import { defineNuxtConfig } from 'nuxt';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Muhammad Mahmoud - Frontend Web Developer',
      htmlAttrs: { lang: 'en' },
      link: [
        // Favicon
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Junior Nuxt.js Frontend Web Developer who likes building things that live on the web',
        },
        // Meta Tags
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'og:url',
          content: 'https://muhammad-m1998.vercel.app/',
        },
        {
          property: 'twitter:url',
          content: 'https://muhammad-m1998.vercel.app/',
        },
        {
          property: 'twitter:domain',
          content: 'https://muhammad-m1998.vercel.app/',
        },
        {
          property: 'og:title',
          content: 'Muhammad Mahmoud - Frontend Web Developer',
        },
        {
          property: 'og:site_name',
          content: 'Muhammad Mahmoud - Frontend Web Developer',
        },
        {
          property: 'twitter:title',
          content: 'Muhammad Mahmoud - Frontend Web Developer',
        },
        {
          property: 'og:description',
          content:
            'Junior Nuxt.js Frontend Web Developer who likes building things that live on the web',
        },
        {
          property: 'twitter:description',
          content:
            'Junior Nuxt.js Frontend Web Developer who likes building things that live on the web',
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1662030896/Portfolio/Website-Screenshot.png',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1662030896/Portfolio/Website-Screenshot.png',
        },
        {
          property: 'twitter:image',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1662030896/Portfolio/Website-Screenshot.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:image:alt',
          content: 'Muhammad Mahmoud - Frontend Web Developer',
        },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@vueuse/nuxt'],

  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            customCollections: ['my-icons'],
          }),
        ],
      }),
      Icons({
        customCollections: {
          'my-icons': FileSystemIconLoader('./assets/icons', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      }),
    ],
  },
});
