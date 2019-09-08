<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <router-link to="/Schedule">
              <v-icon>{{ item.icon }}</v-icon>
            </router-link>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link
          to="/Schedule"
          tag="span"
          style="cursor: pointer"
          class="alignCenter"
        >{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Schedule from "../src/views/Schedule";

export default {
  name: "App",
  data() {
    return {
      appTitle: "NYSL",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/schedule", icon: "home" },
        { title: "Teams", path: "/teams", icon: "trip_origin" },
        { title: "Locations", path: "/locations", icon: "pin_drop" },
        { title: "Sign Up", path: "/login", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" }
      ]
    };
  }
};
</script>

<style >
body,
h1,
p,
h3,
h2 {
  font-family: "Roboto", sans-serif;
}
.alignCenter {
  text-align: center;
}

.marginTop {
  margin-top: 15px;
}
</style>

