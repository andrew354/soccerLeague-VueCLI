<template>
  <div class="class container">
    <div class="class card login">
      <div class="class card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Please enter your name.."
              name="name"
              v-model="name"
            >
            <p v-if="errorText" class="text-danger">{{errorText}}</p>
          </div>
          <button type="submit" class="btn btn-primary">Enter chat</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      errorText: null ////if it is null, since there is the v-if, the errorText is not displayed
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } }); ///// check if the name of the user has been entered
      } else {
        this.errorText = " Please entere a name";
      }
    }
  }
};
</script>
<style scoped>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

