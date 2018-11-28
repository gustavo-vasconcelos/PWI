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
      actors: [
        {
          id: 1,
          name: "Bruce Willis",
          nationality: "Germany",
          dateBirth: "1955-03-19",
          photo:
            "https://pmcvariety.files.wordpress.com/2018/04/bruce-willis.jpg?w=1000",
          imdb: "nm0000246"
        },
        {
          id: 2,
          name: "Leonardo DiCaprio",
          nationality: "United States",
          dateBirth: "1974-11-11",
          photo:
            "https://assets3.thrillist.com/v1/image/1656352/size/tmg-article_default_mobile.jpg",
          imdb: "nm0000138"
        },
        {
          id: 3,
          name: "Brad Pitt",
          nationality: "United States",
          dateBirth: "1963-12-18",
          photo:
            "https://postmediacanoe.files.wordpress.com/2018/11/brad-pitt.jpg",
          imdb: "nm0000093"
        }
      ]
    };
  },
  methods: {
    getAgeById(id) {
      let index = this.actors.findIndex(actor => actor.id === id);
      let today = new Date();
      let actorDate = new Date(this.actors[index].dateBirth);
      return Math.floor((today - actorDate) * 3.16887646e-11);
    },
    getIndexById(id) {
      return this.actors.findIndex(actor => actor.id === id);
    }
  }
};
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
