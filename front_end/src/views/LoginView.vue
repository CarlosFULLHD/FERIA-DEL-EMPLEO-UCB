
<template>

<v-app>
  <v-sheet width="300" class="mx-auto">
    <h1>Creación de cuenta</h1>
    <v-form ref="form" @submit.prevent="submit">
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
      
      <v-text-field
        v-model="confpassword"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.confirmPassword]"
        :type="show2 ? 'text' : 'password'"
        prepend-icon="mdi mdi-lock-alert-outline"
        hint="Al menos 8 caracteres "
        label="Confirmar Contraseña"
        clearable
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-text-field
        v-model="email"
        prepend-icon="mdi mdi-email-outline"
        :rules="[rules.required, rules.email]"
        label="E-mail"
        clearable
      >

        
      </v-text-field>


      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || '¡Debes aceptar los términos para continuar!']"
        required
        color="green">
      <template v-slot:label>
              <div @click.stop="">
                ¿Aceptas los 
                <a
                  href="#"
                  @click.prevent="terminos = true"
                >términos</a>
                y 
                <a
                  href="#"
                  @click.prevent="condiciones = true"
                >condiciones?</a>
              </div>
      </template>


      </v-checkbox>



      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>



      <v-btn
      :disabled="!formIsValid"
      text
      color="primary"
      type="submit"
      >
      Crear cuenta
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
export default {
  name:"LoginView",
    data () {

      const defaultForm = Object.freeze({
        cuenta:'',
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
  },
}




</script>

  