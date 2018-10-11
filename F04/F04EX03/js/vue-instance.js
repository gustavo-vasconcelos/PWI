const vm = new Vue({
    el: "#intro",
    data: {
        teams: [
            { name: "Porto", year: "1912", location: "Porto" },
            { name: "Sporting", year: "1914", location: "Lisboa" },
            { name: "Benfica", year: "1910", location: "Lisboa" }
        ]
    },
    methods: {
        addTeam: function () {
            let teamName = prompt("Indique o nome da equipa:")
            let teamYear = prompt(`Indique o ano de fundação da equipa ${teamName}:`)
            let teamLocation = prompt(`Indique o local de origem da equipa ${teamName}:`)
            this.teams.push({ name: teamName, year: teamYear, location: teamLocation })
        },
        filterByLocation: function () {
            let availableLocations = []
            this.teams.filter(teamData => {
                if (availableLocations.indexOf(teamData.location) === -1) {
                    availableLocations.push(teamData.location)
                }
            })
            let location = prompt(`Escolha um dos locais de origem disponíveis (${availableLocations.join(", ")}):`)
            this.teams = this.teams.filter(teamData => {
                return teamData.location === location
            })
        }
    }
})