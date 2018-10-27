<template>
    <div>
        <aplayer autoplay :music="musicObj" :showlrc="true" theme="#b7daff" mode="order" listmaxheight="100%" v-if="isShow"></aplayer>
        <div class="load" v-show="isLoad">
            <img src="@/assets/images/loading.gif" alt="">
        </div>
        <div class="end" v-show="isEnd">
            已经到底了~~~
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';

    export default {
        data() {
            return {
                musicData: [],
                musicObj:{},
                isShow:false,
                isLoad:true,
                isEnd:false,
                flag:true//没有请求
            }
        },
        components: {
            Aplayer
        },
        methods: {
            load(){
                if(this.flag){
                    this.flag = false;
                    axios.get(API_INTERFACE + 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=1&size=20&offset=0').then(res=>{
                        if(res.data.song_list.length < 20){
                            this.isEnd = true;
                        }
                        this.isLoad = false;
                        this.flag = true;
                        this.musicData = [...this.musicData,...res.data.song_list];
                        var arr = this.musicData;
                        arr.forEach((item,index) =>{
                            axios.get(API_INTERFACE + 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.play&songid=' + item.song_id).then(res=>{
                                var key = 'src';
                                var value = res.data.bitrate.show_link;
                                item[key] = value;
                                item.url = item.src.split('?')[0];
                                item.pic = item.pic_big.split('@')[0];
                                item.lrc = item.lrclink;
                                console.log(item);
                            })
                            this.musicObj[index] = item;
                        })
                        this.isShow = true;
                        console.log(this.musicObj);
                    })
                }
            }
        },
        mounted:function() {
            //改变footer top 颜色 标题
            this.$store.commit('change',{bgColor:'rgb(33, 150, 243)',title:'音乐'})
            //axios请求
            this.load();
            window.onscroll = () =>{
                //滚动条滚动高度（页面上）
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //可视区高度
                var clientHeight = document.documentElement.clientHeight;
                //整个页面高度
                var scrollHeight = document.documentElement.scrollHeight;
                if(Math.abs(scrollTop + clientHeight - scrollHeight ) < 1){
                    this.load();
                    this.isLoad = true;
                }
            }
        }
        
    }
</script>

<style scoped>
    .load{
        text-align:center;
    }
    .end{
        text-align:center;
    }
</style>