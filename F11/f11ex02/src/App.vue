<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <template v-for="(persona, index) in personas">
        <router-link
          :to="'/person/' + persona.id"
          :key="persona.id"
        >{{ persona.name }}</router-link>
        <span v-if="index < personas.length - 1" :key="'span' + persona.id"> | </span>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      personas: [
        { id: 1, name: "John", age: 10 },
        { id: 2, name: "Michael", age: 15 },
        { id: 3, name: "Peter", age: 20 },
        { id: 4, name: "Joseph", age: 25 }
      ]
    };
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
