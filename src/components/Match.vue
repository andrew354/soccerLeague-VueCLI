<template>
  <div>
    <div class="myFlex marginTop">
      <img :src="getHomeTeam(match.homeTeam).logo">
      <img :src="getHomeTeam(match.awayTeam).logo">
    </div>
    <router-link :to="`/matchdetail/${match.id}`">
      <div class="myFlex borderMatch container">
        <div class="logoHomeTeam adjust">{{match.homeTeam}}</div>
        <div class="timeDate adjust">{{match.utcDate}}</div>
        <div class="logoAwayTeam adjust">{{match.awayTeam}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["match", "team", "id"],

  methods: {
    getHomeTeam(teamName) {
      console.log(teamName);
      return this.$store.getters.getTeam(teamName);
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>

<style scoped>
.marginTop {
  margin-top: 20px;
}
.adjust {
  flex-grow: 1;
}
.myFlex {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100px;
  height: 100px;
}
.borderMatch {
  width: 230px;
  height: 50px;
  text-align: center;
  padding: 15px, 10px, 10px, 10px;
  border: 1px, solid;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  .location {
    text-align: center;
  }
}
</style>
