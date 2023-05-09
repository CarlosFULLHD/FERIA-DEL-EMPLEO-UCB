/* eslint-disable */
<template>
  <header :class="{'scrolled-nav':scrollNav}">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.png">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name:'Home'}"><v-icon>home</v-icon>Home</router-link></li>
        <li><router-link class="link" :to="{name:'Empresas'}">Empresas</router-link></li>
        <li><router-link class="link" :to="{name:'Chat'}">Chat</router-link></li>
        <li><router-link class="link" :to="{name:'Calendario'}">Calendario</router-link></li>
        <li><router-link class="link" :to="{name:'Contacto'}">Contactos</router-link></li>
        <li><router-link class="link" :to="{name:'Crud'}">Crud</router-link></li>
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
                Send Message
              </v-btn>
              <v-btn
                class="mx-1"
                color="error"
                @click="messages = 0"
              >
                Clear Notifications
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
                  <span class="white--text text-h5">{{ user.initials }}</span>
                  </v-avatar>
                </v-btn>
              </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                          color="brown"
                        >
                        <span class="white--text text-h5">{{ user.initials }}</span>
                      </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
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
                        Salir
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
                  <span class="white--text text-h5">{{ user.initials }}</span>
                  </v-avatar>
                </v-btn>
              </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                          color="brown"
                        >
                        <span class="white--text text-h5">{{ user.initials }}</span>
                      </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
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
                        Salir
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
                  Send Message
                </v-btn>
                <v-btn
                  class="mx-1"
                  color="error"
                  @click="messages = 0"
                >
                  Clear Notifications
                </v-btn>
              </v-list>
            </v-menu>
          </li>
          <li>
            <dic class="icons">
              <font-awesome-icon :icon="['fad', 'calendar-days']" size="lg" style="--fa-primary-color: #71a1f4; --fa-secondary-color: #2e3748;" />
            </dic>
            <router-link class="linkD" :to="{name:'Home'}">Home</router-link>
          </li>
          <li><router-link class="linkD" :to="{name:'Empresas'}">Empresas</router-link></li>
          <li><router-link class="linkD" :to="{name:'Chat'}">Chat</router-link></li> 
          <li><router-link class="linkD" :to="{name:'Calendario'}">Calendario</router-link></li> 
          <li><router-link class="linkD" :to="{name:'Login'}">Login</router-link></li> 
          <li><router-link class="linkD" :to="{name:'Contacto'}">Contactos</router-link></li>
          <li><router-link class="linkD" :to="{name:'Crud'}">Crud</router-link></li>
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
        <v-card-title>Inscritos en Charlas</v-card-title>
        <v-card-text>
          <v-container>
            <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
            >
              <template v-slot:[`item.header`]="{ item }">
                {{ item.header }}
              </template>
              <template v-slot:[`item.col1`]="{ item }">
                {{ item.col1 }}
              </template>
              <template v-slot:[`item.col2`]="{ item }">
                {{ item.col2 }}
              </template>
              <template v-slot:[`item.col3`]="{ item }">
                {{ item.col3 }}
              </template>
            </v-data-table>
          </v-container>
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
        <v-card-title>Charlas Inscritas</v-card-title>
        <v-card-text>
          <v-container>
            <v-data-table
              :headers="headers2"
              :items="items2"
              :items-per-page="5"
            >
              <template v-slot:[`item.header`]="{ item }">
                {{ item.header }}
              </template>
              <template v-slot:[`item.col1`]="{ item }">
                <template v-if="item.col1.includes('http')">
                  <a :href="item.col1" target="_blank">{{ item.col1 }}</a>
                </template>
                <template v-else>
                  {{ item.col1 }}
                </template>
              </template>
              <template v-slot:[`item.col2`]="{ item }">
                {{ item.col2 }}
              </template>
            </v-data-table>
          </v-container>
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
        initials: 'JD',
        fullName: 'Nombre Completo',
        email: 'correo@gmail.com',
      },
      notifications: [
        {
          id: 1,
          title: "Nuevo Inscrito en :",
          subtitle: "Conferencia BNB"
        },
      ],
      headers: [
        { text: 'Nombre', value: 'header' },
        { text: 'Institucion', value: 'col1' },
        { text: 'Charla', value: 'col2' },
        { text: 'Fecha', value: 'col3' },
      ],
    
      items: [
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Juan Pablo', col1: 'Banco BNB', col2: 'Charla 2', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
        { header: 'Carlos', col1: 'Banco BNB', col2: 'Charla 3', col3: '07/05/23' },
      ],
      headers2: [
        { text: 'Institucion', value: 'header' },
        { text: 'Link de Reunion', value: 'col1' },
        { text: 'Fecha', value: 'col2' },
      ],
      items2: [
        { header: 'BNB', col1: 'Se subira el link lo más pronto posible :)', col2: '14 Mayo 15:00 - 14 May 16:00'},
        { header: 'BNB', col1: 'https://us06web.zoom.us/j/84859098395', col2: '14 Mayo 15:00 - 14 May 16:00'},
        { header: 'BNB', col1: 'Se subira el link lo más pronto posible :)', col2: '14 Mayo 15:00 - 14 May 16:00'},
        { header: 'BNB', col1: 'Se subira el link lo más pronto posible :)', col2: '14 Mayo 15:00 - 14 May 16:00'},
      ],
    }
  },
  created(){
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener('scroll',this.updateScroll);
  },
  methods:{
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
  background-color: #001f3f;
  opacity: 0.9;
  z-index:99;
  width: 100%;
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
    margin-left: 20px;
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
    font-style: 'Raleway',normal;
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
      width: 50px;
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
    opacity: 0.9;
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
</style>