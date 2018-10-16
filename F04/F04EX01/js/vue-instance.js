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
        changeColor(color) {
            this.styles.color = color
        },
        toggleColor() {
            if (this.styles.color === "black") {
                this.changeColor("red")
            } else {
                this.changeColor("black")
            }
            //this.styles.color = (this.styles.color === "black") ? this.changeColor("red") : this.changeColor("black")
        },
        changeBackgroundColor(color) {
            this.styles.backgroundColor = color
        },
        toggleBackgroundColor() {
            if (this.styles.backgroundColor === "transparent") {
                this.changeBackgroundColor("yellow")
            } else {
                this.changeBackgroundColor("transparent")
            }
        },
        changeFontSize(size) {
            this.styles.fontSize = size
        },
        toggleFontSize() {
            if (this.styles.fontSize === "12pt") {
                this.changeFontSize("30pt")
            } else {
                this.changeFontSize("12pt")
            }
            //this.styles.fontSize = (this.styles.fontSize === "12pt") ? this.changeFontSize("30pt") : this.changeFontSize("12pt")
        },
        toggleVisibility() {
            this.styles.display = (this.styles.display === "inline") ? this.styles.display = "none" : this.styles.display = "inline"
            //this.styles.visibility = (this.styles.visibility === "visible") ? this.styles.visibility = "hidden" : this.styles.visibility = "visible"            
        }
    }
})