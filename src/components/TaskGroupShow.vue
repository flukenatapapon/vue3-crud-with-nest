<script>
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
  name: 'TaskGroupShow',
  data() {
    return {
      data: {
        TaskGroupID: "",
        OrganisationID: "",
        CreateBy: "",
        CreateAt: "",
        EditBy: "",
        EditAt: "",
      },
      id: "",
    }
  }, 
  methods: {
    async initialData() {
      this.id = this.$route.params.id;

      await useTaskGroupStore().show(this.id).then((res) => {
        this.data = res.data
      }).catch((err) => {
        console.log(err)
      })      
    },
    async update(event) {
      console.log(event)
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(this.data)
      
      await useTaskGroupStore().update(formData, this.id).then((res) => {
        this.$emit('updateDone')
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted(){
    this.initialData()
  }
}
</script>

<template>
  <form class="task-group-from" @submit="createTaskGroup($event)">
    <div class="form-group">
      <label for="TaskGroupID">TaskGroupID</label>
      <input type="text" class="form-control" name="TaskGroupID" v-model="data.TaskGroupID">
    </div>
    <div class="form-group">
      <label for="OrganisationID">OrganisationID</label>
      <input type="text" class="form-control" name="OrganisationID" v-model="data.OrganisationID">
    </div>
    <div class="form-group">
      <label for="CreateBy">CreateBy</label>
      <input type="text" class="form-control" name="CreateBy" v-model="data.CreateBy">
    </div>
    <div class="form-group">
      <label for="EditBy">EditBy</label>
      <input type="text" class="form-control" name="EditBy" v-model="data.EditBy">
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
