<template>
  <div class="container mx-auto">
    <Search />
	<Profile />
  </div>
</template>

<script>
import Search from "./components/Search";
import Profile from "./components/Profile";

export default {
  name: "app",
  components: {
	Search,
	Profile
  }
};
</script>

<style src="./assets/css/tailwind.css"></style>
