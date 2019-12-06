<template>
  <div class="container mx-auto ">
    <app-search></app-search>
  </div>
</template>

<script>
import Search from "./components/Search";

export default {
  name: "app",
  components: {
	'app-search': Search,
  }
};
</script>

<style src="./assets/css/tailwind.css"></style>
