<template>
    <div class="test">
        <h2>我是测试页面</h2>
        <router-link :to="{name:'SubTest1',params:{id:2,name:'xx'}}">测试子路由1</router-link>
        <router-link to="/SubTest2/">测试子路由2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .test{
        height: 300px;
        background: #f00;
    }
</style>