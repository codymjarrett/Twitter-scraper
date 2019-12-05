<template>
  <div>
    <button v-on:click="getProfile">Get Profile</button>
    <div v-if="isLoading">Loading...</div>
    <div v-if="results">
      <p>Name: {{results.twProfileName}}</p>
      <p>Twitter Handle: {{results.twHandler}}</p>
      <div>
        <img :src="results.avatar" alt />
      </div>
      <div>
        <p># of Followers {{results.twFollowers}}</p>
        <p>Following {{results.twFollowing}} followers</p>
      </div>
    </div>
    <div v-if="results === ''">no results</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  props: {
    search: {
      type: String
    }
  },
  data() {
    return {
      isLoading: false,
      results: null
    };
  },
  methods: {
    getProfile: function() {
      this.$emit("reset-search");
      this.isLoading = true;

      axios
        .get(`http://localhost:4000/tw-profile/${this.search}`)
        .then(results => {
          this.results = results.data;
          this.isLoading = false;
        });
      // .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
