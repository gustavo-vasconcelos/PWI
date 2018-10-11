const vm = new Vue({
    el: "#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"]
    },
    methods: {
        addSchool: function (schoolName) {
            this.schools.push(schoolName)
        },
        filterByStartingLetter: function (letter) {
            this.schools = this.schools.filter((school) => {
                return school[0] == letter
            })
        }
    },
    created: function () {
        this.addSchool("ESMAE")
        this.filterByStartingLetter("E")
    }
})