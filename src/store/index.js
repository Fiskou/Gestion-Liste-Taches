//stores/taches.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useTacheStore = defineStore("tache", {
    state: () => ({
        taches: [],
        isLoggedIn:false,
        tacheSelectionnee: null
    }),
    getters: {
      getTaches(state){
          return state.taches
        }
    },
    actions: {
      async fetchTaches() {
        try {
          const data = await axios.get('http://localhost:8000/api/taches/')
            this.taches = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      checkLoggedInStatus(){
        if ( localStorage.getItem('tache')){
          this.isLoggedIn = true
        }
      }
    },
})
