<script setup lang="ts">
interface IProps {
  skills: {
    label: string
    value: {
      programingLanguage: string
      framework: string
      versionControl: string
      database: string
      other: string
    }
  }
}
defineProps<IProps>()
</script>

<template>
  <div v-for="(skill, index) in skills" :key="index">
    {{ skill['label'] }}
    <ul class="py-2 px-4 list-disc">
      <li v-for="item in skill['value']" v-html="item"/>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>