<script>

import { v4 as uuid } from 'uuid';
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
  name: 'TaskGroup',
  setup() {},
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

      let payload = {
        TaskGroupID: this.TaskGroupID,
        OrganisationID: this.OrganisationID,
        CreateBy: this.CreateBy,
        CreateAt: this.CreateAt,
        EditBy: this.EditBy,
        EditAt: this.EditAt
      }

      await useTaskGroupStore().create(payload).then((response) => {
        console.log(response.data)
        this.$emit('reloadRecord')
      })
    }
  },
  emits: ["createTaskGroup"]
}

</script>

<template>
  <form class="task-group-from" @submit="createTaskGroup($event)">
    <div class="form-group">
      <label for="TaskGroupID">TaskGroupID</label>
      <input type="text" class="form-control" name="TaskGroupID" v-model="TaskGroupID">
    </div>
    <div class="form-group">
      <label for="OrganisationID">OrganisationID</label>
      <input type="text" class="form-control" name="OrganisationID" v-model="OrganisationID">
    </div>
    <div class="form-group">
      <label for="CreateBy">CreateBy</label>
      <input type="text" class="form-control" name="CreateBy" v-model="CreateBy">
    </div>
    <div class="form-group">
      <label for="EditBy">EditBy</label>
      <input type="text" class="form-control" name="EditBy" v-model="EditBy">
    </div>
    <div class="form-group">
      <input class="btn btn-primary" type="submit" value="submit">
    </div>
  </form>
</template>

<style scoped>
  .task-group-from {
    border: 1px solid #12c2c2;
    border-radius: 12px;
    padding: 20px;
  }
</style>
