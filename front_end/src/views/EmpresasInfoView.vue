<template>
    <v-app>
        <v-main>
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


