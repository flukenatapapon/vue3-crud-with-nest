<script>
import { v4 as uuid } from 'uuid';
// import { useTaskGroupStore } from '../stores/taskGroup'
export default {
  name: 'TaskGroupShow',
  data() {
    return {
      TaskGroupID: uuid(),
      OrganisationID: "",
      CreateBy: "",
      CreateAt: new Date(),
      EditBy: "",
      EditAt: new Date(),
    }
  }, 
  methods: {
    async initialData() {
      console.log(this.$route.params)
    }
  }
}
</script>

<template>
  <div id="task-group-form">
    <form @submit="createTaskGroup($event)">
      <input type="text" name="TaskGroupID" v-model="TaskGroupID">
      <input type="text" name="OrganisationID" v-model="OrganisationID">
      <input type="text" name="CreateBy" v-model="CreateBy">
      <input type="text" name="EditBy" v-model="EditBy">
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<style scoped>

</style>
