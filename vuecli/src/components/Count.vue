<template>
    <div>
        {{$store.state.num}}--
        <!-- {{count}}-- -->
        {{num}}
        <button @click="add()">+1</button>
        <button @click="reduce()">-1</button>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'vuex'
    export default {
        store,
        /*  方法一：
            computed:{
            count(){
                return this.$store.state.num;
            }
        } */
        /*  方法二：
            computed:mapState({
            count(state){
                return state.num;
            }
        }) */
        computed:mapState(['num']),//方法三：
        methods:mapMutations(['add','reduce']),
        
        
    }
</script>

<style scoped>

</style>