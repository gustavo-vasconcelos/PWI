<template>
	<div class="container jumbotron text-left">
		<b-card
			:title="$parent.actors[index].name"
			:img-src="$parent.actors[index].photo"
			:img-alt="$parent.actors[index].name"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-2 ml-auto mr-auto"
		>
		<br>
		<b-button variant="primary" class="col-12" :href="'https://www.themoviedb.org/person/' + $parent.actors[index].tmdb" target="_blank">TMDB</b-button>
		</b-card>
		<div class="text-center">
			<router-link :to="`/actor/${$route.params.id}-${$route.params.name}`">Back</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: this.findIndexById(parseInt(this.$route.params.id))
		}
	},
	methods: {
		findIndexById(id) {
			return this.$parent.actors.findIndex(actor => actor.id === id)
		}
	}
}
</script>
