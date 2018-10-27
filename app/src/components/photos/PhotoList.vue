<template>
    <ul class="photoData">
        <Li v-for="(obj,index) in photoData" :key="index">
            <router-link :to="'/photoDetail/'+index">
                <img :src="obj.src" alt="">
            </router-link>
        </Li>
    </ul>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                photoData: []
            }
        },
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(63, 81, 181)',title:'图片'});
            //ajax
            axios.get('/static/data/photodata.json').then(res=>{
                this.photoData = res.data.photoData;
                this.$store.state.photoData = this.photoData;
            })
        }
    }
</script>

<style scoped>
    .photoData{
        overflow: hidden;
    }
    .photoData li{
        width: 50%;
        float: left;
    }
    .photoData li img{
        width: 100%;
    }
</style>