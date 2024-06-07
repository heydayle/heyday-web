<template>

  <!-- WebGL Background -->
  <client-only>
    <LazyHero/>
  </client-only>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <!-- Dynamic Cursor Element -->
  <client-only>
    <LazyCursor/>
  </client-only>


</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Thinh Le | Creative Front End Engineer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en-US',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Hey Thinh Le, a creative front end engineer based in Ho Chi Minh, Vietnam. I\'m passionate about creating incredible user experiences with web technology. I specialize in programming with Vue, Nuxt and React. I love writing code but I\'m also experienced in UX consulting, with a keen eye for detail and an understanding of interaction design and best practices. I’ve worked on many projects where I start early in the discovery process, guide and design the UX from the ground up, and then get to work building it.'
    },
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: '#7a4fee'
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    },
    {
      hid: 'googlebot',
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'https://github.com/heydayle'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Thinh Le | Creative Front End Engineer'
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://github.com/heydayle'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Thinh Le | Creative Front End Engineer'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Hey Thinh Le, a creative front end engineer based in Ho Chi Minh, Vietnam. I\'m passionate about creating incredible user experiences with web technology. I specialize in programming with Vue, Nuxt and React. I love writing code but I\'m also experienced in UX consulting, with a keen eye for detail and an understanding of interaction design and best practices. I’ve worked on many projects where I start early in the discovery process, guide and design the UX from the ground up, and then get to work building it.'
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Thinh Le| Creative Front End Engineer'
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'en_US'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@heydayle'
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@heydayle'
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://github.com/heydayle'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Thinh Le | Creative Front End Engineer'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Hey Thinh Le, a creative front end engineer based in Ho Chi Minh, Vietnam.'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://github.com/heydayle'
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Thinh Le | Creative Front End Engineer'
    }
  ],
  link: [
    {rel: 'icon', type: 'image/svg', href: '/icon-notext.svg'},
    {rel: 'preconnect', href: 'https://api.marchantweb.com'},
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    },
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'},
  ],
  script: [
    {
      src: "https://kit.fontawesome.com/172ddc2486.js", async: true, defer: true
    }
  ],
});
</script>
