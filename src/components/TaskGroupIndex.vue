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
      await useTaskGroupStore().index().then((response) => {
        this.TaskGroups = response.data;
        this.isLoading = false;
      }).catch((err) => {
        console.log(err)
      })
    },
    show(taskGroupId) {
      router.push({ name: 'task_group_show', params: { id: taskGroupId } })
    }
  }
}
</script>

<template>
  <table class="table">
    <tr v-for="TaskGroup of this.TaskGroups" v-bind:key="TaskGroup.TaskGroupID">
      <td>{{ TaskGroup.TaskGroupID.slice(0, 10) + '...' }}</td>
      <td>{{ TaskGroup.OrganisationID.slice(0, 10) + '...' }}</td>
      <td>{{ TaskGroup.CreateBy }}</td>
      <td>{{ TaskGroup.CreateAt }}</td>
      <td>{{ TaskGroup.EditBy || '-' }}</td>
      <td>{{ TaskGroup.EditAt || '-' }}</td>
      <td><p @click="show(TaskGroup.TaskGroupID)">Edit</p></td>
    </tr>
  </table>
</template>

<style scoped>
  tr > td {
    border: 1px solid #000000;
  }
</style>
