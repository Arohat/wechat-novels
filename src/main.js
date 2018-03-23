// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//引入vue.js文件
import App from './App'//引入App.vue文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//把App.vue作为一个组件
  template: '<App/>'//模板里调用App.vue这个组件
})
