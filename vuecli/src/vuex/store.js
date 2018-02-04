import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {//固定的值
    num : 5,
    x:10
}

const mutations = {//要改变的
    add(state){
        state.num++;
    },
    reduce(state,n){
        state.num-=n;
    }
}


export default new Vuex.Store({
    state,
    mutations
});
