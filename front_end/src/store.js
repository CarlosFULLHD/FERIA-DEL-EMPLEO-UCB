import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
        cuentaU : '',
        passwordU: '',
        superU: '',
        count: 0,
  },
  mutations: {
    // Define your mutations to modify the state here
    increment(state) {
      state.count++;
    },
    setCuentaU(nCu){
      state.cuentaU = nCu
    },
    setPasswordU(nPwd){
      state.passwordU = nPwd
    },
    setSuperU(nSpu){
      state.superU = nSpu
    },
  },
  actions: {
    // Define your actions to perform async tasks here
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
  },
  getters: {
    // Define your getters to retrieve computed state values here

    getCuenta: state => {
      return state.cuentaU
    },
    getpasswordU: state => {
      return state.passwordU
    },
    getsuperU: state => {
      return state.superU
    },
    
    getCount: state => {
      return state.count;
    },
  },
});

export default store;