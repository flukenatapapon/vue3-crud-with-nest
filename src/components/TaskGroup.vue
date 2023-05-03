<script>

import { v4 as uuid } from 'uuid';
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
  name: 'TaskGroup',
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
    async createTaskGroup(event) {
      event.preventDefault();

      await useTaskGroupStore().create({
        TaskGroupID: this.TaskGroupID,
        OrganisationID: this.OrganisationID,
        CreateBy: this.CreateBy,
        CreateAt: this.CreateAt,
        EditBy: this.EditBy,
        EditAt: this.EditAt
      }).then((response) => {
        console.log(response.data)
      })
    }
  }
}

</script>

<template>
  <form @submit="createTaskGroup($event)">
    <input type="text" name="TaskGroupID" v-model="TaskGroupID">
    <input type="text" name="OrganisationID" v-model="OrganisationID">
    <input type="text" name="CreateBy" v-model="CreateBy">
    <input type="text" name="EditBy" v-model="EditBy">
    <input type="submit" value="submit">
  </form>
</template>

<style scoped>

</style>
