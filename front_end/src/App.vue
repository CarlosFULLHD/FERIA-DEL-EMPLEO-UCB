<template>
  <div class="app">
    <Navigation />
    <router-view />
    <PageFooter />
  </div>
  
</template>

<script>
import Navigation from "./components/Navigation.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "App",
  components:{
    Navigation,
    PageFooter,
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