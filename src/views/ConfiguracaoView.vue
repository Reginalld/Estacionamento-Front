<template>

    <div class="home">
        <div class="titulo">
            <h1>Configurações</h1>
        </div>

    <div class="tabelaConfig">
        <div class ="tabela2Config">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">ValorHora</th>
                        <th scope="col">ValorMinutoMulta</th>
                        <th scope="col">InicioExpediente</th>
                        <th scope="col">FimExpediente</th>
                        <th scope="col">TempoParaDesconto </th>
                        <th scope="col">TempoDeDesconto</th>
                        <th scope="col">GerarDesconto</th>
                        <th scope="col">Vagas Moto</th>
                        <th scope="col">Vagas Carro</th>
                        <th scope="col">Vagas Van</th>
                        <th scope="col">Botão</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                        <td>R$05,00</td>
                        <td>R$00,50</td>
                        <td>09:00:00</td>
                        <td>22:00:00</td>
                        <td>50:00:00</td>
                        <td>02:00:00</td>
                        <td>Sim?</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
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

    .tabelaConfig{
    width: 100%;
  
    display: flex;

    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    }

    .tabela2Config{
        width: 100%;
    }

    .botaoConfig{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    height: 50px;
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
    margin: 2rem;
  }



  </style>