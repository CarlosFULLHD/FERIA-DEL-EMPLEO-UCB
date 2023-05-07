<template>
  <div id="app">
    <v-app id="inspire">
  <v-data-table
    :headers="headers"
    :items="axiosJson"
    sort-by="calories"
    :class="['elevation-1', 'overflow-x-auto']"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Instituciones</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <template v-slot:activator="{ on, attrs }">
            
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nueva institución
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.institucion"
                      label="Institución"
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.rubro"
                      label="Rubro"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.ubicacion"
                      label="Ubicación"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >                  
                    <v-text-field
                      v-model="editedItem.resenia"
                      label="Detalles"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="E - mail"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.telefono"
                      label="Teléfono"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.telefonowp"
                      label="Whatsapp"
                    ></v-text-field>

                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Crear
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="550px">
          <v-card>
            <v-card-title class="text-h5">¿Seguro que quiere borrar esta institución?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Confirmar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>


    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>

      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
      mdi mdi-file-image-plus
      </v-icon>
     
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>




    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reiniciar
      </v-btn>
    </template>
  </v-data-table>
</v-app>
</div>
</template>


<script>
import Instituciones from '@/services/Instituciones'

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Institución',
          align: 'start',
          sortable: false,
          value: 'institucion',
        },
        { text: 'Rubro', value: 'rubro' },
        { text: 'Ubicacion', value: 'ubicacion' },
        { text: 'Detalles', value: 'resenia' },
        { text: 'E - mail', value: 'email' },
        { text: 'Teléfono', value: 'telefono'},
        { text: 'Whatsapp', value: 'telefonowp'},
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      axiosJson: [],
      editedIndex: -1,
      editedItem: {
        
        institucion: '',
        rubro:'',
        ubicacion: '',
        resenia: '',
        email: '',
        telefono: '',
        telefonowp: '',
      },
      defaultItem: {
        institucion: '',
        rubro:'',
        ubicacion: '',
        resenia: '',
        email: '',
        telefono: '',
        telefonowp: '',
      },
    }),

    created() {
      this.initialize();
      
  },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva institución' : 'Editar institución'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {

      // METODO INICIAL
      async initialize () {
        try{
            const response = await Instituciones.listarIns({})
            const axiosJson = response.data.map(item => ({
              institucionid: item.instituciones_id,
              institucion: item.nombre,
              email: item.email,
              rubro: item.institucion,
              telefono: item.telefono,
              resenia: item.resena,
              telefonowp: item.telefonowp,
              ubicacion: item.ubicacion
            
            }));
            this.axiosJson = axiosJson;
        }   catch(error){
            this.error = error.response.data.error
        }

      },

      editItem (item) {
        this.editedIndex = this.axiosJson.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.axiosJson.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const deletedItem = this.axiosJson[this.editedIndex]
        const instId = deletedItem.institucionid
        await Instituciones.borrarIns(instId)
        this.axiosJson.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      // ACTUALIZAR INSTITUCIÓN
      close () {
        this.dialog = false
        this.$nextTick(async () => {

          const instId = this.editedItem.institucionid
          
          if (typeof instId !== "undefined"){
            console.log(this.editedItem)
            const dataUp = {
              nombre: this.editedItem.institucion,
              email: this.editedItem.email,
              institucion: this.editedItem.rubro,
              telefono: this.editedItem.telefono,
              resena: this.editedItem.resenia,
              telefonowp: this.editedItem.telefonowp,
              ubicacion: this.editedItem.ubicacion
            }
            await Instituciones.updateIns(instId, dataUp)
          } 
          this.editedItem = Object.assign({}, this.defaultItem)
          
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      // NUEVA INSTITUCIÓN
      async save () {
        if (this.editedIndex > -1) {
          
          Object.assign(this.axiosJson[this.editedIndex], this.editedItem)
        } else {

          if (this.editedItem.email !== '' && this.editedItem.institucion !== '' && this.editedItem.resenia !== ''
              && this.editedItem.rubro !== '' && this.editedItem.telefono !== '' && this.editedItem.telefonowp !== ''
              && this.editedItem.ubicacion !== '')
              {

                const dataUp = {
                              nombre: this.editedItem.institucion,
                              email: this.editedItem.email,
                              institucion: this.editedItem.rubro,
                              telefono: this.editedItem.telefono,
                              resena: this.editedItem.resenia,
                              telefonowp: this.editedItem.telefonowp,
                              ubicacion: this.editedItem.ubicacion
                            }

                await Instituciones.crearIns(dataUp)
                this.axiosJson.push(this.editedItem)
              } else{
                alert("Todos los campos deben estar completos")
              }
          
        }
        this.close()
      },
    },
  }
</script>