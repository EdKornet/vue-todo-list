<script setup lang="ts">
import { computed, defineEmits } from 'vue';

const props = defineProps<{
  task: {
    text: string;
    completed: boolean;
  };
}>();

const emit = defineEmits<{
  (event: "toggle-completed"): void;
  (event: "remove"): void;
}>();


const toggleClass = computed(() => {
  let classes = ["toggle"];
  if (props.task.completed) {
    classes.push("toggle-completed");
  }
  return classes.join(" ");
});


</script>

<template>
  <li @click="emit('toggle-completed')" >
    <button :class="toggleClass">
      <i class="far fa-circle"></i> {{ props.task.text }}
    </button>
    <button @click="$emit('remove')">
      <i class="far fa-trash-alt"></i>
    </button>
  </li>
</template>

<style scoped>
</style>
