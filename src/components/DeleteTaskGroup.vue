<script>

import { v4 as uuid } from 'uuid';
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
    name: 'DeleteTaskGroup',
    data() {
        return {
            TaskGroupID: ""
        }
    },
    methods: {
        async deleteTaskGroup(event) {
            event.preventDefault();

            await useTaskGroupStore().remove(this.TaskGroupID)
            .then((response) => {
                console.log(response.data),
                    alert("TaskGroups Deleted !!!")
            }).catch(function (error) {
                console.log(error.response)
            })
        }
    }
}

</script>

<template>
        <div>
        <h1>Delete</h1>
        <form @submit="deleteTaskGroup($event)">
            <div class="mb-3">
                <label for="TaskGroupID" class="form-label">TaskGroupID</label>
                <input type="text" name="TaskGroupID" id="TaskGroupID" v-model="TaskGroupID">
            </div>
            <button class="btn btn-danger" type="submit" value="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped></style>
