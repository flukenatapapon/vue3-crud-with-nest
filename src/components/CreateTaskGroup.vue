<script>

import { v4 as uuid } from 'uuid';
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
  name: 'CreateTaskGroups',
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
        alert("TaskGroups Created !!!")
      })
    }
  }
}

</script>

<template>
  <div>
    <h1>Create</h1>
    <form @submit="createTaskGroup($event)">
      <div class="mb-3">
        <label for="TaskGroupID" class="form-label">TaskGroupID</label>
        <input type="text" name="TaskGroupID" id="TaskGroupID" v-model="TaskGroupID">
      </div>
      <div class="mb-3">
        <label for="OrganisationID" class="form-label">OrganisationID</label>
        <input type="text" name="OrganisationID" id="OrganisationID" v-model="OrganisationID">
      </div>
      <div class="mb-3">
        <label for="CreateBy" class="form-label">CreateBy</label>
        <input type="text" name="CreateBy" id="CreateBy" v-model="CreateBy">
      </div>
      <div class="mb-3">
        <label for="EditBy" class="form-label">CreateBy</label>
        <input type="text" name="EditBy" id="EditBy" v-model="EditBy">
      </div>
      <button class="btn btn-primary" type="submit" value="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
