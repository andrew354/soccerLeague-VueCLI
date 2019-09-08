import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);


export default new Vuex.Store({
  state: {
    teams: [],
    matches: []
  },

  actions: {
    loadMatches(context) {
      axios
        .get('https://api.myjson.com/bins/18z1hv')
        .then((response) => {
          context.commit('SET_MATCHES', response.data.matches)
          context.commit('SET_TEAMS', response.data.teams)
          console.log(response.data.teams)
          console.log(response.data.matches);

        })
        .catch(error => {
          console.log(error);
        })
    },

  },
  mutations: {
    SET_TEAMS(state, teams) {
      state.teams = teams
    },
    SET_MATCHES(state, matches) {
      state.matches = matches
    }
  },
  getters: {
    getTeams: (state) => {
      return state.teams;
    },
    getMatches: (state) => {
      return state.matches;
    },
    getTeamById: (state) => (id) => {
      return state.teams.filter(team => team.id == id);
    },
    getMatchById: (state) => (id) => {
      return state.matches.filter(match => match.id == id);
    },
    getTeam: (state) => (payload) => {
      return state.teams.find(team => team.teamName === payload);
    }
  }

});




// loadTeams({
//   commit
// }) {
//   axios
//     .get('https://api.myjson.com/bins/18z1hv')
//     .then(response => response.data)
//     .then(teams => {
//       let allTeams = teams.matches;
//       let allMatches = teams.teams;
//       console.log(allTeams)
//       console.log(allMatches)
//       commit('SET_TEAMS', teams)
//       commit('SET_MATCHES', matches)
//     })
// }