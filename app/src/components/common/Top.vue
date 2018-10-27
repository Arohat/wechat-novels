<template>
    <div class="com-top" :style="{background:$store.state.bgcolor}">
        <router-link to="/">
            <span class="com-top-btn">返回首页</span>
        </router-link>
            
        <h2>
            {{$store.state.title}}
        </h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
     .com-top{
        height: 1rem;
        background:rgb(27, 26, 26); 
        position: fixed;
        top:0;
        left: 0;
        width: 100%;

    }
    .com-top-btn{
        color: #fff;
        position: absolute;
        left:0.2rem;
        top:50%;
        transform: translateY(-50%);
    }
    .com-top h2{
        font-size: 0.4rem;
        font-weight: bold;
        line-height: 1rem;
        text-align: center;
        color: #fff;
    }
</style>