<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar de Modelo </p> </div>
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
            <label for="recipient-name" class=" row m-auto col-form-label">Nome da Marca:</label>
            <select type="text" v-model="modelo.marca"><option v-for="item in marca" :value="item">{{ item.nome }} </option></select>
        </div>
        <div class="col-md-12 text-start">
          <label class="form-label">Nome do Modelo</label>
          <input type="text"  class="form-control" v-model="modelo.nome">
        </div>  
      </div>


    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div id = "volta" class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/modelo">Voltar
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
import { Marca } from '@/model/marca';
import { Modelo } from '@/model/modelo';
import { defineComponent } from 'vue';
import  MarcaClient  from '@/client/marca.client'

export default defineComponent({
  name: 'ModeloFormulario',
  data() {
    return { 
      modelo: new Modelo(),
      marca:  new Array<Marca>(),
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
    this.findAllMarca();  

  },
  methods: {

    findAllMarca(){
      MarcaClient.listaAll().then(sucess =>{
        this.marca = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    onClickCadastrar(){
      ModeloClient.cadastrar(this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()

          
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
      ModeloClient.findById(id)
        .then(sucess => {
          this.modelo = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      ModeloClient.editar(this.modelo.id, this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
          
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
      ModeloClient.delete(this.modelo.id)
        .then(sucess => {
          this.modelo = new Modelo()
          
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
    }
  }
});


</script>



<style>

.div-select {
    width: 250px;
    /* Tamanho final do select */
    overflow: hidden;
    /* Esconde o conteúdo que passar do tamanho especificado */
}

.div-select select {
    background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-select.gif) no-repeat #354880;
    /* Imagem de fundo (Seta) */
    background-position: 205px center;
    /*Posição da imagem do background*/
    width: 270px;
    /* Tamanho do select, maior que o tamanho da div "div-select" */
    height: 48px;
    /* altura do select, importante para que tenha a mesma altura em todo os navegadores */
    font-family: Arial, Helvetica, sans-serif;
    /* Fonte do Select */
    font-size: 18px;
    /* Tamanho da Fonte */
    padding: 13px 20px 13px 12px;
    /* Configurações de padding para posicionar o texto no campo */
    color: #fff;
    /* Cor da Fonte */
    text-indent: 0.01px;
    /* Remove seta padrão do FireFox */
    text-overflow: "";
}

/* Remove seta padrão do FireFox */
.div-select select::-ms-expand {
    display: none;
}
/* Remove seta padrão do IE*/
</style>
