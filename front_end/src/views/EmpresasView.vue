<template>
  <v-app>
    <v-main>
      
        <v-row justify="center">
          <v-col v-for="(value , key) in tarjetasObject" :key="key"
            cols="auto"
            sm="6"
            md="4"
            lg="2"
          >
            <v-hover v-slot="{ hover }">
              <div class="card">
                <v-card 
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  shaped
                  max-width="350"
                  class="my-3"
                >
                <!-- IMAGENES EMPRESA -->
                  <v-carousel hide-delimiters  height="275" width="275">
                    <span  v-for="(xd , key) in imagenesObject" :key="key">
                    <v-carousel-item
                      v-if ="xd['instituciones_id'] === value['instituciones_id']"
                      :src="xd['url']"
                      cover
                    >
                  </v-carousel-item>
                  </span>
                  </v-carousel>

                  <!-- TITULO -->
                  <v-card-title class="primary--text headline mb-0 " >
                    {{ value['nombre'] }}
                  </v-card-title>
                  <v-divider></v-divider>
                  
                  <v-card-text>
                    <!-- RUBRO -->
                    <strong>Categoría: </strong>{{ value['institucion'] }}
                    
                    <!-- RESEÑA -->
                    <div><strong>Información: </strong> {{ value['resena'] }}</div>
                    <!-- UBICACIÓN -->
                    <div><strong>Ubicación: </strong> {{ value['ubicacion'] }}</div>
                  </v-card-text>
                  <v-divider></v-divider>


                  <v-card-actions>
                    <v-btn color="#ffc506">
                      Opcion
                    </v-btn>
                    <v-btn color="#ffc506">
                      <button id="miBoton" @click="infoDialog(value['instituciones_id'])" class="miBoton">Información</button>
                    </v-btn>
                  </v-card-actions>
                  <v-divider></v-divider>


                  <!-- INFO DIALOG -->
                  <v-dialog
                  v-model="dialog"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
               
                  <v-card
                  elevation="24"
                  max-width="444"
                  class="mx-auto">
                  <v-toolbar flat color="#001f3f" dark>
                      <v-btn
                        icon
                        dark
                        @click="dialog = false"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Cerrar</v-toolbar-title>
                      <v-spacer></v-spacer>


                      <v-toolbar-items>
                        <v-btn
                          dark
                          text
                          @click="dialog = false"
                        >
                          Charlas
                        </v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    
                    <template>
                      <center>
                      <h1>{{ infoNombre }}</h1>
                      <h3><b>Categoría: </b><i>{{  infoRubro }}</i></h3>              
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-carousel :cycle="true"  :interval="2500" :show-arrows="false" :show-indicators="false">
                            <span  v-for="(xd , key) in infoImgObject" :key="key">
                            <v-carousel-item
                            :src="xd['url']"
                            cover>
                            </v-carousel-item>
                          </span>
                          </v-carousel>
                          
                        </v-col>
                        

                        <v-row>
                          <v-col cols="12">
                            <!--BUSINESS INFO -->
                            <h1>Conócenos</h1>
                            <v-divider></v-divider>
                            <p>{{  infoResena }}</p>
                            <v-divider></v-divider>
                            <h1>Contactos</h1>

                            <v-card-actions ref="testHola('sisisisi')">
                            <span  v-for="(xd , key) in infoLinksObject" :key="key">
                              <v-btn :href="xd.url">
                                <v-icon color="primary"
                                > {{ logos[xd['llave']] }}
                                </v-icon>
                              </v-btn>
                            
                            </span>
                          </v-card-actions>



                          </v-col>
                        </v-row>
                      </v-row>
                   
                    <v-divider></v-divider>
                    <h1>Nuestros videos</h1>
                    <v-row class="video-row" no-gutters>
                      <v-col v-for="(xd , key) in videoImgObject" :key="key" cols="12" sm="6" md="4" lg="3" xl="2">
                        <LazyYoutube
                                            ref="youtubeLazyVideo"
                                            :src="xd['url']"
                                            max-width="720px"
                                            aspect-ratio="16:9"
                                            thumbnail-quality="standard"
                                            />
                      </v-col>
                    </v-row>
                  </center>
                  </template>

                    </v-card>
                    </v-dialog>

                  
                  <v-card-actions ref="testHola('sisisisi')">
                    <span  v-for="(xd , key) in linksObject" :key="key">
                      <v-btn :href="xd.url" v-if ="xd['instituciones_id'] === value['instituciones_id']">
                        <v-icon color="primary"
                        > {{ logos[xd['llave']] }}
                        </v-icon>
                      </v-btn>
                    
                    </span>
                  </v-card-actions>
                </v-card>
              </div>
            </v-hover>
          </v-col>
        </v-row>
   
    </v-main>
  </v-app>
