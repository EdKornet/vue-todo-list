<script setup lang="ts">
import {ref,defineEmits} from 'vue'
const newTask = ref<string>("");

const emit = defineEmits<{
  (event: "add-task", task: string): void;
}>();

function addTaskHandler() {
  if (!newTask.value.trim()) return;
  emit("add-task", newTask.value);
  newTask.value = "";
}
</script>

<template>
<div class="form">
  <input
      v-model="newTask"
      @keyup.enter="addTaskHandler"
      type="text"
      placeholder="New Task">
  <button @click="addTaskHandler"><i class="fas fa-plus"></i>
  </button>
</div>
</template>

<style scoped>

</style>