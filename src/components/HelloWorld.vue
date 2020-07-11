<template>
  
   <div class="container">                   
          <div class="container__title">
            <h1>
                PREGUNTAS
            </h1>
        </div> 
         <div class="container__reto">
            <ul>
                <li class="reto__title">PREGUNTAS 1</li>
                    <ul>
                        <li>
                            1.-¿Cuáles son las responsabilidades de un manejador de rutas?
                        </li>  
                        <li>
                            2.- ¿Para qué sirve un manejador de rutas?
                        </li> 
                        <li>
                            3.- Describir el proceso, que se realiza en el ambito de front para logearse en un sistema.
                        </li>                                              
                   </ul>                 
            </ul>           
        </div> 
         <div class="container__menu">
                  <div class="container__opciones">
                       <div>
                           <a href="./reto1.html" class="container__button__reto">VER RETO 1</a>
                       </div>
                    <div>
                        <a href="./reto2.html" class="container__button__reto">VER RETO  2</a>
                    </div>
                  </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .container {
    display: block;
    width: 600px;
    margin: 10px auto 0;
    border-radius: 34px 34px 34px 34px;
    -moz-border-radius: 34px 34px 34px 34px;
    -webkit-border-radius: 34px 34px 34px 34px;
    border: 3px solid #000000;
    background-color: #fff;
  }
  
  .container__title {
    padding: 1px;
    background-color: rgb(0, 4, 37);
    color: #f2f2f2;
    text-align: center;
    border-radius: 34px 34px 0px 0px;
    -moz-border-radius: 34px 34px 0px 0px;
    -webkit-border-radius: 25px 25px 0px 0px;
  } 
 
  
  .reto__title {
    font-weight: bold;
    color: #000000;
    text-align: left;
  }

li {
  color: #000000;
    text-align: left;
}

  
  .container__menu {
    height: inherit;
    border-radius: 0px 0px 34px 34px;
    -moz-border-radius: 0px 0px 34px 34px;
    -webkit-border-radius: 0px 0px 32px 32px;
    background-color: #2efe9a;
  }
  
  .container__opciones{
    padding: 20px;
    width: 50%;
    height: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;     
    justify-content: space-between;
    text-align: center;
  }

  .container__button__reto{
      padding: 10px;
      text-decoration: none;
      font-weight: bold;
      background-color: rgb(0, 4, 37);
      border-radius: 5px;
      color: #fff;
  }
 .container__button__reto:hover{  
     background-color: #fff;
     color: rgb(0, 4, 37);
  }
  
 
</style>
