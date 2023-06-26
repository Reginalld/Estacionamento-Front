<template>

    <div class="home">
        
    <div class="tabela">



        <div id="tudao">

            <div class="titulo">
                <h4>Veículos</h4>
            </div>

            <div class="botao">
                <button type="button" onclick="window.location.href='/cadastroveiculo'" class="btn btn-outline-danger">Cadastrar veículo</button>
            </div>  

        </div>    



        <div class ="tabela2">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Cor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Botão</th>



                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                        <td>IOP2PO98</td>
                        <td>2006</td>
                        <td>Vermelho</td>
                        <td>Carro</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>KLJ2DA42</td>
                        <td>2010</td>
                        <td>Prata</td>
                        <td>Carro</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>MAD2IU82</td>
                        <td>2020</td>
                        <td>Amarelo</td>
                        <td>Carro</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    </td>   
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
</div>

  </template>
  
  <script lang="ts"></script>
  
  <style>

.tabela{
    width: 100%;
  
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;

    }



    #tudao{
        width: 65%;
        
        display: flex;
        justify-content: center;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        margin-top: 5rem;
        
    }

    .tabela2{
        width: 65%;
    }

    .botao {
    display: flex;

    height: 45px;
    
  }

  .titulo h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1px;
    height: 10vh;
  }



  </style>