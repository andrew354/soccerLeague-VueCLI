import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueChatScroll from "vue-chat-scroll";

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

new Vue({
  router,
  store,
  render: h => h(App),
  // created() {
  //   store.dispatch("loadTeams");
  // }
  created() {
    store.dispatch("loadMatches")

  }
}).$mount("#app");