<script setup>
import { ref, onMounted, computed } from 'vue';
//import taches store
import { useTacheStore } from "../store/index";
// declare store variable
const store = useTacheStore();

const msg = ref("Voici les tâches à effectuer");

const getTaches = computed(() => {
  return store.getTaches
})
const taches = computed(() => {
  return store.taches
})

onMounted(() => {
  store.fetchTaches();
  store.checkLoggedInStatus();
})
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
  <div v-for='gettersTache in getTaches' :key='gettersTache.id'>
    {{gettersTache.id}} {{gettersTache.titre}}
    </div>
    <h1>Made By Actions</h1>
  <div v-for='tache in taches' :key='tache.id'>
    {{tache.id}} {{tache.titre}}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>
