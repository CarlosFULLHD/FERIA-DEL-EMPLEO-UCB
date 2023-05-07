import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // STATE OBJECT THAT HOLDS INITIAL STATE WHEN OUR APPLICATIONS STARTS
  state: {

        // SESSION HANDLER
        cuentaU : '',
        passwordU: '',
        superU: false,
        emailU: '',

        // MESSAGES
        successAlert: false,
        successMessage: '',
        errorAlert: false,
        errorMessage:'',
        warningAlert: false,
        warningMessage: '',
        adviceAlert:false,
        adviceMessage: '',

  },
  // EVENTS OVER STATES 
  mutations: {
    
    setCuentaU(state,nCu){
      state.cuentaU = nCu
    },
    setPasswordU(state,nPwd){
      state.passwordU = nPwd
    },
    setSuperU(state,nSpu){
      state.superU = nSpu
    },
    setEmailU(state,nEmaU){
      state.emailU = nEmaU
    },

    setWarningAlert(state){
      state.warningAlert = !state.warningAlert
    },
    setWarningMessage(state,message){
      state.warningMessage = message
    },
    setSuccessAlert(state){
      state.successAlert = !state.successAlert
    },
    setSuccessMessage(state,message){
      state.successMessage = message
    },
    setErrorAlert(state){
      state.errorAlert = !state.errorAlert
    },
    setErrorMessage(state,message){
      state.errorMessage = message
    },
    setAdviceAlert(state){
      state.adviceAlert = !state.adviceAlert
    },
    setAdviceMessage(state,message){
      state.adviceMessage = message
    }
  },
  // FUNCTIONS THAT DISPATCH MUTATIONS
  actions: {
 
    warningAlertAsync(context, message){
      setTimeout(() => {
        context.commit('setWarningAlert')
      }, 2000);
      context.commit('setWarningMessage',message)
      context.commit('setWarningAlert')
    },

    errorAlertAsync(context,message){
      setTimeout(() => {
        context.commit('setErrorAlert')
      }, 2000);
      context.commit('setErrorMessage',message)
      context.commit('setErrorAlert')
    },

    adviceAlertAsync(context,message){
      setTimeout(() => {
        context.commit('setAdviceAlert')
      }, 2000)
      context.commit('setAdviceMessage',message)
      context.commit('setAdviceAlert')
      
    },

    successAlertAsync(context,message){
      setTimeout(() => {
        context.commit('setSuccessAlert')
      }, 2000);
      context.commit('setSuccessMessage',message)
      context.commit('setSuccessAlert')
    },

    changeUserAccount(context, account){
      context.commit('setCuentaU',account)
    },
    changeUserEmail(context, email){
      context.commit('setEmailU', email)
    },
    changeSuperUser(context, flag){
      context.commit('setSuperU',flag)
    },
    changeUserPwd(context, pwd){
      context.commit('setPasswordU',pwd)
    }

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
    getEmailU: state => {
      return state.emailU
    },

    getAdviceAlert: state => {
      return state.adviceAlert;
    },
    getAdviceMessage: state => {
      return state.adviceMessage;
    },

    getSuccessAlert: state => {
      return state.successAlert;
    },
    getSuccessMessage: state => {
      return state.successMessage
    },

    getErrorAlert: state => {
      return state.errorAlert;
    },
    getErrorMessage: state => {
      return state.errorMessage
    },

    getWarningAlert: state => {
      return state.warningAlert;
    },
    getWarningMessage: state => {
      return state.warningMessage
    },
  },
});

//export default store;