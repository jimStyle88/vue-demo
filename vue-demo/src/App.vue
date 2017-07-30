<template>
  <div><!--这里必须要一个div 包起来，不然会报错-->
    <router-view class="view"></router-view>
    <div class="nav">
      <router-link class="nav-item" :to="{ name: 'pageOne' }">狼人杀</router-link>
      <router-link class="nav-item" :to="{ name: 'pageTwo' }">三国杀</router-link>
      <router-link class="nav-item" :to="{ name: 'pageThree' }">英雄杀</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style type="text/scss" lang="scss">
  @import "assets/css/reset.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav-item {
    flex: 1;
    text-decoration: none;
  }

  .nav-item:link, .nav-item:visited {
    background-color: white;
    color: black;
  }

  .nav-item:hover, .nav-item:active {
    color: white;
    background-color: #C8C6C6;
  }

</style>
