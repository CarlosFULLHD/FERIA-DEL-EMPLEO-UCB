<template>
<v-app>
  <div class="home">
    <ApiTest/>
    <section class="hero">
      <v-container class="bg-surface-variant mb-6">
        <v-row align="start" no-gutters style="height: 150px;">
          <v-col>
            <v-row align="start" no-gutters style="height: auto;">
              <h1 style="font-family: Roboto, ">Feria de Empleo</h1>
            </v-row>
            <v-row align="center" no-gutters style="height: auto;">
              <p style="font-family: Roboto, ">La Feria del Empleo UCB es un evento que concentra la oferta y demanda de puestos laborales, facilita el contacto entre instituciones empleadoras y personas interesadas en obtener un trabajo.</p>
            </v-row>
          </v-col>
          <v-col>
            <!--<v-sheet class="pa-2 ma-2">
              .align-start
            </v-sheet>-->
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</v-app>
</template>

<script>
// @ is an alias to /src
import ApiTest from "@/components/TarjetasEmpresas.vue";

export default {
  name: "HomeView",
  components: {
    ApiTest,
  },
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/cato-foto.jpg");
  background-attachment: fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>