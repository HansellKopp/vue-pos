import Vue from 'vue'
import Vuex from 'vuex'
import vueResource from 'vue-resource'
import products  from './products'

Vue.use(Vuex)
Vue.use(vueResource)


export function createStore () {
  return new Vuex.Store({
    state: {},

    actions: {},

    mutations: {},

    getters: {},

    modules: {
      products
    }
  })
}