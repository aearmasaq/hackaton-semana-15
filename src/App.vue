<template>
  <div id="app">    
    <div id="nav">
      <h1>HACKATON SEMANA 15</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/reto-1">Reto 1 </router-link> |
      <router-link to="/reto-2">Reto 2 </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f2f2;  
}

#nav {
  padding: 20px;
  background-color: rgb(0, 4, 37);
  
}

#nav a {
  font-weight: bold;
  color: #f2f2f2; 
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
