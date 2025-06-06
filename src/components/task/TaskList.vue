<script setup lang="ts">
import TaskItem from "@/components/task/TaskItem.vue";
import { defineProps } from 'vue';
import type {Task} from '@types/task.d.ts';


defineProps<{
  tasks: Task[]
}>();

const emit = defineEmits<{
  (event: "toggle-completed", index: number): void;
  (event: "remove", id: number): void;

}>();
</script>

<template>
  <div class="taskItems">
    <ul>
      <TaskItem
          v-for="(task, index) in tasks"
          :key="task.id"
          :task="{text: task.title, completed: task.completed}"
          @toggle-completed="emit('toggle-completed', task.id)"
          @remove="emit('remove', task.id)"
      />
    </ul>
  </div>
</template>

<style scoped>

</style>