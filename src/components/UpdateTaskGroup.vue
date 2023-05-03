<script>

import { v4 as uuid } from 'uuid';
import { useTaskGroupStore } from '../stores/taskGroup'

export default {
    name: 'UpdateTaskGroup',
    data() {
        return {
            OrganisationID: "",
            EditBy: "",
            EditAt: new Date(),
        }
    },
    methods: {
        async updateTaskGroup(event) {
            event.preventDefault();

            await useTaskGroupStore().update(this.TaskGroupID, {
                OrganisationID: this.OrganisationID,
                EditBy: this.EditBy,
                EditAt: this.EditAt
            }).then((response) => {
                console.log(response.data),
                    alert("TaskGroups Updated !!!")
            }).catch(function (error) {
                console.log(error.response)
            })
        }
    }
}

</script>

<template>
    <div>
        <h1>Update</h1>
        <form @submit="updateTaskGroup($event)">
            <div class="mb-3">
                <label for="TaskGroupID" class="form-label">TaskGroupID</label>
                <input type="text" name="TaskGroupID" id="TaskGroupID" v-model="TaskGroupID">
            </div>
            <div class="mb-3">
                <label for="OrganisationID" class="form-label">OrganisationID</label>
                <input type="text" name="OrganisationID" id="OrganisationID" v-model="OrganisationID">
            </div>
            <div class="mb-3">
                <label for="EditBy" class="form-label">EditBy</label>
                <input type="text" name="EditBy" id="EditBy" v-model="EditBy">
            </div>
            <button class="btn btn-primary" type="submit" value="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped></style>
