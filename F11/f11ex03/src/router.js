import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Actor from './views/Actor/Actor.vue'
import ActorData from './views/Actor/Data.vue'
import ActorMovies from './views/Actor/Movies.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/actor/:id-:name',
      name: 'actor',
      component: Actor,
      meta: {
        title: ""
      }
    },
    {
      path: '/actor/:id-:name/data',
      name: 'actorData',
      component: ActorData,
      meta: {
        title: " - Data"
      }
    },
    {
      path: '/actor/:id-:name/movies',
      name: 'actorMovies',
      component: ActorMovies,
      meta: {
        title: " - Movies"
      }
    },
    {
      path: '*',
      component: PageNotFound,
      meta: {
        title: "404 - Page not found"
      }
    }
  ]
})
/*
router.afterEach(to => {
  if (to.path !== "/") {
    let index = AppVue.data().actors.findIndex(actor => actor.id === parseInt(to.params.id))
    document.title = AppVue.data().actors[index].name + to.meta.title
  } else {
    document.title = to.meta.title
  }
})
*/
export default router


