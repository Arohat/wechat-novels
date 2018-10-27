<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
        </swipe>
    </div>
</template>

<script>
    import vueswipe from "vue-swipe/dist/vue-swipe.css";
    import { Swipe, SwipeItem } from "vue-swipe";
    export default {
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(121, 85, 72)',title:'书籍'});
        },
        components:{
            Swipe,
            SwipeItem
        }
    };
</script>

<style scoped>
.my-swipe {
  height: 200px;
}

.slide1 {
    background-image: url(../../assets/images/1.jpg);
    background-size: cover;
}

.slide2 {
    background-image: url(../../assets/images/2.jpg);
    background-size: cover;
}

.slide3 {
    background-image: url(../../assets/images/3.jpg);
    background-size: cover;
}

.slide4 {
    background-image: url(../../assets/images/4.jpg);
    background-size: cover;
}

.slide5 {
    background-image: url(../../assets/images/5.jpg);
    background-size: cover;
}
</style>