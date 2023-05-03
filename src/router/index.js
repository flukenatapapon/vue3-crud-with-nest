import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import TaskGroupsCreateView from '../views/TaskGroupsCreateView.vue';
import TaskGroupsIndexView from '../views/TaskGroupsIndexView.vue';
import TaskGroupsShowView from '../views/TaskGroupsShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/task_groups/create',
      name: 'task_group_create',
      component: TaskGroupsCreateView
    },
    {
      path: '/task_groups',
      name: 'task_group_index',
      component: TaskGroupsIndexView
    },
    {
      path: '/task_groups/:id',
      name: 'task_group_show',
      component: TaskGroupsShowView
    }
  ]
})

export default router
