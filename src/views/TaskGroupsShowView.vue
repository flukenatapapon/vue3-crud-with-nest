<script setup>
import TaskGroupShow from '../components/TaskGroupShow.vue';
// import TaskGroup from '../components/TaskGroup.vue';
</script>

<template>
  <div class="taskView">
    <TaskGroupShow  />
  </div>
</template>

<style scoped>
.taskView {
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
