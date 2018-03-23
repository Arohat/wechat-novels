<template>
  <div id="app">
    <img src="./assets/logo.png"><br />
    <router-link to="/">首页</router-link>
    <router-link to="/Test/">测试页面1</router-link>
    <router-link to="/TestUrl/5/zhangsan">测试URL传参</router-link>
    <router-view/><!-- 想当于占位用的 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
