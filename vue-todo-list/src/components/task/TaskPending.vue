<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{ count: number }>();
</script>

<template>
  <div class="pendingTasks">
    <span>Pending Tasks: {{ count }}</span>
  </div>
</template>

<style scoped>

</style>