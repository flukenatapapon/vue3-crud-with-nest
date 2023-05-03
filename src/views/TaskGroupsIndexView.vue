<script setup>
import TaskGroupIndex from '../components/TaskGroupIndex.vue'
import TaskGroup from '../components/TaskGroup.vue'
import { ref } from 'vue';
const TaskGroupIndexRef = ref(null)
function reloadRecord() { 
  console.log(TaskGroupIndexRef)
  TaskGroupIndexRef.value.initialData();
}

</script>

<template>
  <div class="container-fluid pt-50px flex">
    <div class="left">
      <TaskGroupIndex ref="TaskGroupIndexRef" />
    </div>
    <div class="right">
      <TaskGroup @reloadRecord="reloadRecord()" />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 20%;
}
.pt-50px {
  padding-top: 50px !important;
}
.left {
  width: 800px;
  overflow: auto;
}
.right {
  width: 300px;
  overflow: auto;
}
</style>
