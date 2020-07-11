<template>
  <div id="inicio">
    <header class="header">
      <div class="header__contenedor">
        <div class="header__logo">
          <p>VIDEO TV</p>
        </div>
        <nav class="header__menu">
          <ul>
            <li>
              <a class="buton__modal">Agregar Video</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="modal">
      <div class="modal-content">
         <form id="video-form"  @submit.prevent="add">
          <div>
            <H2 class="modal__title">Agregar Video</H2>
          </div>
          <br />
          <div>
            <input type="hidden" v-model="form.id" id="inputAdd">
            <input required type="text" v-model="form.title" placeholder="Titulo" id="inputAdd" />
            <input
              required
              type="text"
              v-model="form.coverVideo"
              placeholder="Url-video"
              id="inputAdd"
            />
          </div>
          <div>
            <textarea
              required
              class="areatext"
              id="inputAdd"
              v-model="form.description"
              placeholder="descripcion"
            ></textarea>
          </div>
          <div class="form-action-buttons">
            <input type="submit" v-show="!updateSubmit" value="ACEPTAR" />
          </div>
        </form>
      </div>
    </div>
    
    <div class="container__cards">
      <div class="grid-container" id="grid-container">
        <div  v-for="video in videos" :key="video.idd" class="card">
          <div class="dog__crud">
            <div class="dog__crud__edit">
              
              <img src="../assets/editar.png" alt="" />
              <p @click="edit(video)">Editar</p>
            </div>
            <div class="dog__crud_delete">
              <img src="../assets/eliminar.png" alt="" />
              <p @click="edit(video)">Borrar</p>
            </div>
          </div>
          <div class="bg-img">
            <video controls>
              <source src="http://techslides.com/demos/sample-videos/small.mp4"
              type=video/mp4>
            </video>
          </div>
          <div class="content">
            <h4>{{video.title}}</h4>
            <p>
             {{video.description}}
            </p>
            <button>Ver Detalle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import axios from 'axios'
 export default{
   name:'#inicio',
      data(){
      return{
        form:{
          id:'',
          title:'',
          coverVideo:'',
          description:'',
        },
        videos: '',
        updateSubmit: false,
        erro: '',

      }
    },
    mounted(){
      this.load()
    },

    methods: {
      load(){
         axios.get('http://localhost:3000/videos').then(res => {
            this.videos = res.data            
      }).catch((err) => {
        console.log(err);
      })
      },

  
    }
 }

</script>
<style scoped>
*{
    margin: 0;
}
/*header*/
@font-face {
    font-family: 'Roboto', sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  }

  .contenedor {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
  
  .header {
    width: 100%;
    height: 80px;
    background-color: #FF5252;
  }
  
 .header__contenedor{
    width: 85%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:  0 auto;
 }
 .header__logo p{
     font-family: 'Roboto', sans-serif;
     font-style: normal;
     font-weight: normal;
     font-size: 40px;
     line-height: 42px;
     color: #FFFFFF;
 }
.header__menu{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
}

.header__menu  ul {
    width: 100%;
    height: 100%;
    display: inherit;
    align-items: inherit;
}

.header__menu  ul li{
    width: 130px;
    height: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: space-between;
}

.modal__title{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 21px;
    color:#000000;
    padding: 15px;
}

.form-modal{
    padding: 5px;
}


.buton__modal{
    width: 100%;   
    display: inherit;
    align-items: inherit;
    justify-content: center;    
    text-decoration: none;
    font-style: normal;
    font-size: 16px;
    line-height: 14px;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    background-color: #FF5252;
  }
  
  .buton__modal:hover{
    color: #FFFFFF;
    font-weight: bold;
  }
  
   .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
  }
  .close-button:hover {
    background-color: darkgray;
  }
  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }

  input[type=text], input[type=number] {
    width: 40%;
    padding: 12px 60px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    
}

input[type=submit]{
    width: 30%;
    text-align: center;
    background-color: #FF5252;
    color: #FFFFFF;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.form-action-buttons{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
}



.areatext{
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
}

 .modal {       
   padding: 10px;  
  display: flex;
  justify-content: center;
    
  }

  .modal-content{
    width: 85%;
    border: 2px solid #FF5252;  
    border-radius: 4px;    
  }
 

/*cards*/
.container__cards {
    width: inherit; 
    padding-left: 50px;
    padding-right: 50px;
  }


  .grid-container {   
    padding: 50px;   
    display: grid;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
   grid-gap: 20px;
  }  

  .card{
    width: 270px;
    height: inherit;    
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }

  .bg-img video{
    text-align: center;
    width:100%;
    height: inherit;
    display:block;
    margin:auto;
  }

  .dog__crud{
    padding: 20px;
    width: 230px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
  }

  .dog__crud__edit img{
     width: 15px;
     height: 15px;
     cursor: pointer;
  }

  .dog__crud_delete img{
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  .dog__crud__edit p{    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    color: #000000;
    cursor: pointer;
 }

 .dog__crud_delete p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    color: #000000;
    cursor: pointer;
 }


 .dog__crud__edit p:hover{
    font-weight: bold;
    font-size: 10px;
 }
 .dog__crud_delete p:hover{
    font-weight: bold;  
    font-size: 10px;   
 }

 .content{
   padding: 10px;
   color: #000000;   
 }

 .content h4{
   padding: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
 }

 .dog__crug__datos{
  padding: 5px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
 }

 .dog__crug__datos div p{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
 }

 .content h2{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

 }
 .content p{
   width: inherit;
   height: inherit;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  padding-bottom:15px;
  
 }

 button {
     width: 100%;
     text-align: center;
     border: none; 
    padding: 10px;  
    background: #00C1AA;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.23);
    -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.23);
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.23);
    cursor: pointer;
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
 }
 
 button:hover{
     font-weight: bold;
     font-size: 13px;
 }
</style>
