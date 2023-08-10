<template>
  <div id="app">

    <!--NAVBAR-->
      <div id="backColor">
          <b-navbar toggleable="lg" type="dark">
      
              <b-navbar-brand href="#"><router-link to="/" class="home">Cursos AlfaWeb</router-link></b-navbar-brand>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              
              <b-collapse id="nav-collapse" is-nav>
                  
                  <b-navbar-brand href="#"><router-link to="/about">About</router-link></b-navbar-brand>
                  
              </b-collapse>

              <div class="divIconos">
                  <router-link to="/"><b-icon icon="house-door-fill" aria-label="Help" href="#" class="iconos"></b-icon></router-link>
              </div>
              <div class="divIconos">
                <router-link to="/administracion"><b-icon icon="wrench" aria-label="Help" href="#" class="iconos"></b-icon></router-link>
              </div> 
          </b-navbar>
      </div>
 
  
    <router-view/>
  </div>

</template>

<script>
  import { mapActions } from 'vuex';
  export default{
    name:'app',
    data: function(){
      return{

      }
    },
    props:{},
    components:{},
    methods:{
      ...mapActions('datos_cursos', ['consultarCursos', 'consultarDatosTabla']),
    },
    computed:{
      
    },
    watch:{},
    created(){
      this.consultarCursos();
      this.consultarDatosTabla();
    },

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

#backColor{
  background-color: purple;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a {
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.home{
  color: white;
  text-decoration: none;
  font-size: 22px;
}

.iconos{
  width: 24px;
  height: 24px;
}

.divIconos{
  margin: 0 1% 0 1%;
}
</style>
