<template>
  <section v-once>
    <div v-for="block in blocks" :key="block.id">
<!--      <NotionHeading :block="block" v-if="block.block_type === 'heading_2'"/>-->
      <NotionImage :block="block" v-if="block['content_type'] === 'image'"/>
      <NotionParagraph :block="block" v-if="block['content_type'] === 'paragraph'"/>
<!--      <NotionQuote :block="block" v-if="block.block_type === 'quote'"/>-->
    </div>
  </section>
</template>

<script setup>

defineProps({
  blocks: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>

</style>
