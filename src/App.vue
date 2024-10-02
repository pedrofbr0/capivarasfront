<template>
  <div id="app">
    <h1>Capivara Manager</h1>

    <!-- Abas para navegar entre pesquisa e cadastro -->
    <div class="tabs">
      <button :class="{ active: currentTab === 'pesquisar' }" @click="currentTab = 'pesquisar'">
        Pesquisar Capivaras
      </button>
      <button :class="{ active: currentTab === 'cadastrar' }" @click="currentTab = 'cadastrar'">
        Cadastrar Capivara
      </button>
    </div>

    <!-- Exibir o conteúdo de acordo com a aba selecionada -->
    <div v-if="currentTab === 'pesquisar'">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Pesquisar capivaras..."
        class="search-bar"
      />
      <CapivaraList :capivaras="filteredCapivaras" />
    </div>

    <div v-if="currentTab === 'cadastrar'">
      <CapivaraForm @add-capivara="fetchCapivaras" />
    </div>
  </div>
</template>

<script>
import CapivaraList from './components/CapivaraList.vue';
import CapivaraForm from './components/CapivaraForm.vue';

export default {
  name: 'App',
  components: {
    CapivaraList,
    CapivaraForm,
  },
  data() {
    return {
      currentTab: 'pesquisar',
      capivaras: [],
      searchTerm: '',
    };
  },
  computed: {
    filteredCapivaras() {
      return this.capivaras.filter((capivara) =>
        capivara.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchCapivaras();
  },
  methods: {
    fetchCapivaras() {
      fetch('http://localhost:3000/api/capivaras')
        .then((response) => response.json())
        .then((data) => {
          this.capivaras = data;
        })
        .catch((error) => console.error('Erro ao carregar capivaras:', error));
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h1 {
  color: #4caf50;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tabs button.active {
  background-color: #388e3c;
}

.tabs button:hover {
  background-color: #388e3c;
}

.search-bar {
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  border: 2px solid #4caf50;
  border-radius: 5px;
  text-align: center;
  color: #333;
  background-color: #f0f4f3;
}

.search-bar:focus {
  border-color: #388e3c;
  outline: none;
}

@media (max-width: 600px) {
  .tabs button {
    width: 100%;
    margin-bottom: 10px;
  }
  .search-bar {
    width: 100%;
  }
}

/* Estilização adicional para o formulário e os cards de capivara */
form div {
  margin-bottom: 15px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #388e3c;
}

.capivaras-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.capivara-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.capivara-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.capivara-card h2 {
  color: #4caf50;
  font-size: 1.5em;
}
</style>
