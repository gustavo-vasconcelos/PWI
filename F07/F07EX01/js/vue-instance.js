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
            arrivalDateError: "",
            tripType: "vacation",
            urlPhoto: "",
            attemptSubmit: false,
            error: false
        },
        filterTrips: {
            continent: "",
            date: "",
            type: ""
        },
        sortTable: {
            country: "",
            departureDate: ""
        },
        modalData: {
            continent: "",
            country: "",
            cities: [],
            desc: "",
            departureDate: "",
            arrivalDate: "",
            tripType: "",
            urlPhoto: ""
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
        hasErrors() {
            let result = [this.continentClass, this.countryClass, this.citiesClass, this.descClass, this.departureDateClass, this.arrivalDateClass, this.urlPhotoClass]
            return result.indexOf("is-invalid") !== -1 || !this.form.attemptSubmit
        },
        validateForm(e) {
            e.preventDefault()
            this.form.attemptSubmit = true
            if (!this.hasErrors()) {
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
                Object.keys(this.form).forEach(key => this.form[key] = "")
                this.form.cities = []
                this.form.tripType = "vacation"
            } else {
                swal("Erro", "Preencha todos os campos corretamente.", "error")
            }
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
                if (continents.indexOf(trip.continent) === -1)
                    continents.push(trip.continent)
            })
            return continents
        },
        showModal(tripIndex) {
            $('#modal').modal('show')
            this.modalData = this.trips[tripIndex]
        }
    },
    computed: {
        continentClass() {
            if (this.form.continent) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-invalid'
            }
        },
        countryClass() {
            if (this.form.country) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-invalid'
            }
        },
        citiesClass() {
            if (this.form.cities.length) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-invalid'
            }
        },
        descClass() {
            if (this.form.desc) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-invalid'
            }
        },
        departureDateClass() {
            if (this.form.departureDate) {
                return 'is-valid'
            } else if (!this.form.departureDate && this.form.attemptSubmit) {
                this.form.departureDateError = "Selecione a data de partida."
                return 'is-invalid'
            } else if (this.form.departureDate > this.form.arrivalDate && this.form.arrivalDate) {
                this.form.departureDateError = "A data de partida tem de ser inferior ou igual à data de chegada."
                return 'is-invalid'
            } else if (this.form.attemptSubmit) {
                return 'is-valid'
            }
        },
        arrivalDateClass() {
            if (this.form.arrivalDate) {
                return 'is-valid'
            } else if (!this.form.arrivalDate && this.form.attemptSubmit) {
                this.form.arrivalDateError = "Selecione a data de chegada."
                return 'is-invalid'
            } else if (this.form.arrivalDate < this.form.departureDate && this.form.departureDate && this.form.arrivalDate) {
                this.form.arrivalDateError = "A data de chegada tem de ser superior ou igual à data de chegada."
                return 'is-invalid'
            } else if (this.form.attemptSubmit) {
                return 'is-valid'
            }
        },
        urlPhotoClass() {
            if (this.form.urlPhoto) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-invalid'
            }
        },
        printTrips() {
            if (!this.filterTrips.continent && !this.filterTrips.date && !this.filterTrips.type) {
                return this.trips
            } else {
                return this.trips.filter(trip => {
                    let result = true
                    if (this.filterTrips.continent) {
                        result = trip.continent === this.filterTrips.continent && result
                    }
                    if (this.filterTrips.date) {
                        result = trip.arrivalDate === this.filterTrips.date && result
                    }
                    if (this.filterTrips.type) {
                        result = trip.tripType === this.filterTrips.type && result
                    }
                    return result
                })
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
    },
    destroyed() {
        localStorage.trips = JSON.stringify(this.trips)
    }
})

window.onunload = function () {
    vm.$destroy()
}

//https://travishorn.com/form-validation-with-vue-js-4d2e7ba8d2fc


/*this.trips.push({
    continent: "Europe",
    country: "Portugal",
    cities: ["Maia"],
    desc: "Top",
    departureDate: "2018-10-01",
    arrivalDate: "2018-10-10",
    type: "vacation",
    urlPhoto: "http://jornal-renovacao.pt/wp-content/uploads/2015/08/Maia-650x250.jpg"
})*/

/*this.trips.push({
    continent: "Europe",
    country: "Portugal",
    cities: ["Matosinhos Municipality"],
    desc: "Top",
    departureDate: "2017-10-01",
    arrivalDate: "2018-10-10",
    type: "vacation",
    urlPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edificio_Transparente_2_%28Porto%29.JPG/1200px-Edificio_Transparente_2_%28Porto%29.JPG"
})*/

/*this.trips.push({
    continent: "Europe",
    country: "Portugal",
    cities: ["Matosinhos Municipality"],
    desc: "Top",
    departureDate: "2017-10-01",
    arrivalDate: "2018-10-10",
    type: "vacation",
    urlPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edificio_Transparente_2_%28Porto%29.JPG/1200px-Edificio_Transparente_2_%28Porto%29.JPG"
})*/

/*this.trips.push({"continent":"North America","country":"Canada","cities":["Ottawa"],"desc":"Foi muito bom.","departureDate":"2018-10-17","arrivalDate":"2018-10-22","tripType":"work","urlPhoto":"https://1.bp.blogspot.com/-pUQFhWZ7BSE/V1YOsKvGSrI/AAAAAAAABzk/DYieXBbPTtcuhnlbmvRCsY9wAljUAH5tgCKgB/s1600/Ottawa.jpg"})*/

/*this.trips.push({"continent":"Europe","country":"United Kingdom","cities":["London","City of London"],"desc":"Excelente.","departureDate":"2018-10-02","arrivalDate":"2018-10-03","tripType":"work","urlPhoto":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg/1000px-Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg"})*/
/*this.trips.push({"continent":"Asia","country":"Japan","cities":["Tokyo"],"desc":"Sennen goroshi.","departureDate":"2018-10-23","arrivalDate":"2018-10-23","tripType":"vacation","urlPhoto":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/238px-Tokyo_Tower_and_around_Skyscrapers.jpg"})*/