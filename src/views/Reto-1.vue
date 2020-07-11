<template>
  <div class="container">
    <div class="container__title">
      <h1>
        PREGUNTAS RETO 1
      </h1>
    </div>
    <div class="container__reto">
      <ul>
        <li class="reto__title">
          ¿Cuáles son las responsabilidades de un manejador de rutas?
        </li>
        <ul>
          <li>
            las responsavilidades de los enrutadores son la definicion de rutas
            y rutas anidadas, ademas de proteger las rutas y enviar parametros a
            través de estas.
          </li>
        </ul>
      </ul>
      <hr />
      <ul>
        <li class="reto__title">¿Para qué sirve un manejador de rutas?</li>
        <ul>
          <li>
            El manejador de rutas se encargara de definir la rutas y funciones a
            ejecutarse en cada vista de la web o sistema
          </li>
        </ul>
      </ul>
      <hr />
      <ul>
        <li class="reto__title">
          Describir el proceso, que se realiza en el ambito de front para
          logearse en un sistema.
        </li>
        <ul>
          <li>
            Primero se crea la maqueta de la vista login y registrarse, luego se
            agrega estilos a las vista con css.
            <br>
            <br>
             Se crea un algoritmo para
            obtener la lista de usuarios y poder validar si el usuario esta
            registrado.
            <br>
            <br>
            Cuando un usuario quiera acceder a la web o sistema se
            muestre la vista login consultado al usuario si esta registrado o no
            si en caso lo esta se pide ingresar usuario y constraseña y si aun
            no esta registrado se pide registrarse al usuario solicitando los
            datos y confirmar su correo.
            <br>
            <br>
             Una vez que el usuario ingrese su
            usurio y constraseña se valida en la base de datos si los datos
            ingresados son los correctos, si son correctos accede a la web caso
            contrario se le envia una alerta soliciando que ingrese los datos
            correctos.
            <br>
            <br>
             Como front debemos mantener el id del usuario para
            mostrar si aun sigue logueado y mostrar su nombre dependiendo de la
            web.
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
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

hr {
  background-color: rgb(0, 4, 37);
  padding: 1px;
}

li {
  width: 450px;
}
</style>
