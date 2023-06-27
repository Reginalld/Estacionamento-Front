<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3"> Configuração </p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/cadastroconfiguracao">Cadastrar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table">
            <thead class="table-secondary" >
              <tr>
                <th scope="col">ID</th>
                <th scope="col" class="text-start">ValorHora</th>
                <!-- <th scope="col" class="text-start">ValorMinutoMulta</th>
                <th scope="col" class="text-start">InicioExpediente</th>
                <th scope="col" class="text-start">FimExpediente</th>
                <th scope="col" class="text-start">TempoParaDesconto</th>
                <th scope="col" class="text-start">TempoDeDesconto</th>
                <th scope="col" class="text-start">GerarDesconto</th>
                <th scope="col" class="text-start">VagasMoto</th>
                <th scope="col" class="text-start">VagasVan</th>
                <th scope="col" class="text-start">VagasMoto</th> -->

                <th scope="col">Opção</th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              
              <tr v-for="item in configuracaoLista" :key="item.id">
                <th class="col-md-1">{{ item.id }}</th>
                <th class="text-start">{{ item.valorHora}}</th>
                <!-- <th class="text-start">{{ item.valorMinutoMulta}}</th>
                <th class="text-start">{{ item.inicioExpediente}}</th>
                <th class="text-start">{{ item.fimExpediente}}</th>
                <th class="text-start">{{ item.tempoParaDesconto}}</th>
                <th class="text-start">{{ item.tempoDeDesconto}}</th>
                <th class="text-start">{{ item.gerarDesconto}}</th>
                <th class="text-start">{{ item.vagasMoto}}</th>
                <th class="text-start">{{ item.vagasVan}}</th>
                <th class="text-start">{{ item.vagasMoto}}</th> -->
                <th class="col-md-2">
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <router-link type="button" class="btn btn-sm btn-warning" 
                        :to="{ name: 'configuracao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                      Editar 
                    </router-link>
                    <router-link type="button" class="btn btn-sm btn-danger" 
                        :to="{ name: 'configuracao-formulario-excluir-view', query: { id: item.id, form: 'delete' } } ">
                      Excluir
                    </router-link>
                  </div>
                </th>
              </tr>
  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  import  ConfiguracaoClient  from '@/client/configuracao.client';
  import { Configuracao } from '@/model/configuracao';
  
  export default defineComponent({
    name: 'ConfiguracaoLista',
    data() {
      return {
          configuracaoLista: new Array<Configuracao>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        ConfiguracaoClient.listaAll()
          .then(sucess => {
            this.configuracaoLista = sucess
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  });
  
  </script>

<style scoped>

    th{
        font-size: 12px;
    }    

</style>    