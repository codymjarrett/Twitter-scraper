<template>
  <div class="flex flex-col justify-center items-center h-screen w-full ">
    <label>Enter Twitter Name</label>
    <input type="text" class="bg-gray-300 border-b-2 border-gray-400 p-2" v-model="searchInput" />
    <app-profile :search="searchInput" v-on:reset-search="resetSearch"></app-profile>
  </div>
</template>

<script>
import Profile from "./Profile";

export default {
  name: "Search",
  components: {
    "app-profile": Profile
  },
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    showInput: function() {
      console.log(this.searchInput);
    },
    resetSearch: function() {
      this.searchInput = "";
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
