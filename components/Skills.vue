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
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div v-for="(skill, index) in skills" :key="index" class="group border border-gray-300 p-2 transition duration-300 hover:shadow-lg">
      <span class="group-hover:italic">{{ skill['label'] }}</span>
      <ul class="py-2 px-4 list-disc">
        <li v-for="item in skill['value']" v-html="item"/>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>