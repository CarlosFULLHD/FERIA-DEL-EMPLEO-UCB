<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col v-for="(value , key) in tarjetasObject" :key="key"
            cols="auto"
            sm="6"
            md="4"
            lg="4"
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
                  <v-carousel hide-delimiters>
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
                      <button id="miBoton" class="miBoton">Información</button>
                    </v-btn>
                  </v-card-actions>
                  <v-divider></v-divider>

                  
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
      </v-container>
    </v-main>
  </v-app>
</template>


  <script>
  import Tarjetas from '@/services/Tarjetas'
    export default {
      data: () => ({
        tarjetasObject: {},
        imagenesObject: {},
        linksObject: {},
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
</style>


