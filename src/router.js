import Vue from "vue";
import Router from "vue-router";
import TeamDetail from "./components/TeamDetail.vue";
import MatchDetail from "./components/MatchDetail.vue";
import Location from "./components/Location";
import Login from "./views/Login.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/schedule",
      name: "Schedule",
      component: () => import('./views/Schedule.vue')
    },
    {
      path: "/teams",
      name: "AllTeams",
      component: () => import('./views/AllTeams.vue')
    },
    {
      path: "/locations",
      name: "AllLocations",
      component: Location
    },
    {
      path: '/teamdetail/:id',
      props: true,
      name: 'TeamDetail',
      component: TeamDetail
    },
    {
      path: '/matchdetail/:id',
      props: true,
      name: 'MatchDetail',
      component: MatchDetail
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({
            name: "Login"
          })
        }
      }
    }
  ]
});