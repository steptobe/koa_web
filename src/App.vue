<template>
  <div id="app">
    <div class="containers">
      <div class="asides">
        <!-- <asideNav /> -->
      </div>
    
      <div class="container">
        <headerNav />
        <router-view />
      </div>
    </div> 
  </div>
</template>

<script>
import headerNav from "./components/header";
import asideNav from "./components/aside";

export default {
  name: "app",
  components: {
    headerNav,
    asideNav
  }
};
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: $bacolor;

  /* margin-top: 60px; */
}
.containers {
  display: flex;
  .container{
    flex:1;
  }
  
}
</style>
