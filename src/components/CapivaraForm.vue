<template> 
    <div>
      <h2>Adicionar Nova Capivara</h2>
      <form @submit.prevent="adicionarCapivara">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" v-model="capivara.nome" required />
        </div>
        <div>
          <label for="idade">Idade:</label>
          <input type="number" v-model="capivara.idade" required />
        </div>
        <div>
          <label for="peso">Peso (kg):</label>
          <input type="number" v-model="capivara.peso" required />
        </div>
        <div>
          <label for="statusSaude">Status de Saúde:</label>
          <input type="text" v-model="capivara.status_saude" required />
        </div>
        <div>
          <label for="habitat">Habitat:</label>
          <input type="text" v-model="capivara.habitat" required />
        </div>
        <button type="submit">Adicionar Capivara</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        capivara: {
          nome: '',
          idade: '',
          peso: '',
          status_saude: '',
          habitat: '',
        },
      };
    },
    methods: {
      adicionarCapivara() {
        fetch('http://localhost:3000/api/capivaras', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.capivara),
        })
          .then((response) => response.json())
          .then(() => {
            alert('Capivara adicionada com sucesso!');
            this.capivara = { nome: '', idade: '', peso: '', status_saude: '', habitat: '' }; // Limpa o formulário
          })
          .catch((error) => console.error('Erro ao adicionar capivara:', error));
      },
    },
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  