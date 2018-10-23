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
            departureDate: "",
            arrivalDate: "",
            tripType: "vacation",
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
        }
    },
    computed: {
        
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