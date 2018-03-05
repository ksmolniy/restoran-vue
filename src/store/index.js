import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const backUrl = 'localhost:3000';

const store = new Vuex.Store({
  state: {
    dishesGroups: []
  },
  mutations: {
    getDishesGroups (state) {
      fetch(`${backUrl}/dishesGroups`,{method: 'GET'}).then(res => {
        return res.json();
      }).then(data => {
        state.dishesGroups = data
      });
    }
  }
})

export default store
