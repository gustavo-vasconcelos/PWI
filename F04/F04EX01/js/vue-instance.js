const vm = new Vue({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        styles: {
            "fontSize": "12pt",
            "color": "black",
            "display": "inline"
        },
    },
    methods: {
        changeColor: function (color) {
            this.styles.color = color
        },
        changeFontSize: function () {
            this.styles.fontSize = (this.styles.fontSize === "12pt") ? this.styles.fontSize = "30pt" : this.styles.fontSize = "12pt"
        },
        toggleVisibility: function() {
            this.styles.display = (this.styles.display === "inline") ? this.styles.display = "none" : this.styles.display = "inline"
        }
    }
})