const vm = new Vue({
    el: "#intro",
    data: {
        msg: "Programação Web I"
    },
    methods: {
        showMsg(event) {
            alert(this.msg)
            console.log(event.target.tagName)
            console.log(event.type)
        },
        showMessage(message) {
            alert(message)
        }
    }
})