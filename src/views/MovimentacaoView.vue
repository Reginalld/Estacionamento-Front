<template>

    <div class="home">
        <div class="titulo">
            <h1>Movimentações</h1>
        </div>

    <div class="tabela">
        <div class ="tabela2Ponto1">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th id="Movi" scope="col">#</th>
                        <th id="Movi" scope="col">Veiculo</th>
                        <th id="Movi" scope="col">Condutor</th>
                        <th id="Movi" scope="col">Entrada</th>
                        <th id="Movi" scope="col">Saida</th>
                        <th id="Movi" scope="col">Tempo </th>
                        <th id="Movi" scope="col">Tempo Desconto</th>
                        <th id="Movi" scope="col">Tempo Multa</th>
                        <th id="Movi" scope="col">Valor Desconto</th>
                        <th id="Movi" scope="col">Valor Multa</th>
                        <th id="Movi" scope="col">Valor Total</th>
                        <th id="Movi" scope="col">Valor Hora</th>
                        <th id="Movi" scope="col">Valor Hora Multa</th>
                        <th id="Movi" scope="col">Botão</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th id="Movi" scope="row">1</th>
                        <td id="Movi2">POD2IO23</td>
                        <td id="Movi2">Reginaldo</td>
                        <td id="Movi2">19/02/2023 14:00:00</td>
                        <td id="Movi2">19/02/2023 15:00:00</td>
                        <td id="Movi2">01:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">R$05.00</td>
                        <td id="Movi2">R$05.00</td>
                        <td id="Movi2">R$10.00</td>
                        <td id="Movi2">
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th id="Movi" scope="row">2</th>
                        <td id="Movi2">PLU3UD92</td>
                        <td id="Movi2">Douglas</td>
                        <td id="Movi2">19/02/2023 13:00:00</td>
                        <td id="Movi2">19/02/2023 15:00:00</td>
                        <td id="Movi2">02:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">R$10.00</td>
                        <td id="Movi2">R$05.00</td>
                        <td id="Movi2">R$10.00</td>
                        <td id="Movi2">
                    <button type="button" class="btn btn-outline-primary">
                        Excluir
                    </button>
                    <button type="button" class="btn btn-outline-success">
                        Editar
                    </button>
                    </td>
                        </tr>
                        <tr>
                        <th id="Movi" scope="row">3</th>
                        <td id="Movi2">MAD2AD74</td>
                        <td id="Movi2">Carlos</td>
                        <td id="Movi2">19/02/2023 12:00:00</td>
                        <td id="Movi2">19/02/2023 15:00:00</td>
                        <td id="Movi2">03:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00:00:00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">00.00</td>
                        <td id="Movi2">R$15.00</td>
                        <td id="Movi2">R$05.00</td>
                        <td id="Movi2"> R$10.00</td>
                        <td id="Movi2">
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

    .tabelaMovi{
    width: 100%;
  
    display: flex;

    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    }



    .tabela2Movi{
        width: 100%;
    }

    .botaoMovi{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    height: 50px;
  }

  .titulo h1{
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


  #Movi{
    font-size: 14px;
  }

  #Movi2{
    font-size: 14px;
  }


  </style>