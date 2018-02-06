<template>
    <v-touch class="photo" @swipeleft="next" @swiperight="prev" :style="{background:bg}">
        <!-- {{$route.param.idx}}
        {{$store.state.photoData}} -->
        <!-- 因为tap会造成点透，click有延迟,所以用路由 -->
        <router-link class="link" to="/photoList"></router-link>
    </v-touch>
</template>

<script>
    import VueTouch from "vue-touch";
    import Vue from 'vue';
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data() {
            return {
                idx: this.$route.params.idx
            }
        },
        components:{
            VueTouch
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx == this.$store.state.photoData.length){
                    this.idx = 0;
                }
                this.$router.push('/photoDetail/'+this.idx);//改地址
            },
            prev(){
                this.idx--;
                if(this.idx == -1){
                    this.idx = this.$store.state.photoData.length - 1;
                }
                this.$router.push('/photoDetail/'+this.idx);
            },
            // fn(){//利用touch的时候使用
            //     this.$router.push('/photoList');
            // }
        },
        computed:{
            bg:function(){
                //利用拓展运算符
                return `#000 url(${this.$store.state.photoData[this.idx].src}) no-repeat center/contain`;
            }
        }
    }
</script>

<style scoped>
    .photo{
        position: absolute;
        left: 0;
        right: 0;
        top: 1rem;
        bottom: 1rem;
    }
    .link{
        display: block;
        height: 100%;
    }
</style>