</template>


  <script>
  import Tarjetas from '@/services/Tarjetas'
  import Instituciones from '@/services/Instituciones'
    export default {
      data: () => ({

        carouselItems: [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' },
      ],

        dialog: false,
        infoLinksObject: {},
        infoImgObject: {},
        videoImgObject: {},
        infoNombre: '',
        infoEmail:'',
        infoTelefono:'',
        infoResena:'',
        infoUbicacion: '',
        infoRubro: '',
        

        tarjetasObject: {},
        imagenesObject: {},
        linksObject: {},
        videoObject: {},
        logos: {
              Facebook:"mdi mdi-facebook" ,
              Instagram:"mdi mdi-instagram" ,
              Whatsapp:"mdi mdi-whatsapp" ,
              Linkedin:"mdi mdi-linkedin", 
          },
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        alignments: [
          'start',
          'center',
          'end',
        ],
      }),
      created(){
        this.initialize();
        this.imgs();
        this.links();
      },
      computed: {
        // TARJETAS LENGTH
        tarjetasLength() {
          return Object.keys(this.tarjetasObject).length
        },



      },
      methods: {
        async infoDialog(id){
          let xd = await Instituciones.getInstById(id)
          
          this.infoId = xd.data.instituciones_id
          this.infoNombre = xd.data.nombre
          this.infoEmail = xd.data.email
          this.infoTelefono = xd.data.telefono
          this.infoResena = xd.data.resena
          this.infoUbicacion = xd.data.ubicacion
          this.infoRubro = xd.data.institucion
          this.dialog = true
          try {
            xd = await Tarjetas.getImgByIdTwo(this.infoId)
            this.infoImgObject = xd.data
            xd = await Tarjetas.getVidById(this.infoId)
            this.videoImgObject = xd.data
            xd = await Tarjetas.getLinksById(this.infoId)
            console.log(xd.data)
            this.infoLinksObject = xd.data
          } catch (error) {
            this.infoImgObject = {}
          }
          //console.log(xd.data)
        },
        async initialize() {
          Tarjetas.crearTarjeta().then((result) => {
            this.tarjetasObject = result.data
          }).catch((error) => {
            console.log(error)
          });
        },

        async imgs(){
          let xp = await Tarjetas.getImgs()
          this.imagenesObject = xp.data
        },

        async links() {
          let xp = await Tarjetas.getLinks()
          this.linksObject = xp.data
        },

       
        test () {
          alert("HOLA")
          let xd = this.tarjetasObject
          alert(`${xd['links_llaves']}`)
          Object.keys(xd).forEach(key => {
            console.log(key, xd[key]);
          });
        },
      },
      mounted() {
        const testHola = this.$refs.testHola
        this.testicul(testHola)
      },
    }
  </script>

<style scoped>
.card {
  width: 100%;
}

.on-hover {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  transform: scale(1.02);
}

.card-subtitle {
  font-size: 18px;
  margin-top: 16px;
}

.card-text {
  font-size: 16px;
  margin-bottom: 16px;
}

.miBoton {
  color: white;
  background-color: #ffc506;
}

.v-window-item {
  height: 100%;
}

.video-row {
  overflow-x: auto;
  white-space: nowrap;
}
</style>


