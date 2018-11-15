Vue.component("show-page", {
    props: ["text", "link"],
    template: `<a class="btn btn-danger" :href="link" target="_blank">{{ text }}</a>`
})

Vue.component("game-soccer-card", {
    props: ["game"],
    methods: {
        getGoalsPerTeam() {
            let homeGoals = 0, awayGoals = 0
            this.game.goals.forEach(goal => {
                if (goal.team === this.game.homeTeam) {
                    homeGoals++
                } else {
                    awayGoals++
                }
            })
            return [homeGoals, awayGoals]
        }
    },
    template: `<div class="card">
                    <img class="card-img-top" :src="game.stadiumPic">
                    <div class="card-body">
                    <h5 class="card-title">{{ game.homeTeam + " " + getGoalsPerTeam()[0]}} v {{ getGoalsPerTeam()[1] + " " + game.awayTeam}} ({{ game.stadiumName }})</h5>
                    <hr>
                    <p class="card-text">
                        <h5>{{ game.homeTeam }}</h5>
                        <div v-for="goal in game.goals">
                            <div v-if="goal.team === game.homeTeam">
                                <b>{{goal.minute}}'</b> {{goal.player}}
                            </div>
                        </div>
                        <br>
                        <h5>{{ game.awayTeam }}</h5>
                        <div v-for="goal in game.goals">
                            <div v-if="goal.team === game.awayTeam">
                                <b>{{goal.minute}}'</b> {{goal.player}}
                            </div>
                        </div>
                    </p>
                    </div>
                </div>`
})

const vm = new Vue({
    el: "#app",
    data: {
        filter: {
            stadium: "",
            team: ""
        },
        games: [
            {
                id: 1,
                date: "2018-11-07",
                stadiumName: "Allianz Stadium",
                stadiumPic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Juventus_v_Real_Madrid%2C_Champions_League%2C_Stadium%2C_Turin%2C_2013.jpg/1200px-Juventus_v_Real_Madrid%2C_Champions_League%2C_Stadium%2C_Turin%2C_2013.jpg",
                homeTeam: "Juventus",
                awayTeam: "Manchester United",
                goals: [
                    {
                        minute: 65,
                        team: "Juventus",
                        player: "Cristiano Ronaldo"
                    },
                    {
                        minute: 86,
                        team: "Manchester United",
                        player: "Juan Mata"
                    },
                    {
                        minute: 89,
                        team: "Manchester United",
                        player: "Leonardo Bonucci (OG)"
                    }
                ]
            },
            {
                id: 2,
                date: "2018-11-06",
                stadiumName: "Estádio do Dragão",
                stadiumPic: "https://cdn.cmjornal.pt/images/2017-10/img_818x455$2017_10_30_00_10_23_680747.png",
                homeTeam: "FC Porto",
                awayTeam: "Lokomotiv Moscow",
                goals: [
                    {
                        minute: 2,
                        team: "FC Porto",
                        player: "Héctor Herrera"
                    },
                    {
                        minute: 42,
                        team: "FC Porto",
                        player: "Moussa Marega"
                    },
                    {
                        minute: 59,
                        team: "Lokomotiv Moscow",
                        player: "Jefferson Farfán"
                    },
                    {
                        minute: 67,
                        team: "FC Porto",
                        player: "Jesús Corona"
                    },
                    {
                        minute: 90,
                        team: "FC Porto",
                        player: "Otávio"
                    }
                ]
            }
        ]
    },
    methods: {
        getStadiums() {
            let stadiums = []
            this.games.forEach(game => {
                if (stadiums.indexOf(game.stadiumName === -1)) {
                    stadiums.push(game.stadiumName)
                }
            })
            return stadiums
        },
        getTeams() {
            let teams = []
            this.games.forEach(game => {
                if (teams.indexOf(game.homeTeam) === -1) {
                    teams.push(game.homeTeam)
                }
                if (teams.indexOf(game.awayTeam) === -1) {
                    teams.push(game.awayTeam)
                }
            })
            return teams
        }
    },
    computed: {
        printGames() {
            if (!this.filter.stadium && !this.filter.team) {
                return this.games
            } else {
                return this.games.filter(game => {
                    let result = true
                    if (this.filter.stadium) {
                        result = game.stadiumName === this.filter.stadium && result
                    }
                    if (this.filter.team) {
                        if (game.homeTeam === this.filter.team) {
                            result = game.homeTeam === this.filter.team && result
                            console.log("away: " + game.homeTeam + ". result: " + result)
                        }
                        if (game.awayTeam === this.filter.team) {
                            result = game.awayTeam === this.filter.team && result
                            console.log("away: " + game.awayTeam + ". result: " + result)
                        }
                    }
                    return result
                })
            }
        }
    }
})