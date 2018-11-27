<template>
  <div>
    <h1>{{ personName }}</h1>
    <p>{{ personAge }}</p>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: ["personName", "personAge"]
};
</script>

