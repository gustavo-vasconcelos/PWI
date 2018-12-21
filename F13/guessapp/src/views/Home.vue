<template>
  <div class="home">
    <img alt="Vue logo" src="https://www.tiogadowns.com/wp-content/uploads/promos/racing/guess-the-number-small.jpg">
    <h1>Welcome to GuessApp</h1>
    <router-link :to="{name: 'play'}">Play game</router-link>
    <br>
    <router-link :to="{name: 'scoreboard'}">Highest scores</router-link>
    <br>
    <router-link :to="{name: 'play'}">Options</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>