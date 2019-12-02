<template>
	<div>
		<button v-on:click="getProfile">Get Profile</button>
		{{ results }}
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Profile',
	props: {},
	data() {
		return {
			results: null,
		}
	},
	methods: {
		getProfile: function() {
			axios
				.get('http://localhost:4000/tw-profile/codymjarrett')
				.then(results => (console.log(results.data)))
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
