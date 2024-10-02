import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    fetch('http://localhost:3000/api/capivaras')
      .then(response => response.json())
      .then(data => {
        this.$store.commit('setCapivaras', data)
      })
      .catch(error => console.error('Erro ao carregar capivaras:', error))
  }
}).$mount('#app')

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    capivaras: []
  },
  mutations: {
    setCapivaras(state, capivaras) {
      state.capivaras = capivaras
    }
  }
})

export default store
