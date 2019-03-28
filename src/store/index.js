import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    isAudioPlay:true,
    counter:1
  },
  mutations:{
    change(state){
      state.isAudioPlay=!state.isAudioPlay
    },
    add(state){
      state.counter+=1
    }
  }
})

export default store