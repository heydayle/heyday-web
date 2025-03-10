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
  <div class="grid grid-cols-2 md:grid-cols-4">
    <div v-for="(experience, index) in experiences" :key="index" class="group">
      <p class="p-2 font-monospace text-xs">
        {{ experience?.time }}
      </p>
      <div class="ms-2 ps-4 pb-4 border-start group-hover:shadow-lg">
        <strong>{{ experience?.position }}</strong>
        <p>{{ experience?.company }}</p>
        <p>{{ experience?.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>