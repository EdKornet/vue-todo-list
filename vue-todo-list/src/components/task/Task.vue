<script setup lang="ts">

import TaskList from "@/components/task/TaskList.vue";
import TaskInput from "@/components/task/TaskInput.vue";
import TaskPending from "@/components/task/TaskPending.vue";
import Button from "@/components/Button.vue";
</script>

<template>
 <div class="container">
    <div class="task">
      <h1>To Do List</h1>
      <TaskInput/>
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}
.task {
  background: #fff;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, .1);
  min-width: 390px;
}
h1 {
  font: 22px / 1.4 Poppins, sans-serif;
  color: #333;
  text-align: center;
  font-weight: 700;
}
</style>