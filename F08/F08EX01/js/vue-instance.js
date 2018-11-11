const vm = new Vue({
    el: "#intro",
    data: {
        form: {
            name: "",
            photo: "",
            year: "",
        },
        editIndex: false,
        editForm: {
            name: "",
            photo: "",
            year: "",
        },
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
        ]
    },
    methods: {
        clearForm() {
            this.form.name = ""
            this.form.photo = ""
            this.form.year = ""
        },
        validateSubmit() {
            let sameName = this.castles.some(castle => castle.name.toLowerCase() === this.form.name.toLowerCase())
            if (sameName) {
                swal("Erro", "Já existe um castelo com o mesmo nome", "error")
            } else {
                this.castles.push({ name: this.form.name, photo: this.form.photo, year: this.form.year })
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
        editCastle(name) {
            document.getElementById("editDialog").showModal()
            this.editIndex = this.getIndexByName(name)
            this.editForm = this.castles[this.editIndex]
        },
        confirmEditForm() {
            let sameName = this.castles.some(castle => castle.name.toLowerCase() === this.editForm.name.toLowerCase()  && this.castles[this.editIndex].name !== this.editForm.name)
            if (sameName) {
                alert("Já existe um castelo com o mesmo nome.")
            } else {
                this.castles[this.editIndex].name = this.editForm.name
                this.castles[this.editIndex].photo = this.editForm.photo
                this.castles[this.editIndex].year = this.editForm.year
                this.editIndex = false
                this.closeDialog()
            }
        },
        closeDialog() {
            document.getElementById("editDialog").close()
        }
    },
    computed: {
        printCastles() {
            return this.castles
        }
    }
})