<script>
import router from '../router'
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
  setup() {
  },
  beforeMount() {
    this.initialData()
  },
  name: 'TaskGroupIndex',
  data() {
    return {
      TaskGroups:
        [{
          TaskGroupID: "",
          OrganisationID: "",
          CreateBy: "",
          CreateAt: "",
          EditBy: "",
          EditAt: "",
        }],
      isLoading: true
    }
  }, 
  methods: {
    async initialData() {
      this.isLoading = true;
      await useTaskGroupStore().index().then((response) => {
        this.TaskGroups = response.data;
        this.isLoading = false;
      }).catch((err) => {
        console.log(err)
      })
    },
    show(taskGroupId) {
      router.push({ name: 'task_group_show', params: { id: taskGroupId } })
    },
    async destroy(taskGroupId) {
      var result = confirm(`Want to delete recode that id ${taskGroupId}`);
      if (result) {
        this.isLoading = true;
        await useTaskGroupStore().destroy(taskGroupId).then(() => {
          this.initialData()
          this.isLoading = false;
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<template>
  <table class="table" v-if="!isLoading">
    <thead>
      <tr>
        <th>TaskGroupID</th>
        <th>OrganisationID</th>
        <th>CreateBy</th>
        <th>CreateAt</th>
        <th>EditBy</th>
        <th>EditAt</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody v-if="!isLoading">
    <tr v-for="TaskGroup of this.TaskGroups" v-bind:key="TaskGroup.TaskGroupID">
      <td>{{ TaskGroup.TaskGroupID.slice(0, 10) + '...' }}</td>
      <td>{{ TaskGroup.OrganisationID.slice(0, 10) + '...' }}</td>
      <td>{{ TaskGroup.CreateBy }}</td>
      <td>{{ TaskGroup.CreateAt }}</td>
      <td>{{ TaskGroup.EditBy || '-' }}</td>
      <td>{{ TaskGroup.EditAt || '-' }}</td>
      <td><p class="btn btn-warning" @click="show(TaskGroup.TaskGroupID)">Edit</p></td>
      <td><p class="btn btn-danger" @click="destroy(TaskGroup.TaskGroupID)">Delete</p></td>
    </tr>
    </tbody>
    <tbody v-if="isLoading">
      <tr>
        <td colspan="8">Now Loading...</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
