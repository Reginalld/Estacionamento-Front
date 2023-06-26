<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar de Veiculo </p> </div>
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
          <label class="form-label">Placa</label>
          <input type="text"  class="form-control" v-model="veiculo.placa">
        </div>  
        <div class="col-md-12 text-start">
            <label for="recipient-name" class=" row m-auto col-form-label">Nome do Modelo:</label>
            <select type="text" v-model="veiculo.modelo"><option v-for="item in modelo" :value="item">{{ item.nome }} </option></select>
        </div>
        <div class="col-md-12 text-start">
          <label class="form-label">Ano</label>
          <input type="int"  class="form-control" v-model="veiculo.ano">
        </div>
        <div class="col-md-12 text-start">
            <label for="recipient-name" class=" row m-auto col-form-label">Cor:</label>
            <select type="text" v-model="veiculo.cor"><option v-for="item in cor" :value="item">{{ item }} </option></select>
        </div>
        <div class="col-md-12 text-start">
            <label for="recipient-name" class=" row m-auto col-form-label">Tipo:</label>
            <select type="text" v-model="veiculo.tipo"><option v-for="item in tipo" :value="item">{{ item }} </option></select>
        </div>
      </div>


    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/veiculo">Voltar
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
          <button v-if="form === 'delete'" type="button"
            class="btn btn-danger" @click="onClickExcluir()">
            Excluir 
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import ModeloClient from '@/client/modelo.client'; 
import { Modelo } from '@/model/modelo';
import { defineComponent } from 'vue';
import { Veiculo } from '@/model/veiculo';
import  VeiculoClient  from '@/client/veiculo.client';
import { Cor } from '@/model/cor';
import { Tipo } from '@/model/tipo';

export default defineComponent({
  name: 'VeiculoFormulario',
  data() {
    return { 
      veiculo: new Veiculo(),
      modelo:  new Array<Modelo>(),
      cor: Cor,
      tipo: Tipo,
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
    this.findAllModelo();  

  },
  methods: {

    findAllModelo(){
      ModeloClient.listaAll().then(sucess =>{
        this.modelo = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    onClickCadastrar(){
      VeiculoClient.cadastrar(this.veiculo)
        .then(sucess => {
          this.veiculo = new Veiculo()

          
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
    findById(id: number){
      VeiculoClient.findById(id)
        .then(sucess => {
          this.veiculo = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      VeiculoClient.editar(this.veiculo.id, this.veiculo)
        .then(sucess => {
          this.veiculo = new Veiculo()
          
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
      VeiculoClient.delete(this.veiculo.id)
        .then(sucess => {
          this.veiculo = new Veiculo()
          
          this.$router.push({ name: 'veiculo-lista-view' });
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
