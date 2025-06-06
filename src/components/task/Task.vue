<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import TaskInput from "@/components/task/TaskInput.vue";
import TaskList from "@/components/task/TaskList.vue";
import TaskPending from "@/components/task/TaskPending.vue";
import Button from "@/components/Button.vue";
import {TodoService} from "@/services/TodoService"
import type {Task} from '@types/task.d.ts';


const tasks = ref<Task[]>([]);
const todoService = new TodoService();
onMounted(async () => {
 await getTasks();
})

async function getTasks() {
  try {
    tasks.value = await todoService.getTodos();
  } catch (error) {
    console.error("Ошибка при получении задач:", error);
  }
}

async function handleNewTask(taskData:Omit<Task, 'id'>) {
  try {
    await todoService.addTodo(taskData);
    await getTasks();
  } catch (error) {
    console.error("Ошибка при криэшене задачи:", error);
  }
}

function toggleCompleted(taskIndex: number) {
  tasks.value[taskIndex].completed = !tasks.value[taskIndex].completed;
}

function deleteTask(taskIndex: number) {
  tasks.value = tasks.value.filter((_, index) => index !== taskIndex);
}

function clearCompleted() {
  tasks.value = tasks.value.filter(task => task.completed !== true)
}

function clearAll() {
  tasks.value = [];
}

const countPendingTasks = computed(() => {
  return tasks.value.filter((task) => !task.completed).length;
})
</script>

<template>
  <div class="container">
    <div class="task">
      <h1>To Do List</h1>
      <TaskInput @add-task="handleNewTask"/>
      <TaskList
          :tasks="tasks"
          @toggle-completed="toggleCompleted"
          @remove="deleteTask"
      />
      <div class="clearBtns">
        <Button @click="clearCompleted">Clear completed</Button>
        <Button @click="clearAll">Clear all</Button>
      </div>
      <TaskPending :count="countPendingTasks"/>
    </div>
  </div>
</template>

<style scoped>
</style>
