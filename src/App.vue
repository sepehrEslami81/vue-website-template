<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "./styles/style.css";
</style>

<style lang="scss">
@import "./styles/style.scss";
</style>
