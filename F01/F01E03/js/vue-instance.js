const vm = new Vue({
    el: "#intro",
    data: {
        weight: "",
    },
    methods: {
        fullName: function () {
            return this.firstName + " " + this.lastName
        }
    },
    beforeCreate: function () { console.log("before_create") },
    created: function () { console.log("created") },
    beforeMount: function () { console.log("before_mount") },
    mounted: function () { console.log("mounted") },
    beforeUpdate: function () { console.log("before_update") },
    updated: function () { console.log("updated") },
    beforeDestroy: function () { console.log("before_destroy") },
    destroyed: function () { console.log("destroyed") },
})