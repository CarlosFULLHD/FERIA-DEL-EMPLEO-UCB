<template>
  <v-app id="inspire">
  <div class="app">
    <Navigation />
    <AlertsPopup />
    <router-view />
    <PageFooter />
  </div>
</v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import PageFooter from "@/components/PageFooter.vue";
import AlertsPopup from "@/components/AlertsPopups.vue"
export default {
  name: "App",
  components:{
    Navigation,
    PageFooter,
    AlertsPopup,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>