// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  app: {
      pageTransition: {name: 'page', mode: 'out-in'},
      head: {
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'google-site-verification', content: 'f1RWMSTmyECrT0CoMRIa8tOBPIaaAsUiTT7qYLQ1mS0' }
          ],
      }
  },

  css: ["@/assets/scss/app.scss"],

  vite: {
      server: {
          hmr: {
              port: 5050
          }
      }
  },

  compatibilityDate: '2025-03-05',
  runtimeConfig: {
    public: {
        NOTION_DB_ABOUT_ID: process.env.NOTION_DB_ABOUT_ID,
        NOTION_DB_CONTENTS_ID: process.env.NOTION_DB_CONTENTS_ID,
        NOTION_DB_PROJECTS_ID: process.env.NOTION_DB_PROJECTS_ID
    }
  }
});