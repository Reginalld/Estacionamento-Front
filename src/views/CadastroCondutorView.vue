<template>
    <div class="maincadastromo">
      <div class="titulotcadastromo">
        <h1>Cadastro de condutor</h1>
      </div>

      <div class="formulariomo">
        <ul class="list-group">
          <li class="list-group-item">

        <div id = "divisao">
            <p>Nome do condutor</p>
            <input id= "inpu" class="form-control me-2" type="text" />
        </div>

        <div id = "divisao">
            <p>CPF</p>
            <input id= "inpu" class="form-control me-2" type="text" />
        </div>

        <div id = "divisao">
            <p>Telefone</p>
            <input id= "inpu" class="form-control me-2" type="text" />
        </div>






        <div id ="divisao">
            <div class="botaoconfirmarmodelo">
          <button type="button" onclick="window.location.href='/condutor'" class="btn btn-outline-danger">
            Cadastrar condutor
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


  #inpu{
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