<script>


import axios from 'axios';
export default {
    name: 'GetTaskGroups',
    data() {
        return {
            items: [],
        }
    },
    methods: {
        async GetTaskGroups() {
            try {
                const res = await axios.get(`http://localhost:3000/task-groups`);
                this.items = res.data;
                console.log(this.items);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.GetTaskGroups()
    }
}


</script>

<template>
    <div>
        <!-- <b-table striped hover :items="item"></b-table> -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">TaskGroupID</th>
                    <th scope="col">OrganisationID</th>
                    <th scope="col">CreateBy</th>
                    <th scope="col">CreateAt</th>
                    <th scope="col">EditBy</th>
                    <th scope="col">EditAt</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of items" :key="item.TaskGroupID">
                    <td>{{ item.TaskGroupID }}</td>
                    <td>{{ item.OrganisationID }}</td>
                    <td>{{ item.CreateBy }}</td>
                    <td>{{ item.CreateAt }}</td>
                    <td>{{ item.EditBy }}</td>
                    <td>{{ item.EditAt }}</td>
                    <td><button class="btn btn-dark" @click="editItem(item)">Edit</button></td>
                    <td><button class="btn btn-danger" type="submit" value="submit">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <div v-if="showEditForm">
            <h2>Edit Item</h2>
            <form @submit.prevent="saveItem">
                <label>
                    Name:
                    <input type="text" v-model="editedItem.name">
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
        
    </div>

    <div>
        <table id="my_table_id" data-url="data/url.json" data-id-field="id" data-editable-emptytext="Default empty text."
            data-editable-url="/my/editable/update/path">
            <thead>
                <tr>
                    <th class="col-md-1" data-field="id" data-sortable="true" data-align="center">#</th>
                    <th class="col-md-4" data-field="name" data-editable="true">Name</th>
                    <th class="col-md-7" data-field="description" data-editable="true"
                        data-editable-emptytext="Custom empty text.">Description</th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<style scoped></style>

