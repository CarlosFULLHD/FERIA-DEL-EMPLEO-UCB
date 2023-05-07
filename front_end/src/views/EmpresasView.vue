<template>
  <v-app>
    <v-main style="background-image: linear-gradient(to right ,#b2cde4, #5684d4 ) ;"
    >
      <v-container>
        <v-row 
        justify="center"
        >
          <v-col
            v-for="n in 11"
            :key="n"
            cols="auto"
            sm="6"
            md="4"
            lg="3"
          >
          v-for
          <v-hover v-slot="{ hover }">
            <div class="card" >
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              
              max-width="350"
              class="my-3"
              color="pink"
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
              <v-card-text >
                <div>Banco</div>
                <div>Informacion del Banco</div>
              </v-card-text>
              <v-card-actions>

                <v-btn v-on:click="showPopup = true"
                    class="mx-2"
                    fab
                    dark
                    large
                    color="blue"
                    elevation="24"
                  >
                  
                  <v-icon dark
                  color="yellow"
                  >
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-dialog v-model="showPopup">
                  <v-card>
                    <v-card-title>{{ titulo }}</v-card-title>
                    <v-card-text>
                      {{ contenido }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="secondary" @click="showPopup = false">Cerrar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>






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
    export default {
      data: () => ({
      
          showPopup: false,
          titulo: 'Título de la carta',
          contenido: 'Aquí va el contenido de la carta',
       
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
    }
  </script>