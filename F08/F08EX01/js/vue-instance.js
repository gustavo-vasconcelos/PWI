const vm = new Vue({
    el: "#intro",
    created() {
        if (localStorage.castles) this.castles = JSON.parse(localStorage.castles)
    },
    data: {
        castles: [
            { name: "Castelo de Bragança", photo: "http://www.culturanorte.pt/fotos/galerias/castelo_de_braganca_4_254724364550aa5e1f3d7e.jpg", year: 1250 },
            { name: "Castelo de Almourol", photo: "http://welcome-to.pt/wp-content/uploads/2014/10/info_slide_5.jpg", year: 1300 },
            { name: "Castelo de Marvão", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/bf/b1/09/castelo-de-marvao.jpg", year: 1350 },
            { name: "Castelo de Montalegre", photo: "https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg", year: 1400 },
            { name: "Castelo de Sortelha", photo: "http://imagens.publico.pt/imagens.aspx/392999?tp=KM&w=460&h=307", year: 1450 },
            { name: "Castelo de Arraiolos", photo: "https://portugalpatrimonio.files.wordpress.com/2016/01/post-02-02-16-01.jpg", year: 1500 },
            { name: "Castelo de Santa Maria da Feira", photo: "http://www.culturanorte.pt/fotos/galerias/feira_2_104090068154edf7de7e825.jpg", year: 1550 },
            { name: "Castelo de Lindoso", photo: "http://www.serradogeres.com/images/castelo/lindoso_0.jpg", year: 1600 },
            { name: "Castelo dos Mouros", photo: "http://www.sintra-portugal.com/Images/750px/moors-castle-sintra.jpg", year: 1650 },
            { name: "Castelo de Guimarães", photo: "https://thumbs.web.sapo.io/?epic=MzFheQ89tzncGQ9OkIS2ObYsJoJzmY2AJIJ1Dfo+dnBrvNBLwBbsh/1q0o1By8b7jnvhOO27wwF6jqkraWUBY2TLGAVj0R/edf9qYBAnwiGX4u0=&W=800&H=0&delay_optim=1", year: 1000 },
        ],
        form: {
            name: "",
            photo: "",
            year: "",
        },
        selectedIndex: false,
        castleInfo: [],
        editForm: {
            name: "",
            photo: "",
            year: "",
        },
        filterName: "",
        sort: ""
    },
    methods: {
        clearForm() {
            this.form.name = ""
            this.form.photo = ""
            this.form.year = ""
        },
        clearEditForm() {
            this.editForm.name = ""
            this.editForm.photo = ""
            this.editForm.year = ""
        },
        validateSubmit() {
            let sameName = this.castles.some(castle => castle.name.toLowerCase() === this.form.name.toLowerCase())
            if (sameName) {
                swal("Erro", "Já existe um castelo com o mesmo nome", "error")
            } else {
                this.castles.push({ name: this.form.name, photo: this.form.photo, year: parseInt(this.form.year) })
                this.clearForm()
            }
        },
        getMaxYear() {
            return new Date().getFullYear()
        },
        getIndexByName(name) {
            let castleIndex = -1
            this.castles.some((castle, index) => {
                if (castle.name === name) castleIndex = index
            })
            return castleIndex
        },
        infoCastle(name) {
            this.selectedIndex = this.getIndexByName(name)
            document.getElementById("infoDialog").showModal()
        },
        closeInfoDialog() {
            document.getElementById("infoDialog").close()
        },
        editCastle(name) {
            document.getElementById("editDialog").showModal()
            this.selectedIndex = this.getIndexByName(name)
            this.editForm.name = this.castles[this.selectedIndex].name
            this.editForm.photo = this.castles[this.selectedIndex].photo
            this.editForm.year = parseInt(this.castles[this.selectedIndex].year)
        },
        confirmEditForm() {
            let sameName = this.castles.some(castle => castle.name.toLowerCase() === this.editForm.name.toLowerCase() && this.editForm.name.toLowerCase() !== this.castles[this.selectedIndex].name.toLowerCase())
            if (sameName) {
                alert("Já existe um castelo com o mesmo nome.")
            } else {
                this.castles[this.selectedIndex].name = this.editForm.name
                this.castles[this.selectedIndex].photo = this.editForm.photo
                this.castles[this.selectedIndex].year = this.editForm.year
                this.selectedIndex = false
                this.closeEditDialog()
                this.clearEditForm()
            }
        },
        closeEditDialog() {
            document.getElementById("editDialog").close()
        },
        removeCastle(name) {
            let index = this.getIndexByName(name)
            swal({
                title: "Deseja mesmo remover?",
                text: `O castelo ${name} fundado em ${this.castles[index].year} será removido para sempre.`,
                icon: "warning",
                buttons: true,
                dangerMode: false,
            }).then((willRemove) => {
                if (willRemove) {
                    this.castles.splice(index, 1)
                    swal("Castelo removido", "", "success")
                }
            })
        },
        arrayMethods(el) {
            let result, chosenYear
            switch (el) {
                case "ei":
                    this.castles = this.castles.map(castle => {
                        if (castle.name.toLowerCase().includes("castelo")) {
                            castle.name = castle.name.replace(/castelo/i, "")
                        }
                        return castle
                    })
                    break
                case "eii":
                    let avgDate = this.castles.reduce((sum, castle) => sum += castle.year, 0) / this.castles.length
                    console.log("Média: " + avgDate)
                    break
                case "eiii":
                    result = this.castles.some(castle => castle.name.toLowerCase().includes("marvão"))
                    console.log("Algum castelo tem 'marvão' no nome?", result)
                    break
                case "eiv":
                    console.log(this.castles.filter(castle => castle.name.toLowerCase().startsWith("a")))
                    break
                case "ev":
                    result = this.castles.every(castle => castle.photo)
                    console.log("Todos os castelo têm link?", result)
                    break
                case "evi":
                    let quantity = 3
                    this.castles.forEach((castle, index) => {
                        if(index >= this.castles.length - quantity) {
                            castle.photo = "http://nofoto.jpg"
                        }
                    })
                    break
                case "evii":
                    result = this.castles.find(castle => castle.name === "Castelo de Santa Maria da Feira")
                    console.log(result)
                    break
                case "eviii":
                    result = this.castles.findIndex(castle => castle.name === "Castelo de Arraiolos")
                    console.log("Index do castelo de arraiolos", result)
                    break
                case "fi":
                    result = this.castles.reduce((sum, current, index) => {
                        if(index !== this.castles.length - 1) {
                            sum += current.name + "-"
                        } else {
                            sum += current.name
                        }
                        return sum
                    }, "")
                    console.log(result)
                    break
                case "fii":
                    chosenYear = parseInt(prompt("Indique o valor de x:"))
                    result = this.castles.filter(castle => castle.year >= chosenYear)
                    let names = []
                    result.forEach(castle => names.push(castle.name))
                    console.log(names.join(", "))
                    break
                case "fiii":
                    chosenYear = parseInt(prompt("Indique o valor de x:"))
                    this.castles.forEach(castle => {
                        if(castle.year <= chosenYear) {
                            castle.photo = ""
                        }
                    })
                    break
                case "fiv":
                    let vowels = ["a", "e", "i", "o", "u"]
                    this.castles = this.castles.map(castle => {
                        vowels.forEach(vowel => {
                            if(castle.name.toLowerCase().startsWith(vowel)) {
                                castle.year += 5
                            }
                        })
                        return castle
                    })
                    break
            }
        }
    },
    computed: {
        printCastles() {
            if (!this.filterName) {
                return this.castles
            } else {
                return this.castles.filter(castle => castle.name.toLowerCase().includes(this.filterName.toLowerCase()))
            }
        },
        sortCastles() {
            switch (this.sort) {
                case "alphabetical": this.castles.sort(sortAlphabetically); break
                case "crescent": this.castles.sort(sortYearCrescently); break
                case "decrescent": this.castles.sort(sortYearDecrescently); break
            }
        }
    },
    destroyed() {
        localStorage.setItem("castles", JSON.stringify(this.castles))
    }
})

window.onunload = function () {
    vm.$destroy()
}

function sortYearCrescently(a, b) {
    return a.year - b.year
}

function sortYearDecrescently(a, b) {
    return b.year - a.year
}

function sortAlphabetically(a, b) {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
}