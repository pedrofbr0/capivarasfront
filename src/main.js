import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);

// Defina a store usando a API correta para Vuex com Vue 3
const store = createStore({
  state: {
    capivaras: []
  },
  mutations: {
    setCapivaras(state, capivaras) {
      state.capivaras = capivaras;
    }
  }
});

// Adicione a store ao app
app.use(store);

// Se a propriedade productionTip ainda existir no Vue 3
// app.config.productionTip = false;

// Monte o app
app.mount('#app');

// Fetch de dados pode ser feito no ciclo de vida ou no componente diretamente
app.mounted(() => {
  fetch('http://localhost:3000/api/capivaras')
    .then(response => response.json())
    .then(data => {
      store.commit('setCapivaras', data);
    })
    .catch(error => console.error('Erro ao carregar capivaras:', error));
});

export default store
