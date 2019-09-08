<template>
  <div class="fullWidthBar">
    <h2 class="alignCenter">TEAM DETAIL</h2>

    <div class="myFlex marginTop">
      <img v-bind:src="teamDetail.logo">
      <div>
        <h1>{{teamDetail.teamName}}</h1>
        <h1>{{teamDetail.stadium}}</h1>
      </div>
    </div>
    <div class="myFlex marginTop">
      <div>
        <h1>PLAYERS</h1>
      </div>
      <div>
        <h1>POSITION</h1>
      </div>
    </div>
    <div class="myFlex marginTop" v-for="(player,i) in teamDetail.players" :key="i">
      <div>
        <a :href="player.url" target="_blank">{{player.name}}</a>
      </div>
      <div>
        <p>{{player.position}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["id"],
  data() {
    return {
      id: this.$route.params.id
      // string: this.$route.params.id.toString()
    };
  },
  computed: {
    teamDetail() {
      console.log(this.id);
      // return this.$store.getters.getProductById(this.id);
      return this.$store.state.teams.find(team => team.id == this.id);
    },
    teams() {
      return this.$store.getters.getTeams;
    }
  }
};
</script>
<style scoped>
.alignCenter {
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
}
</style>

