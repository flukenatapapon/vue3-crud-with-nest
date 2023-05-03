<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <h1>Task Groups List</h1>
  </div>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>

</template>
<script>

import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/task-groups`);
      this.items = res.data;
      console.log(this.items);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}
</style>