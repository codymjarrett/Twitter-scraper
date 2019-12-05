<template>
  <div class="container mx-auto">
    <Search />
  </div>
</template>

<script>
import Search from "./components/Search";

export default {
  name: "app",
  components: {
	Search,
  }
};
</script>

<style src="./assets/css/tailwind.css"></style>
