
<template>

<v-app>
  <v-sheet width="300" class="mx-auto">
    <h1>Iniciar Sesion</h1>
    <v-form ref="form" @submit.prevent="loginForm">
      <v-text-field
        v-model="cuenta"
        hint="Nombre de cuenta"
        prepend-icon="mdi mdi-account-circle-outline"
        :rules="[rules.required, rules.min]"
        label="Cuenta"
        autofocus="true"
        clearable
        required
      >
      </v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        prepend-icon="mdi mdi-lock-outline"
        hint="Al menos 8 caracteres "
        label="Contraseña"
        clearable
        @click:append="show1 = !show1"
      ></v-text-field>
    
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Limpiar
      </v-btn>

      <v-btn
        color="success"
        class="mr-4"
        @click="loginForm"
      >
        Login
      </v-btn>
  
    </v-form>
  </v-sheet>
</v-app>

</template>
  
  <style>
  @media (min-width: 1024px) {
    .login {
      min-height: 100vh;
      display: flex;
      align-items: center;
      
    }
    
  }
  .error {
      color:red;
    }
  </style>

<script>

import { cuenta, superusuario, correo } from '@/main'
import Cuentas from '@/services/Cuenta'
export default {
  name:"LoginView",
    data () {

      const defaultForm = Object.freeze({
        account:'',
        password: '',
        confpassword: '',
        email:'',
        error: null,
        show1: false,
        show2: false,
        valid: true,
        terms: false,

      })
      
        return {
            form: Object.assign({}, defaultForm),
            rules: {
                required: v => !!v || 'Requerido.',
                min: v => v.length >= 8 || 'Mínimo 8 caracteres',
                confirmPassword: [
                  (val) => val === this.password || 'Passwords do not match',
                  (val) => (val || '').length > 0 || 'Confirm password is required',],
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'e - mail inválido'},
                
          },
        }
    },
  

   
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },

        async Verificarcuenta(){
          //  aqui muere 
          console.log(this.cuenta)
          console.log(this.password)

          var superU = (this.checkbox == true)? 1:0
          console.log(superU)
          console.log(this.email)
            const dataUp = {
              cuenta: this.cuenta,
              pwd: this.password,
              superusuario: superU,
              email: this.email
            }
            await Cuentas.crearCuenta(dataUp)
        },


    async loginForm(){
      console.log("ESTAS EN LOGIN")
      console.log(cuenta)
      console.log(superusuario)
      console.log(correo)
    }



  },
}




</script>

  