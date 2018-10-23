const vm = new Vue({
    el: "#intro",
    data: {
        countries: [],
        countriesCities: [],
        trips: [],
        form: {
            continent: "",
            country: "",
            cities: [],
            filterCities: "",
            desc: "",
            departureDate: "",
            departureDateError: "",
            arrivalDate: "",
            arrivelDateError: "",
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
        validateForm(e) {
            e.preventDefault()
            this.form.attemptSubmit = true
            /*this.addTrip()
            Object.keys(this.form).forEach(key => this.form[key] = "")
            this.form.cities = []
            this.form.tripType = "vacation"*/

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
        continentClass() {
            return {'is-valid': this.form.continent, 'is-invalid': !this.form.continent && this.form.attemptSubmit}
        },
        countryClass() {
            return {'is-valid': this.form.country, 'is-invalid': !this.form.country && this.form.attemptSubmit}
        },
        citiesClass() {
            return {'is-valid': this.form.cities, 'is-invalid': !this.form.cities && this.form.attemptSubmit}
        },
        descClass() {
            return {'is-valid': this.form.desc, 'is-invalid': !this.form.desc && this.form.attemptSubmit}
        },
        departureDateClass() {
            if(!this.form.departureDate && this.form.attemptSubmit) {
                this.form.departureDateError = "Selecione a data de partida."
                return {'is-invalid': true}
            } else if(this.form.departureDate > this.form.arrivalDate && this.form.arrivalDate) {
                this.form.departureDateError = "A data de partida tem de ser menor ou igual à data de chegada."
                return {'is-invalid': true}
            } else if(this.form.attemptSubmit){
                return {'is-valid': true}
            }
            //return {'is-valid': this.form.desc, 'is-invalid': !this.form.desc && this.form.attemptSubmit}
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