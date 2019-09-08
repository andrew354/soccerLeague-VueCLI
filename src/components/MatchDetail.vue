<template>
  <div>
    <div class="fullWidthBar">
      <h2 class="alignCenter">GAME DETAIL</h2>
    </div>
    <div class="container" v-if="matchDetail">
      <div class="myFlexCol nameTeam border">
        <div class="myFlex">
          <img class="imgAdapt" :src="getHomeTeam(matchDetail.homeTeam).logo">
          <img class="imgAdapt" :src="getHomeTeam(matchDetail.awayTeam).logo">
        </div>
        <div class="myFlex">
          <div class="logo_HomeTeam">{{matchDetail.homeTeam}}</div>
          <div class="logo_AwayTeam">{{matchDetail.awayTeam}}</div>
        </div>
      </div>
      <div>
        <div class="location">{{matchDetail.utcDate}}</div>
        <div class="location">{{matchDetail.time}}</div>
      </div>
      <div class="myFlexCol">
        <p v-for=" (player,i) in getHomeTeam(matchDetail.homeTeam).players" :key="i">{{player.name}}</p>
        <p v-for=" (player,i) in getHomeTeam(matchDetail.awayTeam).players" :key="i">{{player.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "team"],
  data() {
    return {
      //   id: this.$route.params.id
      // string: this.$route.params.id.toString()
    };
  },
  methods: {
    getHomeTeam(teamName) {
      return this.$store.getters.getTeam(teamName);
    }
  },
  computed: {
    matchDetail() {
      console.log(this.id);
      return this.$store.state.matches.find(match => match.id == this.id);
    }
    // teams() {
    //   return this.$store.state.teams;
    // }
  }
};
</script>
<style scoped>
.alignCenter {
  text-align: center;
}
.imgAdapt {
  width: 150px;
  height: 150px;
}
.border {
  width: 350px;
  margin-top: 50px;
  text-align: center;
  padding: 15px, 10px, 10px, 10px;
  border: 1px, solid;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
}
.myFlex {
  display: flex;
  justify-content: space-around;
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
