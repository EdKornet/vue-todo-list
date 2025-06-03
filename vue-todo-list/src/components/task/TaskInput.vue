<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const newTask = ref<{ text: string; completed: boolean }>({
  text: "",
  completed: false,
});

const emit = defineEmits<{
  (event: "add-task", task: { id: number; text: string; completed: boolean }): void;
}>();

function addTaskHandler() {
  if (!newTask.value.text.trim()) return;

  emit("add-task", {
    id: Date.now() + Math.random(),
    ...newTask.value
  });


  newTask.value.text = "";
}
</script>

<template>
  <div class="form">
    <input
        v-model="newTask.text"
        @keyup.enter="addTaskHandler"
        type="text"
        placeholder="New Task"
    />
    <button @click="addTaskHandler">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<style scoped>
</style>
