<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <MWIcon />
        </div>
      </div>

      <!-- Hero-->
      <div class="row gx-6 mt-5 mt-lg-6">
        <div class="col-12 col-lg-4">
          <CodeTag class="mb-2 mb-lg-3">{{ currentPortfolio['role'] }}</CodeTag>
          <h1 class="mb-3 mb-lg-10 project__name"> {{ currentPortfolio['name'] }} </h1>
          <NuxtLink class="back-link mouse-md mb-5 mb-lg-0 sticky top-4" to="/portfolio">
            <Icon name="material-symbols:arrow-insert" size="24" class="text-white mr-2"/> Explore Projects
          </NuxtLink>
        </div>
        <div class="col">
          <img v-if="currentPortfolio.coverUrl" :src="currentPortfolio.coverUrl" :alt="currentPortfolio.name" class="cover-image mouse-md">
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-7 gx-6 gx-xl-8 pb-3">
        <div class="col-12 col-lg-4 order-2 order-lg-1 pt-6 pt-lg-0">
          <aside class="ps-0 ps-lg-6 mb-5 mb-lg-0" style="position: sticky; top: 60px">
            <h3 class="mb-5" data-aos="fade-up">Details</h3>
            <dl class="mb-5 d-block" data-aos="fade-up">

              <dt v-if="currentPortfolio['client']">Client</dt>
              <dd v-if="currentPortfolio['client']"> {{ currentPortfolio['client']}} </dd>

              <dt class="mt-4" v-if="currentPortfolio['partner']">Partner</dt>
              <dd v-if="currentPortfolio['partner']"> {{ currentPortfolio['partner']}} </dd>

              <dt class="mt-4" v-if="currentPortfolio['role']">Role</dt>
              <dd v-if="currentPortfolio['role']"> {{ currentPortfolio['role'] }} </dd>

              <dt class="mt-4" v-if="currentPortfolio['time']">Timeline</dt>
              <dd v-if="currentPortfolio['time']"> {{ currentPortfolio['time']}} </dd>

              <dt class="mt-4" v-if="currentPortfolio['awards']">Recognition</dt>
              <dd v-if="currentPortfolio['awards']" v-html="currentPortfolio['awards'].replace(/\n/g, '<br />')"></dd>

            </dl>
          </aside>
        </div>
        <main class="col-12 col-lg-8 order-1 order-lg-2">
          <div class="col-12 col-lg-11 col-xl-10">
            <CodeLine :number="'//'" class="mb-5 mb-lg-4">
              <span class="code--yellow">https://</span>
              <span class="code--green">{{ currentPortfolio['website'] }}</span>
            </CodeLine>
            <h1 class="mb-4 mb-lg-5" data-aos="fade-up">{{ currentPortfolioItem['lead'] }}</h1>
          </div>
          <NotionContent :blocks="currentPortfolioItem"/>
          <p class="mt-7 mt-xxl-8 mt-xxxl-9 text-small text-end copyright d-none d-lg-block">Copyright © {{new Date().getFullYear()}} Thinh Le, LLC. All rights reserved.</p>
        </main>
      </div>

    </div>

  </section>
</template>

<script setup>
import projectsDetail from "@/assets/mock/contents.json";
const route = useRoute();
const { portfolio, getProjectBySlug } = usePortfolio(route.params.slug[0]);

const currentPortfolioItem = projectsDetail[route.params.slug[0]]
const currentPortfolio = computed(() => portfolio.value)

const { gtag } = useGtag()
gtag('event', 'page_view', {
  page_title: currentPortfolio.value['name'],
})

useHead({
  title: currentPortfolio.value['name'] + ', ' + currentPortfolio.value['role'] + ' | ' + 'Thinh Le',
  meta: [
    { hid: 'description', name: 'description', content:  currentPortfolioItem['lead'] },
    { hid: 'og:title', property: 'og:title', content: currentPortfolioItem['title'] },
    { hid: 'og:url', property: 'og:url', content: 'https://thinh.io.vn' + route.fullPath },
    { hid: 'og:description', property: 'og:description', content: currentPortfolioItem['lead'] },
    { hid: 'og:image', property: 'og:image', content: currentPortfolio.value['cover']},

    // twitter card
    { hid: "twitter:title", name: "twitter:title", content: currentPortfolio.value['name'] },
    { hid: "twitter:url", name: "twitter:url", content: 'https://thinh.io.vn' + route.fullPath },
    { hid: 'twitter:description', name: 'twitter:description', content: currentPortfolioItem['lead'] },
    { hid: "twitter:image", name: "twitter:image", content: currentPortfolio.value['cover']},
  ],
  link: [
    { hid: "canonical", rel: "canonical", href: 'https://thinh.io.vn' + route.fullPath },
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

</script>

<style lang="scss" scoped>

h1.project__name {
  color: #F2F2F2;
}
.cover-image {
  border-radius: 20px;
}
p:not(.copyright) {
  width: 700px;
  max-width: 100%;
}

.copyright{
  opacity: 0.5;
  font-size: 12px;
  border-top: 1px solid #CCC;
  max-width: 500px;
  padding-top: 20px;
  padding-left: 40px;
  float: right;
}

</style>
