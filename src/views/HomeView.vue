<template>

    <div class="home">
    <div class="tabela">

        <div id="tudao">

        <div class="titulo">
            <h4>Movimentações em aberto  </h4>
        </div>

        <div class="botao">
            <button type="button" onclick="window.location.href='/cadastromovimentacao'" class="btn btn-outline-danger">Cadastrar movimentação</button>
        </div>  

        </div>  



        <div class ="tabela2">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Entrada</th>
                        <th scope="col">Botão</th>



                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                        <td>Reginaldo</td>
                        <td>PDF3OI30</td>
                        <td>Ford</td>
                        <td>Focus</td>
                        <td>19/06/2023 13:23:12</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    <button onclick="window.location.href='/relatorio'" type="button" class="btn btn-outline-danger">
                        Finalizar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Douglas</td>
                        <td>OPR2IU23</td>
                        <td>Fiat</td>
                        <td>Palio</td>
                        <td>19/06/2023 11:24:55</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    <button onclick="window.location.href='/relatorio'" type="button" class="btn btn-outline-danger">
                        Finalizar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Pedro</td>
                        <td>IOL2OW32</td>
                        <td>Puma</td>
                        <td>GTB</td>
                        <td>19/06/2023 18:23:12</td>
                        <td>
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    <button onclick="window.location.href='/relatorio'" type="button" class="btn btn-outline-danger">
                        Finalizar
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