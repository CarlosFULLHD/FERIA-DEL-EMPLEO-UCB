<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" align="center" class="mt-10">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="cambioscss">
            <v-card-title class="text-center">Iniciar sesión</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="cuenta"
                  :rules="[rules.required, rules.min]"
                  label="Nombre de cuenta"
                  prepend-icon="mdi mdi-account-circle-outline"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="[rules.required, rules.min]"
                  label="Contraseña"
                  prepend-icon="mdi mdi-lock-outline"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="loginForm">Iniciar sesión</v-btn>
              <!-- <v-btn color="secondary" @click="resetForm">Limpiar</v-btn> -->
            </v-card-actions>
            <h4 class="achecuatro">No tienes una cuenta? Haz click  <router-link to="/cuenta/crear">aqui</router-link></h4>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </v-app>
</template>

<script>
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
    async loginForm() {
      try {
        const usuario = await Cuentas.loginCuenta(this.cuenta, this.password);
        const data = usuario.data;
        if (data.length !== 0) {
          this.$store.dispatch('changeUserAccount', data.cuenta);
          this.$store.dispatch('changeUserPwd', data.pwd);
          this.$store.dispatch('changeUserEmail', data.email);
          this.$store.dispatch('changeSuperUser', data.superusuario);
          this.$store.dispatch('changeUserId', data.cuenta_id);
          this.$store.dispatch('changeloggedinFlag', true);
          this.$store.dispatch('successAlertAsync', `Bienvenido ${data.cuenta}`);
          //Para redireccionar a Home despues de verificar el inicio de sesion
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        this.$store.dispatch('errorAlertAsync', 'Cuenta inexistente, intente de nuevo');
      }
    },
    resetForm() {
      this.$refs.form.resetValidation();
      this.cuenta = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.v-card {
  max-width: 500px;
  margin: 0 auto;
}
h4{
  padding-left: 30px;
  padding-bottom: 20px;
}
</style>
