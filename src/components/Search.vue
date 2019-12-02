<template>
  <div class="flex flex-col justify-center items-center">
    <label>Enter Twitter Name</label>
    <input type="text" class="bg-gray-300 border-b-2 border-gray-400 p-2"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
