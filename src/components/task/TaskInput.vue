<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '@types/task.d.ts';

const newTaskTitle = ref('');

const emit = defineEmits<{
  (event: "add-task", task: Omit<Task, 'id'>): void;
}>();

function addTaskHandler() {
  const title = newTaskTitle.value.trim();
  if (!title) return;

  emit("add-task", {
    title: title,
    completed: false
  });

  newTaskTitle.value = "";
}
</script>

<template>
  <div class="form">
    <input
        v-model="newTaskTitle"
        @keyup.enter="addTaskHandler"
        type="text"
        placeholder="New Task"
    />
    <button @click="addTaskHandler">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>