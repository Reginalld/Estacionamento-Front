<template>
    <div class="maincadastromo">
      <div class="titulotcadastromo">
        <h1>Cadastro de modelo</h1>
      </div>

      <div class="formulariomo">
        <ul class="list-group">
          <li class="list-group-item">
            <p>Nome do modelo</p>
            <input class="form-control me-2" type="text" />

            <p>Selecione a marca</p>

            <div class="dropdown">
            <button id = "drop" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                Marcas
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Ford</a></li>
                <li><a class="dropdown-item" href="#">Toyota</a></li>
                <li><a class="dropdown-item" href="#">Fiat</a></li>
            </ul>
            </div>

            <div class="botaoconfirmarmodelo">
          <button type="button" onclick="window.location.href='/modelo   '" class="btn btn-outline-danger">
            Cadastrar modelo
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
  
  #drop{

width: 100%;

}


  input{
    margin-bottom: 10px;
    
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