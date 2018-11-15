Vue.component("my-jumbo", {
    data() {
        return {
            buttonName: "Button"
        }
    },
    props: ["title", "subtitle", "body"],
    template: `<div class="jumbotron">
                    <h1 class="display-3">{{ title }}</h1>
                    <p class="lead">{{ subtitle }}</p>
                    <hr class="my-2">
                    <p>{{ body }}</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">{{ buttonName }}</a>
                    </p>
                </div>`
})

const vm = new Vue({el: "#app"})