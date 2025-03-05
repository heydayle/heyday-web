<script setup lang="ts">
interface Props {
    label: string
    href: string
    icon: string
}
defineProps<Props>()

</script>
<template>
    <a :href="href" target="_blank" class="mouse-sm h-6 flex items-center space-x-2">
        <Icon :name="icon" size="24" />
         <span/>{{ ' ' + label }}
    </a>
</template>