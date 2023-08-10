<template>
  <div id="HomeView">
    <ListaComponent titulo="Lista de Cursos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaComponent from '@/components/ListaComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ListaComponent
  }
}
</script>

<style scoped>

  .divIconos{
    margin: 1%;
  }
  .icono {
    width: 36px;
    height: 36px;
    background-color: blueviolet;
    border: 0;
  }
</style>