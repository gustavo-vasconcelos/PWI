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
            arrivalDate: "",
            tripType: "vacation",
            urlPhoto: ""
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
        validateSubmit() {
            if (!this.form.cities) {
                swal("Erro", "Selecione pelo menos uma cidade.", "error")
            } else {
                this.addTrip()
                Object.keys(this.form).forEach(key => this.form[key] = "")
                this.form.cities = []
                this.form.tripType = "vacation"
            }
        },
        addTrip() {
            this.trips.push({
                continent: this.form.continent,
                country: this.form.country,
                cities: this.cities,
                desc: this.desc,
                departureDate: this.departureDate,
                arrivalDate: this.arrivalDate,
                tripType: this.tripType,
                urlPhoto: this.urlPhoto
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
    },
    computed: {
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
        /*if (localStorage.trips) {
            this.trips = JSON.parse(localStorage.trips)
        }*/
        this.trips.push({
            continent: "Europe",
            country: "Portugal",
            cities: ["Maia", "Vila do Conde"],
            desc: "Top",
            departureDate: "2018-10-01",
            arrivalDate: "2018-10-10",
            type: "vacation",
            urlPhoto: "http://jornal-renovacao.pt/wp-content/uploads/2015/08/Maia-650x250.jpg"
        })
    },
    destroyed() {
        //localStorage.trips = JSON.stringify(this.trips)
    }
})

window.onunload = function () {
    vm.$destroy()
}