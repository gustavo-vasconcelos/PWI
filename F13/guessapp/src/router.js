import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from "@/views/Play.vue"
import Scoreboard from "@/views/Scoreboard.vue"
import Options from "@/views/Options.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/play",
      name: 'play',
      component: Play
    },
    {
      path: "/scoreboard",
      name: 'scoreboard',
      component: Scoreboard
    },
    {
      path: "/options",
      name: 'options',
      component: Options
    }
  ]
})
