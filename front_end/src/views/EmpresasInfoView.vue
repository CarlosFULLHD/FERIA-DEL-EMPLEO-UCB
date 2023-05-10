<template>
    <v-app>
        <v-main>
            <template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="display-2 text-center">{{ infoNombre }}</h1>
            <h3 class="text-center">{{ infoRubro }}</h3>
            <v-divider class="my-5"></v-divider>
          </v-col>
          <v-col cols="12" md="6">
            <v-carousel :cycle="true" :interval="2500" show-arrows show-indicators>
              <v-carousel-item v-for="(img, index) in infoImgObject" :key="index" :src="img.url" cover></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="headline text-center">Conócenos</h2>
            <v-divider class="my-3"></v-divider>
            <p>{{ infoResena }}</p>
            <v-divider class="my-3"></v-divider>
            <h2 class="headline text-center">Contactos</h2>
            <v-card-actions class="d-flex justify-center flex-wrap">
              <v-btn v-for="(link, index) in infoLinksObject" :key="index" :href="link.url" class="mx-2" fab>
                <v-icon>{{ logos[link.llave] }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12">
            <v-divider class="my-5"></v-divider>
            <h2 class="headline text-center">Nuestros videos</h2>
            <v-row class="video-row" no-gutters>
              <v-col v-for="(video, index) in videoImgObject" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
                <LazyYoutube ref="youtubeLazyVideo" :src="video.url" max-width="720px" aspect-ratio="16:9" thumbnail-quality="standard" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


    </v-main>
    </v-app>
</template>

<script>
import Tarjetas from '@/services/Tarjetas'
import Instituciones from '@/services/Instituciones'
export default ({
        name:"EmpresasInfoVue",

        

        data () {
        return {
            id: this.$route.params.inst_id,
            dialog: false,
            infoLinksObject: null,
            infoImgObject: null,
            videoImgObject: null,
            infoNombre: '',
            infoEmail:'',
            infoTelefono:'',
            infoResena:'',
            infoUbicacion: '',
            infoRubro: '',
            logos: {
              Facebook:"mdi mdi-facebook" ,
              Instagram:"mdi mdi-instagram" ,
              Whatsapp:"mdi mdi-whatsapp" ,
              Linkedin:"mdi mdi-linkedin", 
          },
        }
        },
        created(){
            this.initialize()
        },
        methods: {
            async initialize() {
                let xd = await Instituciones.getInstById(this.id)
                this.infoId = xd.data.instituciones_id
                this.infoNombre = xd.data.nombre
                this.infoEmail = xd.data.email
                this.infoTelefono = xd.data.telefono
                this.infoResena = xd.data.resena
                this.infoUbicacion = xd.data.ubicacion
                this.infoRubro = xd.data.institucion
                this.dialog = true
                try {
                  xd = await Tarjetas.getImgByIdTwo(this.id)
                  this.infoImgObject = xd.data
                  xd = await Tarjetas.getVidById(this.id)
                  this.videoImgObject = xd.data
                  xd = await Tarjetas.getLinksById(this.id)
                  console.log(xd.data)
                  this.infoLinksObject = xd.data
                } catch (error) {
                  this.infoImgObject = {}
                }
            }
        },
       

        })
</script>


