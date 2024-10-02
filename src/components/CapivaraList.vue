<template>
  <div class="capivaras-container">
    <div v-for="capivara in capivaras" :key="capivara.id" class="capivara-card">
      <h2>{{ capivara.nome }}</h2>
      <ul>
        <li><strong>Idade:</strong> {{ capivara.idade }} anos</li>
        <li><strong>Peso:</strong> {{ capivara.peso }} kg</li>
        <li><strong>Status de Saúde:</strong> {{ capivara.statusSaude }}</li>
        <li><strong>Habitat:</strong> {{ capivara.habitat }}</li>
        <li><strong>Comportamento:</strong> {{ capivara.comportamento }}</li>
        <li><strong>Dieta:</strong> {{ capivara.dieta }}</li>
        <li><strong>Observações:</strong> {{ capivara.observacoes }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapivaraList',
  props: {
    capivaras: Array
  }
}
</script>

<style scoped>
.capivaras-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.capivara-card {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>