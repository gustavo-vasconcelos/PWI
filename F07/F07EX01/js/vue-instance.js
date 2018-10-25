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
            type: "vacation",
            urlPhoto: "",
            urlPhotoError: "",
            attemptSubmit: false,
            error: false
        },
        filterTrips: {
            continent: "",
            date: "",
            type: ""
        },
        sortOption: "",
        modalData: {
            continent: "",
            country: "",
            cities: [],
            desc: "",
            departureDate: "",
            arrivalDate: "",
            type: "",
            urlPhoto: "",
            id: 0
        },
        editId: 0
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
                if (!this.editId) {
                    this.trips.push({
                        continent: this.form.continent,
                        country: this.form.country,
                        cities: this.form.cities,
                        desc: this.form.desc,
                        departureDate: this.form.departureDate,
                        arrivalDate: this.form.arrivalDate,
                        type: this.form.type,
                        urlPhoto: this.form.urlPhoto,
                        id: this.trips.length ? this.trips[this.trips.length - 1].id : 1
                    })
                    this.clearForm()
                } else {
                    swal({
                        title: "Deseja mesmo atualizar?",
                        text: `A viagem será alterada.`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: false,
                    }).then((willEdit) => {
                        if (willEdit) {
                            let index = this.getTripIndexById(this.editId)
                            this.trips[index].continent = this.form.continent
                            this.trips[index].country = this.form.country
                            this.trips[index].cities = this.form.cities
                            this.trips[index].desc = this.form.desc
                            this.trips[index].departureDate = this.form.departureDate
                            this.trips[index].arrivalDate = this.form.arrivalDate
                            this.trips[index].type = this.form.type
                            this.trips[index].urlPhoto = this.form.urlPhoto
                            swal("Viagem editada", "", "success")
                            this.cancelEdit()
                        }
                    })
                }
            } else {
                swal("Erro", "Preencha todos os campos corretamente.", "error")
            }
        },
        clearForm() {
            Object.keys(this.form).forEach(key => this.form[key] = "")
            this.form.cities = []
            this.form.type = "vacation"
        },
        cancelEdit() {
            this.editId = 0
            this.clearForm()
        },
        getTripById(id) {
            return this.trips.filter((trip, index) => trip.id === id)[0]
        },
        getTripIndexById(id) {
            let tripIndex = -1
            this.trips.filter((trip, index) => {
                if (trip.id === id) tripIndex = index
            })
            return tripIndex
        },
        removeTrip(id) {
            swal({
                title: "Deseja mesmo remover?",
                text: `A viagem feita a ${this.modalData.country} de ${this.modalData.departureDate} a ${this.modalData.arrivalDate} será removida para sempre!`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    this.trips.forEach((trip, index) => {
                        if (trip.id === id) this.trips.splice(index, 1)
                    })
                    swal("Viagem removida", "", "success")
                    $('#modal').modal('hide')
                }
            })
        },
        showModal(tripId) {
            $('#modal').modal('show')
            this.modalData = this.getTripById(tripId)
        },
        editTrip() {
            $('#modal').modal('hide')
            window.scrollTo(0, 0);
            this.form.continent = this.modalData.continent
            this.form.country = this.modalData.country
            this.form.cities = this.modalData.cities
            this.form.desc = this.modalData.desc
            this.form.departureDate = this.modalData.departureDate
            this.form.arrivalDate = this.modalData.arrivalDate
            this.form.type = this.modalData.type
            this.form.urlPhoto = this.modalData.urlPhoto
            this.editId = this.modalData.id
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
            if (!this.form.departureDate && this.form.attemptSubmit) {
                this.form.departureDateError = "Selecione a data de partida."
                return 'is-invalid'
            } else if (this.form.departureDate > this.form.arrivalDate && this.form.arrivalDate) {
                this.form.departureDateError = "A data de partida tem de ser inferior ou igual à data de chegada."
                return 'is-invalid'
            } else if (this.form.departureDate) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-valid'
            }
        },
        arrivalDateClass() {
            if (!this.form.arrivalDate && this.form.attemptSubmit) {
                this.form.arrivalDateError = "Selecione a data de chegada."
                return 'is-invalid'
            } else if (this.form.arrivalDate < this.form.departureDate && this.form.departureDate && this.form.arrivalDate) {
                this.form.arrivalDateError = "A data de chegada tem de ser superior ou igual à data de partida."
                return 'is-invalid'
            } else if (this.form.arrivalDate) {
                return 'is-valid'
            } else if (this.form.attemptSubmit) {
                return 'is-valid'
            }
        },
        maxDepartureDate() {
            if (!this.form.arrivalDate) {
                return this.todaysDate()
            } else {
                return this.form.arrivalDate
            }
        },
        minArrivalDate() {
            if (!this.form.departureDate) {
                return ""
            } else {
                return this.form.departureDate
            }
        },
        urlPhotoClass() {
            let r = new RegExp(/^(ftp:\/\/|http:\/\/|https:\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-\/]))?$/)

            let result = r.test(this.form.urlPhoto)

            if (!this.form.urlPhoto && this.form.attemptSubmit) {
                this.form.urlPhotoError = "Insira o URL da foto."
                return 'is-invalid'
            } else if (this.form.attemptSubmit && !result) {
                this.form.urlPhotoError = "URL inválido."
                return 'is-invalid'
            } else if (this.form.urlPhoto && result) {
                this.form.urlPhotoError = "URL inválido."
                return 'is-valid'
            }
        },
        uniqueContinents() {
            let continents = []
            this.trips.forEach(trip => {
                if (continents.indexOf(trip.continent) === -1)
                    continents.push(trip.continent)
            })
            return continents
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
                        result = trip.type === this.filterTrips.type && result
                    }
                    return result
                })
            }
        },
        sortTrips() {
            switch (this.sortOption) {
                case "": this.trips.sort(sortById); break
                case "country": this.trips.sort(sortCountryAlphabetically); break
                case "departureDate": this.trips.sort(sortDepartureDate); break
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

function sortById(a, b) {
    return a.id - b.id
}

function sortCountryAlphabetically(a, b) {
    if (a.country < b.country) {
        return -1
    }
    if (a.country > b.country) {
        return 1
    }
    return 0
}

function sortDepartureDate(a, b) {
    if (a.departureDate < b.departureDate) {
        return -1
    }
    if (a.departureDate > b.departureDate) {
        return 1
    }
    return 0
}

//https://travishorn.com/form-validation-with-vue-js-4d2e7ba8d2fc


/*

vm.trips.push({ "continent": "Europe", "country": "Portugal", "cities": ["Maia"], "desc": "Top", "departureDate": "2018-10-01", "arrivalDate": "2018-10-10", "type": "vacation", "urlPhoto": "http://jornal-renovacao.pt/wp-content/uploads/2015/08/Maia-650x250.jpg", "id": 1 })
vm.trips.push({ "continent": "Europe", "country": "Portugal", "cities": ["Matosinhos Municipality"], "desc": "Top", "departureDate": "2017-10-01", "arrivalDate": "2018-10-10", "type": "vacation", "urlPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edificio_Transparente_2_%28Porto%29.JPG/1200px-Edificio_Transparente_2_%28Porto%29.JPG", "id": 2 })
vm.trips.push({ "continent": "North America", "country": "Canada", "cities": ["Ottawa"], "desc": "Foi muito bom.", "departureDate": "2018-10-17", "arrivalDate": "2018-10-22", "type": "work", "urlPhoto": "https://1.bp.blogspot.com/-pUQFhWZ7BSE/V1YOsKvGSrI/AAAAAAAABzk/DYieXBbPTtcuhnlbmvRCsY9wAljUAH5tgCKgB/s1600/Ottawa.jpg", "id": 3 })
vm.trips.push({ "continent": "Europe", "country": "United Kingdom", "cities": ["London", "City of London"], "desc": "Excelente.", "departureDate": "2018-10-02", "arrivalDate": "2018-10-03", "type": "work", "urlPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg/1000px-Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg", "id": 4 })
vm.trips.push({ "continent": "Asia", "country": "Japan", "cities": ["Tokyo"], "desc": "Sennen goroshi.", "departureDate": "2018-10-23", "arrivalDate": "2018-10-23", "type": "vacation", "urlPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/238px-Tokyo_Tower_and_around_Skyscrapers.jpg", "id": 5 })
vm.trips.push({ "continent": "Oceania", "country": "Australia", "cities": ["Sydney"], "desc": "Muito bom.", "departureDate": "2018-10-09", "arrivalDate": "2018-10-23", "type": "work", "urlPhoto": "https://www.telegraph.co.uk/content/dam/Travel/2018/August/sydney.jpg?imwidth=450", "id": 6 })
vm.trips.push({ "continent": "Africa", "country": "Egypt", "cities": ["Giza"], "desc": "Pirâmides.", "departureDate": "2018-10-11", "arrivalDate": "2018-10-24", "type": "vacation", "urlPhoto": "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg", "id": 7 })

class Trip {
    constructor(continent, country, cities, desc, departureDate, arrivalDate, type, urlPhoto) {
        this._id = Trip.getLastId() + 1
        this.country = country
        this.cities = cities
        this.desc = desc
        this.departureDate = departureDate
        this.arrivalDate = arrivalDate
        this.type = type
        this.urlPhoto = urlPhoto
    }

    get continent() {
        return this._continent
    }
    set continent(value) {
        this._continent = value
    }

    get country() {
        return this._country
    }
    set country(value) {
        this._country = value
    }

    get cities() {
        return this._cities
    }
    set cities(value) {
        this._cities = value
    }

    get desc() {
        return this._desc
    }
    set desc(value) {
        this._desc = value
    }

    get departureDate() {
        return this._departureDate
    }
    set departureDate(value) {
        this._departureDate = value
    }

    get arrivalDate() {
        return this._arrivalDate
    }
    set arrivalDate(value) {
        this._arrivalDate = value
    }

    get type() {
        return this._type
    }
    set type(value) {
        this._type = value
    }

    get urlPhoto() {
        return this._urlPhoto
    }
    set urlPhoto(value) {
        this._urlPhoto = value
    }

    get id() {
        return this._id
    }

    static getLastId() {
        if (trips.length) return trips[trips.length - 1].id
        else return 0
    }
}
*/