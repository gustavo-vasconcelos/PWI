const vm = new Vue({
    el: "#intro",
    data: {
        number: 0
    },
    methods: {
        increase: function () {
            this.number++
        },
        decrease: function () {
            this.number--
        }
    },
    created: function () {
        if (!localStorage.getItem("number")) {
            localStorage.setItem("number", this.number)
        }
        console.log("Instância criada.")
        this.number = parseInt(localStorage.getItem("number"))
    },
    mounted: function () {
        console.log("Instância montada na DOM.")
    },
    updated: function () {
        console.log("Número atualizado.")
        localStorage.setItem("number", this.number)
    }
})