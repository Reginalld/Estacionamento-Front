<template>
    <div class="maincadastromo">
      <div class="titulotcadastromo">
        <h1>Cadastro de marca</h1>
      </div>

      <div class="formulariomo">
        <ul class="list-group">
          <li class="list-group-item">
            <p>Nome da Marca</p>
            <input class="form-control me-2" type="text" />

            <div class="botaoconfirmarmodelo">

          <button type="button" onclick="window.location.href='/marca   '" class="btn btn-outline-danger">
            Cadastrar marca
          </button>
        </div>
          </li>
          
         
          
        </ul>
      </div>
    </div>
  </template>
  
  <style>
  .maincadastromo {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastromo {
    width: 100%;
    height: 25vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formulariomo  {
    height: 30vh;
    width: 20%;
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