<template>
    <div id="AdministracionView">
          <h1>Administracion</h1>
          <!-- <b-button variant="primary">Agregar Curso</b-button> -->
          <b-button @click="modalShow = !modalShow" variant="primary">Agregar Curso</b-button>
          <TablaComponent />
          <hr>
          <TotalesComponent />
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
                  
                    <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
          </b-modal>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  import TablaComponent from '@/components/TablaComponent.vue';
  import TotalesComponent from '@/components/TotalesComponent.vue';
  
    export default {
      name: 'AdministracionView',
      props: {},
      components:{
          TablaComponent,
          TotalesComponent,
      },

      data:function(){
        return{
          modalShow: false,

          form_tabla: {
            id: '',  
            curso: '',
            img: '',
            costo: 0,
            duracion: '',
            cupos: 0,
            inscritos: 0,
            terminado: false,
            fecha:'',
            descripcion:'',
          },

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

          show: true
        }
      },

      methods:{
        ...mapActions('datos_cursos', ['registrarDatosCards', 'registrarDatosTabla']),

          onSubmit(event) {
          event.preventDefault()
            if(this.form.inscritos > this.form.cupos){
              alert("La Cantidad de Alumnos inscritos, no debe ser mayor que la cantidad de Cupos. Por favor verifique las cantidades indicadas");
            }
            else{
              // Funcion para convertir a JSON los datos del form:
              // alert(JSON.stringify(this.form));

              // Se genera el Nuevo ID 
              let indiceultimo = this.datos.length -1;
              let elidultimo = this.datos[indiceultimo].id;
              let nuevoid = elidultimo + 1;

              // Se clonan los campos uno a uno con los nombres adecuados
              this.form.id = nuevoid;
              this.form_tabla.id = this.form.id;
              this.form_tabla.curso = this.form.nombre;
              this.form_tabla.img = this.form.img;
              this.form_tabla.costo = this.form.costo;
              this.form_tabla.duracion = this.form.duracion;
              this.form_tabla.cupos = this.form.cupos;
              this.form_tabla.inscritos = this.form.inscritos;
              this.form_tabla.terminado = this.form.completado;
              this.form_tabla.fecha = this.form.fecha_registro;
              this.form_tabla.descripcion = this.form.descripcion;

              let dataCards = {...this.form};
              let dataTabla = {...this.form_tabla}
              
              this.registrarDatosCards(dataCards);
              this.registrarDatosTabla(dataTabla);
            }
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
          }
      },

      computed:{
        ...mapState('datos_cursos', ['datos', 'cursos_incompletos']),
      },

      watch:{},
      
      created(){}
    }
  </script>
  
  <style scoped>
    .bordeParraf{
      border-bottom: 1px solid lightgrey;
    }
  </style>
  