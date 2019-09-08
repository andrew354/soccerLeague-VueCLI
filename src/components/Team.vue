<template>
  <div>
    <router-link :to="`/teamdetail/${team.id}`">
      <div class="spaceImg border myFlex">
        <img v-bind:src="team.logo">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["team"],
  computed: {
    teamDetail() {
      return this.$store.getters.getTeamById(id);
    }
  }
};
</script>
<style scoped>
.fullWidthBar {
  background-color: rgb(19, 19, 56);
  width: 100%;
  height: 30px;
  top: 0px;
}
.title {
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
}
.flexWrap {
  display: flex;
  flex-wrap: wrap;
}
.myFlex {
  display: flex;
  justify-content: flex-start;
}
</style>
