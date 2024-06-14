<script setup lang="ts">
interface IProps {
  experiences: {
    position: string
    company: string
    time: string
    description: string
  }[]
}
defineProps<IProps>()
</script>

<template>
  <div>
    <div v-for="(experience, index) in experiences" :key="index">
      <p class="p-2 font-monospace">
        {{ experience?.time }}
      </p>
      <div class="ms-2 ps-4 pb-4 border-start">
        <strong>{{ experience?.position }}</strong>
        <p>{{ experience?.company }}</p>
        <p>{{ experience?.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>