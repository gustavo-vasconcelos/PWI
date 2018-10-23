const vm = new Vue({
    el: "#intro",
    data: {
        countries: [],
        countriesCities: [],
        trips: [],
        form: {
            continent: {
                value: "",
                class: {
                    'is-invalid': this.missingContinent,
                    'is-valid': continent.value !== ""
                },
            },
            country: "",
            cities: [],
            filterCities: "",
            desc: "",
            departureDate: "",
            arrivalDate: "",
            tripType: "vacation",
            urlPhoto: "",
            attemptSubmit: false,
        },
        filterTable: {
            continent: "",
            date: "",
            type: ""
        },
        sortTable: {
            country: "",
            departureDate: ""
        }
    },
    methods: {
        resetFieldCountryCities() {
            this.form.country = ""
            this.form.cities = []
            this.form.filterCities = ""
        },
        resetFieldCities() {
            this.form.cities = []
            this.form.filterCities = ""
        },
        todaysDate() {
            let date = new Date()
            let dd = date.getDate()
            let mm = date.getMonth() + 1
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            return date.getFullYear() + "-" + mm + "-" + dd
        },
        validateForm() {
            this.form.attemptSubmit = true
            this.addTrip()
            Object.keys(this.form).forEach(key => this.form[key] = "")
            this.form.cities = []
            this.form.tripType = "vacation"

        },
        addTrip() {
            this.trips.push({
                continent: this.form.continent,
                country: this.form.country,
                cities: this.form.cities,
                desc: this.form.desc,
                departureDate: this.form.departureDate,
                arrivalDate: this.form.arrivalDate,
                tripType: this.form.tripType,
                urlPhoto: this.form.urlPhoto
            })
        },
        removeTrip(index) {
            swal({
                title: "Deseja mesmo remover?",
                text: `A viagem feita a ${this.trips[index].cities.join(", ")} de ${this.trips[index].departureDate} a ${this.trips[index].arrivalDate} será removida para sempre!`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    this.trips.splice(index, 1)
                    swal("Viagem removida", "", "success")
                }
            })
        },
        uniqueContinents() {
            let continents = []
            this.trips.forEach(trip => {
                if (continents.indexOf(trip.continent === -1))
                    continents.push(trip.continent)
            })
            return continents
        }
    },
    computed: {
        missingContinent() {
            return this.form.continent === ""
        },

        printTrips() {
            if (!this.filterTable.continent && !this.filterTable.date && !this.filterTable.type) {
                return this.trips
            } else {
                return this.tasks.filter(task => task.type === this.filterTaskType)
            }
        }
    },
    created() {
        fetch('https://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.min.json').then(response => {
            return response.json()
        }).then(data => {
            this.countriesCities = data
        }).catch(err => {
            console.log(err)
        })
        fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json').then(response => {
            return response.json()
        }).then(data => {
            this.countries = data
        }).catch(err => {
            console.log(err)
        })
        if (localStorage.trips) {
            this.trips = JSON.parse(localStorage.trips)
        }
        /*this.trips.push({
            continent: "Europe",
            country: "Portugal",
            cities: ["Maia", "Vila do Conde"],
            desc: "Top",
            departureDate: "2018-10-01",
            arrivalDate: "2018-10-10",
            type: "vacation",
            urlPhoto: "http://jornal-renovacao.pt/wp-content/uploads/2015/08/Maia-650x250.jpg"
        })*/
    },
    destroyed() {
        localStorage.trips = JSON.stringify(this.trips)
    }
})

window.onunload = function () {
    vm.$destroy()
}

//https://travishorn.com/form-validation-with-vue-js-4d2e7ba8d2fc