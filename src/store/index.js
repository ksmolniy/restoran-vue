import Vue from 'vue'
import Vuex from 'vuex'
import {nameToMutations, mutatationNameToActions} from './automatizations'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    dishesGroups: []
  },
  mutations: {
    ...nameToMutations('dishesGroups'),
    ...nameToMutations('dishes'),
  },
  actions: {
    ...mutatationNameToActions('dishesGroups'),
    ...mutatationNameToActions('dishes'),
  }
})


export default store
