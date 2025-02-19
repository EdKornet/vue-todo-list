<script setup lang="ts">
import { ref } from 'vue';
import TaskList from "@/components/task/TaskList.vue";
import TaskInput from "@/components/task/TaskInput.vue";
import TaskPending from "@/components/task/TaskPending.vue";
import Button from "@/components/Button.vue";

const tasks = ref<string[]>([]);

function handleNewTask(task: string) {
  tasks.value.push(task);
  console.log(tasks.value)
}
</script>

<template>
 <div class="container">
    <div class="task">
      <h1>To Do List</h1>
      <TaskInput @add-task="handleNewTask"/>
      <TaskList/>
      <div class="btns-container">
        <Button></Button>
        <Button></Button>
      </div>
      <TaskPending/>
    </div>
 </div>
</template>

<style scoped>

</style>