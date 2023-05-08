<template>
  <v-app>
    <v-main>

      <v-btn color="#ffc506">
        <button id="miBoton" class="miBoton" @click="test">Información</button>
      </v-btn>

      <v-container>
        <v-row justify="center">
          <v-col v-for="(value , key) in tarjetasObject" :key="key"
            cols="auto"
            sm="6"
            md="4"
            lg="4"
          >
          v-for
          <v-hover v-slot="{ hover }">
            <div class="card">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              
              max-width="350"
              class="my-3"
              
            >
            <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              cover
            ></v-carousel-item>
          </v-carousel>
              <v-card-subtitle class="pt-4">
                Algo extra
              </v-card-subtitle>
              <v-card-text>
                <div>Banco</div>
                <div>Informacion del Banco</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="#ffc506">
                  Opcion
                </v-btn>
                <v-btn color="#ffc506">
                  <button id="miBoton" class="miBoton">Información</button>
                </v-btn>
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
      },
      computed: {
        tarjetasLength() {
          return Object.keys(this.tarjetasObject).length
        }
      },
      methods: {
        async initialize() {
          Tarjetas.crearTarjeta().then((result) => {
            console.log(result)
            this.tarjetasObject = result.data
            //console.log(this.tarjetasObject)
          }).catch((error) => {
            console.log(error)
          });
        },
        test() {
          alert("HOLA")
        }
        // seeContent () {
        //   Object.keys(obj).forEach(key => {
        //     const value = obj[key];
        //     // Perform action for each property
        //     console.log(key, value);
        //   });
        // }
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


