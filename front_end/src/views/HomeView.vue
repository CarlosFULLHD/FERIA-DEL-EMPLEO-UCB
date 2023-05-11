<template>
  <v-app id="inspire">
  <div class="section1">
  <div class="home">
    <h2 class="titulo">  Bienvenidos a La Feria del Empleo UCB </h2>
    <h1 class="titulo2">  La Feria del Empleo UCB es un evento que concentra la oferta y demanda de puestos laborales,
       facilita el contacto entre instituciones empleadoras y personas interesadas en obtener un trabajo. </h1>
    </div>
    <v-carousel class="caro" hide-delimiters>
    <v-carousel-item
      class="imgcar"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      ></v-carousel-item>
      </v-carousel>
  </div>


  <v-parallax
    height="800"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
  
 
  <div class="section2">

      <v-card
    class="mx-auto"
    max-width="350"
    
  >
    <v-img
      src="../assets/lpn1.png"
      height="200px"
    ></v-img>

    <v-card-title
    background-color="purple"
    >
      Feria de Empleo 
    </v-card-title>

    <v-card-actions>
      
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="conttxt">
          La Feria del Empleo UCB es un evento que concentra la oferta y demanda de puestos laborales, facilita el contacto entre instituciones empleadoras y personas interesadas en obtener un trabajo.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


  <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      src="../assets/DSC2432-copy.jpg"
      height="200px"
    ></v-img>

    <v-card-title
    background-color="purple"
    >
      
    Bolsa de trabajo
    </v-card-title>

    <v-card-actions>
      
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>

        <v-card-text class="conttxt">
          Los convenios con instituciones públicas y privadas te permiten realizar pasantías que te permitirán adquirir experiencia laboral para iniciar tu vida personal.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      src="../assets/taller.jpg"
      height="200px"
    ></v-img>

    <v-card-title
    background-color="purple"
    >
    Talleres de Empleabilidad
    </v-card-title>

    <v-card-actions>
      
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text class="conttxt">
          Complementando tu formación académica, la USEI te apoya con el desarrollo de competencias laborales  para que tengas una favorable transición al mercado laboral.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  
  </div>

  <div class="section3">

  </div>

  </v-parallax>

</v-app>
</template>

<script>



export default {
  name: "HomeView",
  components: {
  },
  data:()=> ({
    show: true,
    show1: true,
    show2: true,
      items: [
          {
            src: 'https://eu01.edcwb.com/educanews/interface/images/noticies/20841-7fb66aa6bf604f1dbda80af70f9f1489.jpg',
          },
          {
            src: 'https://www.ucb.edu.bo/wp-content/uploads/2020/04/Banner-Investigacion-min.jpg',
          },
          {
            src: 'https://secrad.lpz.ucb.edu.bo/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-05-at-2.04.15-PM.jpeg',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Ucatolica2.jpg',
          },
        ],
      alignments: [
        'start',
        'center',
        'end',
      ],
    
  }),
  
  
};
</script>

<style lang="scss" scoped>
*{
  font-family: "Helvetica";
}
.section1{
  width: 100%;
  height: 750px;
}
.home {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url('../assets/cato-foto.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.caro{
  position: absolute;
  width: 80%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50% )
  
}
.imgcar{
  height: 408px;
  width: 1176px;
}
 .titulo{
  font-style: italic;
  text-align: center;
  font-size: 50px;
 }
 .titulo2{
  font-style: italic;
  text-align: center;
  font-size: 25px;
  color: rgb(1, 27, 48);
  background-color: burlywood;
 }
 .section2{
  width: 100%;
  height: 500px;
  top: 100px;
  display: flex;
  flex-direction: row;
  //background-color: rgba(149, 212, 226, 0.7);
 
 }
 .mx-auto{
  top: 20px;
 
  margin-right: 20px; /* Espacio entre las tarjetas */
 }
 
 .conttxt{
  color: #14a8ed;
  font-style: oblique;
 }

 .section3{
  width: 100%;
  height: 200px;
  //background-color: rgba(149, 212, 226, 0.7);
 }

</style>