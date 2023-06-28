<template>
  <main class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row justify-content-center">

      <div class="container border border-black rounded-3 w-35 z-3 bg-white py-2">
        <div class="row mb-2 px-2 align-items-center">
            <h2> Movimentação {{ movimentacao.id }}</h2>
        </div>

        <div class="row px-2">
          <p class="text-start">Situação: {{ movimentacao.ativo  ? 'Aberta' : 'Finalizada' }}</p>
          <p class="text-start">Nome do condutor: {{ condutor.nome }}</p>  
          <p class="text-start">CPF do condutor: {{ condutor.cpf }}</p>
          <p class="text-start">Placa do veículo: {{ veiculo.placa }}</p>
          <p class="text-start">Horário de entrada: {{ movimentacao.entrada }}</p>
          <p class="text-start">Horário de saída: {{ movimentacao.saida ? movimentacao.saida : 'Movimentação em aberto' }}</p>
          <p class="text-start">Valor total: R$ {{ movimentacao.valorTotal ? movimentacao.valorTotal : 'Movimentação em aberto' }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-3"> 
        <div id = "volta" class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/">Voltar
          </router-link>
        </div>    
      </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MovimentacaoClient from '@/client/movimentacao.client';
import { Movimentacao } from '@/model/movimentacao';

import { Condutor } from '@/model/condutor';
import condutorClient from '@/client/condutor.client';

import { Veiculo } from '@/model/veiculo';
import veiculoClient from '@/client/veiculo.client';

export default defineComponent({
  name: 'ListaMovimentacao',
  data() {
    return {
        condutor : new Condutor(),
        movimentacao: new Movimentacao(),
        veiculo : new Veiculo(),
        id: this.$route.query.id
    };
  },
  created() {
    this.findById();
    this.findByIdCondutor();
    this.findByIdVeiculo();
  },
  methods: {
    findById() {
      MovimentacaoClient.findById(Number(this.id)).then(success => this.movimentacao = success);
    },
    findByIdCondutor(){
        condutorClient.findById(Number(this.id)).then(success => this.condutor = success);
    },
    findByIdVeiculo(){
        veiculoClient.findById(Number(this.id)).then(success => this.veiculo = success);
    }
  }
});
</script>

<style scoped>

main{
    display: flex;
    align-items: center;
    flex-direction: column;
}

#volta{
    margin-bottom: 20px;
}

  th, td {
    vertical-align: middle;
  }

  main{
    width: 100%;
  }
  .w-35 {
    width: 35%;
    margin-top: 57.5px;
    margin-bottom: 50;
  }
</style>
