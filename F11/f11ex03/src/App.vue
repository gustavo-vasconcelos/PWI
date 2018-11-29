<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			actors: [],
			movies: [
				/*
				{
					id: 1,
					trailerId: "kg_jH47u480",
					imdb: "tt0120591",
					title: "Armageddon",
					photo:
						"https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
					year: 1998
				},
				{
					id: 2,
					trailerId: "VG9AGf66tXM",
					imdb: "tt0167404"
				},
				{
					id: 3,
					trailerId: "8KtYRALe-xo",
					imdb: "tt1320253"
				},
				{
					id: 4,
					trailerId: "ip_CYHdyUBs",
					imdb: "tt1764651"
				},
				{
					id: 5,
					trailerId: "-iRajLSA8TA",
					imdb: "tt0120338"
				}
				*/
			],
			movieActor: [
				/*
				{ movieId: 1, actorId: 1 },
				{ movieId: 2, actorId: 1 },
				{ movieId: 3, actorId: 1 },
				{ movieId: 4, actorId: 1 },
				{ movieId: 5, actorId: 2 }
				*/
			],
			mostPopularActors: [],
			actorData: []
		}
	},
	beforeRouteLeave(to, from, next) {
		localStorage.movies = JSON.stringify(this.movies)
		next()
	},
	methods: {
		getAgeById(id) {
			let index = this.actors.findIndex(actor => actor.id === id)
			let today = new Date()
			let actorDate = new Date(this.actors[index].dateBirth)
			return Math.floor((today - actorDate) * 3.16887646e-11)
		},
		getIndexById(id) {
			return this.actors.findIndex(actor => actor.id === id)
		},
		async getData() {
			const request = await fetch(
				"https://api.themoviedb.org/3/person/popular?api_key=30a9bd883b54f8b08a0247941e2bbec5&language=en-US&page=1"
			)
			const response = await request.json()

			let idActor = 1
			let idMovie = 1

			response.results.forEach(result => {
				// add actors tmdb
				if (!this.actors.some(actor => actor.tmdb === result.id)) {
					this.actors.push({
						id: idActor,
						name: result.name,
						tmdb: result.id,
						photo:
							"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
							result.profile_path
					})

					idActor++
				}

				// add movies
				result.known_for.forEach(movie => {
					if (movie.media_type === "movie") {
						movie.tmdb = movie.id
						if (
							!this.movies.some(
								movieStored => movieStored.tmdb === movie.tmdb
							)
						) {
							movie.id = idMovie
							this.movies.push(movie)
							idMovie++
							// movie and actor ids
							this.movieActor.push({
								movieId: movie.tmdb,
								actorId: result.id
							})
						}
					}
				})
			})
		}
	},
	created() {
		if (
			!localStorage.actors ||
			!localStorage.movies ||
			!localStorage.movieActor
		) {
			this.getData()
		}
	}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
