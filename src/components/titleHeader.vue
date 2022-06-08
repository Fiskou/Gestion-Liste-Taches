<template>
  <div class="row">
    <div class="col-4">
      <h1 class="text-start clickable" @click="onClickTitle">{{titleName}}</h1>
    </div>
    <div class="col-8 my-auto">
      <search-bar/>
    </div>
  </div>
</template>

<script>
import searchBar from "@/components/searchBar";
import router from "@/router";

export default {
  name: "titleHeader",
  components: {
    searchBar
  },
  props: {
    titleName: String
  },
  methods: {
    onClickTitle() {
      router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
