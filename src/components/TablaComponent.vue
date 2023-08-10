<template>
    <div id="TablaComponent">
      <br>
      <h1>Información de los Cursos</h1>
      <div id="laTabla">
        <table class="table" v-if="mostrarTabla">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Curso</th>
                <th scope="col">Cupos</th>
                <th scope="col">Inscritos</th>
                <th scope="col">Duración</th>
                <th scope="col">Costo</th>
                <th scope="col">Terminado</th>
                <th scope="col">Fecha</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dato in datos_tabla" v-bind:key="dato.id">
                <td>{{ dato.id }}</td>
                  <td>{{ dato.curso }}</td>
                  <td>{{ dato.cupos }}</td>
                  <td>{{ dato.inscritos }}</td>
                  <td>{{ dato.duracion }}</td>
                  <td>{{ dato.costo }}</td>
                  <td>{{ dato.terminado }}</td>
                  <td>{{ dato.fecha }}</td>
                  <td><b-icon icon="pencil-fill" aria-hidden="true" variant="warning" v-on:click.prevent="activarEditar(dato.id)"  class="puntero"></b-icon>   |   <b-icon icon="trash-fill" aria-hidden="true" variant="danger" v-on:click.prevent="eliminar(dato.id)" class="puntero"></b-icon>
                  </td>
              </tr>
            </tbody>
          </table>

          <b-modal v-model="modalShow">
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Nombre del Curso:"
                        label-for="input-1"
                        description="Nombre del Curso">
                        
                        <b-form-input
                          id="input-1"
                          v-model="form.nombre"
                          type="text"
                          placeholder="Ingrese Nombre del Curso"
                          required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        label="URL de Imagen del Curso:"
                        label-for="input-2"
                        description="Nombre del Curso">
                          <b-form-input
                            id="input-2"
                            v-model="form.img"
                            placeholder="Ingrese URL imagen del Curso"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-3"
                        label="Cupos del Curso"
                        label-for="input-3"
                        description="Ingrese Cantidad de Cupos Disponibles">
                          <b-form-input
                            id="input-3"
                            v-model="form.cupos"
                            placeholder="Ingrese Cupos"
                            type="number"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-4"
                        label="Inscritos en el Curso"
                        label-for="input-4"
                        description="Ingrese Cantidad de Alumnos Inscritos">
                          <b-form-input
                            id="input-4"
                            v-model="form.inscritos"
                            placeholder="Ingrese inscritos"
                            type="number"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-5"
                        label="Duración del Curso"
                        label-for="input-5"
                        description="Ingrese duración del curso">
                          <b-form-input
                            id="input-5"
                            v-model="form.duracion"
                            placeholder="Ingrese duración"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-6"
                        label="Fecha de Registro"
                        label-for="input-6"
                        description="Indique fecha de registro">
                          <b-form-input
                            id="input-6"
                            v-model="form.fecha_registro"
                            placeholder="Fecha de Registro"
                            type="date"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-7"
                        label="Costo del Curso"
                        label-for="input-7"
                        description="Ingrese costo del Curso">
                          <b-form-input
                            id="input-7"
                            v-model="form.costo"
                            placeholder="Ingrese costo"
                            type="number"
                            required>
                          </b-form-input>
                    </b-form-group>

                    <b-form-textarea
                      id="textarea"
                      v-model="form.descripcion"
                      placeholder="Descripción del Curso"
                      rows="3"
                      max-rows="6">
                    </b-form-textarea>
                  
                    <b-button type="submit" variant="warning">Editar Info</b-button> | <b-button type="reset" variant="danger">Limpiar</b-button>
                </b-form>
              </div>
          </b-modal>
        </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'TablaComponent',
    props: {},
    data:function(){
      return{
        modalShow: false,
          form: {
            id: '',  
            nombre: '',
            img: '',
            costo: 0,
            duracion: '',
            cupos: 0,
            inscritos: 0,
            completado: false,
            fecha_registro:'',
            descripcion:'',
          },
          
          form_tabla: {
            id:'',
            curso: '',
            img: '',
            costo: 0,
            duracion:'',
            cupos:0,
            inscritos:0,
            terminado:false,
            fecha:'',
            descripcion:'',
          },

        show: true,
        mostrarTabla: true,
      }
    },
    methods:{
      ...mapActions('datos_cursos', ['consultarDatosTabla', 'eliminarCurso', 'consultarCursosEditarCard', 'consultarCursosEditarTabla', 'editarDatosCard', 'editarDatosTabla']),
      eliminar:function(elId){
        let respuesta = confirm('¿Está seguro que desea eliminar el curso?');
        if (respuesta == true){
          this.eliminarCurso(elId);
        }
      },
      onSubmit(event) {
        event.preventDefault()
        // Se llama al Actions que va a a realizar la edición con los datos del modelo de datos
        this.$nextTick(() => {
          this.editarDatosCard(this.form);
        });

        // Se asignan manualmente los datos que van en la tabla
        // Se actualizan los campos que no tienen TwoWay DataBanding con los campos que si tienen TwoWay DataBanding, antes de enviar a edicion los datos de la tabla
        // En necesario actualizar el segundo modelo de datos que no tiene TwoWay DataBanding con los datos que si tienen TwoWay DataBanding antes de enviar a almacenar, ya que hay dos state pero un solo formulario.
          this.form_tabla.id=this.form.id;
          this.form_tabla.curso=this.form.nombre;
          this.form_tabla.img=this.form.img;
          this.form_tabla.costo=this.form.costo;
          this.form_tabla.duracion=this.form.duracion;
          this.form_tabla.cupos=this.form.cupos
          this.form_tabla.inscritos=this.form.inscritos;
          this.form_tabla.terminado=this.form.completado;
          this.form_tabla.fecha=this.form.fecha_registro;
          this.form_tabla.descripcion=this.form.descripcion;
          
          this.$nextTick(() => {
            console.log('onSubmit form_tabla', this.form_tabla);
          })

          // Se muestra la tabla con los cambios
          this.$nextTick(() => {
            this.mostrarTabla = true
          })
      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
          this.form.nombre= '',
          this.form.img= '',
          this.form.costo= 0,
          this.form.duracion= '',
          this.form.cupos= 0,
          this.form.inscritos= 0,
          this.form.completado= false,
          this.form.fecha_registro='',
          this.form.descripcion='',
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      
      activarEditar(unid){
        console.log('activarEditar edId', unid);
        //Se oculta la tabla para poder hacer los cambios
        this.$nextTick(() => {
          this.mostrarTabla = false;
        })

        //Se consulta el curso de acuerdo al ID para poder poblar el state this.curso_editar
        this.consultarCursosEditarCard(unid);
        this.consultarCursosEditarTabla(unid);
        this.modalShow = true;

        //Se asigna el ID de forma manual al objeto del modelo de datos
        this.form.id = unid;
          //Se asignan manualmente al objeto del modelo de datos, los valores que se obtienen del state
          this.form.nombre=this.curso_editar_card.nombre;
          this.form.img=this.curso_editar_card.img;
          this.form.costo=this.curso_editar_card.costo;
          this.form.duracion=this.curso_editar_card.duracion;
          this.form.cupos=this.curso_editar_card.cupos;
          this.form.inscritos=this.curso_editar_card.inscritos;
          this.form.completado=this.curso_editar_card.completado;
          this.form.fecha_registro=this.curso_editar_card.fecha_registro;
          this.form.descripcion=this.curso_editar_card.descripcion;
      },


          // editar:function(elId){
          //   console.log('elId', elId);
          //   this.modalShow = true;
          // }
    },
    computed:{
      // ...mapState('datos_cursos', ['datos', 'datos_tabla']),
      ...mapState('datos_cursos', ['datos_tabla', 'curso_editar_card', 'curso_editar_tabla']),
      
    },
    watch:{},
    created(){
      // this.consultarCursos();
      // this.consultarDatosTabla();
    }
  }
  </script>
  
  
  <style scoped>
    
    #tabla{
      text-align: center;
    }

    .puntero :hover{
      cursor: pointer;
    }
    
  </style>