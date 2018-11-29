<template>
	<div class="about">
		<router-link :to="{name: 'actorData', params: {id: $route.params.id, name: $route.params.name}}">
			<h1>Personal data</h1>
		</router-link>
		<router-link :to="{name: 'actorMovies', params: {id: $route.params.id, name: $route.params.name}}">
			<h1>Movies list</h1>
		</router-link>
	</div>
</template>