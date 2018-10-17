const vm = new Vue({
    el: "#intro",
    data: {
        teams: [
            { name: "Porto", year: "1912", location: "Porto" },
            { name: "Sporting", year: "1914", location: "Lisboa" },
            { name: "Benfica", year: "1910", location: "Lisboa" }
        ],
        filteringLocation: "",
        styles: {
            btn: ["btn", "btn-primary"]
        }
        
    },
    methods: {
        addTeam() {
            let teamName = prompt("Indique o nome da equipa:")
            let teamYear = prompt(`Indique o ano de fundação da equipa ${teamName}:`)
            let teamLocation = prompt(`Indique o local de origem da equipa ${teamName}:`)
            this.teams.push({ name: teamName, year: teamYear, location: teamLocation })
        },
        filterByLocation() {
            if (!this.filteringLocation) {
                let availableLocations = []
                this.teams.filter(teamData => {
                    if (availableLocations.indexOf(teamData.location) === -1) {
                        availableLocations.push(teamData.location)
                    }
                })
                this.filteringLocation = prompt(`Escolha um dos locais de origem disponíveis (${availableLocations.join(", ")}):`)
            } else {
                this.filteringLocation = ""
            }
        }
    },
    computed: {
        printTeams() {
            if (!this.filteringLocation) {
                return this.teams
            } else {
                return this.teams.filter(team => {
                    return team.location.toUpperCase() === this.filteringLocation.toUpperCase()
                })
            }
        }
    }
})