<template>
  <div>
    <Person
      :personName="getPersonName()"
      :personAge="getPersonAge()"
    />
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
export default {
  components: { Person },
  data() {
    return {
      index: this.findIndexById(parseInt(this.$route.params.id))
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.index = this.$parent.personas.findIndex(
      person => person.id === parseInt(to.params.id)
    );
    next();
  },
  methods: {
    findIndexById(id) {
      return this.$parent.personas.findIndex(person => person.id === id);
    },
    getPersonName() {
      return this.$parent.personas[this.index].name;
    },
    getPersonAge() {
      return this.$parent.personas[this.index].age;
    }
  }
};
</script>
