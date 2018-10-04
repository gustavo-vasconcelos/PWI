const vm = new Vue({
    el: "#intro",
    data: {
        productName: "Computador Titan W599",
        productDesc: "Processador i7<br>Disco SSD 256GB<br> Monitor Samsung 21’",
        productImage: "https://www.titancomputers.com/v/vspfiles/photos/W599-7.jpg",
        productPrice: 1200,
        productAvailability: true
    },
    methods: {
        reporPreco: function() {
            this.productPrice = 1200
        },
        vender: function() {
            this.productAvailability = false
            alert(`${this.productName} foi vendido por €${this.productPrice}.`)
        }
    }
})