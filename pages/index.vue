<template>
  <section class="page">

    <NavMenu/>

    <div id="bottom-bar" class="container-xxxl">
      <div class="row mb-3 mb-lg-5 mb-xxl-6 justify-content-between align-items-end">
        <div class="col-11 col-sm-8 col-xxl-6 col-xxxl-7">
          <i class="fa-sharp fa-solid fa-code-commit lead-icon mb-4 mb-lg-5" aria-hidden="true"></i>
          <h1 class="visually-hidden">{{ heading }}</h1>
          <h1 class="lead mouse-lg" v-once>
            <span class="heading-char" aria-hidden="true"
                  :style="{'animation-delay': (index % 5 === 0 ? 0.7 : 0.005 * index) + 's'}"
                  v-for="(char, index) in headingChars">{{ char }}
            </span>
          </h1>
          <h2>
            <span class="title-char text-white" aria-hidden="true"
                  :style="{'animation-delay': (index % 5 === 0 ? 0.7 : 0.005 * index) + 's'}"
                  v-for="(char, index) in title">{{ char }}
            </span>
          </h2>
          <ActionButton to="/portfolio" data-aos="fade-right" class="d-block d-lg-none mt-4 mb-4">
            Explore <i class="fa-sharp fa-solid fa-arrow-right-long fa-lg ps-2"></i>
          </ActionButton>
          <NuxtLink class="back-link mouse-md d-inline-block d-lg-none me-5" to="/about">About<i
              class="fa-sharp fa-solid fa-arrow-up-right fa-lg ps-2"></i></NuxtLink>
          <NuxtLink class="back-link mouse-md d-inline-block d-lg-none" to="/contact">Contact<i
              class="fa-sharp fa-regular fa-arrow-up-right fa-lg ps-2"></i></NuxtLink>
          <StatusIndicator class="d-block mt-1 mt-lg-0 py-3 d-lg-none"/>
        </div>
        <div class="col-auto">
          <ScrollHint/>
        </div>
      </div>
      <BottomBar/>
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

onMounted(() => {
  useEventListener(document, 'wheel', async (event) => {
    if (event.deltaY > 0) {
      await navigateTo('/portfolio');
    }
  });
  preloadRouteComponents('/portfolio');
});

const heading = "LE DUONG HUNG THINH"
const title = "<FRONT END ENGINEER />"
const headingChars = heading.split('');

</script>

<style lang="scss" scoped>

* {
  user-select: none;
  -webkit-user-select: none;
}

.lead {
  color: #F2F2F2;
  user-select: none;
  text-shadow: -1px 0 0 rgb(44, 191, 217), 1px 0 0 rgb(239, 9, 105);
  transition: text-shadow 0.1s ease-in-out;

  @media screen and (max-width: 992px) {
    text-shadow: none;
  }

  span {
    pointer-events: none;
    color: #F2F2F2;
    user-select: none;
  }
}

.lead-icon {
  color: #F2F2F2;
  font-size: 40px;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
  animation: leadIconAnimation 1s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
  transform: translateX(20px);

  @media screen and (max-width: 992px) {
    font-size: 28px;
    font-weight: 400 !important;
  }
}

@keyframes leadIconAnimation {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.heading-char {
  display: inline;
  opacity: 0;
  animation: headingCharReveal 2.8s cubic-bezier(0.7, 0, 0.2, 1) forwards;
}
.title-char {
  display: inline;
  opacity: 0;
  animation: headingCharReveal 2.8s cubic-bezier(0.7, 0, 0.2, 1) forwards;
}

@keyframes headingCharReveal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#awwwards {
  transform: translateX(100%);
  animation: animateAwwwardsIn 1s ease-out forwards;
  animation-delay: 1.8s;
  position: fixed;
  z-index: 999;
  top: 60px;
  right: 0;

  @media screen and (max-width: 1720px) {
    top: 160px;
  }

  > a {
    display: block;

    > * {
      pointer-events: none;
    }
  }
}

@keyframes animateAwwwardsIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>
