
<template>
    <div class="login">
      <h1>Página de logeo</h1>

      <input type="email" name="email" v-model="email" placeholder="email" />
      <br/>
      <input type="password" name="password" v-model="password" placeholder="password"/>
      <br/>
      <div v-html="error" class="error"></div>
      <button @click="loginM">Login</button>
    </div>
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
import AuthenticationService from '../services/AuthenticationService'
export default {
    data () {
        return {
            email:'',
            password: '',
            error: null, 
        }
    },
    watch: {
      email(value){
        console.log('email has changed', value)
      }
    },
    methods: {
      async loginM () {
        try {
            const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data);
        } catch (error){
            this.error = error.response.data.error // ERROR MESSAGE
        }
        
      }
    }
   // mounted () {
    //  setTimeout(() => {
    //    this.email = 'hello world'
    //  }, 2000)
    //}
}
</script>

  