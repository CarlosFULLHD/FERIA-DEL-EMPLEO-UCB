import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize); // VUE TEXT AREA INITIALIZER

Vue.config.productionTip = false

// FIREBASE CONNECTION TO GOOGLE FIREBASE 
firebase.initializeApp({
  apiKey: "AIzaSyANS-PYg8rd4L7KTs1vZ8QqcmYSWLUZML4",
  authDomain: "vue-calendar-6b39f.firebaseapp.com",
  projectId: "vue-calendar-6b39f",
  storageBucket: "vue-calendar-6b39f.appspot.com",
  messagingSenderId: "576839342965",
  appId: "1:576839342965:web:9a108b3b1c2b42300ed13c"
});

export const db = firebase.firestore(); // FIREBASE DATABASE

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
