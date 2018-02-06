<template>
    <div>
       <aplayer autoplay :music="musicData" :showlrc="true" v-if="isShow"></aplayer> 
    </div>   
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default {
        data() {
            return {
                musicData: [],
                isShow:false
            }
        },
        components:{
            Aplayer
        },
        mounted:function(){
            axios.get('/static/data/musicdata.json').then(res=>{
                var arr =  res.data.musicData//先把数据扔到空数组
                for(var i=0;i<arr.length;i++){
                    arr[i].lrc = '/static/'+arr[i].lrc;//更改lrc路径
                    //解构
                    var {title,author,src:url,musicImgSrc:pic,lrc}=arr[i];
                    //对象属性简写
                    var obj = {title,author,url,pic,lrc}
                    this.musicData.push(obj)//将改好的属性放到musicData中
                }
                this.isShow = true; 
            })
        }
    }
</script>

<style scoped>

</style>