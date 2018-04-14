<template>
  <div id="app">
    <img src="./assets/logo.png"><br />
    <button @click="goBack()">上一页</button>
    <button @click="goForward()">下一页</button>
    <button @click="goHome()">回到首页</button>
    <router-link to="/">首页</router-link>
    <router-link to="/Test/">测试页面1</router-link>
    <router-link to="/Home/">home</router-link>
    <router-link to="/redirect/5/lisi">redirect to TestUrl</router-link>
    <router-link to="/TestUrl/5/zhangsan">测试URL传参</router-link>
    <router-link to="/abc">alias</router-link>
    <router-link to="/fgh">error</router-link>
    <transition name="xx" mdoe="out in">
      <router-view/><!-- 想当于占位用的 -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);//返回上一页
    },
    goForward(){
      this.$router.go(1);//返回下一页
    },
    goHome(){
      this.$router.push('/');//返回首页
    }
  }
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
.xx-enter{
  opacity: 0;
}
.xx-leave{
  opacity: 1;
}
.xx-enter-active{
  transition: opacity 0.5s;
}
.xx-leave-active{
  opacity: 1s;
  transition: opacity 0.5s;
}
</style>
