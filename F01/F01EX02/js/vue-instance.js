const vm = new Vue({
    el: "#intro",
    data: {
        firstName: "",
        lastName: "",
        age: 0
    },
    methods: {
        fullName: function() {
            return this.firstName + " " + this.lastName
        }
    }
})