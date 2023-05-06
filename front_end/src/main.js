import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
//import firebase from 'firebase/app'
//import 'firebase/firestore'
import firebase from 'firebase'




Vue.use(VueTextareaAutosize); // VUE TEXT AREA INITIALIZER

Vue.config.productionTip = false


// // FIREBASE CONNECTION TO GOOGLE FIREBASE 
// firebase.initializeApp({
//   apiKey: "AIzaSyANS-PYg8rd4L7KTs1vZ8QqcmYSWLUZML4",
//   authDomain: "vue-calendar-6b39f.firebaseapp.com",
//   projectId: "vue-calendar-6b39f",
//   storageBucket: "vue-calendar-6b39f.appspot.com",
//   messagingSenderId: "576839342965",
//   appId: "1:576839342965:web:9a108b3b1c2b42300ed13c"
// });

// export const db = firebase.firestore(); // FIREBASE DATABASE

// FIREBASE FOR FILE STORAGE
var firebaseConfig = {
  apiKey: "AIzaSyAAF2zCBlxrEkYQoFr570wor3ledovJdMo",
  
  authDomain: "fir-image-uploader-d563b.firebaseapp.com",

  projectId: "fir-image-uploader-d563b",

  storageBucket: "fir-image-uploader-d563b.appspot.com",

  messagingSenderId: "1000302410120",

  appId: "1:1000302410120:web:63bc7a46e51eaccd60e23d"
};
firebase.initializeApp(firebaseConfig);



export let cuenta = 'hola'
export let superusuario = false
export let correo = 'si'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
