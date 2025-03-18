<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column" itemscope itemtype="https://schema.org/Person">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">Back
              <Icon name="material-symbols:arrow-outward" size="24" class="text-black ml-2" />
            </NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">about</CodeTag>
            <div class="d-flex flex-row align-items-center mb-5">
              <img src="https://avatars.githubusercontent.com/u/54289320?s=400&u=e2ede7ab28f82c5933c7ec6b5f644a9d55c62f98&v=4" alt="Hey I'm Simon" class="headshot me-4 me-lg-5">
              <div>
                <h1 class="mb-1" itemprop="name">Thinh Le</h1>
                <StatusIndicator type="dark"/>
              </div>
            </div>
            <h2 class="my-4" itemprop="description">{{ dataAbout[0]['title'] }}</h2>
            <div itemprop="knowsAbout">
              {{ dataAbout[0]['summary'] }}
            </div>
<!--            <h3 class="mt-5 mb-4">Clients &amp; Partners</h3>-->
<!--            <p class="mb-4">-->
<!--              Over the past 2.5+ years I've had the opportunity to work alongside some of the most talented people in the-->
<!--              industry for some incredible clients, such as:-->
<!--            </p>-->
          </div>
<!--          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxxl-6">-->
<!--            <div class="client-logo__container">-->
<!--              <img src="~/assets/images/clients/google.svg" alt="Google logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/dolby.svg" alt="Dolby logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/abm.svg" alt="ABM logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/steward.svg" alt="Steward logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/mit.svg" alt="MIT logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/alaska.svg" alt="Alaska Airlines logo" class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/stanley.svg" alt="Stanley Black and Decker logo"-->
<!--                   class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/panera.svg" alt="Panera Bread logo"-->
<!--                   class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/georgia.svg" alt="University of Georgia logo"-->
<!--                   class="client-logo mouse-md">-->
<!--              <img src="~/assets/images/clients/mcasd.svg" alt="MCASD logo" class="client-logo mouse-md">-->
<!--            </div>-->
<!--          </div>-->
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <div class="flex flex-col w-full justify-between">
              <div class="flex-1">
                <h3 class="mt-5 mb-4">
                  Technical skills
                </h3>
                <Skills :skills="dataAbout[0]['skills']"/>
              </div>
              <div class="flex-1">
                <h3 class="mt-5 mb-4">
                  Experiences
                </h3>
                <Experience :experiences="dataAbout[0]['experience']"/>
              </div>
            </div>
            <h3 class="mt-5 mb-4">
              Get in Touch
            </h3>
            <p class="mb-5">
              Thanks for reading a little bit about me. I’m always happy to chat and provide any helpful advice that I
              can. You can schedule a discovery call to see if we’re a good fit, or just email at <a
                href="mailto:hungthinh.ckc@gmail.com" class="mouse-sm" itemprop="email">hungthinh.ckc@gmail.com</a> or my Github <a href="https://github.com/heydayle" target="_blank" class="mouse-sm">heydayle</a>.
            </p>
            <ActionButton to="/contact" data-aos="fade-up" class="d-none d-lg-flex">
              <Icon name="tabler:message-circle-filled" size="24" class="mr-2"/>
              Let's Chat
            </ActionButton>
          </div>
        </main>

      </div>
    </div>

  </section>
</template>

<script setup>

import {usePortfolio} from "~/composables/usePortfolio";

useHead({
  title: 'Hey, I\'m Thinh Le | Heyday Web',
  meta: [
    {
      name: 'description',
      content: 'Junior front end engineer with 2.5+ years building creative websites, interactive experiences and custom web software.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

const { gtag } = useGtag()
gtag('event', 'page_view', {
  app_name: 'Thinh Le',
  screen_name: 'About'
})

const portfolioData = await usePortfolio();

const dataAbout= await portfolioData.getAbout()

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
  transform: translateX(-10%) translateZ(0);
  transform-origin: left center;
}

.client-logo__container {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &:hover {
    .client-logo:not(:hover) {
      opacity: 0.2;
    }
  }
}

.client-logo {
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.headshot {
  width: 100px;
  border-radius: 50%;

  @media screen and (max-width: 992px) {
    width: 70px;
  }
}

</style>
