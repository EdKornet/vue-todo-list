<script setup lang="ts">
const emit = defineEmits<{
  (event: "click"): void;
}>();
</script>

<template>
  <button class="btn" @click="emit('click')">
    <slot></slot>
  </button>
</template>
<style scoped>

</style>