<script setup>
import { onMounted, computed } from 'vue';
//import taches store
import { useTacheStore } from "../store/index";

// declare store variable
const store = useTacheStore();

const getTaches = computed(() => {
  return store.getTaches
})
console.log(getTaches)
onMounted(() => {
  store.fetchTaches();
})
</script>
<template>
  <div class="container my-4">
    <title-header titleName="Liste des tâches"/>
    <h3 class="mt-4 mb-3 text-start">Filtres rapides</h3>
    <div class="btn-group mb-5 d-flex" role="group">
      <button type="button" class="btn btn-outline-primary">Premier filtre</button>
      <button type="button" class="btn btn-outline-primary">Second filtre</button>
      <button type="button" class="btn btn-outline-primary">Troisième filtre</button>
    </div>
    <div class="card example-card mb-3">
      <div class="card-body m-auto">
        <div class="row">
          <div class="col text-start m-0">
            <p><strong>Titre</strong></p>
            <p>Remplir l'eau de la piscine</p>
          </div>
          <div class="col-2 text-start m-0">
            <p><strong>Date</strong></p>
            <p>1979-06-11 06:47:56</p>
          </div>
          <div class="col-2 text-start m-0">
            <p><strong>N° d'ordre</strong></p>
            <p>36</p>
          </div>
          <div class="col-2 text-start m-0">
            <p><strong>Complétée</strong></p>
            <p>Non</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col text-start m-0">
            <p><strong>Description</strong></p>
            <p>Veniam eligendi dolorem in sit aut. Fuga cumque tempora velit nisi aut. Sunt laudantium vel veritatis nisi doloribus. Quia ut sed rerum totam commodi.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-2">
      <div class="card-body">
        This is some text within a card body.
      </div>
    </div>
    <!--    <card class="card">-->
    <!--      <h2 class="p-3 text-center">Liste de tâches</h2>-->
    <!--      <table class="table table-hover">-->
    <!--        <thead>-->
    <!--        <tr>-->
    <!--          <th>Titre</th>-->
    <!--          <th>Description tâche</th>-->
    <!--          <th>Ordre</th>-->
    <!--          <th>Terminée</th>-->
    <!--          <th>Date de création</th>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->
    <!--        <tr v-for="gettersTache in getTaches" :key="gettersTache.id">-->
    <!--          <td class="text-start">{{gettersTache.titre}}</td>-->
    <!--          <td class="text-start cut-text">{{gettersTache.contenu}}</td>-->
    <!--          <td>{{gettersTache.ordre}}</td>-->
    <!--          <td >-->
    <!--            <img v-if="gettersTache.complet === 0" src="../assets/uncheck.png" alt="Tâche non complétée" class="w-50">-->
    <!--            <img v-else src="../assets/check.png" alt="Tâche complétée" class="w-50">-->
    <!--          </td>-->
    <!--          <td>{{gettersTache.date_fin}}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--      </table>-->
    <!--    </card>-->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import titleHeader from "@/components/titleHeader";

export default defineComponent({
  name: 'DashBoard',
  components: {
    titleHeader
  }
})
</script>

<style scoped>
.example-card {
  background: #f3f3f3;
}
</style>
