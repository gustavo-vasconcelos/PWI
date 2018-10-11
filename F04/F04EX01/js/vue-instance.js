const vm = new Vue({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        styles: {
            fontSize: "12pt",
            color: "black",
            backgroundColor: "transparent",
            display: "inline"
        },
    },
    methods: {
        changeColor: function (color) {
            this.styles.color = color
        },
        toggleColor: function () {
            if (this.styles.color === "black") {
                this.changeColor("red")
            } else {
                this.changeColor("black")
            }
            //this.styles.color = (this.styles.color === "black") ? this.changeColor("red") : this.changeColor("black")
        },
        changeBackgroundColor: function (color) {
            this.styles.backgroundColor = color
        },
        toggleBackgroundColor: function () {
            if (this.styles.backgroundColor === "transparent") {
                this.changeBackgroundColor("yellow")
            } else {
                this.changeBackgroundColor("transparent")
            }
        },
        changeFontSize: function (size) {
            this.styles.fontSize = size
        },
        toggleFontSize: function() {
            if (this.styles.fontSize === "12pt") {
                this.changeFontSize("30pt")
            } else {
                this.changeFontSize("12pt")
            }
            //this.styles.fontSize = (this.styles.fontSize === "12pt") ? this.changeFontSize("30pt") : this.changeFontSize("12pt")
        },
        toggleVisibility: function () {
            this.styles.display = (this.styles.display === "inline") ? this.styles.display = "none" : this.styles.display = "inline"
        }
    }
})