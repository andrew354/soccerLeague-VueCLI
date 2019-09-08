<template>
  <div>
    <div class="fullWidthBar">
      <h2 class="alignCenter">TEAMS</h2>
    </div>
    <div class="flexWrap">
      <app-team v-for="(team, index) in teams" :key="index" :team="team"></app-team>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import { mapGetters, mapState } from "vuex";
import Team from "../components/Team.vue";
export default {
  components: {
    "app-team": Team
  },
  computed: {
    // ...mapGetters(["getMatches", "getTeams"]),

    teams() {
      return this.$store.state.teams;
    },
    matches() {
      return this.$store.state.matches;
    }
  }
};
</script>
<style scoped>
.alignCenter {
  text-align: center;
}
.flexWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

