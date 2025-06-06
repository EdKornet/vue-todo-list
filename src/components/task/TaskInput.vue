<script setup lang="ts">
import { computed, defineEmits } from 'vue';
import type { Task } from '@/types/task';

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (event: "toggle-completed", payload: { id: string; completed: boolean }): void;
  (event: "remove", id: string): void;
}>();

const toggleClass = computed(() => {
  return props.task.completed ? "toggle toggle-completed" : "toggle";
});

function onToggleCompleted() {
  emit("toggle-completed", {
    id: props.task.id,
    completed: !props.task.completed,
  });
}

function onRemove() {
  emit("remove", props.task.id);
}
</script>

<template>
  <li>
    <button :class="toggleClass" @click="onToggleCompleted">
      <i class="far fa-circle"></i> {{ props.task.text }}
    </button>
    <button @click="onRemove">
      <i class="far fa-trash-alt"></i>
    </button>
  </li>
</template>

<style scoped>
.toggle {
  padding: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
}

.toggle-completed {
  text-decoration: line-through;
  color: gray;
}
</style>
