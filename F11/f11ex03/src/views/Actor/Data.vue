<template>
  <div class="container jumbotron">
    <b-card
      :title="$parent.actors[index].name"
      :img-src="$parent.actors[index].photo"
      :img-alt="$parent.actors[index].name"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 ml-auto mr-auto"
    >
      <p class="card-text">Nationality: {{ $parent.actors[index].nationality }}</p>
      <p class="card-text">Age: {{ $parent.getAgeById($parent.actors[index].id) }}</p>
      <b-button :href="'https://www.imdb.com/name/' + $parent.actors[index].imdb" variant="primary">IMDB</b-button>
    </b-card>
    <router-link :to="'/actor/' + $route.params.id">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: this.findIndexById(parseInt(this.$route.params.id))
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.index = this.$parent.actors.findIndex(
      actor => actor.id === parseInt(to.params.id)
    );
    next();
  },
  methods: {
    findIndexById(id) {
      return this.$parent.actors.findIndex(actor => actor.id === id);
    }
  }
};
</script>
