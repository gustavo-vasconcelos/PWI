<template>
  <div class="home">
    <TableActor :actors="$parent.actors"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableActor from '@/components/TableActor.vue'

export default {
  name: 'Home',
  components: {
    TableActor
  }
}
</script>
