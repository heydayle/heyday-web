// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
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
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false
    }
});
