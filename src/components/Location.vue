<template>
  <div>
    <div class="fullWidthBar">
      <h2 class="alignCenter">LOCATION</h2>
    </div>
    <div class="align" v-for="(team,i) in teams" :key="i">
      <h1>{{team.teamName}}</h1>
      <h2>{{team.stadium}}</h2>
      <iframe
        class="align"
        width="300"
        height="250"
        :src="team.location"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["team"],
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>
<style >
.alignCenter {
  text-align: center;
}
.align {
  text-align: center;
  margin-top: 20px;
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
}
</style>
