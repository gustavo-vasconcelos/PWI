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
      <p class="card-text">Nationality: {{ $parent.actors[index].nationality }}</p>
      <p class="card-text">Age: {{ $parent.getAgeById($parent.actors[index].id) }}</p>
      <a
        :href="'https://www.imdb.com/name/' + $parent.actors[index].imdb"
        target="_blank"
        class="btn btn-primary col-12"
      >IMDB</a>
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
    };
  },
  methods: {
    findIndexById(id) {
      return this.$parent.actors.findIndex(actor => actor.id === id);
    }
  }
};
</script>
