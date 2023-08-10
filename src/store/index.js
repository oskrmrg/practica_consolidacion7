import Vue from 'vue'
import Vuex from 'vuex'
import datos_cursos from './cursos_module';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue),
Vue.use(BootstrapVueIcons)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    datos_cursos,
  }
})
