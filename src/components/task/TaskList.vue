<script setup lang="ts">
import TaskItem from "@/components/task/TaskItem.vue";

defineProps<{
  tasks: {id: number, text: string; completed: boolean }[]
}>();

const emit = defineEmits<{
  (event: "toggle-completed", index: number): void;
  (event: "remove", index: number): void;

}>();
</script>

<template>
  <div class="taskItems">
    <ul>
      <TaskItem
          v-for="(task, index) in tasks"
          :key="task.id"
          :task="{text: task.text, completed: task.completed}"
          @toggle-completed="emit('toggle-completed', index)"
          @remove="emit('remove', index)"
      />
    </ul>
  </div>
</template>

<style scoped>

</style>