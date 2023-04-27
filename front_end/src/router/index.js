import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CalendarioView from "../views/CalendarioView.vue";
import EmpresasView from "../views/EmpresasView.vue";

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
