const vm = new Vue({
    el: "#intro",
    data: {
        form: {
            name: "",
            photo: "",
        },
        castles: [
            { name: "Castelo de Bragança", photo: "http://www.culturanorte.pt/fotos/galerias/castelo_de_braganca_4_254724364550aa5e1f3d7e.jpg" },
            { name: "Castelo de Almourol", photo: "http://welcome-to.pt/wp-content/uploads/2014/10/info_slide_5.jpg" },
            { name: "Castelo de Marvão", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/bf/b1/09/castelo-de-marvao.jpg" },
            { name: "Castelo de Montalegre", photo: "https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg" },
            { name: "Castelo de Sortelha", photo: "http://imagens.publico.pt/imagens.aspx/392999?tp=KM&w=460&h=307" },
            { name: "Castelo de Arraiolos", photo: "https://portugalpatrimonio.files.wordpress.com/2016/01/post-02-02-16-01.jpg" },
            { name: "Castelo de Santa Maria da Feira", photo: "http://www.culturanorte.pt/fotos/galerias/feira_2_104090068154edf7de7e825.jpg" },
            { name: "Castelo de Lindoso", photo: "http://www.serradogeres.com/images/castelo/lindoso_0.jpg" },
            { name: "Castelo dos Mouros", photo: "http://www.sintra-portugal.com/Images/750px/moors-castle-sintra.jpg" },
            { name: "Castelo de Guimarães", photo: "https://thumbs.web.sapo.io/?epic=MzFheQ89tzncGQ9OkIS2ObYsJoJzmY2AJIJ1Dfo+dnBrvNBLwBbsh/1q0o1By8b7jnvhOO27wwF6jqkraWUBY2TLGAVj0R/edf9qYBAnwiGX4u0=&W=800&H=0&delay_optim=1" },
        ]
    },
    methods: {
        validateSubmit() {
            let sameName = this.castles.some(castle => castle.name.toLowerCase() === this.form.name.toLowerCase())
            if (sameName) {
                swal("Erro", "Já existe um castelo com o mesmo nome", "error")
            } else {
                this.castles.push({ name: this.form.name, photo: this.form.photo })
                this.form.name = ""
                this.form.photo = ""
            }
        }
    }
})