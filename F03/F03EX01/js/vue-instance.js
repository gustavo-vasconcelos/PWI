const vm = new Vue({
    el: "#intro",
    data: {
        person: {
            firstName: "Rui",
            lastName: "Silva",
            age: 23
        },
        balance: 4432
    },
    created: function () {
        console.log("EVENTO: CREATED")
    },
    mounted: function () {
        console.log("EVENTO: MOUNTED")
    },
    updated: function () {
        console.log("EVENTO: UPDATED")
    },
    methods: {
        dataPerson: function () {
            console.log(`METHOD --> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        }
    },
    computed: {
        dataPersonComputed: function () {
            console.log(`COMPUTED --> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        },
        fullNameComputed: function () {
            return this.person.firstName + " " + this.person.lastName
        }
    },
    watcher: {
        "person.age": function (newValue, oldValue) {
            console.log(`Idade alterada de ${oldValue} para ${newValue}!`)
        }
    },
    filters: {
        formatarCentimos(value, symbol) {
            return (value / 100).toFixed(2).replace(".", ",") + " " + symbol
        }
    }
})