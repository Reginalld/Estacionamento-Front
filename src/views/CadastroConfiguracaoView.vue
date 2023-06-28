<template>

    <div class="container" style="background: ;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar de Configuração </p> </div>
        <div class="col-md-2"> </div>
      </div>
  
      <hr/>
  
      <div v-if="mensagem.ativo" class="row">
        <div class="col-md-12 text-start">
          <div :class="mensagem.css" role="alert">
            <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">ValorHora*</label>
          <input type="number"  class="form-control" v-model="configuracao.valorHora">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">ValorMinutoMulta*</label>
          <input type="number"  class="form-control" v-model="configuracao.valorMinutoMulta">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">InicioExpediente*</label>
          <input type="time"  class="form-control" v-model="configuracao.inicioExpediente">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">FimExpediente*</label>
          <input type="time"  class="form-control" v-model="configuracao.fimExpediente">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">TempoParaDesconto*</label>
          <input type="time"  class="form-control" v-model="configuracao.tempoParaDesconto">
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">TempoDeDesconto*</label>
          <input type="time"  class="form-control" v-model="configuracao.tempoDeDesconto">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">GerarDesconto*</label>
          <input type="boolean"  class="form-control" v-model="configuracao.gerarDesconto">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">VagasMoto*</label>
          <input type="number"  class="form-control" v-model="configuracao.vagasMoto">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">VagasCarro*</label>
          <input type="number"  class="form-control" v-model="configuracao.vagasCarro">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">VagasVan*</label>
          <input type="number"  class="form-control" v-model="configuracao.vagasVan">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 offset-md-6"> 
          <div id = "volta" class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" 
              to="/configuracao">Voltar
            </router-link>
          </div>
        </div>
        <div class="col-md-3 "> 
          <div class="d-grid gap-2">
            <button v-if="form === undefined" type="button" 
                class="btn btn-success" @click="onClickCadastrar()">
              Cadastrar 
            </button>
            <button v-if="form === 'editar'" type="button" 
                class="btn btn-warning" @click="onClickEditar()">
              Editar 
            </button>
            <button v-if="form === 'delete' " type="button"
              class="btn btn-danger" @click="onClickExcluir()">
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  

  import { defineComponent } from 'vue';

  import ConfiguracaoClient from '@/client/configuracao.client';

  import { Configuracao } from '@/model/configuracao';
  
  export default defineComponent({
  name: 'ConfiguracaoFormulario',
  data() {
    return { 
      configuracao: new Configuracao(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    }
  },
  mounted() { 
  
    if(this.id !== undefined){
      this.findById(Number(this.id));
    }
  
  
  
  },
  methods: {
  
    onClickCadastrar(){
      ConfiguracaoClient.cadastrar(this.configuracao)
        .then(sucess => {
          this.configuracao = new Configuracao()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          console.log(error);
        });
    },
    findById(id: number){
      ConfiguracaoClient.findById(id)
        .then(sucess => {
          this.configuracao = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
        .then(sucess => {
          this.configuracao = new Configuracao()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      ConfiguracaoClient.delete(this.configuracao.id)
        .then(sucess => {
          this.configuracao = new Configuracao()
          
          this.$router.push({ name: 'configuracao-lista-view' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
  });
  
  </script>
  
  
  <style>
  .maincadastroma {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastroma {
    width: 100%;
    height: 25vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formularioma {
    height: 30vh;
    width: 35%;
  }
  
  .seletordemarca {
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    opacity: 0.7;
  }
  
  .botaoconfirmarmarca {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 50px;
  }
  
  .botaoconfirmarmarca button{
  
    margin-left: 5px;
  
  }
  </style>
  