import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    dishesGroups: []
  },
  mutations: {
    dishesGroups (state, data) {
      state.dishesGroups = data
    },
    dishesGroup (state, data) {
      state.dishesGroup = data
    }
  },
  actions: {
    getDishesGroups ({ commit }) {
      return request('dishesGroups').then(data => {
        commit('dishesGroups', data)
      })
    },
    getDishesGroup ({ commit }, { id }) {
      return request(`dishesGroups/${id}`).then(data => {
        commit('dishesGroup', data)
        return data
      })
    },
    putDishesGroup ({ commit }, { data }) {
      return request('dishesGroups', 'POST', data);
    },
    updateDishesGroup ({ comit }, { id, data }) {
      return request(`dishesGroups/${id}`, 'PUT', data)
    },
    deleteDishesGroup ({ comit }, { id }) {
      return request(`dishesGroups/${id}`, 'DELETE')
    },
  }
})

function request (url, method = 'GET', data, options) {
  const backUrl = 'http://localhost:3000';

  let _options = {
    method,
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type' : 'application/json; charset=UTF-8'
    }),
    ...options
  };

  if (data) {
    _options.body = JSON.stringify(data); 
  }

  const request = new Request(`${backUrl}/${url}`, _options);

  return fetch(request).then(res => {
    return res.text()
  }).then(text => {
    return Promise.resolve(JSON.parse(text));
  });
}

export default store
