<template>
  <div class="ListaComponent">
    <h1>{{ titulo }}</h1>
    
        <!--<div class="tarjetas" v-for="curso in datos" v-bind:key="curso.id">-->
        <div class="tarjetas" v-for="curso in consultarNoCompletados" v-bind:key="curso.id">  
          <div>
              <b-card
              v-bind:title="curso.nombre"
              v-bind:img-src="curso.img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              
              <div class="container">
                <div class="row">
                      <div class="col-md-2" id="circulos">
                          <div class="barra"><span class="circuloVerde"></span></div> 
                          <div class="barra"><span class="circuloMorado"></span></div>
                          <div class="barra"><span class="circuloVerde"></span></div>
                          <div class="barra"><span class="circuloMorado"></span></div>
                      </div>

                      <div class="col-md-10 alineacion">
                          <p>Costo: <strong>$ {{ curso.costo }}</strong><br>
                             Duración: <strong>{{ curso.duracion }}</strong></p><br>
                          
                          <p>Cupos: <strong>{{ curso.cupos }} </strong></p><br>
                          <p>Fecha: <strong> {{ curso.fecha_registro }}</strong></p><br>
                          <p>Descripción: <strong> {{ curso.descripcion }}</strong></p>
                      </div>
                </div>
              </div>
            </b-card>
          </div>
        </div>
    
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  name: 'ListaComponent',
  props: {
    titulo: String
  },
  data:function(){
    return{

    }
  },
  methods:{
    ...mapActions('datos_cursos', ['consultarCursos']),
  },
  computed:{
    ...mapState('datos_cursos', ['datos']), 
    ...mapGetters('datos_cursos', ['consultarNoCompletados']),
  },
  watch:{},
  created(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ListaComponent{
    
    margin: 2%;
  }

  .tarjetas {
    display: inline-block;
    margin: 2%;
    
  }

  .alineacion{
    text-align: start;
  }
  b-card{
    border: solid 1px grey;
  }

  #circulos{
    flex-direction: column;
    display: flex;
}
.circuloVerde{
    align-items: start;
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    background-color: rgb(154, 91, 213);
}
.circuloMorado{
    align-items: start;
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    background-color: rgb(54, 119, 38);
}
.barra {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    height: 100%;
    width: 3px;
}

  
</style>
