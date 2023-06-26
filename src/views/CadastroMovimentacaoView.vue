<template>
    <div class="maincadastromo">
      <div class="titulotcadastromo">
        <h1>Cadastro de movimentação</h1>
      </div>

      <div class="formulariomo">
        <ul class="list-group">
          <li class="list-group-item">

            <div id ="divisao">
                <p>Selecione o veiculo</p>
                <div class="dropdown">
                <button id = "drop" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                    Placas
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">POF2IO90</a></li>
                    <li><a class="dropdown-item" href="#">MNX2LK78</a></li>
                    <li><a class="dropdown-item" href="#">DAS3DA23</a></li>
                </ul>
            </div>
        </div>

        <div id ="divisao">
                <p>Selecione o condutor</p>
                <div class="dropdown">
                <button id = "drop" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                    Condutores
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Reginaldo</a></li>
                    <li><a class="dropdown-item" href="#">Douglas</a></li>
                    <li><a class="dropdown-item" href="#">Carlos</a></li>
                </ul>
            </div>
        </div>

        <div id ="divisao">
            <p>Horário de entrada</p>
                <input class="form-control me-2" type="text" />
        </div>



        <div id ="divisao">
            <div class="botaoconfirmarmodelo">
          <button type="button" onclick="window.location.href='/'" class="btn btn-outline-danger">
            Cadastrar movimentação
          </button>

        </div>

        

    </div>
          </li>
          
         
          
        </ul>
      </div>
    </div>
  </template>
  
  <style>

  #drop{

    width: 100%;

  }

  #divisao{
    margin-bottom: 10px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }


  .maincadastromo {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastromo {
    width: 100%;
    height: 10  vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }


  input{
    margin-bottom: 10px;
  }
  
  .formulariomo  {

    width: 20%;
    margin-bottom: 100px;
  }
  
  .seletordemarca {
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    opacity: 0.7;
  }
  
  .botaoconfirmarmodelo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  </style>