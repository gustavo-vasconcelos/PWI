<template>
  <div class="container jumbotron">
    <b-table striped bordered hover :items="actors" :fields="fields">
      <template slot="actions" slot-scope="row">
        <router-link :to="'/actor/' + row.item.id">
          <b-button size="sm" class="mr-2">Show details</b-button>
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TableActor",
  props: ["actors"],
  data() {
    return {
      fields: [
        {
          key: "name",
          sortable: true
        },
        {
          key: "nationality",
          sortable: true
        },
        {
          key: "actions"
        }
      ]
    };
  }
};
</script>

