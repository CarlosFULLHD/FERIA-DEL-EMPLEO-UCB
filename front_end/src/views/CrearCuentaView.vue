
<template>
  <v-app>
    <v-sheet width="500" class="mx-auto grey lighten-3 py-6 px-8">
      <h1 class="mb-6">Crear cuenta</h1>
      <v-form ref="form" @submit.prevent="enviarCuenta">
        <v-text-field
          v-model="cuenta"
          hint="Nombre de cuenta"
          prepend-icon="mdi mdi-account-circle-outline"
          :rules="[rules.required, rules.min]"
          label="Cuenta"
          autofocus="true"
          clearable
          required
        ></v-text-field>

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
          v-model="email"
          prepend-icon="mdi mdi-email-outline"
          :rules="[rules.required, rules.email]"
          label="E-mail"
          clearable
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || '¡Debes aceptar los términos para continuar!']"
          required
          color="green"
        >
          <template v-slot:label>
            <div @click.stop="">¿Super usuario?</div>
          </template>
        </v-checkbox>

        <div class="mt-6">
          <v-btn color="primary" :disabled="!formIsValid" type="submit" @click="submitForm">Crear cuenta</v-btn>
          <!-- <v-btn color="error" class="ml-4" @click="reset">Reset Form</v-btn> -->
          <!-- Deshabilidato el button -->
        <h4 class="achecuatro">Ya tienes una cuenta? Haz click  <router-link to="/cuenta/login">aqui</router-link></h4>
        </div>
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
  color: red;
}
.achecuatro{
  color: rgb(85, 83, 83);
}
.v-application--wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
    
    <script>

    import Cuentas from '@/services/Cuenta'
    export default {
      name:"LoginView",
        data () {
          const defaultForm = Object.freeze({
            cuenta:'',
            password: '',
            email:'',
            checkbox: 0,
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
                   /* confirmPassword: [
                      (val) => val === this.password || 'Passwords do not match',
                      (val) => (val || '').length > 0 || 'Confirm password is required',],*/
                    email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'e - mail inválido'},
                    
              },
            }
        },
      
    
       
      methods: {
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },

        // CREATE ACCOUNT METHOD
        async submitForm(){
          try{
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
            this.$store.dispatch('successAlertAsync',`Cuenta creada exitosamente`)
          } catch (error) {
            this.$store.dispatch('errorAlertAsync',`Problemas al crear cuenta, intente de nuevo`)
          }
        }
      },
    }
    
    
    
    
    </script>
    
      