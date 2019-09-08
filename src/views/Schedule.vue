<template>
  <div>
    <div class="fullWidthBar">
      <h2 class="alignCenter">GAMES</h2>
    </div>
    <div>
      <app-matches v-for="(match, index) in matches" :key="index" :match="match"></app-matches>
    </div>
    <div>
      <!-- <div v-for="(team, index) in teams" :key="index" :team="team"></div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import { mapGetters, mapState } from "vuex";
import Match from "../components/Match";
export default {
  components: {
    "app-matches": Match
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
</style>

