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
    template: `<div class="card px-0">
                    <img class="card-img-top" :src="game.stadiumPic" style="height: 150px">
                    <div class="card-body">
                    <h5 class="card-title">{{ game.homeTeam + " " + getGoalsPerTeam()[0]}} v {{ getGoalsPerTeam()[1] + " " + game.awayTeam}} ({{ game.stadiumName }})</h5>
                    <hr>
                    <p class="card-text">
                        <h5 v-show="getGoalsPerTeam()[0]">{{ game.homeTeam }}</h5>
                        <div v-for="goal in game.goals">
                            <div v-if="goal.team === game.homeTeam">
                                <b>{{goal.minute}}'</b> {{goal.player}}
                            </div>
                        </div>
                        <br>
                        <h5 v-show="getGoalsPerTeam()[1]">{{ game.awayTeam }}</h5>
                        <div v-for="goal in game.goals">
                            <div v-if="goal.team === game.awayTeam">
                                <b>{{goal.minute}}'</b> {{goal.player}}
                            </div>
                        </div>
                    </p>
                    </div>
                </div>`
})
/*
Vue.component("color-picker", {
    data() {
        return {
            color: ""
        }
    },
    template: `<input type="color" class="form-control" v-on:change="$emit('color-change', color)">`
})*/

Vue.component("table-render", {
    props: ["obj"],
    data() {
        return {
            tableHeadings: [],
            tableColumns: [],
            tableRows: [],
            filterOptions: [],
            sortOptions: [],
        }
    },
    methods: {
        getInfo() {
            Object.keys(this.obj).forEach(key => {
                if (key === "filter") {
                    if (!this.filterOptions.length) {
                        this.filterOptions = this.obj[key]
                    } else {
                        this.filterOptions.push(this.obj[key])
                    }
                } else if (key === "sort") {
                    if (!this.sortOptions.length) {
                        this.sortOptions = this.obj[key]
                    } else {
                        this.sortOptions.push(this.obj[key])
                    }
                } else {
                    this.tableHeadings.push(key)
                    this.tableColumns.push(this.obj[key])
                }
            })
        },
        getRows() {
            this.tableColumns.forEach(column => {
                if (Array.isArray(column)) {
                    column.forEach((value, index) => {
                        if (!Array.isArray(this.tableRows[index])) {
                            this.tableRows[index] = []
                        }
                        this.tableRows[index].push(value)
                    })
                } else {
                    if (!Array.isArray(this.tableRows[0])) {
                        this.tableRows[0] = []
                    }
                    this.tableRows[0].push(column)
                }
            })
        },
        getOptions() {
            if (this.filterOptions.length) {
                this.filterOptions.forEach(filter => {
                    Object.keys(filter).forEach(option => {
                        /*
                        if (option === "heading") {
                            if (!this.filterOptions.length) {
                                this.filterOptions = this.obj[key]
                            } else {
                                this.filterOptions.push(this.obj[key])
                            }
                        } else if (key === "sort") {
                            if (!this.sortOptions.length) {
                                this.sortOptions = this.obj[key]
                            } else {
                                this.sortOptions.push(this.obj[key])
                            }
                        } else {
                            this.tableHeadings.push(key)
                            this.tableColumns.push(this.obj[key])
                        }
                        */
                    })
                })
            }
        }
    },
    mounted() {
        this.getInfo()
        this.getRows()
        this.getOptions()
    },
    template: `<div>
                <table-filter
                    v-if="filterOptions.length"
                    :options="filterOptions"
                    :headerElements="tableHeadings"
                    :columnElements="tableColumns">
                </table-filter>
                <table-sort v-if="sortOptions.length" :options="sortOptions"></table-sort>
                <table class="table table-striped table-hover mt-3">
                        <thead>
                            <tr>
                                <th v-for="heading in tableHeadings">{{ heading }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in tableRows">
                                <td v-for="element in tableRows[index]">{{ element }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
})

Vue.component("table-filter", {
    data() {
        return {
            html: ""
        }
    },
    props: ["options", "headerElements", "columnElements"],
    mounted() {
        this.options.forEach(filter => {
            this.headerElements.forEach(header => {
                if(header === filter.heading) {

                }
            })
        })
    },
    template: `<div v-for=""></div>`
})

Vue.component("table-sort", {
    props: ["options"],
    template: `<div></div>`
})

const vm = new Vue({
    el: "#app",
    data: {
        obj: {
            Name: ["John", "Peter"],
            Surname: ["M.", "Xhen"],
            Children: [3, 4],
            filter: [
                { heading: "Name", tag: ["input", "text"] },
                { heading: "Children", tag: ["select"] }
            ]
            //filter sintaxe
            //filter: [{heading: key_name, tag: ["select"] OR ["input", "input_type"]}]
            //example:
            /*
            filter: [
                {heading: Name, tag: ["input", "text"]} will create a <input type="text"> filter for the Name column
                {heading: Children, tag: ["select"]} will create a combobox filter for the Children column
            ]
            */
            //
            //
            //
            //sort sintaxe
            //sort: [{heading: key_name, sortOptions: [OPT_1, OPT_2, OPT_3, (...)]}]
            //where options are:
            //      1 - alphabetical order (strings)
            //      2 - inverse alphabetical order (strings)
            //      3 - crescent order (numbers)
            //      4 - decrescent order (numbers)
            //example:
            /*
            sort: [{heading: Surname, sortOptions: [1, 2]}] will create a sorting combobox for the Surname heading
                                                            with 2 options: alphabetical order and inverse alphabetical order 
            */
        },
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
            },
            {
                id: 3,
                date: "2018-11-06",
                stadiumName: "Stadio Giuseppe Meazza",
                stadiumPic: "https://www.spaziocalcio.it/contents/uploads/2016/12/Stadio-Giuseppe-Meazza-San-Siro-Milano-2016.jpg",
                homeTeam: "Inter",
                awayTeam: "Barcelona",
                goals: [
                    {
                        minute: 83,
                        team: "Barcelona",
                        player: "Malcom de Oliveira"
                    },
                    {
                        minute: 87,
                        team: "Inter",
                        player: "Mauro Icardi"
                    }
                ]
            },
            {
                id: 4,
                date: "2018-11-06",
                stadiumName: "Wanda Metropolitano",
                stadiumPic: "https://images.performgroup.com/di/library/GOAL/33/a1/wanda-metropolitano-atletico_5d8r4d22tz3p1hvscjkpu4lks.jpg?t=2144583606&quality=90&w=1280",
                homeTeam: "Atlético de Madrid",
                awayTeam: "Borussia Dortmund",
                goals: [
                    {
                        minute: 33,
                        team: "Atlético de Madrid",
                        player: "Saúl Ñíguez"
                    },
                    {
                        minute: 80,
                        team: "Atlético de Madrid",
                        player: "Antoine Griezmann"
                    }
                ]
            }
        ]
    },
    methods: {
        haha() {
            console.log(true)
        },
        getStadiums() {
            let stadiums = []
            this.games.forEach(game => {
                if (stadiums.indexOf(game.stadiumName === -1)) {
                    stadiums.push(game.stadiumName)
                }
            })
            stadiums.sort()
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
            teams.sort()
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
                        let teams = [game.homeTeam, game.awayTeam]
                        result = teams.some(team => team === this.filter.team) && result
                    }
                    return result
                })
            }
        }
    }
})