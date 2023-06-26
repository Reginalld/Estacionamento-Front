<template>

    <div class="home">

    <div class="tabela">
        <div id="tudao">

                <div class="titulo">
                    <h4>Condutores</h4>
                </div>
                <div id ="separa">

                </div>
                <div class="botao">
                    <button type="button" onclick="window.location.href='/cadastrocondutor'" class="btn btn-outline-danger">Cadastrar condutor</button>
                </div>  

            </div>
        <div class ="tabela2">
                    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cpf</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Tempo Pago</th>
                        <th scope="col">Tempo Desconto</th>
                        <th scope="col">Botão</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                        <td>Reginaldo</td>
                        <td>872-323-233.78</td>
                        <td>(45)99823-8742</td>
                        <td>23:32:12</td>
                        <td>00:00:00</td>
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
                        <td>Douglas</td>
                        <td>645-234-122.44</td>
                        <td>(45)99832-1534</td>
                        <td>43:12:43</td>
                        <td>02:00:00</td>
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
                        <td>Pedro</td>
                        <td>923-423-123.22</td>
                        <td>(45)99843-0923</td>
                        <td>04:12:43</td>
                        <td>01:00:00</td>
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

h5{
    text-decoration: dashed;
    
  }

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