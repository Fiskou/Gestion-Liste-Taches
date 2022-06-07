import { createRouter, createWebHistory } from 'vue-router'
// import {store} from "core-js/internals/reflect-metadata";
import Dashboard from "@/views/Dashboard";
import DetailTache from "@/views/DetailTache";

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tache/', // + store.state.tacheSelectionnee,
    name: 'DetailTache',
    component: DetailTache
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
