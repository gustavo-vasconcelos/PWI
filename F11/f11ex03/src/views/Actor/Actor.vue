<template>
  <div class="about">
    <router-link :to="'/actor/' + $route.params.id + '/data'">
      <h1>Personal data</h1>
    </router-link>
    <router-link :to="'/actor/' + $route.params.id + '/movies'">
      <h1>Movies list</h1>
    </router-link>
  </div>
</template>
