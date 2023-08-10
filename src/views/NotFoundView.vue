<template>
    <div id="NotFoundView">
      <h1>Not Found</h1>
      <p>Página No Encontrada</p>
      <img src="../assets/404-error-not-found.png" class="img-fluid notFound" alt="404 Not Found">
     <br><br>
      <button type="button" class="btn btn-outline-primary"><router-link to="/"><b-icon icon="arrow-return-left"></b-icon>    Regresar</router-link></button>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'NotFound',
    props: {},
    data:function(){
      return{
  
      }
    },
    methods:{
      
    },
    computed:{
      
    },
    watch:{},
    created(){}
  }
  </script>
  
  
  <style scoped>
    
  #NotFoundView{
    background-color: lightcyan;
    color: darkblue;
  }

  .notFound{
    width: 75%;
    
  }

  

    
  </style>
  