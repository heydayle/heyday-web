<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <NuxtLink class="back-link mouse-md mt-4 mt-lg-0" to="/">
            <Icon name="material-symbols:arrow-insert" size="24" class="text-black mr-2"/> Back
          </NuxtLink>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <p class="mb-4">Feel free to reach out. I'm always happy to chat to discuss ideas, feasibility, schedule,
            things like that. Or if you just have questions or want to say hi, that's cool too.</p>
          <h2 class="mb-6">👋 <a href="mailto:hungthinh.ckc@gmail.com" target="blank" class="mouse-md"
              style="color: #7A4FEE">hungthinh.ckc@gmail.com</a></h2>
          <div class="flex items-center space-x-4">
            <SocialLink icon="lineicons:github-original" label="/heydayle" href="https://github.com/heydayle" />
            <SocialLink icon="fa6-brands:linkedin" label="/thinhle99" href="https://linkedin.com/in/thinhle99" />
          </div>
        </div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>
    </div>

  </section>
</template>

<script setup>

import { useScriptTag } from '@vueuse/core'

useHead({
  title: 'Let\'s Chat - Schedule a Discovery Session | Heyday Web',
  meta: [
    {
      name: 'description',
      content: 'Schedule a one-hour initial discovery session for your project, or reach out via email.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

const { gtag } = useGtag()
gtag('event', 'page_view', {
  app_name: 'Thinh Le',
  screen_name: 'Contact'
})
</script>

<style lang="scss" scoped>
.page-enter-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0, 1);
  transition-delay: 0.5s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(10%) translateZ(0);
  transform-origin: right center;
}

#calendar-container {
  height: 700px;
  width: 100%;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  left: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.container-xxxl {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    min-height: unset;
  }
}
</style>
