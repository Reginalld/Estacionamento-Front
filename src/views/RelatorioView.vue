<template>

    <div class="home">

        <div class="titulo">
            <h1>Relatório</h1>
        </div>
        <div class ="tabela">
        <div class ="tabela2">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Condutor</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Valor Final</th>
                        <th scope="col">Valor Multa</th>
                        <th scope="col">Horas</th>
                        <th scope="col">Desconto</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                        <td>Reginaldo</td>
                        <td>PDF3OI30</td>
                        <td>R$15,00</td>
                        <td>R$00,00</td>
                        <td>02:00:00</td>
                        <td>R$00,00</td>
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
    margin-top: 2rem;
  }



  </style>