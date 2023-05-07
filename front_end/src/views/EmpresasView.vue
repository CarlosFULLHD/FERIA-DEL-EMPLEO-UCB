<template>
  <v-app>
    <v-main>
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
            <div class="card">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              
              max-width="350"
              class="my-3"
            >
              <v-img
                class="align-end text-white"
                height="200"
                src="data:image/png;base64,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"
                cover
              >
                <v-card-title>Banco BNB</v-card-title>
              </v-img>
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
    export default {
      data: () => ({
        alignments: [
          'start',
          'center',
          'end',
        ],
      }),
    }
  </script>