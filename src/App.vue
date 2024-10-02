<template>
  <div id="app">
    <h1>Capivara Manager</h1>
    <CapivaraForm @add-capivara="fetchCapivaras" />
    <CapivaraList :capivaras="capivaras" />
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
      capivaras: [],
    };
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