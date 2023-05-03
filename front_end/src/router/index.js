import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CalendarioView from "../views/CalendarioView.vue";
import EmpresasView from "../views/EmpresasView.vue";
import ChatsView from "../views/ChatsView.vue";
import CrudView from "../views/CrudView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/calendario",
    name: "Calendario",
    component: CalendarioView,
  },
  {
    path: "/empresas",
    name: "Empresas",
    component: EmpresasView,
  },
  {
    path: "/chats_empresas",
    name: "Chat",
    component: ChatsView,
  },
  {
    path: "/crud",
    name: "Crud",
    component: CrudView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
