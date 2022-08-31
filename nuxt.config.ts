import { defineNuxtConfig } from 'nuxt';

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
        // Fonts
        {
          rel: 'stylesheet',
          href: './assets/css/fonts.css',
        },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        // Meta Tags
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'og:url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'twitter:url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'twitter:domain',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'og:title',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
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
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'twitter:description',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'og:image',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'og:image:secure_url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'twitter:image',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
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

  modules: ['@nuxtjs/tailwindcss', 'nuxt-icons'],
});
