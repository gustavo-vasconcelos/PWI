const vm = new Vue({
    el: "#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
        filterLetter: ""
    },
    methods: {
        addSchool() {
            this.schools.push(prompt("Nome da escola:"))
        },
        filter() {
            if (!this.filterLetter) {
                this.filterLetter = prompt("Primeira letra?")
            } else {
                this.filterLetter = ""
            }
        }
    },
    computed: {
        printSchools() {
            if (!this.filterLetter) {
                return this.schools
            } else {
                return this.schools.filter((school) => {
                    return school.toUpperCase().startsWith(this.filterLetter.toUpperCase())
                })
            }
        }
    }
})