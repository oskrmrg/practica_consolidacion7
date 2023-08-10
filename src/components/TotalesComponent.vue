<template>
    <div id="TotalesComponent">
      <h1>Totales por Campos</h1>
        <p id="totalCupos">   <b-icon icon="person-lines-fill"></b-icon> Cantidad Total de Alumnos Permitidos: {{ totalCupos }} Alumnos</p>
        <p id="totalInscritos">   <b-icon icon="person-check-fill"></b-icon> Cantidad Total de Alumnos Inscritos: {{ totalInscritos }} Alumnos</p>
        <p id="totalRestantes">   <b-icon icon="person-plus-fill"></b-icon> Cantidad Total de Cupos Restantes: {{ totalCuposRestantes }} Alumnos</p>
        <p id="totalTerminados">   <b-icon icon="x-octagon"></b-icon> Cantidad Total de Cursos Terminados: {{ totalTerminados }} Cursos</p>
        <p id="totalActivos">   <b-icon icon="bell-fill"></b-icon> Cantidad Total de Cursos Activos: {{ totalActivos }} Cursos</p>
        <p id="totalCursos">   <b-icon icon="bell-fill"></b-icon> Cantidad Total de Cursos: {{ totalCursos }} Cursos</p>
    </div>
  </template>
  
  <script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'TablaComponent',
        props: {},
        data:function(){
        return{
            
        }
        },
        methods:{
        ...mapActions('datos_cursos', ['consultarDatosTabla']),
        },
        computed:{
        ...mapState('datos_cursos', ['datos', 'datos_tabla']),

        totalCupos: function(){
            let valorInicial = 0;
            let total = this.datos_tabla.reduce( (acumulador, registro) => acumulador + registro.cupos, valorInicial);
            return total;
        },

        totalInscritos: function(){
            let valorInicial = 0;
            let total = this.datos_tabla.reduce( (acumulador, registro) => acumulador + registro.inscritos, valorInicial);
            return total;
        },

        totalCuposRestantes: function(){
            let valorInicial = 0;
            let totalCupos = this.datos_tabla.reduce( (acumulador, registro) => acumulador + registro.cupos, valorInicial);
            let totalInscritos = this.datos_tabla.reduce( (acumulador, registro) => acumulador + registro.inscritos, valorInicial);
            let diferencia = totalCupos - totalInscritos;
            return diferencia;
        },
        
        totalTerminados: function(){
            // Operación realizada con ciclo "for" y condicional "if"
            // let totalTerminados = 0;
            // let longitud = this.datos_tabla.length;
            // for (let i = 0; i < longitud; i++){
            //     if (this.datos_tabla[i].terminado == true){
            //         totalTerminados++;
            //     }
            // }
            // return totalTerminados;
            
            //Operaciones realizada con Operador Ternario
            let valorInicial = 0;
            let totalTerminados = 0;
            totalTerminados = this.datos_tabla.reduce( (acumulador, registro) => {
                if (registro.terminado == true)
                {
                    acumulador++;
                }
                return acumulador;
                }, valorInicial);
            return totalTerminados;
        },

        totalActivos: function(){
            // Operación realizada con ciclo "for" y condicional "if"
            let totalActivos = 0;
            let longitud = this.datos_tabla.length;
            for (let i = 0; i < longitud; i++){
                if (this.datos_tabla[i].terminado == false){
                    totalActivos++;
                }
            }
            return totalActivos;
            
            // let valorInicial = 0;
            // let totalActivos = 0;
            // totalActivos = this.datos_tabla.reduce( (acumulador, registro) => {
            //     if (registro.terminado == true)
            //     {
            //         acumulador++;
            //     }
            //     return acumulador;
            //     }, valorInicial);
            // return totalActivos;
        },

        totalCursos: function(){
            let totalCursos = this.datos_tabla.length;
            return totalCursos;
        },

        },

        watch:{},
        
        created(){ 
        // this.consultarCursos();
        // this.consultarDatosTabla();
        }
    }
  </script>
  
  
  <style scoped>
    #totalCupos{
        color: purple;
        font-weight: bolder;
        border: 1px solid purple;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
        
    }

    #totalInscritos{
        color: darkcyan;
        font-weight: bolder;
        border: 1px solid darkcyan;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
    }

    #totalRestantes{
        color: red;
        font-weight: bolder;
        border: 1px solid red ;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
    }

    #totalTerminados{
        color: fuchsia;
        font-weight: bolder;
        border: 1px solid fuchsia ;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
    }

    #totalActivos{
        color: darkolivegreen;
        font-weight: bolder;
        border: 1px solid darkolivegreen ;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
    }

    #totalCursos{
        color: orange;
        font-weight: bolder;
        border: 1px solid orange ;
        text-align: start;
        margin-left: 2%;
        margin-right: 2%;
    }
   
    
  </style>