/* eslint-disable */
<template>
  <header :class="{'scrolled-nav':scrollNav}">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.png">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name:'Home'}"><v-icon class="icono">home</v-icon>Home</router-link></li>
        <li><router-link class="link" :to="{name:'Empresas'}"><v-icon class="icono">corporate_fare</v-icon>Empresas</router-link></li>
        <li><router-link class="link" :to="{name:'Chat'}"><v-icon class="icono">forum</v-icon>Chat</router-link></li>
        <li><router-link class="link" :to="{name:'Calendario'}"><v-icon class="icono">calendar_month</v-icon>Calendario</router-link></li>
        <li><router-link class="link" :to="{name:'Contacto'}"><v-icon class="icono">account_circle</v-icon>Contactos</router-link></li>
        <li><router-link class="link" :to="{name:'Crud'}"><v-icon class="icono">edit_note</v-icon>Crud</router-link></li>
        <li>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <div class="Icono" style="display:flex; margin-right:20px;">
                  <v-badge
                    :content="messages"
                    :value="messages"
                    size="400"
                    overlap
                  >
                  <v-avatar
                        color="#ffc506"
                        size="50"
                      >
                      <v-icon
                        size="30"
                        >mdi-bell
                      </v-icon>
                    </v-avatar> 
                  </v-badge>
                </div>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="notification in notifications" :key="notification.id">
                <v-list-item-title>{{ notification.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ notification.subtitle }}</v-list-item-subtitle>
              </v-list-item>
              <v-btn
                class="mx-1"
                color="primary"
                @click="messages++"
              >
                Enviar Mensaje
              </v-btn>
              <v-btn
                class="mx-1"
                color="error"
                @click="messages = 0"
              >
                Limpiar Notificaciones
              </v-btn>
            </v-list>
          </v-menu>
        </li>
        <!--Icono de perfil y opciones!-->
        <li>
          <v-row justify="center">
            <v-menu
                bottom
                min-width="200px"
                margin="10px"
                rounded
                offset-y
              >
              <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                  <v-avatar
                      color="brown"
                      size="50"
                    >
                  <span class="white--text text-h5">{{ userAccount }}</span>
                  </v-avatar>
                </v-btn>
              </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                          color="brown"
                        >
                        <span class="white--text text-h5">{{ userAccount }}</span>
                      </v-avatar>
                        <h3>{{userName }}</h3>
                        <p class="text-caption mt-1">
                            {{ usserEmail }}
                        </p>
                        <v-divider class="my-3" v-if="loggedInFlag"></v-divider>
                        
                        <v-btn v-if="loggedInFlag"
                            @click="dialog = true"
                            depressed
                            block
                            text
                          >
                          Charlas inscritas
                        </v-btn>

                        <v-divider class="my-3" v-if="loggedInFlag && userFlag"></v-divider>
                        <v-btn v-if="loggedInFlag && userFlag"
                            @click="dialog2 = true"
                            depressed
                            block
                            text
                          >
                          Ver inscritos en charlas
                        </v-btn>
                        <v-divider class="my-3" v-if="!loggedInFlag"></v-divider>
                        <router-link class="link" :to="{name:'CuentaCrear'}">
                        <v-btn v-if="!loggedInFlag"
                            depressed
                            block
                            text
                          >
                          Crear Cuenta
                        </v-btn>
                        </router-link>
                        <v-divider class="my-3" v-if="!loggedInFlag" ></v-divider>
                        <router-link class="link" :to="{name:'Login'}">
                        <v-btn v-if="!loggedInFlag"
                            depressed
                            block
                            text
                          >
                          Iniciar Sesion
                        </v-btn>
                        </router-link>
                        <v-divider class="my-3"></v-divider>
                        <v-switch
                            v-model="$vuetify.theme.dark"
                            label="Modo oscuro"
                            style="display:flex; margin-left:20px;"
                          >
                        <v-btn
                            depressed
                            rounded
                            text
                            dark :class="{'white--text': $vuetify.theme.dark}" @click="toggleDarkMode"
                            >
                          {{ darkMode ? 'Modo claro' : 'Modo oscuro' }}
                        </v-btn>
                        </v-switch>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                          depressed
                          rounded
                          text
                        >
                        Salir <v-icon>logout</v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
              </v-card>
            </v-menu>
          </v-row>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
          <v-row justify="center">
            <v-menu
                bottom
                min-width="200px"
                margin="10px"
                rounded
                offset-y
              >
              <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                  <v-avatar
                      color="brown"
                      size="50"
                    >
                  <span class="white--text text-h5">{{ userAccount }}</span>
                  </v-avatar>
                </v-btn>
              </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                          color="brown"
                        >
                        <span class="white--text text-h5">{{ userAccount }}</span>
                      </v-avatar>
                        <h3>{{ userName }}</h3>
                        <p class="text-caption mt-1">
                            {{ usserEmail }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        
                        <v-btn
                            @click="dialog = true"
                            depressed
                            rounded
                            text
                          >
                          Charlas inscritas
                          
                        </v-btn>

                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            @click="dialog2 = true"
                            depressed
                            rounded
                            text
                          >
                          Ver inscritos en charlas
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <router-link class="link" :to="{name:'CuentaCrear'}">
                        <v-btn
                            depressed
                            rounded
                            text
                          >
                          Crear Cuenta
                        </v-btn>
                        </router-link>
                        <v-divider class="my-3"></v-divider>
                        <router-link class="link" :to="{name:'Login'}">
                        <v-btn
                            depressed
                            rounded
                            text
                          >
                          Iniciar Sesion
                        </v-btn>
                        </router-link>
                        <v-divider class="my-3"></v-divider>
                        <v-switch
                            v-model="$vuetify.theme.dark"
                            label="Alternar modo oscuro "
                            style="display:flex; margin-left:20px;"
                          >
                        <v-btn
                            depressed
                            rounded
                            text
                          >

                        </v-btn>
                        </v-switch>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                          depressed
                          rounded
                          text
                        >
                        Salir <v-icon>logout</v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
              </v-card>
            </v-menu>
          </v-row>
        </li>
          <li>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-badge
                    :content="messages"
                    :value="messages"
                    overlap
                  >
                    <v-icon
                      class="Campanita"
                      size="40"
                      >
                      mdi-bell
                    </v-icon>
                  </v-badge>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="notification in notifications" :key="notification.id">
                  <v-list-item-title>{{ notification.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ notification.subtitle }}</v-list-item-subtitle>
                </v-list-item>
                <v-btn
                  class="mx-1"
                  color="primary"
                  @click="messages++"
                >
                  Enviar Mensaje
                </v-btn>
                <v-btn
                  class="mx-1"
                  color="error"
                  @click="messages = 0"
                >
                  Limpiar Notificaciones
                </v-btn>
              </v-list>
            </v-menu>
          </li>
          <li>
            <div class="icons">
              <font-awesome-icon :icon="['fad', 'calendar-days']" size="lg" style="--fa-primary-color: #71a1f4; --fa-secondary-color: #2e3748;" />
            </div>
            <router-link class="link" :to="{name:'Home'}"><v-icon class="icono">home</v-icon>Home</router-link>
          </li>
        <li><router-link class="link" :to="{name:'Empresas'}"><v-icon class="icono">corporate_fare</v-icon>Empresas</router-link></li>
        <li><router-link class="link" :to="{name:'Chat'}"><v-icon class="icono">forum</v-icon>Chat</router-link></li>
        <li><router-link class="link" :to="{name:'Calendario'}"><v-icon class="icono">calendar_month</v-icon>Calendario</router-link></li>
        <li><router-link class="link" :to="{name:'Contacto'}"><v-icon class="icono">account_circle</v-icon>Contactos</router-link></li>
        <li><router-link class="link" :to="{name:'Crud'}"><v-icon class="icono">edit_note</v-icon>Crud</router-link></li>
        </ul>
      </transition>
    </nav>



    <!--Charlas Inscritas e Inscritos en Charlas!-->
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          style="display:none;"
        >
          Cerrar
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Charlas inscritas de {{ userName }}</v-card-title>
        <v-card-text v-if="charlasObjectUser.length > 0" >
          <v-container>
            <v-data-table
              :headers="headersCharlasUser"
              :items="charlasObjectUser"
              :items-per-page="5"
            >
              <template v-slot:[`item.institucionCharlaUser`]="{ item }">
                {{ item.nombre }}
              </template>
              <template v-slot:[`item.tituloCharlaUser`]="{ item }">
                {{ item.nombrecharla }}
              </template>
              <template v-slot:[`item.fechaInicioCharlaUser`]="{ item }">
                {{ item.fechainicio }}
              </template>
              <template v-slot:[`item.fechaFinaCharlaUser`]="{ item }">
                {{ item.fechafina }}
              </template>
              <template v-slot:[`item.linkCharlaUser`]="{ item }">
                <a v-bind:href=item.link target="_blank">{{ item.link }}</a>
              </template>
              <template v-slot:[`item.idCharlaUser`]="{ item }">
                {{ item.estudcha_id }}
              </template>

              <template v-slot:[`item.actions`]="{ item }">
                <v-btn icon @click="deleteCharlaUser(item)">
                    <v-icon color="error">mdi-delete</v-icon>
                </v-btn>
              </template>

            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-text v-else>
          <h1>No tiene charlas inscritas todavía</h1>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          style="display:none;"
        >
          Cerrar
        </v-btn>
      </template>
      
      <v-card>
       
        <v-card-title>Datos de charlas</v-card-title>
        <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
            <v-combobox
            v-model="comboName"
            label="Institución"
            :items="nombreArray"
            :item-value="IdArray"
            outlined
          ></v-combobox>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-btn color="#ffc506"
            rounded
            @click="charlasDialogo()"
            >
              <strong>Buscar</strong>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-text v-if="charlasObjectAdmin.length > 0" >
          <v-card-title>{{ this.comboName }}</v-card-title>
          <v-container>
            <v-data-table
              :headers="headersCharlasSuperUser"
              :items="charlasObjectAdmin"
              :items-per-page="5"
            >
              <template v-slot:[`item.header`]="{ item }">
                {{ item.header }}
              </template>
              <template v-slot:[`item.institucionCharlaAdmin`]="{ item }">
                {{ item.nombre }}
              </template>
              <template v-slot:[`item.tituloCharlaAdmin`]="{ item }">
                {{ item.nombrecharla }}
              </template>
              <template v-slot:[`item.fechaInicioCharlaAdmin`]="{ item }">
                {{ item.fechainicio }}
              </template>
              <template v-slot:[`item.fechaFinaCharlaAdmin`]="{ item }">
                {{ item.fechafina }}
              </template>
              <template v-slot:[`item.linkCharlaAdmin`]="{ item }">
                <a v-bind:href=item.link target="_blank">{{ item.link }}</a>
              </template>
              <template v-slot:[`item.cupoMaximoAdmin`]="{ item }">
                {{ item.cupos_charla }}
              </template>
              <template v-slot:[`item.inscritosAdmin`]="{ item }">
                {{ item.inscritos }}
              </template>
              <template v-slot:[`item.libresAdmin`]="{ item }">
                {{ item.libres }}
              </template>
              
              
            
            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-text v-else>
          <h1>No existen charlas  de {{ this.comboName }}</h1>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog2 = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </header>
</template>
<script>
import { mapMutations } from 'vuex';
import Charlas from '@/services/Charlas'
import Calendario from '@/services/Calendario'
export default {
  name:"navigationView",
  data(){
    return{
      scrollNav:null,
      mobile:null,
      mobileNav:null,
      windowWidth:null,
      drawer: false,
      dialog:false,
      dialog2:false,
      messages: 0,
      user: {
      },



      charlasAdmiObject: {},
      comboName: null,
      comboboxArray: [],
      notifications: [
        {
          id: 1,
          title: "Nuevo Inscrito en :",
          subtitle: "Conferencia BNB"
        },
      ],
      institucionCharlaUser: null,
      tituloCharlaUser: null,
      fechaInicioCharlaUser: null,
      fechaFinaCharlaUser: null,
      linkCharlaUser: null,
      idCharlaUser: null,
      userCharlaObject: {},
      headersCharlasUser: [
        {text: 'Institución',align: 'start', value: 'institucionCharlaUser'},
        {text: 'Título',align: 'start', value: 'tituloCharlaUser'},
        { text: 'Fecha inicio', value: 'fechaInicioCharlaUser' },
        { text: 'Fecha fin', value: 'fechaFinaCharlaUser' },
        { text: 'Link', value: 'linkCharlaUser' },
        { text: 'Eliminar', value: 'actions', sortable: false },
        ],

        headersCharlasSuperUser: [
        {text: 'Institución',align: 'start', value: 'institucionCharlaAdmin'},
        {text: 'Título',align: 'start', value: 'tituloCharlaAdmin'},
        { text: 'Fecha inicio', value: 'fechaInicioCharlaAdmin' },
        { text: 'Fecha fin', value: 'fechaFinaCharlaAdmin' },
        { text: 'Link', value: 'linkCharlaAdmin' },
        { text: 'Cupo máximo', value: 'cupoMaximoAdmin' },
        { text: 'Inscritos', value: 'inscritosAdmin' },
        { text: 'Espacios libres', value: 'libresAdmin' },
        ],
        institucionCharlaAdmin: null,
        tituloCharlaAdmin: null,
        fechaInicioCharlaAdmin: null,
        fechaFinaCharlaAdmin: null,
        linkCharlaAdmin: null,
        cupoMaximoAdmin: null,
        inscritosAdmin: null,
        libresAdmin: null,

    }
  },
  created(){
    window.addEventListener('resize',this.checkScreen);
    const self = this;
    this.$store.commit('setNavigation', self);
    this.checkScreen();
    this.loadCharlasSubscritas();
    this.loadComboBox();
  },
  mounted(){
    window.addEventListener('scroll',this.updateScroll);
  },
  methods:{
    ...mapMutations(['setNavigation']),
    doSomething() {
      this.loadCharlasSubscritas() 
    },




    // LOAD COMBOBOX FOR EXISTING BUSINESS
    async loadComboBox(){
      let xd = await Calendario.getInstituciones()
      this.comboboxArray = xd.data
    },

    getKeyByValue (value) {
      const item = this.comboboxArray.find(obj => obj.nombre === value);
      return item ? item.instituciones_id : null;
    },


    charlasDialogo(){
      // var instId = this.getKeyByValue(this.comboName)
      // try {
      //   let xd = await Charlas.getCharlaAdmiByIdInstitucion(instId)
      //   this.charlasAdmiObject = xd.data
      //   console.log(this.charlasAdmiObject)
      // } catch (error) {
      //   console.log("VACIO")
      //   this.charlasAdmiObject = {}
      // }
      let id = this.getKeyByValue(this.comboName)
      this.loadCharlasAdmin(id)
      

      
    },
    async deleteCharlaUser(item){
      let dp = Object.assign({}, item)
      const charId = dp.estudcha_id
      try {
        await Charlas.deleteCharlaCuentaById(charId)
       
        this.dialog = false
        window.scrollTo({
              top: 0,
              behavior: 'smooth' // or 'auto' for instant scrolling
            });
        
        this.$store.dispatch('successAlertAsync',`Se elimino subscripción a la charla ${dp.nombre}`)
      } catch (error) {
        this.dialog = false
        window.scrollTo({
              top: 0,
              behavior: 'smooth' // or 'auto' for instant scrolling
            });
        this.$store.dispatch('errorAlertAsync',`Problemas al conectar a base de datos`)
      } 
      this.loadCharlasSubscritas()   
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    updateScroll(){
      const scrollPosition=window.scrollY;
      if(scrollPosition>50){
        this.scrollNav=true;
      }
      this.scrollNav=false;
    },
    checkScreen(){
      this.windowWidth=window.innerWidth;
      if(this.windowWidth<=750){
        this.mobile=true;
        return;
      }
      this.mobile=false;
      this.mobileNav=false;
      return;
    },
    loadCharlasSubscritas(){
      if (this.loggedInFlag){
        this.$store.dispatch('changeCharlasInscritasObj',this.userId)
      } 
    },
    async loadCharlasAdmin(instId){
      if (this.loggedInFlag){
       
        await this.$store.dispatch('changeCharlasAdminObj',instId)
        console.log(this.charlasObjectAdmin)
      }
    }

  },
  computed: {
    charlasObjectAdmin(){
      return this.$store.getters.getCharlasAdminObj.length === 0 ? {} : this.$store.getters.getCharlasAdminObj
    },
    
    charlasObjectUser(){
      return this.$store.getters.getCharlasInscritasObj.length === 0 ? {} : this.$store.getters.getCharlasInscritasObj
    },
    userAccount(){
      return this.$store.getters.getCuenta.charAt(0) == '' ? 'UCB': this.$store.getters.getCuenta.charAt(0)
    },
    userName(){
      return this.$store.getters.getCuenta == '' ? 'UCB': this.$store.getters.getCuenta
    },
    usserEmail(){
      return this.$store.getters.getEmailU == '' ? '' : this.$store.getters.getEmailU
    },
    userFlag(){
      return this.$store.getters.getsuperU
    },
    userId(){
      return this.$store.getters.getCuentaId
    },
    loggedInFlag() {
      return this.$store.getters.getloggedinFlag
    },
    nombreArray(){
      return this.comboboxArray.map((item)=> item.nombre)
    },
    IdArray() {
      return this.comboboxArray.map((item) => item.instituciones_id);
    },
  }
};
</script>

<style lang="scss" scoped>
 //*{ border: 1px solid red;}
@import url(
  'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
  );
header{
  position: fixed;
  background-color: #004070!important;
  z-index:99;
  width: 100%;
  height: 100px;
  top: 0; 
  transition: 0.5s ease all;
  color: #fff;
  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px){
      max-width: 1140px;
    }
  }
  ul, 
  .link{
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }
  li{
    text-transform: uppercase;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
  }
  .link{
    font-size: 14px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: #ffedd3;
    text-transform: uppercase;
    position: relative;
    transition: .5s ease;
    font-family: helvetica;
    /*font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    &:hover{
      color:#ffd717;
      border-color: #ffd717;
    }*/
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 0;
      background-color: #ffc506;
      transition: .5s ease;
    }
    &:hover {
      color: #1e1e2b;
      transition-delay: .5s;
    }
    &:hover::before {
      width: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0;
      width: 100%;
      background-color: #ffc506;
      transition: .4s ease;
      z-index: -1;
    }
    &:hover::after {
      height: 100%;
      transition-delay: 0.4s;
      color: aliceblue;
    }
  }
  .branding{
    display:flex;
    align-items: center;
    img{
      width: 65px;
      border-radius: 25px;
      box-shadow: 1px 1px 1px 1px rgba(32,32,32,0.3);
      transition: 0.5s ease all;
    }
  }
  .navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    i{
      cursor: pointer;
      font-size: 24px;
      transition: 0.8s ease all;
    }
  }
  .icon-active{
    transform: rotate(180deg);
  }
  .icons{
    --fa-primary-color: #71a1f4; 
    --fa-secondary-color: #2e3748;
  }
 .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 200px;
    height: 100%;
    background-color: #ffd717;
    //opacity: 0.9;
    top: 0;
    left: 0;
    padding-top: 80px;
    li{
      margin-left: 0;
      margin-top: 20px;
      .linkD{
        font-size: 15px;
        font-weight: 400;
        transition: 0.5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        color: #000;
        font-style: 'Raleway',normal;
        text-decoration:none;
        
        &:hover{
          color:#0d63a5;
        }
        &::before{
          background-color: #0d63a5;
          content: "";
          display: inline-block;
          height: 1px;
          margin-right: 5px;
          transition: all .42s cubic-bezier(.25,.8,.25,1);
          width: 0;
        }
        &:hover::before{
          background-color: #0d63a5;
          width: 3rem;
        }
      }
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: 1s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to{
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to{
    transform: translateX(0);
  }
}
.scrolled-nav{
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  nav{
    padding: 8px 0;
    .branding{
      img{
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      }
    }
  }
}
.Icono:hover{
  color: #ffffff;
}
.link:hover .icono {
  display: inline-block;
}
.icono {
  display: none;
  margin-left: -20px;
  transition: 1s ease-in-out 1s; 
}
</style>